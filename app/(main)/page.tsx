"use client";
import { Slide } from "@/components/animation/Slide";
import Greeting from "@/components/dashboard/Greeting";
import JobRecommendation from "@/components/dashboard/JobRecommendation";
import Navbar from "@/components/dashboard/Navbar";
import { getUser } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function Home() {
  const { getToken, isLoaded } = useAuth();
  const router = useRouter();

  useQuery({
    queryKey: ["user"],
    enabled: isLoaded,
    queryFn: async () => {
      const token = await getToken();
      const user = await getUser(token);

      if (!user) {
        router.push("/login");
      }
      return user;
    },
  });

  return (
    <Slide className="min-h-screen  flex flex-col" direction="up">
      <Navbar />
      <div className="flex-1 lg:p-10 p-5 bg-gray-100 flex flex-col gap-10">
        <Greeting />
        <JobRecommendation />
      </div>
    </Slide>
  );
}
