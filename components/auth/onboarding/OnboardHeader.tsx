export default function OnboardHeader({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex text-center items-center flex-col gap-3">
      <span className="text-xs mb-3">
        Step <b>{step}</b> of 4
      </span>
      <h2 className="font-semibold text-2xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
