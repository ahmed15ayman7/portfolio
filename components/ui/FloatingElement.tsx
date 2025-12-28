"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FloatingElement = ({
  children,
  className = "",
  delay = 0,
  duration = 3,
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

