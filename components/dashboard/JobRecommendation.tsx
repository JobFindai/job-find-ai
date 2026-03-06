import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Bookmark, MapPin } from "lucide-react";
import Image from "next/image";

export default function JobRecommendation() {
  return (
    <div className=" flex-1 flex flex-col gap-5">
      <div className=" flex justify-between items-center">
        <h4 className="font-medium">Recommended for you</h4>
        <Button variant="outline">See All</Button>
      </div>
      <div className="lg:grid grid-cols-3 flex flex-col grid-rows-[1fr_1.5fr] gap-5">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

function JobCard() {
  return (
    <Card className="gap-3 lg:shadow-none border-none shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-black/75 flex items-center gap-2">
          <div className="size-9">
            <Image
              src="/slack.png"
              alt="slack"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
          <span>Junior Product Designer</span>
        </CardTitle>
        <CardDescription className="flex flex-col gap-2">
          <span className="font-medium text-base">Slack</span>
          <div className="flex gap-5 text-xs items-center">
            <span className="flex gap-1 items-center">
              <MapPin size={15} />
              London
            </span>
            <span>Onsite</span>
            <span>Posted Yesterday</span>
          </div>
        </CardDescription>
        <CardAction className="text-muted-foreground">
          <Bookmark />
        </CardAction>
      </CardHeader>
      <CardContent className="gap-3.5 flex flex-col">
        <p className="text-xs leading-normal">
          We are looking for a junior product designer that can take on design
          tasks. The suitable candidate will work with senior designers on...
        </p>
        <div className="flex text-xs items-center text-blue-600 bg-blue-50 lg:w-2/5 w-2/4 py-1.5 justify-center rounded-sm gap-2">
          <span>
            Fitscore: <b className="text-sm"> 94% Match</b>
          </span>{" "}
          <AlertCircle size={13} className="mt-0.5" />
        </div>
      </CardContent>
      <CardFooter className="text-sm">
        <Button variant="link" className="underline">
          View details
        </Button>
      </CardFooter>
    </Card>
  );
}
