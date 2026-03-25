import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="lg:h-screen h-[70vh] flex items-center justify-center mt-10 lg:mt-0 ">
      <div className=" flex flex-col items-center  lg:gap-6 gap-5 w-11/12  lg:w-2/3 text-center">
        <div className="border border-main flex items-center gap-1.5 font-medium lg:py-1.5 py-1 lg:px-5 px-3 rounded-md text-xs text-main">
          <Sparkles size={17} />
          <span>AI Career Agent That Grows With You</span>
        </div>
        <h2 className="lg:text-6xl text-3xl font-bold tracking-wide leading-tight ">
          Your Fast-Track from Job Listings to{" "}
          <span className="text-primary">Interview Success</span>
        </h2>
        <p className="lg:text-lg text-sm text-muted-foreground  font-medium">
          AI powered job matching, auto-apply, and Ghostbuster email tracking -
          so you never get ghosted again
        </p>
        <Button className="h-12 lg:w-1/6">Join the Waitlist</Button>
      </div>
    </div>
  );
}
