"use client";

import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface PageCardProps {
  page: {
    id: number;
    title: string;
    slug: string;
    description: string;
    images: { id: number; src: string; alt: string }[];
    features?: string[];
  };
  projectSlug: string;
  sectionSlug: string;
  index: number;
}

export const PageCard = ({ page, projectSlug, sectionSlug, index }: PageCardProps) => {
  const router = useRouter();
  const firstImage = page.images?.[0]?.src;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => router.push(`/projects/${projectSlug}/${sectionSlug}/${page.slug}`)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1">
        <div className="relative bg-[#0a0c1f] rounded-xl overflow-hidden">
          {/* الصورة */}
          <div className="relative h-40 overflow-hidden">
            {firstImage ? (
              <motion.img
                src={firstImage}
                alt={page.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple/20 to-transparent flex items-center justify-center">
                <span className="text-3xl text-purple/50">📄</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c1f] to-transparent opacity-60" />
          </div>

          {/* المحتوى */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple transition-colors">
              {page.title}
            </h3>
            <p className="text-xs text-gray-400 line-clamp-2 mb-3">
              {page.description}
            </p>

            {page.features && page.features.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {page.features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-1 rounded-full bg-purple/10 text-purple"
                  >
                    {feature}
                  </span>
                ))}
                {page.features.length > 3 && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-purple/10 text-purple">
                    +{page.features.length - 3}
                  </span>
                )}
              </div>
            )}

            <motion.div
              className="flex items-center gap-2 text-purple text-sm"
              whileHover={{ x: 5 }}
            >
              <span>View Details</span>
              <FaChevronRight className="text-xs" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

