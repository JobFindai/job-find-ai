import { Slide } from "@/components/animation/Slide";
import { Mail } from "lucide-react";
import ConsentDialog from "./ConsentDialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PreStep({
  goStep,
}: {
  goStep: (step: number) => void;
}) {
  const [connected, setConnected] = useState(false);
  return (
    <Slide
      direction="right"
      className={cn(
        " flex flex-col p-10 rounded-md lg:shadow-xl shadow-gray-400/10 lg:bg-white items-center gap-5 lg:w-1/3 min-h-96",
      )}
    >
      <div className="flex flex-col items-center text-center h-3/4 justify-center gap-3">
        <div className="rounded-full bg-primary/16 size-14 grid place-items-center">
          <Mail className="text-primary" size={30} />
        </div>
        <h2 className="text-2xl font-bold text-black/80">
          {connected
            ? "Your inbox has been connected successfully"
            : "Connect your inbox \nto auto-track every application"}
        </h2>
        <p className="text-muted-foreground leading-normal text-sm">
          {connected
            ? "Your have successfully connected your inbox. Continue to start tracking your applications"
            : "We will detect application confirmations, assessment invites, and interview invites, then log each step so you never miss a deadline or follow-up"}
        </p>
      </div>
      <div className="flex flex-col text-sm gap-3 w-full">
        {connected ? (
          <Button onClick={() => goStep(1)} className="h-11">
            Continue
          </Button>
        ) : (
          <>
            <ConsentDialog
              setConnected={(val) => setConnected(val)}
              text="Create a new gmail account"
            />
            <ConsentDialog
              setConnected={(val) => setConnected(val)}
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
