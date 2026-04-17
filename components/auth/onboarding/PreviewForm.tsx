import { Accordion } from "@/components/ui/accordion";
import { BasicInfo } from "./BasicInfo";
import { AISummary } from "./AISummary";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Links } from "./Links";
import { Profile } from "@/types/users";
import { Education } from "./Education";

export function PreviewForm({ profile }: { profile?: Profile | null }) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="basic-info"
      className="w-full space-y-5"
    >
      <BasicInfo value="basic-info" profile={profile || null} />
      <AISummary value="ai-summary" profile={profile || null} />
      <Skills value="skills" profile={profile || null} />
      <Experience value="experience" profile={profile || null} />
      <Education
        value="education"
        education={profile?.education?.at(0) || null}
      />
      <Links value="links" profile={profile || null} />
    </Accordion>
  );
}
