import { AlertCircle, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

type FitscoreProps = {
  score: number; // 0 - 100
};

export default function Greeting() {
  return (
    <div className=" flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row  justify-between items-center">
        <div className="flex flex-col gap-2 w-full lg:w-fit">
          <h3 className="text-xl font-semibold">Good Morning John!</h3>
          <span>12 new matches align with your profile today.</span>
        </div>
        <div className="lg:flex  gap-5 hidden  flex-1 justify-end">
          <Button
            className="border w-1/6 border-primary h-11 text-primary"
            variant="ghost"
          >
            Track Applications
          </Button>
          <Button className="h-11 w-1/6">Explore matches</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 grid-rows-2 lg:grid-rows-1 min-h-3  gap-4">
        <DashBoardStatCard title="Total applications" count={54} />
        <DashBoardStatCard title="In Review" count={12} />
        <DashBoardStatCard title="Interviews" count={8} />
        <FitScore score={50} />
      </div>
    </div>
  );
}

function DashBoardStatCard({ title, count }: { title: string; count: number }) {
  return (
    <div className="bg-white px-4 lg:py-7 py-5 rounded-md flex justify-evenly flex-col shadow-lg/5">
      <span className="lg:text-sm text-lg font-medium">{title}</span>
      <span className="lg:text-3xl text-5xl font-bold">{count}</span>
      <span className="text-xs mt-2">Last 30 days</span>
    </div>
  );
}

function FitScore({ score }: FitscoreProps) {
  const totalSegments = 40; // how many small bars
  const filledSegments = Math.round((score / 100) * totalSegments);
  return (
    <div className="lg:col-span-2  bg-white rounded-md flex flex-col gap-3 px-4 py-5">
      <div className="flex items-center gap-1.5">
        <Zap size={14} />
        <span className="text-sm font-medium">Fitscore</span>
        <AlertCircle size={14} />
      </div>
      <Separator />
      <div className="flex flex-col gap-0.5  flex-1">
        <span className="text-base font-medium">
          Your average fitscore: <b>80%</b>
        </span>
        <span className="text-sm">Based on applied roles</span>

        {/* Segmented Progress */}
        <div className="flex gap-0.5 mt-2.5">
          {Array.from({ length: totalSegments }).map((_, index) => (
            <div
              key={index}
              className={`h-6 w-3 rounded-xs transition-all ${
                index < filledSegments ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
