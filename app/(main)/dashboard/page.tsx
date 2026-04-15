"use client";
import { Slide } from "@/components/animation/Slide";
import Greeting from "@/components/dashboard/Greeting";
import JobRecommendation from "@/components/dashboard/JobRecommendation";
import JobRecommendationEmpty from "@/components/dashboard/JobRecommendationEmpty";
import Navbar from "@/components/dashboard/Navbar";
import { dashboardService } from "@/services/dashboard.service";
import { profileService } from "@/services/profile.service";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Home() {
  const { getToken, isLoaded } = useAuth();
  const router = useRouter();
  const {
    data: dashboard,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const token = await getToken();
      return await dashboardService.getDashboardStatsAndJobs(token);
    },
  });

  useQuery({
    queryKey: ["user"],
    enabled: isLoaded,
    queryFn: async () => {
      const token = await getToken();
      const user = await profileService.getUser(token);

      if (!user) {
        router.push("/login");
      }
      return user;
    },
  });

  return (
    <Slide className="min-h-screen bg-gray-100 flex flex-col" direction="up">
      <Navbar />
      <div className="flex-1 lg:p-10 mt-24 lg:mt-20 lg:pb-16 p-5 pb-16  flex flex-col gap-10">
        <Greeting stats={dashboard?.stats} />
        <JobRecommendation jobs={dashboard?.jobs} />
      </div>
    </Slide>
  );
}
