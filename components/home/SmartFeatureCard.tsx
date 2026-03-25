import { cn } from "@/lib/utils";
import Image from "next/image";
import Stagger from "../animation/Stagger";
import { MotionInView } from "../animation/MotionInView";
import { slideFromLeft } from "@/lib/animation";
import { Variant } from "motion/react";

export default function SmartFeatureCard({
  image,
  title,
  description,
  variant,
  children,
  className,
}: {
  image?: string;
  title?: string;
  description?: string;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <MotionInView variants={variant}>
      <div className={cn(`relative pb-5 lg:pb-0 lg:h-72 lg:block`, className)}>
        <div className="absolute inset-0">
          <div className="lg:h-2/4 h-3/4">
            <Image
              src="/bg-pattern.png"
              alt="bg-pattern"
              width={500}
              height={500}
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-primary-dark/10  rounded-lg" />
        {children ? (
          <>{children}</>
        ) : (
          <div className="relative h-full flex flex-col">
            <div className="h-4/6 pt-3 ">
              <Image
                src={`/${image}.png`}
                alt={title || ""}
                width={1000}
                height={1000}
                className="size-full object-contain"
              />
            </div>
            <div className=" text-center flex-1 space-y-2 px-5">
              <h4 className="text-xl font-bold">{title}</h4>
              <span className="text-sm text-muted-foreground">
                {description}
              </span>
            </div>
          </div>
        )}
      </div>
    </MotionInView>
  );
}
