"use client";
import Loader from "@/components/Loader";
import { useUser } from "@/hooks/useUser";
import { profileService } from "@/services/profile.service";
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

  const { isSignedIn, isLoaded } = useAuth();

  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      return;
    }

    if (!isSignedIn) {
      router.push("/login");
      return;
    }

    if (
      user.onboardingStatus === "COMPLETED" &&
      !user.profile?.resumeParsedAt
    ) {
      router.push("/onboarding?step=3");
    } else if (
      user.onboardingStatus === "COMPLETED" &&
      user.profile?.resumeParsedAt
    ) {
      // router.push("/dashboard");
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
