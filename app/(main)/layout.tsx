"use client";
import Loader from "@/components/Loader";
import { getUser } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isSignedIn, getToken, isLoaded } = useAuth();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    enabled: isLoaded,
    queryFn: async () => {
      const token = await getToken();
      return await getUser(token);
    },
  });

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      return;
    }

    if (!isSignedIn) {
      router.push("/login");
      return;
    }

    if (user.onboardingStatus === "COMPLETED") {
      router.push("/");
    } else {
      router.push("/onboarding");
    }
  }, [isLoaded, isSignedIn, user, router]);

  return (
    <>
      <Loader loading={isLoading} />
      {children}
    </>
  );
}
