import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

const hoverEffect = "hover:bg-gray-200 cursor-pointer";

export function PreviewFormItem({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: ReactNode;
}) {
  const [edit, setEdit] = useState(false);

  return (
    <AccordionItem className="shadow-sm  rounded-lg bg-white" value={value}>
      <AccordionTrigger
        className={cn(
          "items-center  focus-visible:outline-none gap-2 px-4",
          hoverEffect,
        )}
      >
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex-1 flex justify-end">
          <span
            role="button"
            onClick={(e) => {
              edit && e.stopPropagation();
              setEdit(true);
            }}
            className={cn(
              "min-w-20 border rounded-lg h-10 flex items-center justify-center",
              hoverEffect,
            )}
          >
            Edit
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <Separator className="mb-4" />
        <div className="px-4 pb-2">
          {children}
          <div
            className={cn("mt-5 h-12  flex gap-3 text-lg ", !edit && "hidden")}
          >
            <Button
              onClick={() => setEdit(false)}
              className="h-full lg:w-1/4 w-1/3"
            >
              Save
            </Button>
            <Button
              onClick={() => setEdit(false)}
              variant="outline"
              className="h-full lg:w-1/4 w-1/3"
            >
              Cancel
            </Button>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
