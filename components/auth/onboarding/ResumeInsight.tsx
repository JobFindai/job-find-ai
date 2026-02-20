import { Slide } from "@/components/animation/Slide";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { NotebookPen } from "lucide-react";
import OnboardHeader from "./OnboardHeader";

export default function ResumeInsight({
  step,
  goStep,
}: {
  step: number;
  goStep: (step: number) => void;
}) {
  return (
    <Slide
      direction="right"
      className=" flex flex-col items-center gap-6 min-w-2/4 min-h-96"
    >
      <OnboardHeader
        step={step}
        title="Resume Insight"
        description="  Here's how your resume performs against industry expectations and
          relevant job roles"
      />
      <div className="flex-1  w-3/5 grid-cols-2 grid gap-5 grid-rows-2">
        <ResumeScore />
        <OpportunitiesImprove />
        <WorkingWell />
        <RoleMatch />
      </div>
      <div className="flex justify-between items-center text-sm w-3/5">
        <Button className="text-muted-foreground" variant="ghost">
          Change resume
        </Button>
        <Button onClick={() => goStep(3)} className="h-12 w-1/4">
          Set experience level
        </Button>
      </div>
    </Slide>
  );
}

// Resume Score Component
function ResumeScore() {
  return (
    <div className="bg-white rounded-md flex flex-col p-5 leading-normal gap-3">
      <div className="bg-orange-400 size-16 rounded-full"></div>
      <h3 className="font-bold text- text-xl">Resume Score 75/100</h3>
      <p className="text-xs">
        Strong fit for mid-level product roles. You are already close. Adding
        measurable outcomes could significantly increase your match rate.
      </p>
    </div>
  );
}

// Areas to Improve Component
const improvePoints = [
  "Add measurable achievements",
  "Clarify leadership scope",
  "Expand skills section",
];
function OpportunitiesImprove() {
  return (
    <div className="p-5 flex flex-col gap-3 justify-evenly rounded-md bg-white">
      <h3 className="text-lg font-semibold">Opportunities to improve</h3>
      {improvePoints.map((points) => (
        <div
          key={points}
          className="flex items-center text-sm gap-2 text-foreground px-2"
        >
          <NotebookPen size={15} />
          <span>{points}</span>
        </div>
      ))}
    </div>
  );
}

// Strong Areas Component
const working = [
  "Clear career progression",
  "Relevant technical skills",
  "Solid project experience",
];
function WorkingWell() {
  return (
    <div className="p-5 flex flex-col gap-3 justify-evenly rounded-md bg-white">
      <h3 className="text-lg font-semibold">What is working well</h3>
      {working.map((points) => (
        <div
          key={points}
          className="flex items-center text-sm gap-2 text-foreground px-2"
        >
          <NotebookPen size={15} />
          <span>{points}</span>
        </div>
      ))}
    </div>
  );
}

// Role Match Component
const roleMatches = ["UX Designer", "UX Researcher", "Interaction Designer"];

function RoleMatch() {
  return (
    <div className="bg-white rounded-lg gap-1.5 flex flex-col p-5">
      <h3 className="text-lg font-semibold">Role match preview</h3>
      <div className="flex-1 flex flex-col justify-between w-3/4">
        {roleMatches.map((role) => (
          <div key={role} className=" flex flex-col gap-2">
            <div className="flex justify-between text-xs items-center">
              <span className="font-semibold">{role}</span>
              <span>80%</span>
            </div>
            <Progress value={80} className="" />
          </div>
        ))}
      </div>
    </div>
  );
}
