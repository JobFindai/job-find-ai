import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Copy, Download } from "lucide-react";

export default function CoverLetterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-11">Generate cover letter</Button>
      </DialogTrigger>
      <DialogContent className=" lg:size-5/6 flex flex-col pt-10">
        <DialogHeader>
          <DialogTitle>Cover Letter for Junior Product Designer</DialogTitle>
        </DialogHeader>
        <div className="flex-1">
          <p className="lg:text-justify lg:text-sm text-xs leading-normal lg:leading-relaxed">
            Dear Hiring Manager, I am excited to apply for the Product Designer
            position at Slack. With over 3 years of experience in user interface
            and interaction design, and a proven track record of delivering
            intuitive and scalable solutions, I am confident in my ability to
            contribute meaningfully to your design team. At RemoteFlow, I led
            the redesign of our B2B dashboard, improving task completion rates
            by 28% and reducing user churn through thoughtful UX improvements.
            This experience sharpened my skills in Figma, prototyping, and
            design systems, all of which align closely with Slack&apos;s
            approach to collaborative product design. What excites me most about
            Slack is your commitment to simplicity and asynchronous teamwork. I
            deeply resonate with your mission to make work life simpler, more
            pleasant, and more productive. I&apos;ve applied similar principles
            in previous roles—championing accessibility, iterating with
            engineers, and running user tests with global teams. In addition to
            my design expertise, I bring a high level of cross-functional
            communication and a passion for collaborative problem solving. I
            thrive in dynamic environments and enjoy working with engineers,
            PMs, and fellow designers to shape cohesive, user&hyphen;focused
            experiences. Sincerely, John Doe
          </p>
        </div>
        <DialogFooter className="text-sm flex-row justify-end">
          <Button
            variant="ghost"
            className="h-11 font-medium text-muted-foreground"
          >
            <Download />
          </Button>
          <Button
            variant="ghost"
            className="h-11 font-medium text-muted-foreground"
          >
            <Copy />
          </Button>
          <DialogClose asChild>
            <Button className="h-11 font-medium">
              Apply with cover letter
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
