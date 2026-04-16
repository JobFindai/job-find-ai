import { useEdit } from "@/hooks/useEdit";
import { PreviewFormItem } from "./PreviewFormItem";
import { Textarea } from "@/components/ui/textarea";

export function AISummary({
  value,
  aiSummary,
}: {
  value: string;
  aiSummary: string;
}) {
  const { edit, handleEdit } = useEdit();

  return (
    <PreviewFormItem
      edit={edit}
      handleEdit={handleEdit}
      value={value}
      title="AI Summary"
    >
      {edit ? (
        <Textarea value={aiSummary} placeholder="Type your message here." />
      ) : (
        <p className="bg-gray-100 rounded-lg p-3 leading-normal">{aiSummary}</p>
      )}
    </PreviewFormItem>
  );
}
