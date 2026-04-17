import { Textarea } from "@/components/ui/textarea";
import { PreviewFormItem } from "./PreviewFormItem";
import { useEdit } from "@/hooks/useEdit";
import { Profile } from "@/types/users";

export function Experience({
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
      title="Experience"
    >
      {edit ? (
        <Textarea
          value={profile?.experience?.at(0)?.description || ""}
          placeholder="Type your message here."
        />
      ) : (
        <p className="bg-gray-100 rounded-lg px-3 py-5 leading-normal">
          {profile?.experience?.at(0)?.description}
        </p>
      )}
    </PreviewFormItem>
  );
}
