"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ParticlesBackground } from "./ParticlesBackground";

interface ProjectHeroProps {
  children: ReactNode;
  showParticles?: boolean;
  className?: string;
}

export const ProjectHero = ({
  children,
  showParticles = true,
  className = "",
}: ProjectHeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        {showParticles && <ParticlesBackground className="opacity-30" />}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img
            src="/bg.png"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-100/50 to-black-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </motion.div>
  );
};

