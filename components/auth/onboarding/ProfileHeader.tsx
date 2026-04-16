import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export function ProfileHeader({
  name,
  jobTitle,
  imageUrl,
}: {
  name: string;
  jobTitle: string;
  imageUrl: string;
}) {
  const [progress, setProgress] = useState(33);
  return (
    <div className="flex items-center px-1  py-3 w-full justify-between ">
      <div className="flex items-center gap-3">
        <Avatar className="size-12">
          {imageUrl && <AvatarImage src={imageUrl} alt={name} />}
          <AvatarFallback>{`${name.split(" ").at(0)?.at(0)}${name.split(" ").at(1)?.at(0)}`}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <span className="text-sm">{jobTitle}</span>
        </div>
      </div>
      <div className="font-medium gap-2 h-full justify-center flex flex-col">
        <span>Profile completion</span>
        <div className="flex items-center gap-3">
          <Progress value={progress} />
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
