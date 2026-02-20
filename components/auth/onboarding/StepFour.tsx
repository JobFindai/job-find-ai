import { Slide } from "@/components/animation/Slide";
import JobCard from "./JobCard";
import OnboardHeader from "./OnboardHeader";
import { Button } from "@/components/ui/button";

export default function StepFour({
  step,
  goStep,
}: {
  step: number;
  goStep: (step: number) => void;
}) {
  return (
    <Slide
      direction="right"
      className=" flex flex-col items-center gap-9 min-w-3/5 min-h-96"
    >
      <OnboardHeader
        step={step}
        title="Top job matches"
        description="Explore top jobs that fit your resume and experience level"
      />
      <div className=" flex-1 grid grid-cols-2 gap-7 w-3/5 grid-rows-2">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div className="flex justify-between items-center w-3/5 text-sm">
        <Button
          onClick={() => goStep(2)}
          className="text-muted-foreground"
          variant="ghost"
        >
          Go back
        </Button>
        <Button variant="link" onClick={() => goStep(4)} className="h-12">
          Skip to dashboard
        </Button>
      </div>
    </Slide>
  );
}
