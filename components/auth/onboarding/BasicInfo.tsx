import { Profile } from "@/types/users";
import { PreviewFormItem } from "./PreviewFormItem";
import { useEdit } from "@/hooks/useEdit";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubProfile } from "@/hooks/useSubProfile";

export function BasicInfo({
  value,
  profile,
}: {
  value: string;
  profile: Profile | null;
}) {
  const { edit, handleEdit } = useEdit();
  const { subProfile, setSubProfile } = useSubProfile(profile!, [
    "jobTitle",
    "yearsOfExperience",
    "bio",
    "workAuthorization",
    "location",
    "sponsorshipRequired",
  ]);

  return (
    <PreviewFormItem
      edit={edit}
      handleEdit={handleEdit}
      value={value}
      title="Basic Info"
    >
      <div className=" h-full grid grid-cols-2 gap-5 ">
        <div>
          <h4 className="font-semibold mb-1">JOB TITLE</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={subProfile?.jobTitle}
              onChange={(e) =>
                setSubProfile((prev) => ({
                  ...prev!,
                  jobTitle: e.target.value,
                }))
              }
              placeholder="e.g Frontend Developer"
            />
          ) : (
            <span>{subProfile?.jobTitle || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">YEARS OF EXPERIENCE</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={subProfile?.yearsOfExperience}
              onChange={(e) =>
                setSubProfile((prev) => ({
                  ...prev!,
                  yearsOfExperience: Number(e.target.value),
                }))
              }
              placeholder="e.g 3"
            />
          ) : (
            <span>{subProfile?.yearsOfExperience || "Not set"}</span>
          )}
        </div>
        <div className={cn(edit && "col-span-2")}>
          <h4 className="font-semibold mb-1">BIO</h4>
          {edit ? (
            <Textarea
              value={subProfile?.bio}
              onChange={(e) =>
                setSubProfile((prev) => ({
                  ...prev!,
                  bio: e.target.value,
                }))
              }
              className="h-11 placeholder:text-xs!"
              placeholder="Write a short bio..."
            />
          ) : (
            <span>{subProfile?.bio || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">WORK AUTHORIZATION</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={subProfile?.workAuthorization}
              onChange={(e) =>
                setSubProfile((prev) => ({
                  ...prev!,
                  workAuthorization: e.target.value,
                }))
              }
              placeholder="e.g Nigerian Citizen"
            />
          ) : (
            <span>{subProfile?.workAuthorization || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">LOCATION</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={subProfile?.location}
              onChange={(e) =>
                setSubProfile((prev) => ({
                  ...prev!,
                  location: e.target.value,
                }))
              }
              placeholder="e.g Lagos, Nigeria"
            />
          ) : (
            <span>{subProfile?.location || "Not set"}</span>
          )}
        </div>
        <div className={cn(edit && "col-span-2")}>
          <h4 className="font-semibold mb-1">SPONSORSHIP REQUIRED</h4>
          {edit ? (
            <Select
              value={subProfile?.sponsorshipRequired ? "yes" : "no"}
              onValueChange={(value) =>
                setSubProfile((prev) => ({
                  ...prev!,
                  sponsorshipRequired: value === "yes" ? true : false,
                }))
              }
              defaultValue="no"
            >
              <SelectTrigger className="w-full h-11!">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <span className="bg-gray-100 rounded-sm border px-2 font-medium">
              {subProfile?.sponsorshipRequired ? "Yes" : "No"}
            </span>
          )}
        </div>
      </div>
    </PreviewFormItem>
  );
}
