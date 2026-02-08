import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CarouselItem } from "../ui/carousel";

export default function TestimonyCard({ active }: { active: boolean }) {
  return (
    <CarouselItem className="basis-2/3 ">
      <div
        className={cn(
          "bg-white/30 rounded-2xl p-7 flex flex-col gap-4",
          active && "bg-white transition-all duration-300  scale-110",
        )}
      >
        <span className=" font-medium text-sm">Time-Saving Effective Tool</span>
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex text-xs flex-col">
            <span className="font-medium ">John Doe</span>
            <span className=" text-primary font-medium">Lagos, Nigeria</span>
          </div>
        </div>
        <p className="text-xs leading-relaxed font-normal">
          Before using JobFind, I kept missing out on opportunities. Now,
          Auto-Apply ensures my applications go in as soon as roles open. I
          landed an internship at Julius Berger, and I couldn&apos;t have done
          it without this tool.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-normal">Engineer</span>
          <span
            className={cn(
              "font-semibold bg-gray-200/10 py-0 px-2 text-sm rounded-xs",
              active && "bg-gray-200",
            )}
          >
            Julius Berger
          </span>
        </div>
      </div>
    </CarouselItem>
  );
}
