import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JobMatchesEmptyState({
  refetch,
}: {
  refetch: () => void;
}) {
  return (
    <div className=" flex-1! w-full flex flex-col text-center leading-normal gap-6 items-center  justify-center">
      <div className="w-full lg:hidden">
        <Image
          src="/job-match-empty.png"
          alt="empty"
          width={500}
          height={500}
          className="size-full object-cover"
        />
      </div>
      <h3 className="text-3xl font-bold text-foreground/90">No Matches!</h3>
      <p>
        Apologies, we do not have any job matching your profile at the moment.
      </p>
      <Button onClick={refetch} className="w-2/4 lg:w-1/4 h-12 bg-primary">
        Refresh
      </Button>
    </div>
  );
}
