import { Calendar, GraduationCap, Handshake, Slice, Users } from "lucide-react";
import Fadeup from "../animation/Fadeup";
import { Slide } from "../animation/Slide";

const features = [
  {
    icon: GraduationCap,
    title: "Campus Integration",
    description:
      "Direct integration with your university career centers and academic systems",
    animation: {
      delay: 0.2,
    },
  },
  {
    icon: Users,
    title: "Ambassador Program",
    description:
      "Student ambassadors to help peer navigate career opportunities",
    animation: {
      delay: 0.4,
    },
  },
  {
    icon: Handshake,
    title: "Employment Partnerships",
    description:
      "Direct partnerships with companies for exclusive opportunities and insights",
    animation: {
      delay: 0.6,
    },
  },
];
export default function UniversityDashboard() {
  return (
    <Fadeup>
      <div className="min-h-[50vh] mt-10 flex items-center lg:gap-7 gap-5 flex-col pt-10">
        <div className="flex items-center gap-1.5 font-medium text-main border-main rounded-sm lg:h-8 h-7 text-sm lg:px-5 px-3 border">
          <Calendar size={17} />
          <span>Coming Soon, Q2 2025</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-xl font-semibold">University Dashboard</h3>
          <p className="text-sm lg:w-full w-5/6 text-center text-muted-foreground">
            Specialized tools for universities to help their students succeed in
            the global job market
          </p>
        </div>
        <div className="flex flex-col lg:flex-row flex-1 gap-10 w-5/6 ">
          {features.map((feature) => (
            <Slide
              key={feature.title}
              className="shadow-xl shadow-gray-400/15 p-5 flex-col flex items-center justify-center gap-2 rounded-lg text-center"
              delay={feature.animation.delay}
            >
              <div className="bg-main/10 text-main rounded-full lg:size-16 size-14 grid place-items-center">
                <feature.icon size={27} />
              </div>
              <h4 className="font-semibold lg:text-xl text-lg">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </Slide>
          ))}
        </div>
      </div>
    </Fadeup>
  );
}
