import { Slide } from "@/components/animation/Slide";
import { Mail } from "lucide-react";
import ConsentDialog from "./ConsentDialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSignUp } from "@clerk/nextjs";

export default function PreStep({
  goStep,
  isSignedIn,
}: {
  goStep: (step: number) => void;
  isSignedIn: boolean | undefined;
}) {
  const { signUp, isLoaded } = useSignUp();

  return (
    <Slide
      direction="right"
      className={cn(
        " flex flex-col p-10 rounded-md lg:shadow-xl shadow-gray-400/10 lg:bg-white justify-evenly items-center gap-5 lg:w-1/3 min-h-96",
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-400/20 grid place-items-center">
          Loading...
        </div>
      )}
      <div className="flex flex-col items-center text-center h-3/4 justify-center gap-3">
        <div className="rounded-full bg-primary/16 size-14 grid place-items-center">
          <Mail className="text-primary" size={30} />
        </div>
        <h2 className="text-2xl font-bold text-black/80">
          {isSignedIn
            ? "Your inbox has been connected successfully"
            : "Connect your inbox \nto auto-track every application"}
        </h2>
        <p className="text-muted-foreground leading-normal text-sm">
          {isSignedIn
            ? "Your have successfully connected your inbox. Continue to start tracking your applications"
            : "We will detect application confirmations, assessment invites, and interview invites, then log each step so you never miss a deadline or follow-up"}
        </p>
      </div>
      <div className="flex flex-col text-sm gap-3 w-full">
        {isSignedIn ? (
          <Button onClick={() => goStep(1)} className="h-11">
            Continue
          </Button>
        ) : (
          <>
            <ConsentDialog text="Create a new gmail account" />
            <ConsentDialog
              isLoaded={isLoaded}
              signUp={signUp!}
              className="border-primary hover:text-primary text-primary h-11"
              variant="outline"
              text="Connect your existing gmail account"
            />
          </>
        )}
      </div>
    </Slide>
  );
}
