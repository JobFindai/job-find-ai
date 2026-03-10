import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gauge } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function GhostBursterBot({ isMobile }: { isMobile: boolean }) {
  return (
    <Card className="lg:shadow-none shadow-lg border-none">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="flex items-center gap-3">
          <Gauge />
          <span className="text-lg">GhostBurster Bot</span>
        </CardTitle>
        <CardAction>
          <Button variant={isMobile ? "link" : "outline"}>View History</Button>
        </CardAction>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-7  flex-1">
        <div className="flex items-center gap-3">
          <Label htmlFor="auto-follow">Auto Follow up</Label>
          <Switch id="auto-follow" />
        </div>
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="size-10">
              <Image
                src="/slack.png"
                alt="slack"
                width={500}
                height={500}
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">
                Junior Product Designer
              </span>
              <span className="text-base font-medium">Slack</span>
              <span className="text-sm">
                Next follow up Email: 22 June, 2025
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
