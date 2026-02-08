"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent } from "../ui/carousel";
import TestimonyCard from "./TestimonyCard";
import Autoplay from "embla-carousel-autoplay";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AuthTestimoniesSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent className="h-98 flex items-center gap-5 px-10  ">
        {Array.from({ length: 3 }).map((_, index) => (
          <TestimonyCard key={index} active={current === index + 1} />
        ))}
      </CarouselContent>
      <div className="flex text-white gap-3  justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-400 size-2 rounded-full",
              index + 1 === current && "bg-white",
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
