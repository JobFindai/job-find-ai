import { Slide } from "@/components/animation/Slide";
import { useUser } from "@/hooks/useUser";
import OnboardHeader from "./OnboardHeader";
import { Button } from "@/components/ui/button";
import { ProfileHeader } from "./ProfileHeader";
import { PreviewForm } from "./PreviewForm";
import { ProfileSkeleton } from "./ProfileSkeleton";

export default function PreviewResume({
  step,
  changeResume,
  goStep,
  resumeUrl,
}: {
  step: number;
  changeResume: () => void;
  goStep: (step: number) => void;
  resumeUrl: string;
}) {
  const { user } = useUser();
  return (
    <Slide
      direction="right"
      className=" flex flex-col items-center overflow-x-hidden  py-20 min-h-screen  lg:p-0 px-3 lg:gap-6 gap-8  lg:w-2/4"
    >
      <OnboardHeader
        step={step}
        title="Preview Resume"
        description="See how your resume measures up against industry standards and target roles."
      />
      <ProfileHeader
        name={`${user?.firstName} ${user?.lastName}`}
        jobTitle={user?.profile?.jobTitle || "Not set"}
        imageUrl={user?.imageUrl || ""}
      />
      {user?.profile ? (
        <PreviewForm profile={{ ...user!.profile!, resumeUrl }} />
      ) : (
        <ProfileSkeleton />
      )}
      <div className="flex lg:justify-between  justify-around bg-gray-100  fixed bottom-0 min-h-[10vh] items-center text-sm w-full lg:w-3/5">
        <Button
          onClick={() => changeResume()}
          className="text-muted-foreground"
          variant="ghost"
        >
          Change resume
        </Button>
        <Button onClick={() => goStep(step + 1)} className="h-12 lg:w-1/4">
          Explore Job Matches
        </Button>
      </div>
    </Slide>
  );
}
