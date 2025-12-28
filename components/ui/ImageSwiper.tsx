"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { ImageModal } from "./ImageModal";

interface ImageSwiperProps {
  images: { id: number; src: string; alt: string }[];
  className?: string;
}

export const ImageSwiper = ({ images, className = "" }: ImageSwiperProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className={`flex flex-col gap-3 ${className}`}>
        <div 
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] aspect-[4/3] group cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <motion.img
            key={activeIndex}
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
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
        </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 max-h-[200px] overflow-y-auto custom-scrollbar">
          {images.map((image, index) => (
            <motion.button
              key={image.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-lg overflow-hidden aspect-square ${
                index === activeIndex
                  ? "ring-2 ring-purple"
                  : "opacity-60 hover:opacity-100"
              } transition-all duration-300`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={images[activeIndex].src}
        imageAlt={images[activeIndex].alt}
        images={images}
        currentIndex={activeIndex}
        onNavigate={setActiveIndex}
      />
    </>
  );
};

