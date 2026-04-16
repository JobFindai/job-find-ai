import { Toggle } from "@/components/ui/toggle";
import { PreviewFormItem } from "./PreviewFormItem";
import { XIcon } from "lucide-react";
import { Profile } from "@/types/users";

export function Skills({
  value,
  profile,
}: {
  value: string;
  profile: Profile | null;
}) {
  return (
    <PreviewFormItem value={value} title="Skills">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-base">TECHNICAL SKILLS</h4>
          <div className="flex gap-3 flex-wrap">
            {profile?.skills.map((skill, index) => (
              <Toggle
                key={index}
                aria-label={`Skill ${skill} ${index}`}
                size="sm"
                className="rounded-xl text-xs!"
                variant="outline"
              >
                {skill}
              </Toggle>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-base">SOFT SKILLS</h4>
          <div className="flex gap-3 flex-wrap">
            {profile?.languages.map((skill, index) => (
              <Toggle
                key={index}
                aria-label={`Skill ${skill} ${index}`}
                size="sm"
                className="rounded-xl text-xs!"
                variant="outline"
              >
                {skill}
              </Toggle>
            ))}
          </div>
        </div>
      </div>
    </PreviewFormItem>
  );
}
