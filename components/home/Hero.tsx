import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Fadeup from "../animation/Fadeup";
import { Slide } from "../animation/Slide";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <Fadeup>
      <div className="lg:h-screen min-h-[65vh] flex items-center justify-center mt-16  lg:mt-0 ">
        <div className=" flex flex-col items-center gap-6 w-11/12  lg:w-2/3 text-center">
          <Slide direction="down" delay={0.5}>
            <div className="border border-main flex items-center mb-1 gap-1.5 font-medium lg:py-1.5 py-1 lg:px-5 px-3 rounded-md text-xs text-main">
              <Sparkles size={17} />
              <span>AI Career Agent That Grows With You</span>
            </div>
          </Slide>
          <h2 className="lg:text-6xl text-3xl font-bold tracking-wide leading-tight ">
            Your Fast-Track from Job Listings to{" "}
            <div className="text-primary">
              <Typewriter
                words={[
                  "Interview Success",
                  "Dream Job Offers",
                  "Career Milestones",
                ]}
                loop={0} // 0 = infinite
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </h2>
          <Fadeup delay={0.3}>
            <p className="lg:text-lg text-sm text-muted-foreground  font-medium">
              AI powered job matching, auto-apply, and Ghostbuster email
              tracking - so you never get ghosted again
            </p>
          </Fadeup>
          <Fadeup delay={0.5}>
            <Button className="h-12 ">Join the Waitlist</Button>
          </Fadeup>
        </div>
      </div>
    </Fadeup>
  );
}
