import Image from "next/image";

export default function SmartFeatureCard({
  image,
  title,
  description,
}: {
  image?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative min-h-80">
      <div className="absolute inset-0">
        <div className="h-2/4">
          <Image
            src="/bg-pattern.png"
            alt="bg-pattern"
            width={500}
            height={500}
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-primary-dark/10  rounded-lg" />
      <div className="absolute inset-0  flex flex-col">
        <div className="grid place-items-center h-8/12">
          <Image
            src={`/${image}.png`}
            alt={title}
            width={500}
            height={500}
            className="min-h-3/4 object-cover"
          />
        </div>
        <div className="flex flex-col items-center   text-center flex-1 justify-center px-6 gap-1">
          <h4 className="text-xl font-bold">{title}</h4>
          <span className="text-sm text-muted-foreground">{description}</span>
        </div>
      </div>
    </div>
  );
}
