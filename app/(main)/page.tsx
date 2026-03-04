"use client";
import { Slide } from "@/components/animation/Slide";
import Greeting from "@/components/dashboard/Greeting";
import JobRecommendation from "@/components/dashboard/JobRecommendation";
import Navbar from "@/components/dashboard/Navbar";

export default function Home() {
  return (
    <Slide className="min-h-screen  flex flex-col" direction="up">
      <Navbar />
      <div className="flex-1 p-10 bg-gray-100 flex flex-col gap-10">
        <Greeting />
        <JobRecommendation />
      </div>
    </Slide>
  );
}
