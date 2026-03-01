"use client";
import PreStep from "@/components/auth/onboarding/PreStep";
import StepFour from "@/components/auth/onboarding/StepFour";
import StepOne from "@/components/auth/onboarding/StepOne";
import StepThree from "@/components/auth/onboarding/StepThree";
import StepTwo from "@/components/auth/onboarding/StepTwo";
import Loader from "@/components/Loader";
import { LevelType, User, UserType } from "@/types/users";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type UpdatePayloadType = {
  type: UserType;
  currentLevel: LevelType;
  targetLevel: LevelType;
};

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const searchParams = useSearchParams();
  const stepVal = searchParams.get("step");
  const router = useRouter();
  const { isSignedIn, getToken, isLoaded } = useAuth();
  const [updatePayload, setUpdatePayload] = useState<UpdatePayloadType>({
    type: "STUDENT",
    currentLevel: "ENTRY_LEVEL",
    targetLevel: "SENIOR_LEVEL",
  });

  // Fetch user data on mount
  const { isLoading } = useQuery({
    queryKey: ["user"],
    enabled: isLoaded,
    queryFn: async () => {
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

      if (user.data.onboardingStatus === "COMPLETED") {
        router.push("/");
      }

      return user.data;
    },
  });

  function changeStep(step: string) {
    // Get current search params and update it
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step);

    // Push to new search params
    router.push(`/onboarding?${params.toString()}`);
  }

  async function updateUser() {
    const token = await getToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/`,
      {
        // credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatePayload),
      },
    );

    if (!res.ok) throw Error("User was not updated successfully");

    const data = (await res.json()) as { success: string };

    if (data.success) router.push("/");
  }

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/onboarding");
      return;
    }

    (async function () {
      setStep(Number(stepVal));
    })();
  }, [stepVal, isLoaded, isSignedIn, router]);

  return (
    <>
      <Loader loading={isLoading} />
      <div className="flex-1 flex items-center justify-center">
        {step === 0 && (
          <PreStep
            isSignedIn={isSignedIn}
            goStep={(step) => changeStep(step.toString())}
          />
        )}
        {step === 1 && (
          <StepOne
            handleChange={(type) =>
              setUpdatePayload((prev) => ({ ...prev, type }))
            }
            step={step}
            userType={updatePayload.type}
            goStep={(step) => changeStep(step.toString())}
          />
        )}
        {step === 2 && (
          <StepTwo step={step} goStep={(step) => changeStep(step.toString())} />
        )}
        {step === 3 && (
          <StepThree
            step={step}
            handleChange={(level, label) =>
              setUpdatePayload((prev) => ({
                ...prev,
                currentLevel: label === "current" ? level : prev.currentLevel,
                targetLevel: label === "target" ? level : prev.targetLevel,
              }))
            }
            updatePayload={updatePayload}
            goStep={(step) => changeStep(step.toString())}
          />
        )}
        {step === 4 && (
          <StepFour
            step={step}
            goStep={(step) => changeStep(step.toString())}
            handleOnboardingComplete={() => updateUser()}
          />
        )}
      </div>
    </>
  );
}
