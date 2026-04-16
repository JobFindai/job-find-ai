import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
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
      {!name || !imageUrl ? (
        <div className="flex  items-center gap-3">
          <Skeleton className="h-12 w-12 bg-gray-300 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 bg-gray-300 w-28" />
            <Skeleton className="h-4 bg-gray-300 w-16" />
          </div>
        </div>
      ) : (
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
      )}
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
