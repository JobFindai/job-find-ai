"use client";
import StepOne from "@/components/auth/onboarding/StepOne";
import StepThree from "@/components/auth/onboarding/StepThree";
import StepTwo from "@/components/auth/onboarding/StepTwo";
import { useState } from "react";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex-1 flex items-center justify-center">
      {step === 1 && <StepOne step={step} goStep={(step) => setStep(step)} />}
      {step === 2 && <StepTwo step={step} goStep={(step) => setStep(step)} />}
      {step === 3 && <StepThree step={step} goStep={(step) => setStep(step)} />}
    </div>
  );
}
