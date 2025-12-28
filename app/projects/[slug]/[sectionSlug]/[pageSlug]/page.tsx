"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { ImageSwiper } from "@/components/ui/ImageSwiper";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function PageDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const projectSlug = params.slug as string;
  const sectionSlug = params.sectionSlug as string;
  const pageSlug = params.pageSlug as string;

  const project = projects.find((p) => p.slug === projectSlug);
  const section = project?.sections?.find((s) => s.slug === sectionSlug);
  const page = section?.pages?.find((p) => p.slug === pageSlug);

  if (!project || !section || !page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <button
            onClick={() => router.push(`/projects/${projectSlug}/${sectionSlug}`)}
            className="text-purple hover:underline"
          >
            Back to Section
          </button>
        </div>
      </div>
    );
  }

  // فصل صور Desktop و Mobile
  const desktopImages = page.images.filter(
    (img) => img.src.includes("/disktop/") || img.src.includes("/desktop/")
  );
  const mobileImages = page.images.filter(
    (img) => img.src.includes("/mobile/")
  );

  // إذا لم يتم تصنيف الصور، استخدم كل الصور للـ desktop
  const heroImages = desktopImages.length > 0 ? desktopImages : page.images;
  const sideImages = mobileImages.length > 0 ? mobileImages : [];

  return (
    <div className="min-h-screen bg-black-100 text-white">
      {/* Hero Section with Desktop Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <img src="/bg.png" alt="background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-100/50 to-black-100" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Projects", href: "/#projects" },
              { label: project.title, href: `/projects/${projectSlug}` },
              { label: section.title, href: `/projects/${projectSlug}/${sectionSlug}` },
              { label: page.title, href: `/projects/${projectSlug}/${sectionSlug}/${pageSlug}` },
            ]}
            className="mb-8"
          />

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.push(`/projects/${projectSlug}/${sectionSlug}`)}
            className="flex items-center gap-2 text-purple hover:text-purple/80 transition-colors mb-8"
          >
            <FaArrowLeft />
            <span>Back to {section.title}</span>
          </motion.button>

          {/* Desktop Carousel */}
          {heroImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-12"
            >
              <ImageCarousel
                images={heroImages}
                className="max-w-6xl mx-auto"
              />
            </motion.div>
          )}

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {page.title}
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1">
              <div className="relative bg-[#0a0c1f] rounded-xl p-8">
                <h2 className="text-2xl font-bold text-purple mb-4">Description</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {page.description}
                </p>
              </div>
            </div>

            {/* Features */}
            {page.features && page.features.length > 0 && (
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1">
                <div className="relative bg-[#0a0c1f] rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-purple mb-6">Key Features</h2>
                  <div className="space-y-3">
                    {page.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle className="text-purple flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Mobile Images Swiper */}
          {sideImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1">
                <div className="relative bg-[#0a0c1f] rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-purple mb-6">Mobile Screens</h2>
                  <ImageSwiper images={sideImages} />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* YouTube Video Section */}
      {page.youtubeVideo && (
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Video Demo
            </h2>
            <div className="max-w-5xl mx-auto">
              <YouTubePlayer video={page.youtubeVideo} />
            </div>
          </motion.div>
        </div>
      )}

      {/* Navigation */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Previous Page */}
          {section.pages.findIndex((p) => p.slug === pageSlug) > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const currentIndex = section.pages.findIndex((p) => p.slug === pageSlug);
                const prevPage = section.pages[currentIndex - 1];
                router.push(`/projects/${projectSlug}/${sectionSlug}/${prevPage.slug}`);
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#13162D] to-[#1a1d3d] text-white font-semibold hover:from-purple/20 hover:to-blue-500/20 transition-all"
            >
              <FaArrowLeft />
              <span>Previous</span>
            </motion.button>
          )}

          {/* Next Page */}
          {section.pages.findIndex((p) => p.slug === pageSlug) < section.pages.length - 1 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const currentIndex = section.pages.findIndex((p) => p.slug === pageSlug);
                const nextPage = section.pages[currentIndex + 1];
                router.push(`/projects/${projectSlug}/${sectionSlug}/${nextPage.slug}`);
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple to-blue-500 text-white font-semibold ml-auto"
            >
              <span>Next</span>
              <FaArrowLeft className="rotate-180" />
            </motion.button>
          )}
        </div>
      </div>
      
      <ScrollToTop />
    </div>
  );
}

