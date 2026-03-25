import { Map, SearchCode, Upload, User } from "lucide-react";
import Fadeup from "../animation/Fadeup";
import { Direction, Slide } from "../animation/Slide";

const steps = [
  {
    icon: User,
    title: "Sign up with a new Gmail Account",
    description:
      "Sign up with a new Gmail account or let us create one for you. This lets us support you from application to job offer",
    animation: {
      direction: "left",
      delay: 0.1,
    },
  },
  {
    icon: Upload,
    title: "Upload or Connect Linkedin",
    description:
      "Share your resume or LinkedIn profile. We'll analyze your experience, skills, and career trajectory in seconds.",
    animation: {
      direction: "right",
      delay: 0.3,
    },
  },
  {
    icon: SearchCode,
    title: "We Analyze & Show Your FitScore",
    description:
      "Our AI evaluates your profile against millions of career paths and current market signals to calculate your opportunities",
    animation: {
      direction: "left",
      delay: 0.5,
    },
  },
  {
    icon: Map,
    title: "Get Action Plan + Track Applications",
    description:
      "Receive a personalized roadmap with specific steps, then track your progress and applications in one unified dashboard",
    animation: {
      direction: "right",
      delay: 0.7,
    },
  },
];

export default function HowItWorks() {
  return (
    <Fadeup delay={1}>
      <div className="min-h-[50vh] flex flex-col items-center text-white gap-10 justify-center lg:p-10 px-5 py-10 bg-primary-dark mt-10">
        <div className="flex flex-col text-center items-center lg:gap-3 gap-1.5">
          <h2 className="lg:text-4xl text-xl font-semibold">
            How JobFind.Ai Works
          </h2>
          <span className="lg:text-base text-sm">
            From profile analysis to career acceleration in three simple steps
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-around  lg:gap-10 gap-12 items-center flex-1">
          {steps.map((item) => (
            <Slide
              key={item.title}
              direction={item.animation.direction as Direction}
              delay={item.animation.delay}
            >
              <div className="flex flex-col   items-start  lg:items-center lg:text-center lg:gap-3 gap-5">
                <item.icon className="h-1/4" />
                <h3 className="text-lg h-1/4 leading-tight font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm h-2/4 leading-normal">
                  {item.description}
                </p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </Fadeup>
  );
}
