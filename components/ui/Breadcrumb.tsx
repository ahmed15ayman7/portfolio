"use client";

import { motion } from "framer-motion";
import { FaChevronRight, FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-2 text-sm ${className}`}
    >
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-gray-400 hover:text-purple transition-colors"
      >
        <FaHome className="text-xs" />
        <span>Home</span>
      </button>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <FaChevronRight className="text-gray-600 text-xs" />
          {index === items.length - 1 ? (
            <span className="text-purple font-semibold">{item.label}</span>
          ) : (
            <button
              onClick={() => router.push(item.href)}
              className="text-gray-400 hover:text-purple transition-colors"
            >
              {item.label}
            </button>
          )}
        </div>
      ))}
    </motion.nav>
  );
};

