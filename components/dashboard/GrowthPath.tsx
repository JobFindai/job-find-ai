import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dot, Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function GrowthPath({ isMobile }: { isMobile: boolean }) {
  return (
    <Card className="lg:shadow-none shadow-lg border-none">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-3">
          <Lightbulb />
          <span className="text-lg">Your Growth Path</span>
        </CardTitle>
        <CardAction>
          <Button variant={isMobile ? "link" : "outline"}>See All</Button>
        </CardAction>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col lg:gap-7 gap-3 lg:py-4  flex-1">
        <div className="flex flex-col gap-1">
          <span className="text-sm">Target Role</span>
          <span className="text-lg font-semibold">Senior Product Designer</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm">Top 3 skills develop</span>
          <div className="px-1 gap-1.5 flex flex-col">
            {[
              "Cross-functional collaboration",
              "Design Leadership",
              "Accessibility",
            ].map((item) => (
              <span className="flex" key={item}>
                <Dot />
                {item}
              </span>
            ))}
          </div>
        </div>
        <Button variant="link" className="underline self-start">
          View Roadmap
        </Button>
      </CardContent>
    </Card>
  );
}
