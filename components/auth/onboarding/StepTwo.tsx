import { Slide } from "@/components/animation/Slide";
import { Button } from "@/components/ui/button";
import { CloudUpload, Linkedin } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import ResumeInsight from "./ResumeInsight";

export default function StepTwo({
  step,
  goStep,
}: {
  step: number;
  goStep: (step: number) => void;
}) {
  const { getRootProps, getInputProps } = useDropzone();
  const [showResumeInsight, setShowResumeInsight] = useState(false);
  return (
    <>
      {showResumeInsight ? (
        <ResumeInsight step={step} goStep={goStep} />
      ) : (
        <Slide
          direction="right"
          className=" flex flex-col gap-10 min-w-2/4 min-h-3/4"
        >
          <div className="flex text-center items-center flex-col gap-3">
            <span className="text-xs mb-3">
              Step <b>{step}</b> of 4
            </span>
            <h2 className="font-semibold text-2xl">Upload your cv/resume</h2>
            <p className="text-sm">
              We will analyze your resume to generate insights and tailored job
              matches
            </p>
          </div>
          <div className="flex flex-col items-center gap-7">
            <div className="flex flex-col gap-4 w-full">
              <span>Upload CV/Resume</span>
              <div
                {...getRootProps()}
                className="border shadow-sm shadow-gray-400/20 p-10 rounded-xl text-center cursor-pointer hover:bg-gray-50"
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-2 text-gray-500">
                  <CloudUpload />
                  <p>Click or drag file to this area to upload</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                Accepted formats: PDF, DOCX, XLSX (max 5MB)
              </span>
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
          </div>
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
                className="h-11 w-1/4"
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
