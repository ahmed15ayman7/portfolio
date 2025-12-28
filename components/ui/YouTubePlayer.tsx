"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

interface YouTubePlayerProps {
  video: {
    title: string;
    youtubeId: string;
  };
  className?: string;
}

export const YouTubePlayer = ({ video, className = "" }: YouTubePlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video || !video.youtubeId) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${className}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1">
        <div className="relative bg-[#0a0c1f] rounded-xl overflow-hidden">
          <div className="relative aspect-video">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 rounded-full bg-purple/90 flex items-center justify-center group-hover:bg-purple transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </motion.div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
          {video.title && (
            <div className="p-4">
              <h3 className="text-white font-semibold">{video.title}</h3>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

