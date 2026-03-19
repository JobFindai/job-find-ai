import Image from "next/image";

export default function SmartFeatureCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="/bg-pattern.png"
          alt="bg-pattern"
          width={500}
          height={500}
          className="size-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-primary-dark/15 rounded-xl" />
      <div className="absolute">
        <div>
          <Image
            src="/career-mapping.png"
            alt="career-mapping"
            width={500}
            height={500}
            className="size-full object-cover"
          />
        </div>
        <h4>Career Mapping Engine</h4>
        <span></span>
      </div>
    </div>
  );
}
