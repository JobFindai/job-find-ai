import { staggerContainer } from "@/lib/animation";
import { motion } from "motion/react";
import React from "react";

export default function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
