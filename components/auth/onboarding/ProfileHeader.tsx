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
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="bg-gray-300 h-14 w-14 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="bg-gray-300 h-4 w-36" />
            <Skeleton className="bg-gray-300 h-3 w-24" />
          </div>
          <div className="ml-auto space-y-2 text-right">
            <Skeleton className="bg-gray-300 h-3 w-28 ml-auto" />
            <Skeleton className="bg-gray-300 h-2 w-40 rounded-full" />
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
