import { PreviewFormItem } from "./PreviewFormItem";

export function AISummary({ value }: { value: string }) {
  return (
    <PreviewFormItem value={value} title="AI Summary">
      <p className="bg-gray-100 rounded-lg p-3 leading-normal">
        Full-stack developer skilled in building scalable web applications and
        modern UI interfaces using React, Next.js, TypeScript, Node.js, and
        MongoDB. Experienced in delivering high-impact, data-driven features
        across e-commerce, fintech, and internship management platforms.
      </p>
    </PreviewFormItem>
  );
}
