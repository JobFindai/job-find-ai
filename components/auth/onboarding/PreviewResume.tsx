import { Slide } from "@/components/animation/Slide";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@/hooks/useUser";
import { ReactNode, useState } from "react";
import OnboardHeader from "./OnboardHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function PreviewResume({
  step,
  changeResume,
  goStep,
}: {
  step: number;
  changeResume: () => void;
  goStep: (step: number) => void;
}) {
  const user = useUser();
  return (
    <Slide
      direction="right"
      className=" flex flex-col items-center  pt-20 min-h-screen  lg:p-0 px-3 lg:gap-6 gap-8 min-w-2/4"
    >
      <OnboardHeader
        step={step}
        title="Preview Resume"
        description="  Here's how your resume performs against industry expectations and
                relevant job roles"
      />
      <ProfileHeader />
      <PreviewForm />
      <div className="flex justify-around bg-gray-100  fixed bottom-0 min-h-[10vh] items-center text-sm w-full lg:w-3/5">
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

function ProfileHeader() {
  const [progress, setProgress] = useState(33);
  return (
    <div className="flex items-center  py-3 w-full justify-between ">
      <div className="flex items-center gap-3">
        <Avatar className="size-12">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">Egenti Nnamdi</h2>
          <span className="text-sm">Full-stack developer</span>
        </div>
      </div>
      <div className="font-medium gap-1 h-full justify-center flex flex-col">
        <span>Profile completion</span>
        <div className="flex items-center gap-3">
          <Progress value={progress} />
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

function PreviewForm() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="basic-info"
      className="w-full space-y-5"
    >
      <BasicInfo value="basic-info" />
      <AISummary value="ai-summary" />
      <Skills />
    </Accordion>
  );
}

function PreviewFormItem({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <AccordionItem className="shadow-sm px-4 rounded-lg bg-white" value={value}>
      <AccordionTrigger className="items-center focus-visible:outline-none gap-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex-1 flex justify-end">
          <Button variant="outline" className="w-1/3 border  h-10">
            Edit
          </Button>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <Separator className="mb-4" />
        {children}
      </AccordionContent>
    </AccordionItem>
  );
}

function BasicInfo({ value }: { value: string }) {
  return (
    <PreviewFormItem value={value} title="Basic Info">
      <div className=" h-full grid grid-cols-2 gap-5 ">
        <div>
          <h4 className="font-semibold mb-1">LOCATION</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">YEARS OF EXPERIENCE</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">BI0</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">WORK AUTHORIZATION</h4>
          <span>Not set</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">SPONSORSHIP REQUIRED</h4>
          <span className="bg-gray-100 rounded-sm border px-2 font-medium">
            No
          </span>
        </div>
      </div>
    </PreviewFormItem>
  );
}

function AISummary({ value }: { value: string }) {
  return (
    <PreviewFormItem value={value} title="AI Summary">
      <p className="bg-gray-100 rounded-lg p-3 leading-normal">
        Full-stack developer skilled in building scalable web applications and
        modern UI interfaces using React, Next.js, TypeScript, Node.js, and
        MongoDB. Experienced in delivering high-impact, data-driven features
        across e-commerce, fintech, and internship management platforms.
      </p>
    </PreviewFormItem>
  );
}

function Skills() {
  return (
    <AccordionItem value="support">
      <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
      <AccordionContent>
        Reach us via email, live chat, or phone. We respond within 24 hours
        during business days.
      </AccordionContent>
    </AccordionItem>
  );
}
