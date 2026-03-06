"use client";
import Loader from "@/components/Loader";
import { User } from "@/types/users";
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
      try {
        const token = await getToken();

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/`,
          {
            credentials: "include",
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!res.ok) throw Error("User was not fetched successfully");
        const user = (await res.json()) as {
          status: string;
          message: string;
          data: User;
        };
        console.log(user, "undefiend");

        return user.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) {
      // router.push("/login");
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
