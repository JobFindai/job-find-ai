import { PreviewFormItem } from "./PreviewFormItem";

export function Skills({ value }: { value: string }) {
  return (
    <PreviewFormItem value={value} title="Skills">
      <p>Not set</p>
    </PreviewFormItem>
  );
}
