"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ImageModal } from "./ImageModal";

interface ImageCarouselProps {
  images: { id: number; src: string; alt: string }[];
  className?: string;
}

export const ImageCarousel = ({ images, className = "" }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className={`relative w-full ${className}`}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] aspect-video group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-contain"
              />
              
              {/* Expand Icon */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Maximize2 className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-purple w-6"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={images[currentIndex].src}
        imageAlt={images[currentIndex].alt}
        images={images}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </>
  );
};

