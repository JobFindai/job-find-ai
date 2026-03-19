import SmartFeatureCard from "./SmartFeatureCard";

export default function SmartFeatures() {
  return (
    <div className="h-screen flex flex-col items-center gap-10 mt-10 p-10">
      <div className="flex flex-col text-center w-3/5 items-center justify-center gap-3">
        <h3 className="text-4xl font-bold text-black/90">
          Smart Features for Career Growth
        </h3>
        <p className="leading-normal text-muted-foreground">
          Our AI technology revolutionizes how you discover and apply to
          opportunities that match your unique profile and career aspirations
        </p>
      </div>
      <div className="grid flex-1 w-full  grid-cols-3 gap-x-20 gap-y-10 px-10 grid-rows-2">
        <SmartFeatureCard />
        <SmartFeatureCard />
        <SmartFeatureCard />
        <SmartFeatureCard />
        <SmartFeatureCard />
        <SmartFeatureCard />
      </div>
    </div>
  );
}
