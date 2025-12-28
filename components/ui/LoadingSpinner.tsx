"use client";

import { motion } from "framer-motion";

export const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <div className="relative">
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-purple/20 border-t-purple"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-purple/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export const PageLoader = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-black-100"
    >
      <LoadingSpinner />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-400 text-lg"
      >
        {message}
      </motion.p>
    </motion.div>
  );
};

