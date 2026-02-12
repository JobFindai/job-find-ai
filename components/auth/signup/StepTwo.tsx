import { Slide } from "@/components/animation/Slide";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";

const usersCategory = [
  "Student",
  "Career Switcher",
  " International",
  "Executive",
  "Experienced",
];

export default function StepTwo({
  goBackStep,
}: {
  goBackStep: (step: number) => void;
}) {
  return (
    <Slide direction="right" className=" flex flex-col gap-10  min-w-2/4 h-3/4">
      <div className="flex gap-2 items-center ">
        <Button
          onClick={() => goBackStep(1)}
          className="flex! items-center"
          variant="secondary"
        >
          <ArrowLeft className="mt-0.5" size={17} />
          <span>Go Back</span>
        </Button>
      </div>
      <div className="px-10 flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl font-medium">What type of user are you?</h2>
          <RadioGroup defaultValue="Student">
            <div className="flex flex-wrap gap-5">
              {usersCategory.map((user) => (
                <div
                  key={user}
                  className=" h-11 border-2 rounded-sm flex justify-center gap-2 items-center w-1/4 text-center"
                >
                  <RadioGroupItem value={user} id={user} />
                  <Label htmlFor={user}>{user}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center gap-3 ">
          <Checkbox id="agree" className="size-6" />
          <Label htmlFor="agree" className="text-base font-normal">
            I agree with AI personalization of my experience
          </Label>
        </div>
        <Button className="h-12 w-5/6">Create Account</Button>
      </div>
    </Slide>
  );
}
