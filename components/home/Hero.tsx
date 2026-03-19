import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className=" flex flex-col items-center  gap-6  w-2/3 text-center">
        <div className="border border-main flex items-center gap-1.5 font-medium py-1.5 px-5 rounded-md text-xs text-main">
          <Sparkles size={17} />
          <span>AI Career Agent That Grows With You</span>
        </div>
        <h2 className="text-6xl font-semibold leading-tight ">
          Your Fast-Track from Job Listings to{" "}
          <span className="text-primary">Interview Success</span>
        </h2>
        <p className="text-muted-foreground  font-medium">
          AI powered job matching, auto-apply, and Ghostbuster email tracking -
          so you never get ghosted again
        </p>
        <Button className="h-12 w-1/6">Join the Waitlist</Button>
      </div>
    </div>
  );
}
