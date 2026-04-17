import { Slide } from "@/components/animation/Slide";
import JobCard from "./JobCard";
import OnboardHeader from "./OnboardHeader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useJobMatches } from "@/hooks/useJobMatches";
import JobMatchesEmptyState from "./JobMatchesEmptyState";
import Loader from "@/components/Loader";

export default function StepFour({
  step,
  goStep,
}: {
  step: number;
  goStep: (step: number) => void;
}) {
  const router = useRouter();
  const { data: matchedJobs, refetch, isLoading } = useJobMatches();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Slide
      direction="right"
      className=" flex flex-col items-center lg:gap-9  w-full  gap-5  px-4 pt-16 lg:p-0 min-w-3/5 min-h-[80vh]"
    >
      <OnboardHeader
        step={step}
        title="Top Job matches"
        description="Explore top jobs that fit your resume and experience level"
      />
      {matchedJobs?.length ? (
        <div className=" flex-1 lg:grid grid-cols-2 flex flex-col gap-7 lg:w-3/5 grid-rows-2">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      ) : (
        <JobMatchesEmptyState refetch={refetch} />
      )}

      <div className="flex lg:justify-between  justify-around bg-gray-100  fixed bottom-0 min-h-[10vh] items-center text-sm w-full lg:w-3/5">
        <Button
          onClick={() => goStep(3)}
          className="text-muted-foreground"
          variant="ghost"
        >
          Go back
        </Button>
        <Button
          variant="link"
          onClick={() => router.push("/dashboard")}
          className="h-12 lg:w-1/4"
        >
          Skip to dashboard
        </Button>
      </div>
    </Slide>
  );
}
