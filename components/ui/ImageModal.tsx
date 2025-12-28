"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  images?: { id: number; src: string; alt: string }[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  images,
  currentIndex = 0,
  onNavigate,
}: ImageModalProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setScale(1);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 1));
  };

  const handlePrevious = () => {
    if (onNavigate && images && currentIndex > 0) {
      onNavigate(currentIndex - 1);
      setScale(1);
    }
  };

  const handleNext = () => {
    if (onNavigate && images && currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
      setScale(1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "+") handleZoomIn();
      if (e.key === "-") handleZoomOut();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Header Controls */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
            <div className="flex items-center gap-2">
              {images && (
                <span className="text-white text-sm">
                  {currentIndex + 1} / {images.length}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                disabled={scale <= 1}
              >
                <ZoomOut className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                disabled={scale >= 3}
              >
                <ZoomIn className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Navigation Buttons */}
          {images && images.length > 1 && (
            <>
              {currentIndex > 0 && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
              )}

              {currentIndex < images.length - 1 && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              )}
            </>
          )}

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[95vw] max-h-[95vh] overflow-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              animate={{ scale }}
              transition={{ duration: 0.2 }}
              className="max-w-full h-auto"
              style={{ transformOrigin: "center" }}
            />
          </motion.div>

          {/* Caption */}
          {imageAlt && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-white text-center text-sm">{imageAlt}</p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

