import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export function ProfileHeader() {
  const [progress, setProgress] = useState(33);
  return (
    <div className="flex items-center px-1  py-3 w-full justify-between ">
      <div className="flex items-center gap-3">
        <Avatar className="size-12">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">Egenti Nnamdi</h2>
          <span className="text-sm">Full-stack developer</span>
        </div>
      </div>
      <div className="font-medium gap-1 h-full justify-center flex flex-col">
        <span>Profile completion</span>
        <div className="flex items-center gap-3">
          <Progress value={progress} />
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
