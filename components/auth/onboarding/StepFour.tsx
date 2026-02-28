import { Slide } from "@/components/animation/Slide";
import JobCard from "./JobCard";
import OnboardHeader from "./OnboardHeader";
import { Button } from "@/components/ui/button";

export default function StepFour({
  step,
  handleOnboardingComplete,
  goStep,
}: {
  step: number;
  handleOnboardingComplete: () => void;
  goStep: (step: number) => void;
}) {
  return (
    <Slide
      direction="right"
      className=" flex flex-col items-center lg:gap-9 gap-5 px-4 pt-16 lg:p-0 min-w-3/5 min-h-96"
    >
      <OnboardHeader
        step={step}
        title="Top Job matches"
        description="Explore top jobs that fit your resume and experience level"
      />
      <div className=" flex-1 lg:grid grid-cols-2 flex flex-col gap-7 lg:w-3/5 grid-rows-2">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div className="flex justify-between items-center w-full lg:w-3/5 lg:text-sm">
        <Button
          onClick={() => goStep(3)}
          className="text-muted-foreground"
          variant="ghost"
        >
          Go back
        </Button>
        <Button
          variant="link"
          onClick={handleOnboardingComplete}
          className="h-12"
        >
          Skip to dashboard
        </Button>
      </div>
    </Slide>
  );
}
