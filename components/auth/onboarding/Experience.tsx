import { Textarea } from "@/components/ui/textarea";
import { PreviewFormItem } from "./PreviewFormItem";
import { useEdit } from "@/hooks/useEdit";

export function Experience({ value }: { value: string }) {
  const { edit, handleEdit } = useEdit();
  return (
    <PreviewFormItem
      edit={edit}
      handleEdit={handleEdit}
      value={value}
      title="Experience"
    >
      {edit ? (
        <Textarea placeholder="Type your message here." />
      ) : (
        <p className="bg-gray-100 rounded-lg px-3 py-5 leading-normal">
          Full Stack Engineer – Flickmart (Nov 2024 – Present) Built a
          personalized recommendation engine that increased product relevance
          and boosted engagement by 18–25%. Engineered a data ingestion pipeline
          processing 10,000+ product attributes. Optimized Recombee API usage,
          reducing redundant calls by 40%. Frontend Developer Intern – Cyntern
          (Feb 2025 – May 2025) Developed 15+ dynamic React components. Improved
          page responsiveness by 20%. Built API-driven UI flows reducing
          navigation friction by 25%. Frontend Developer Intern – HNG Internship
          (Jul 2024 – Aug 2024) Built 3+ mini-apps including a real-time weather
          app. Delivered 8+ frontend tasks using React, Next.js, TypeScript, and
          Tailwind.
        </p>
      )}
    </PreviewFormItem>
  );
}
