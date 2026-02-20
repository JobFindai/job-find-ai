import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, MapPin } from "lucide-react";
import Image from "next/image";
import CoverLetterDialog from "./CoverLetterDialog";

const tone = ["Professional", "Confident", "Direct", "Friendly"];
export default function JobDescriptionDialog({ btnText }: { btnText: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full h-10">{btnText}</Button>
      </DialogTrigger>
      <DialogContent className=" size-5/6 p-3">
        <div className="border h-full p-3 rounded-md flex flex-col gap-2.5">
          <DialogHeader className="gap-4">
            <DialogTitle className="text-xl font-semibold flex items-center gap-2">
              <div className="size-9">
                <Image
                  src="/slack.png"
                  alt="slack"
                  width={500}
                  height={500}
                  className="size-full object-cover"
                />
              </div>
              <span>Junior Product Designer</span>
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-2">
              <span className="font-medium text-sm">Slack</span>
              <div className="flex gap-5 text-xs items-center">
                <span className="flex gap-1 items-center">
                  <MapPin size={15} />
                  London
                </span>
                <span>Onsite</span>
                <span>Posted Yesterday</span>
              </div>
            </DialogDescription>
            <div className="gap-4 flex flex-col">
              <p className="text-xs leading-normal text-justify">
                As a UX Designer on our team, you will shape user experiences by
                leading the design of key features and projects. Your
                responsibilities include defining user experience flows,
                developing new product concepts, and crafting user stories. You
                will design detailed UI layouts, create benchmarks, and develop
                high-fidelity prototypes while documenting UX and UI strategies.
                Collaborating with technical teams, you will transform designs
                into impactful, industry-leading products. This role combines
                creativity and problem-solving to create meaningful user
                experiences. Your journey with us is an opportunity to drive
                innovation and make a significant impact.
              </p>
              <div className="flex text-xs items-center text-blue-600 bg-blue-50 w-2/5 py-1.5 justify-center rounded-sm gap-2">
                <span>
                  Fitscore: <b className="text-sm"> 68% Match</b>
                </span>{" "}
                <AlertCircle size={13} className="mt-0.5" />
              </div>
            </div>
          </DialogHeader>
          <Separator />
          <div className=" pt-0.5 flex flex-col gap-1.5 no-scrollbar overflow-y-auto! flex-1">
            <div className="space-y-1">
              <h3 className="font-medium">Generate cover letter (Optional)</h3>
              <span className="text-xs">
                We can generate a tailored cover letter for this role in
                seconds.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs">Select tone and generate</span>
              <RadioGroup
                defaultValue="Entry Level"
                className="flex gap-1 flex-col"
              >
                {tone.map((item) => (
                  <div key={item} className="flex gap-2 items-center">
                    <RadioGroupItem value={item} id={item} />
                    <Label className="text-black/80 text-xs" htmlFor={item}>
                      {item}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <DialogFooter className="text-sm">
            <Button
              variant="ghost"
              className="h-11 font-medium text-muted-foreground"
            >
              Skip & Apply
            </Button>
            <DialogClose>
              <CoverLetterDialog />
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
