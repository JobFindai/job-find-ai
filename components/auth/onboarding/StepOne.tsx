import { Slide } from "@/components/animation/Slide";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";

const usersCategory = [
  {
    title: "Student",
    description: "I am studying or looking for first full-time job",
  },
  {
    title: "Career Switcher",
    description: "I am transitioning into a new field",
  },
  {
    title: "Experienced Professional",
    description: "I have experience and i want to grow in my field",
  },
];

export default function StepOne({
  goStep,
  step,
}: {
  goStep: (step: number) => void;
  step: number;
}) {
  return (
    <Slide direction="right" className=" flex flex-col gap-5  min-w-2/4 h-3/4">
      <div className="px-10 flex flex-col text-center gap-10 ">
        <div className="flex flex-col gap-2">
          <span className="text-xs">Step {step} of 4</span>
          <h2 className="text-2xl font-medium">
            Where are you in your career?
          </h2>
          <p className="text-xs">
            This helps us personalize your job matches and coaching experience
          </p>
        </div>
        <RadioGroup defaultValue="Student">
          <div className="flex flex-col gap-7">
            {usersCategory.map((user) => (
              <div
                key={user.title}
                className=" bg-white shadow-xl shadow-gray-200/50 rounded-sm flex p-5 min-h-16 gap-3 items-center  text-center"
              >
                <RadioGroupItem
                  value={user.title}
                  id={user.title}
                  className="size-5  focus-visible:ring-primary text-white"
                />
                <div className="flex flex-col gap-2.5">
                  <Label htmlFor={user.title}>{user.title}</Label>
                  <p className="text-xs">{user.description}x</p>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
        <Button onClick={() => goStep(2)} className="h-12 ">
          Continue
        </Button>
      </div>
    </Slide>
  );
}
