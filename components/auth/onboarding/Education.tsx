import { Qualification } from "@/types/users";
import { PreviewFormItem } from "./PreviewFormItem";
import { useEdit } from "@/hooks/useEdit";
import { Input } from "@/components/ui/input";

export function Education({
  value,
  education,
}: {
  value: string;
  education: Qualification | null;
}) {
  const { edit, handleEdit } = useEdit();
  return (
    <PreviewFormItem
      edit={edit}
      handleEdit={handleEdit}
      value={value}
      title="Eduction"
    >
      <div className=" h-full grid grid-cols-2 gap-5 ">
        <div>
          <h4 className="font-semibold mb-1">INSTITUTION</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={education?.institution || ""}
              placeholder="e.g University of Lagos"
            />
          ) : (
            <span>{education?.institution || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">DEGREE</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={education?.degree || ""}
              placeholder="e.g B.Sc Computer Science"
            />
          ) : (
            <span>{education?.degree || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">FIELD OF STUDY</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={education?.field || ""}
              placeholder="e.g Computer Science"
            />
          ) : (
            <span>{education?.field || "Not set"}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold mb-1">GRADUATION DATE</h4>
          {edit ? (
            <Input
              className="h-11 placeholder:text-xs!"
              type="text"
              value={education?.graduationDate || ""}
              placeholder="e.g 2026"
            />
          ) : (
            <span>{education?.graduationDate || "Not set"}</span>
          )}
        </div>
      </div>
    </PreviewFormItem>
  );
}
