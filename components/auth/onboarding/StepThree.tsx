import { Slide } from "@/components/animation/Slide";
import OnboardHeader from "./OnboardHeader";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function StepThree({
  step,
  goStep,
}: {
  step: number;
  goStep: (step: number) => void;
}) {
  const currentLevel = [
    { label: "Entry Level", value: "ENTRY_LEVEL" },
    { label: "Mid-Level", value: "MID_LEVEL" },
    { label: "Senior Level", value: "SENIOR_LEVEL" },
    { label: "Lead Manager", value: "LEAD_MANAGER" },
  ];

  const targetLevel = [
    { label: "Entry Level", value: "ENTRY_LEVEL" },
    { label: "Mid-Level", value: "MID_LEVEL" },
    { label: "Senior Level", value: "SENIOR_LEVEL" },
    { label: "Lead Manager", value: "LEAD_MANAGER" },
  ];

  return (
    <Slide
      direction="right"
      className=" flex flex-col items-center gap-6 min-w-2/4 min-h-96"
    >
      <OnboardHeader
        step={step}
        title="Select your experience level"
        description="Tell us where you are and where you want to grow"
      />
      <div className=" flex-1 flex flex-col gap-10 w-full">
        <RadioGroup
          defaultValue="ENTRY_LEVEL"
          className="h-2/4 flex flex-col lg:gap-4 gap-5"
        >
          <span>Select your current level</span>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-7">
            {currentLevel.map((item) => (
              <div
                className="flex items-center bg-white p-5 gap-2 shadow-lg shadow-gray-300/40 rounded-lg"
                key={item.label}
              >
                <RadioGroupItem value={item.value} id={item.label} />
                <Label className="text-black/80 text-base" htmlFor={item.label}>
                  {item.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        <RadioGroup
          defaultValue="SENIOR_LEVEL"
          className="h-2/4 flex flex-col lg:gap-4 gap-5"
        >
          <span>Target level you want to apply for</span>
          <div className="grid grid-cols-2 grid-rows-2 lg:gap-7 gap-4">
            {targetLevel.map((item) => (
              <div
                className="flex items-center bg-white p-5 gap-2 shadow-lg shadow-gray-300/40 rounded-lg"
                key={item.label}
              >
                <RadioGroupItem value={item.value} id={item.label} />
                <Label className="text-black/80 text-base" htmlFor={item.label}>
                  {item.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        <div className="flex justify-between items-center text-sm">
          <Button
            onClick={() => goStep(2)}
            className="text-muted-foreground"
            variant="ghost"
          >
            Go back
          </Button>
          <Button onClick={() => goStep(4)} className="h-12 lg:w-1/4">
            Explore job matches
          </Button>
        </div>
      </div>
    </Slide>
  );
}
