"use client";
import StepOne from "@/components/auth/signup/StepOne";
import StepTwo from "@/components/auth/signup/StepTwo";
import { useState } from "react";

export default function Signup() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex-1 flex items-center justify-center">
      {step === 1 && <StepOne goStep={(step) => setStep(step)} />}
      {step === 2 && <StepTwo goBackStep={(step) => setStep(step)} />}
    </div>
  );
}
