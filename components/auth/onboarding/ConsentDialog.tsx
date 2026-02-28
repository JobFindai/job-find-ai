import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Eye, Mail, Shield } from "lucide-react";

type Variant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";

const consent = [
  {
    icon: Mail,
    content:
      "We will read message metadata (sender, subject, time) to detect applications.",
  },
  {
    icon: Eye,
    content:
      "We only access message bodies if you explicitly approve (to extract interview links or assessment instructions).",
  },
  {
    icon: Shield,
    content: "We will not read or analyze unrelated personal messages.",
  },
];

export default function ConsentDialog({
  text,
  btnText,
  variant,
  className,
  handleSignUp,
}: {
  text: string;
  btnText?: string;
  variant?: Variant;
  className?: string;
  handleSignUp: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={cn("h-11", className)}>
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:size-2/4 min-h-[20vh] p-4">
        <div className="border rounded-lg p-3 flex gap-5 lg:gap-0 flex-col">
          <DialogHeader className="flex flex-col gap-5 flex-1">
            <DialogTitle className="text-xl text-left lg:text-center">
              What we will access and why
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-3">
              {consent.map((item) => (
                <span
                  className="flex gap-2 text-xs text-left leading-normal text-foreground"
                  key={item.content}
                >
                  <item.icon size={17} />
                  <span>{item.content}</span>
                </span>
              ))}
            </DialogDescription>
            <div className="text-primary  text-sm flex-1 grid place-items-center">
              <span className="bg-primary/5 p-2.5 rounded-md italic">
                You can revoke access anytime in settings and we never sell or
                share your messages.
              </span>
            </div>
          </DialogHeader>
          <DialogFooter className="text-sm">
            <DialogClose asChild>
              <Button variant="ghost" className="h-11 lg:w-1/4 font-medium">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={handleSignUp}
                className="h-11 lg:w-2/4 font-medium"
              >
                {btnText ? btnText : "Continue with Gmail"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
