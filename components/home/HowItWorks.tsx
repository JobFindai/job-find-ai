import { Map, SearchCode, Upload, User } from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Sign up with a new Gmail Account",
    description:
      "Sign up with a new Gmail account or let us create one for you. This lets us support you from application to job offer",
  },
  {
    icon: Upload,
    title: "Upload or Connect Linkedin",
    description:
      "Share your resume or LinkedIn profile. We'll analyze your experience, skills, and career trajectory in seconds.",
  },
  {
    icon: SearchCode,
    title: "We Analyze & Show Your FitScore",
    description:
      "Our AI evaluates your profile against millions of career paths and current market signals to calculate your opportunities",
  },
  {
    icon: Map,
    title: "Get Action Plan + Track Applications",
    description:
      "Receive a personalized roadmap with specific steps, then track your progress and applications in one unified dashboard",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center text-white gap-10 justify-center p-10 bg-primary-dark mt-10">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-4xl font-semibold">How JobFind.Ai Works</h2>
        <span>
          From profile analysis to career acceleration in three simple steps
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-around  gap-10 items-center flex-1">
        {steps.map((item) => (
          <div
            key={item.title}
            className="flex flex-col w-1/6  items-center text-center gap-3"
          >
            <item.icon className="h-1/4" />
            <h3 className="text-lg h-1/4 leading-tight font-semibold">
              {item.title}
            </h3>
            <p className="text-sm h-2/4 leading-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
