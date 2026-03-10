import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function SmartNudges({ isMobile }: { isMobile: boolean }) {
  return (
    <Card className="lg:shadow-none shadow-lg border-none">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-3">
          <Lightbulb />
          <span className="text-lg">Smart Nudges</span>
        </CardTitle>
        <CardAction>
          <Button variant={isMobile ? "link" : "outline"}>See All</Button>
        </CardAction>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-3 pb-3 w-11/12   flex-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <h4 className="text-primary italic text-sm">
                Data Analyst @ Slack
              </h4>
              <p className="leading-normal">
                Add SQL and Tableau under technical skills required for product
                analysis role
              </p>
            </div>
            <Separator />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
