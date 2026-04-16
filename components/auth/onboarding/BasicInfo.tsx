import { Profile } from "@/types/users";
import { PreviewFormItem } from "./PreviewFormItem";
import { useState } from "react";
import { useEdit } from "@/hooks/useEdit";

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
          {/* <span>{profile?.location || "Not set"}</span> */}
          <span>Full Stack Developer</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">YEARS OF EXPERIENCE</h4>
          <span>{profile?.yearsOfExperience || "Not set"}</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">BIO</h4>
          <span>{profile?.bio || "Not set"}</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">WORK AUTHORIZATION</h4>
          <span>{profile?.workAuthorization || "Not set"}</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">SPONSORSHIP REQUIRED</h4>
          <span className="bg-gray-100 rounded-sm border px-2 font-medium">
            {profile?.sponsorshipRequired ? "Yes" : "No"}
          </span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">LOCATION</h4>
          <span>{profile?.location || "Not set"}</span>
        </div>
      </div>
    </PreviewFormItem>
  );
}
