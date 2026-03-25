import { Compass, Globe, MessageCircleMore, Target, Zap } from "lucide-react";
import Fadeup from "../animation/Fadeup";
import { Slide } from "../animation/Slide";

const points = [
  {
    icon: Compass,
    title: "Career Compass",
    description:
      "See current, achievable roles with a clear timeline and recommended actions",
    animation: {
      delay: 0.1,
    },
  },
  {
    icon: Target,
    title: "Application Excellence",
    description:
      "Track resumes, get status updates, and prep guides for assessments and interviews",
    animation: {
      delay: 0.3,
    },
  },

  {
    icon: Zap,
    title: "Real-time Relevance",
    description:
      "Scores matches by fit & visa eligibility so you apply to realistic opportunities.",
    animation: {
      delay: 0.5,
    },
  },
  {
    icon: MessageCircleMore,
    title: "Empowered Coaching",
    description:
      "Actionable micro-steps and resources tailored by role and country.",
    animation: {
      delay: 0.7,
    },
  },
  {
    icon: Globe,
    title: "Scalable Access",
    description:
      "Works everywhere. Global access compared to others limited regions.",
    animation: {
      delay: 0.7,
    },
  },
];

export default function WhyDifferent() {
  return (
    <Fadeup>
      <div className="min-h-[70vh] flex flex-col gap-10 items-center mt-10 bg-gray-100 lg:p-10 px-5 py-10">
        <div className="flex flex-col items-center text-center leading-normal gap-3 lg:w-2/6">
          <h3 className="lg:text-3xl text-xl font-bold text-black/90">
            Why JobFind.AI is different
          </h3>
          <span className="text-sm lg:text-base">
            We are not another job board. We are your career acceleration
            partner, using the <b>CARES</b> framework
          </span>
        </div>
        <div className="lg:grid flex flex-col grid-cols-3 gap-y-10 gap-x-20 grid-rows-2 flex-1 lg:w-5/6">
          {points.map((point) => (
            <Slide key={point.title} delay={point.animation.delay}>
              <div className="flex flex-col gap-2 bg-gray-200 rounded-md p-5">
                <div className="flex gap-2 items-center">
                  <div className="text-2xl bg-gray-300 p-1.5 rounded-md">
                    <point.icon size={17} />
                  </div>
                  <h4>{point.title}</h4>
                </div>
                <p className="text-sm">{point.description}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </Fadeup>
  );
}
