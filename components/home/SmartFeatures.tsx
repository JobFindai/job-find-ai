import { Button } from "../ui/button";
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
    <div className="min-h-screen flex flex-col items-center lg:gap-10 gap-7 lg:mt-10 mt-5 lg:p-10 p-5">
      <div className="flex flex-col text-center lg:w-3/5 items-center justify-center gap-3">
        <h3 className="lg:text-4xl text-xl font-bold text-black/90">
          Smart Features for Career Growth
        </h3>
        <p className="leading-normal text-sm lg:text-base text-muted-foreground">
          Our AI technology revolutionizes how you discover and apply to
          opportunities that match your unique profile and career aspirations
        </p>
      </div>
      <div className="lg:grid flex flex-col flex-1  lg:w-5/6  grid-cols-3 gap-x-16 lg:gap-y-10 gap-y-4 grid-rows-2">
        {features.map((feature) => (
          <SmartFeatureCard key={feature.image} {...feature} />
        ))}
        <SmartFeatureCard className="hidden">
          <div className="hidden lg:flex flex-col items-center justify-center h-full p-5 text-center gap-6">
            <h4 className="text-xl font-bold">
              Ready to begin your career journey?
            </h4>
            <Button className="w-3/4 h-11">Join the Waitlist</Button>
          </div>
        </SmartFeatureCard>
      </div>
    </div>
  );
}
