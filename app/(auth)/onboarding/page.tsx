"use client";
import PreStep from "@/components/auth/onboarding/PreStep";
import StepFour from "@/components/auth/onboarding/StepFour";
import StepOne from "@/components/auth/onboarding/StepOne";
import StepThree from "@/components/auth/onboarding/StepThree";
import StepTwo from "@/components/auth/onboarding/StepTwo";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const searchParams = useSearchParams();
  const stepVal = searchParams.get("step");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setStep(Number(stepVal));
    })();
  }, [stepVal]);

  function changeStep(step: string) {
    // Get current search params and update it
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step);

    // Push to new search params
    router.push(`/onboarding?${params.toString()}`);
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      {step === 0 && <PreStep goStep={(step) => setStep(step)} />}
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
        <StepFour step={step} goStep={(step) => changeStep(step.toString())} />
      )}
    </div>
  );
}
