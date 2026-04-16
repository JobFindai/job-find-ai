import { Qualification } from "@/types/users";
import { PreviewFormItem } from "./PreviewFormItem";

export function Education({
  value,
  education,
}: {
  value: string;
  education: Qualification | null;
}) {
  return (
    <PreviewFormItem value={value} title="Eduction">
      <div className=" h-full grid grid-cols-2 gap-5 ">
        <div>
          <h4 className="font-semibold mb-1">INSTITUTION</h4>
          <span>{education?.institution || "Not set"}</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">DEGREE</h4>
          <span>{education?.degree || "Not set"}</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">FIELD OF STUDY</h4>
          <span>{education?.field || "Not set"}</span>
        </div>
        <div>
          <h4 className="font-semibold mb-1">GRADUATION DATE</h4>
          <span>{education?.graduationDate || "Not set"}</span>
        </div>
      </div>
    </PreviewFormItem>
  );
}
