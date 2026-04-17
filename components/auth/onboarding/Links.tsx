import { Profile } from "@/types/users";
import { PreviewFormItem } from "./PreviewFormItem";
import { useEdit } from "@/hooks/useEdit";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSubProfile } from "@/hooks/useSubProfile";

export function Links({
  value,
  profile,
}: {
  value: string;
  profile: Profile | null;
}) {
  const { edit, handleEdit } = useEdit();
  const { subProfile, setSubProfile } = useSubProfile(profile!, ["experience"]);

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
                value={subProfile?.linkedinUrl}
                onChange={(e) =>
                  setSubProfile((prev) => ({
                    ...prev!,
                    linkedinUrl: e.target.value,
                  }))
                }
                placeholder="https://www.linkedin.com/in/..."
              />
            </>
          ) : (
            <>
              <h4 className="font-semibold">LinkedIn</h4>
              <span
                className={cn(
                  "text-xs w-3/5 lg:text-base truncate   font-medium text-center",
                  subProfile?.linkedinUrl && "text-blue-500",
                )}
              >
                {subProfile?.linkedinUrl || "Not set"}
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
                value={subProfile?.githubUrl}
                onChange={(e) =>
                  setSubProfile((prev) => ({
                    ...prev!,
                    githubUrl: e.target.value,
                  }))
                }
                placeholder="https://www.github.com/..."
              />
            </>
          ) : (
            <>
              <h4 className="font-semibold">GitHub</h4>
              <span
                className={cn(
                  "text-xs w-3/5 lg:text-base truncate   font-medium text-center",
                  subProfile?.githubUrl && "text-blue-500",
                )}
              >
                {subProfile?.githubUrl || "Not set"}
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
                value={subProfile?.portfolioUrl}
                onChange={(e) =>
                  setSubProfile((prev) => ({
                    ...prev!,
                    portfolioUrl: e.target.value,
                  }))
                }
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
                  subProfile?.portfolioUrl && "text-blue-500",
                )}
              >
                {subProfile?.portfolioUrl || "Not set"}
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
                value={subProfile?.resumeUrl}
                onChange={(e) =>
                  setSubProfile((prev) => ({
                    ...prev!,
                    resumeUrl: e.target.value,
                  }))
                }
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
                  subProfile?.resumeUrl && "text-blue-500",
                )}
              >
                {subProfile?.resumeUrl || "Not set"}
              </span>
            </>
          )}
        </div>
      </div>
    </PreviewFormItem>
  );
}
