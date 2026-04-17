import { Textarea } from "@/components/ui/textarea";
import { PreviewFormItem } from "./PreviewFormItem";
import { useEdit } from "@/hooks/useEdit";
import { Profile } from "@/types/users";
import { useSubProfile } from "@/hooks/useSubProfile";

export function Experience({
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
      title="Experience"
    >
      {edit ? (
        <Textarea
          value={subProfile?.experience?.at(0)?.description || ""}
          onChange={(e) =>
            setSubProfile((prev) => ({
              ...prev!,
              experience: [
                { ...prev?.experience?.at(0)!, description: e.target.value },
              ],
            }))
          }
          placeholder="Type your message here."
        />
      ) : (
        <p className="bg-gray-100 rounded-lg px-3 py-5 leading-normal">
          {subProfile?.experience?.at(0)?.description}
        </p>
      )}
    </PreviewFormItem>
  );
}
