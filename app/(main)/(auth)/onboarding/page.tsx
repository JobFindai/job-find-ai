"use client";
import PreStep from "@/components/auth/onboarding/PreStep";
import StepFour from "@/components/auth/onboarding/StepFour";
import StepOne from "@/components/auth/onboarding/StepOne";
import StepTwo from "@/components/auth/onboarding/StepTwo";
import StepThree from "@/components/auth/onboarding/StepThree";
import { LevelType, UserType } from "@/types/users";
import { useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { profileService } from "@/services/profile.service";

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
  const { isSignedIn, getToken } = useAuth();

  const [updatePayload, setUpdatePayload] = useState<UpdatePayloadType>({
    type: "STUDENT",
    currentLevel: "ENTRY_LEVEL",
    targetLevel: "SENIOR_LEVEL",
  });

  function changeStep(step: string) {
    // Get current search params and update it
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step);

    // Push to new search params
    router.push(`/onboarding?${params.toString()}`);
  }

  useEffect(() => {
    (async function () {
      setStep(Number(stepVal));
    })();
  }, [stepVal]);

  return (
    <>
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
          <StepTwo
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
            handleOnboardingComplete={async () => {
              try {
                // Update user onboarding satus
                const token = await getToken();

                const data = await profileService.updateUser(
                  token,
                  updatePayload,
                );

                if (data.status === "success") {
                  changeStep((step + 1).toString());
                  return;
                }
              } catch (err) {
                console.log(err);
              }
            }}
          />
        )}
        {step === 3 && (
          <StepThree
            step={step}
            goStep={(step) => changeStep(step.toString())}
          />
        )}
        {step === 4 && (
          <StepFour
            step={step}
            goStep={(step) => changeStep(step.toString())}
          />
        )}
      </div>
    </>
  );
}
