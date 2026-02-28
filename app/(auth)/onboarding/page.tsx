"use client";
import PreStep from "@/components/auth/onboarding/PreStep";
import StepFour from "@/components/auth/onboarding/StepFour";
import StepOne from "@/components/auth/onboarding/StepOne";
import StepThree from "@/components/auth/onboarding/StepThree";
import StepTwo from "@/components/auth/onboarding/StepTwo";
import { useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type UpdatePayloadType = {
  type:
    | "STUDENT"
    | "EARLY_CAREER"
    | "MID_CAREER"
    | "EXPERIENCED_PROFESSIONAL"
    | "CAREER_SWITCHER"
    | "ADMIN";
  currentLevel: "ENTRY_LEVEL" | "MID_LEVEL" | "SENIOR_LEVEL" | "LEAD_MANAGER";
  targetLevel: "ENTRY_LEVEL" | "MID_LEVEL" | "SENIOR_LEVEL" | "LEAD_MANAGER";
};

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const searchParams = useSearchParams();
  const stepVal = searchParams.get("step");
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [updatePayload, setUpdatePayload] = useState<UpdatePayloadType>({
    type: "STUDENT",
    currentLevel: "ENTRY_LEVEL",
    targetLevel: "ENTRY_LEVEL",
  });

  function changeStep(step: string) {
    // Get current search params and update it
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step);

    // Push to new search params
    router.push(`/onboarding?${params.toString()}`);
  }

  async function updateUser() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/`,
      {
        method: "PATCH",
        body: JSON.stringify(updatePayload),
      },
    );

    if (!res.ok) throw Error("User was not updated successfully");

    const data = (await res.json()) as { success: string };

    if (data.success) router.push("/");
  }

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/onboarding");
      return;
    }
    (async function () {
      setStep(Number(stepVal));
    })();
  }, [stepVal, isSignedIn, router]);

  return (
    <div className="flex-1 flex items-center justify-center">
      {step === 0 && (
        <PreStep
          isSignedIn={isSignedIn}
          goStep={(step) => changeStep(step.toString())}
        />
      )}
      {step === 1 && (
        <StepOne step={step} goStep={(step) => changeStep(step.toString())} />
      )}
      {step === 2 && (
        <StepTwo step={step} goStep={(step) => changeStep(step.toString())} />
      )}
      {step === 3 && (
        <StepThree step={step} goStep={(step) => changeStep(step.toString())} />
      )}
      {step === 4 && (
        <StepFour
          step={step}
          goStep={(step) => changeStep(step.toString())}
          handleOnboardingComplete={() => updateUser()}
        />
      )}
    </div>
  );
}
