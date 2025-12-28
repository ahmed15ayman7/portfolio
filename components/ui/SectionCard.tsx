"use client";

import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface SectionCardProps {
  section: {
    id: number;
    title: string;
    slug: string;
    summary: string;
    images?: { id: number; src: string; alt: string }[];
    pages: any[];
  };
  projectSlug: string;
  index: number;
}

export const SectionCard = ({ section, projectSlug, index }: SectionCardProps) => {
  const router = useRouter();
  const firstImage = section.images?.[0]?.src || section.pages[0]?.images?.[0]?.src;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => router.push(`/projects/${projectSlug}/${section.slug}`)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1">
        <div className="relative bg-[#0a0c1f] rounded-xl overflow-hidden">
          {/* الصورة */}
          <div className="relative h-48 overflow-hidden">
            {firstImage ? (
              <motion.img
                src={firstImage}
                alt={section.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple/20 to-transparent flex items-center justify-center">
                <span className="text-4xl text-purple/50">📁</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c1f] to-transparent opacity-60" />
          </div>

          {/* المحتوى */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
              {section.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2 mb-4">
              {section.summary}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-purple">
                {section.pages.length} {section.pages.length === 1 ? "Page" : "Pages"}
              </span>
              <motion.div
                className="flex items-center gap-2 text-purple text-sm"
                whileHover={{ x: 5 }}
              >
                <span>Explore</span>
                <FaChevronRight className="text-xs" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

