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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BasicInfo({
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
      title="Basic Info"
    >
      <div className=" h-full grid grid-cols-2 gap-5 ">
        <div>
          <h4 className="font-semibold mb-1">JOB TITLE</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={profile?.jobTitle}
              placeholder="e.g Frontend Developer"
            />
          ) : (
            <span>{profile?.jobTitle || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">YEARS OF EXPERIENCE</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={profile?.yearsOfExperience}
              placeholder="e.g 3"
            />
          ) : (
            <span>{profile?.yearsOfExperience || "Not set"}</span>
          )}
        </div>
        <div className={cn(edit && "col-span-2")}>
          <h4 className="font-semibold mb-1">BIO</h4>
          {edit ? (
            <Textarea
              value={profile?.bio}
              className="h-11 placeholder:text-xs!"
              placeholder="Write a short bio..."
            />
          ) : (
            <span>{profile?.bio || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">WORK AUTHORIZATION</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={profile?.workAuthorization}
              placeholder="e.g Nigerian Citizen"
            />
          ) : (
            <span>{profile?.workAuthorization || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">LOCATION</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={profile?.location}
              placeholder="e.g Lagos, Nigeria"
            />
          ) : (
            <span>{profile?.location || "Not set"}</span>
          )}
        </div>
        <div className={cn(edit && "col-span-2")}>
          <h4 className="font-semibold mb-1">SPONSORSHIP REQUIRED</h4>
          {edit ? (
            <Select
              value={profile?.sponsorshipRequired ? "yes" : "no"}
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
              {profile?.sponsorshipRequired ? "Yes" : "No"}
            </span>
          )}
        </div>
      </div>
    </PreviewFormItem>
  );
}
