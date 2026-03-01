import { Slide } from "@/components/animation/Slide";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignIn } from "@clerk/nextjs";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Login() {
  return (
    <Slide
      direction="right"
      className={cn(
        " flex flex-col w-full lg:p-10 p-5 rounded-md lg:shadow-xl shadow-gray-400/10 lg:bg-white items-center gap-5  lg:w-1/3",
      )}
    >
      <div className="flex flex-col items-center text-center h-3/4 justify-center gap-3">
        <div className="rounded-full bg-primary/16 size-14 grid place-items-center">
          <Mail className="text-primary" size={30} />
        </div>
        <h2 className="text-2xl font-bold text-black/80">Welcome back</h2>
        <p className="text-muted-foreground leading-normal text-sm">
          Continue building your career advantage
        </p>
      </div>
      <Button className="lg:h-11 h-12 flex text-sm! items-center gap-3 w-full">
        <div className="size-5">
          <Image
            src="/google.png"
            alt="google"
            width={500}
            height={500}
            className="size-full"
          />
        </div>
        <span>Continue with Google</span>
      </Button>
    </Slide>
  );
}
