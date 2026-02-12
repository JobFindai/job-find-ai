"use client";

import { motion } from "motion/react";
import React from "react";

type Direction = "left" | "right" | "up" | "down";

interface SlideProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const getDirectionOffset = (direction: Direction) => {
  switch (direction) {
    case "left":
      return { x: -100, y: 0 };
    case "right":
      return { x: 100, y: 0 };
    case "up":
      return { x: 0, y: 100 };
    case "down":
      return { x: 0, y: -100 };
    default:
      return { x: 0, y: 0 };
  }
};

export const Slide = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: SlideProps) => {
  const offset = getDirectionOffset(direction);

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
