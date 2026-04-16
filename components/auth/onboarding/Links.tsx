import { Profile } from "@/types/users";
import { PreviewFormItem } from "./PreviewFormItem";

export function Links({
  value,
  profile,
}: {
  value: string;
  profile: Profile | null;
}) {
  return (
    <PreviewFormItem value={value} title="Links">
      <div className=" w-3/4 flex flex-col gap-2.5">
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">LinkedIn</h4>
          <span>{profile?.linkedinUrl || "Not set"}</span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">GitHub</h4>
          <span>{profile?.githubUrl || "Not set"}</span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">Portfolio</h4>
          <span>{profile?.portfolioUrl || "Not set"}</span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <h4 className="font-semibold">Resume</h4>
          <span>{profile?.resumeUrl || "Not set"}</span>
        </div>
      </div>
    </PreviewFormItem>
  );
}
