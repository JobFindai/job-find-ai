import { Slide } from "@/components/animation/Slide";
import { Button } from "@/components/ui/button";
import { CloudUpload, Linkedin, Trash } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ResumeInsight from "./ResumeInsight";
import OnboardHeader from "./OnboardHeader";
import { createClient } from "@supabase/supabase-js";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function StepTwo({
  step,
  goStep,
}: {
  step: number;
  goStep: (step: number) => void;
}) {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResumeInsight, setShowResumeInsight] = useState(false);
  const user = useAuth();
  const [resumeState, setResumeState] = useState({
    name: "",
    size: 0,
    contentType: "",
    url: "",
    path: "",
  });
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );

  useEffect(() => {}, []);

  // Handle Resume Upload
  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      try {
        setLoading(true);
        setError(null);
        acceptedFiles.forEach(async (file) => {
          // Upload file to supabase
          const { data, error } = await supabase.storage
            .from("resume")
            .upload(`${user.userId}/${file.name}`, file);

          if (error) {
            setError(error);
            return;
          }
          // Get Public url of uploaded file
          const { data: info } = await supabase.storage
            .from("resume")
            .info(data.path);

          const { data: url } = supabase.storage
            .from("resume")
            .getPublicUrl(data.path);

          // Set Resume State
          setResumeState((prev) => ({
            ...prev,
            name: info?.name.split("/").at(1) ?? "",
            contentType: info?.contentType ?? "",
            size: info?.size ? info.size / 1000 : 0,
            url: url.publicUrl ?? "",
            path: data.path,
          }));

          console.log(info);
        });
      } finally {
        setLoading(false);
      }
    },
    [supabase, user],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <Loader loading={loading} />
      {showResumeInsight ? (
        <ResumeInsight
          changeResume={() => setShowResumeInsight(false)}
          step={step}
          goStep={goStep}
        />
      ) : (
        <Slide
          direction="right"
          className=" flex flex-col p-5 gap-10 min-w-2/4 min-h-3/4"
        >
          <OnboardHeader
            step={step}
            title="Upload your cv/resume"
            description="We will analyze your resume to generate insights and tailored job matches"
          />
          {resumeState.name ? (
            <Slide
              onClick={() => window.open(resumeState.url, "_blank")}
              direction="up"
              className="border-2 rounded-md cursor-pointer min-h-20 text-gray-600 items-center justify-between px-5 flex"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-10">
                  <Image
                    src="/pdf-icon.png"
                    alt="pdf"
                    width={1000}
                    height={1000}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold">
                    {resumeState.name}
                  </span>
                  <span className="text-xs">
                    {Math.round(resumeState.size)} KB
                  </span>
                </div>
              </div>
              <Button
                onClick={async (e) => {
                  e.stopPropagation();
                  await supabase.storage
                    .from("resume")
                    .remove([resumeState.path]);
                  setResumeState({
                    name: "",
                    size: 0,
                    contentType: "",
                    url: "",
                    path: "",
                  });
                }}
                variant="ghost"
              >
                <Trash />
              </Button>
            </Slide>
          ) : (
            <div>
              <Slide
                direction="up"
                className="flex flex-col items-center gap-7"
              >
                <div className="flex flex-col gap-4 w-full">
                  <span>Upload CV/Resume</span>
                  <div
                    {...getRootProps()}
                    className="border shadow-sm shadow-gray-400/20 p-10 rounded-xl text-center cursor-pointer hover:bg-gray-50"
                  >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center gap-2 text-gray-500">
                      <CloudUpload />
                      {isDragActive ? (
                        <p>Drop files here...</p>
                      ) : (
                        <p>Click or drag file to this area to upload</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-red-500">
                      {error?.message}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Accepted formats: PDF, DOCX, XLSX (max 5MB)
                    </span>
                  </div>
                </div>
                <span className="text-muted-foreground font-medium">Or</span>
                <Button
                  className="bg-cyan-100/50 text-sm! h-11 flex items-center text-gray-600"
                  variant="secondary"
                >
                  <div className="size-5 bg-blue-500 grid place-items-center rounded-xs">
                    <Linkedin className="text-white" />
                  </div>
                  <span>Import form Linkedin</span>
                </Button>
              </Slide>
            </div>
          )}
          <div>
            <div className="flex gap-2 items-center text-sm justify-between ">
              <Button
                onClick={() => goStep(1)}
                className="flex! text-muted-foreground h-11 w-1/4 items-center"
                variant="secondary"
              >
                Go Back
              </Button>
              <Button
                onClick={() => setShowResumeInsight(true)}
                className="h-11 lg:w-1/4"
              >
                Analyze resume
              </Button>
            </div>
          </div>
        </Slide>
      )}
    </>
  );
}
