import { PreviewFormItem } from "./PreviewFormItem";

export function AISummary({
  value,
  aiSummary,
}: {
  value: string;
  aiSummary: string;
}) {
  return (
    <PreviewFormItem value={value} title="AI Summary">
      <p className="bg-gray-100 rounded-lg p-3 leading-normal">{aiSummary}</p>
    </PreviewFormItem>
  );
}
