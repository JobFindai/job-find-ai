import { motion } from "motion/react";

export const MotionInView = ({
  children,
  variants,
  className = "",
}: {
  children: React.ReactNode;
  variants: any;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};
