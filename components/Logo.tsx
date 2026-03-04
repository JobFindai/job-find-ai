import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute top-10 lg:top-7 lg:h-14 h-12 min-w-20 lg:left-12 left-5",
        className,
      )}
    >
      <Image
        className="object-cover size-full"
        src="/logo.png"
        alt="logo"
        width={700}
        height={700}
      />
    </div>
  );
}
