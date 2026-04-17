import { useEdit } from "@/hooks/useEdit";
import { PreviewFormItem } from "./PreviewFormItem";
import { Textarea } from "@/components/ui/textarea";
import { useSubProfile } from "@/hooks/useSubProfile";
import { Profile } from "@/types/users";

export function AISummary({
  value,
  profile,
}: {
  value: string;
  profile: Profile | null;
}) {
  const { edit, handleEdit } = useEdit();
  const { subProfile, setSubProfile } = useSubProfile(profile!, ["aiSummary"]);

  return (
    <PreviewFormItem
      edit={edit}
      handleEdit={handleEdit}
      value={value}
      title="AI Summary"
    >
      {edit ? (
        <Textarea
          value={subProfile?.aiSummary}
          onChange={(e) =>
            setSubProfile((prev) => ({ ...prev!, aiSummary: e.target.value }))
          }
          placeholder="Type your message here."
        />
      ) : (
        <p className="bg-gray-100 rounded-lg p-3 leading-normal">
          {subProfile?.aiSummary || "No AI summary available."}
        </p>
      )}
    </PreviewFormItem>
  );
}
