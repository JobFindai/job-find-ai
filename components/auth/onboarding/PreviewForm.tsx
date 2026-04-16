import { Accordion } from "@/components/ui/accordion";
import { BasicInfo } from "./BasicInfo";
import { AISummary } from "./AISummary";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Links } from "./Links";
import { Education } from "./Education";

export function PreviewForm() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="basic-info"
      className="w-full space-y-5"
    >
      <BasicInfo value="basic-info" />
      <AISummary value="ai-summary" />
      <Skills value="skills" />
      <Experience value="experience" />
      <Education value="education" />
      <Links value="links" />
    </Accordion>
  );
}
