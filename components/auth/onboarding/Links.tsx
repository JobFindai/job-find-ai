import { Profile } from "@/types/users";
import { PreviewFormItem } from "./PreviewFormItem";
import { useEdit } from "@/hooks/useEdit";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Links({
  value,
  profile,
}: {
  value: string;
  profile: Profile | null;
}) {
  const { edit, handleEdit } = useEdit();
  return (
    <PreviewFormItem
      edit={edit}
      handleEdit={handleEdit}
      value={value}
      title="Links"
    >
      <div className={cn("flex flex-col  gap-2.5", edit && " gap-5")}>
        {/* LINKEDIN */}
        <div
          className={cn(
            "flex items-center gap-3  justify-between",
            edit && "flex-col items-start",
          )}
        >
          {edit ? (
            <>
              <Label htmlFor="linkedin">LINKEDIN URL</Label>
              <Input
                className="h-11"
                id="linkedin"
                type="text"
                value={profile?.linkedinUrl}
                placeholder="https://www.linkedin.com/in/..."
              />
            </>
          ) : (
            <>
              <h4 className="font-semibold">LinkedIn</h4>
              <span
                className={cn(
                  "text-xs w-3/5 lg:text-base truncate   font-medium text-center",
                  profile?.linkedinUrl && "text-blue-500",
                )}
              >
                {profile?.linkedinUrl || "Not set"}
              </span>
            </>
          )}
        </div>

        {/* GITHUB */}
        <div
          className={cn(
            "flex items-center gap-3 justify-between",
            edit && "flex-col items-start",
          )}
        >
          {edit ? (
            <>
              <Label htmlFor="github">GITHUB URL</Label>
              <Input
                className="h-11"
                id="github"
                type="text"
                value={profile?.githubUrl}
                placeholder="https://www.github.com/..."
              />
            </>
          ) : (
            <>
              <h4 className="font-semibold">GitHub</h4>
              <span
                className={cn(
                  "text-xs w-3/5 lg:text-base truncate   font-medium text-center",
                  profile?.githubUrl && "text-blue-500",
                )}
              >
                {profile?.githubUrl || "Not set"}
              </span>
            </>
          )}
        </div>

        {/* PORTFOLIO */}
        <div
          className={cn(
            "flex items-center gap-3 justify-between",
            edit && "flex-col items-start",
          )}
        >
          {edit ? (
            <>
              <Label htmlFor="portfolio">PORTFOLIO URL</Label>
              <Input
                className="h-11"
                id="portfolio"
                value={profile?.portfolioUrl}
                type="text"
                placeholder="https://..."
              />
            </>
          ) : (
            <>
              <h4 className="font-semibold">Portfolio</h4>
              <span
                className={cn(
                  "text-xs w-3/5 lg:text-base truncate   font-medium text-center",
                  profile?.portfolioUrl && "text-blue-500",
                )}
              >
                {profile?.portfolioUrl || "Not set"}
              </span>
            </>
          )}
        </div>

        {/* RESUME */}
        <div
          className={cn(
            "flex items-center gap-3 justify-between",
            edit && "flex-col items-start",
          )}
        >
          {edit ? (
            <>
              <Label htmlFor="resume">RESUME URL</Label>
              <Input
                className="h-11"
                id="resume"
                value={profile?.resumeUrl}
                type="text"
                placeholder="https://..."
              />
            </>
          ) : (
            <>
              <h4 className="font-semibold">Resume</h4>
              <span
                className={cn(
                  "text-xs w-3/5 lg:text-base truncate   font-medium text-center",
                  profile?.resumeUrl && "text-blue-500",
                )}
              >
                {profile?.resumeUrl || "Not set"}
              </span>
            </>
          )}
        </div>
      </div>
    </PreviewFormItem>
  );
}
