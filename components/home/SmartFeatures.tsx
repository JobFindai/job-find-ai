import SmartFeatureCard from "./SmartFeatureCard";

const features = [
  {
    image: "career-mapping",
    title: "Career Mapping Engine",
    description: "AI-powered career path prediction",
  },
  {
    image: "application-tracker",
    title: "Application Tracker",
    description: "Track resume views, rejections, assessments, interview dates",
  },
  {
    image: "fit-score",
    title: "FitScore",
    description: "Get instant compatibility ratings for every role",
  },
  {
    image: "visa-filter",
    title: "Visa Filter",
    description: "Navigate international opportunities with confidence",
  },
  {
    image: "ghost-burster",
    title: "GhostBurster",
    description: "Bust through borders. Own your global future",
  },
];
export default function SmartFeatures() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 mt-10 p-10">
      <div className="flex flex-col text-center w-3/5 items-center justify-center gap-3">
        <h3 className="text-4xl font-bold text-black/90">
          Smart Features for Career Growth
        </h3>
        <p className="leading-normal text-muted-foreground">
          Our AI technology revolutionizes how you discover and apply to
          opportunities that match your unique profile and career aspirations
        </p>
      </div>
      <div className="lg:grid flex flex-col flex-1  w-5/6  grid-cols-3 gap-x-16 gap-y-10 grid-rows-2">
        {features.map((feature) => (
          <SmartFeatureCard key={feature.image} {...feature} />
        ))}
      </div>
    </div>
  );
}
