import { Calendar, GraduationCap, Handshake, Users } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Campus Integration",
    description:
      "Direct integration with your university career centers and academic systems",
  },
  {
    icon: Users,
    title: "Ambassador Program",
    description:
      "Student ambassadors to help peer navigate career opportunities",
  },
  {
    icon: Handshake,
    title: "Employment Partnerships",
    description:
      "Direct partnerships with companies for exclusive opportunities and insights",
  },
];
export default function UniversityDashboard() {
  return (
    <div className="min-h-[50vh] mt-10 flex items-center gap-7 flex-col pt-10">
      <div className="flex items-center gap-1.5 font-medium text-main border-main rounded-sm h-8 text-sm px-5 border">
        <Calendar size={17} />
        <span>Coming Soon, Q2 2025</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3>University Dashboard</h3>
        <p className="text-sm text-muted-foreground">
          Specialized tools for universities to help their students succeed in
          the global job market
        </p>
      </div>
      <div className="flex flex-col lg:flex-row flex-1 gap-10 w-5/6 ">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="shadow-xl shadow-gray-400/15 p-5 flex-col flex items-center justify-center gap-2 rounded-lg text-center"
          >
            <div className="bg-main/10 text-main rounded-full size-16 grid place-items-center">
              <feature.icon size={27} />
            </div>
            <h4 className="font-semibold text-xl">{feature.title}</h4>
            <p className="text-muted-foreground text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
