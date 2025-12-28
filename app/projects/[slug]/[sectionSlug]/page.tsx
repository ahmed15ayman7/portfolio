"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { PageCard } from "@/components/ui/PageCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { FaArrowLeft } from "react-icons/fa";

export default function SectionPage() {
  const params = useParams();
  const router = useRouter();
  const projectSlug = params.slug as string;
  const sectionSlug = params.sectionSlug as string;

  const project = projects.find((p) => p.slug === projectSlug);
  const section = project?.sections?.find((s) => s.slug === sectionSlug);

  if (!project || !section) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Section Not Found</h1>
          <button
            onClick={() => router.push(`/projects/${projectSlug}`)}
            className="text-purple hover:underline"
          >
            Back to Project
          </button>
        </div>
      </div>
    );
  }

  // جمع صور القسم (إما من section.images أو من أول صفحة)
  const sectionImages = section.images && section.images.length > 0
    ? section.images
    : section.pages[0]?.images || [];

  return (
    <div className="min-h-screen bg-black-100 text-white">
      {/* Hero Section with Carousel */}
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
            ]}
            className="mb-8"
          />

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.push(`/projects/${projectSlug}`)}
            className="flex items-center gap-2 text-purple hover:text-purple/80 transition-colors mb-8"
          >
            <FaArrowLeft />
            <span>Back to {project.title}</span>
          </motion.button>

          {/* Carousel */}
          {sectionImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-12"
            >
              <ImageCarousel
                images={sectionImages}
                className="max-w-5xl mx-auto"
              />
            </motion.div>
          )}

          {/* Section Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center max-w-4xl mx-auto space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {section.title}
            </h1>
            <p className="text-xl text-purple">
              {section.summary}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              {section.description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* YouTube Video Section */}
      {section.youtubeVideo && (
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Overview Video
            </h2>
            <div className="max-w-5xl mx-auto">
              <YouTubePlayer video={section.youtubeVideo} />
            </div>
          </motion.div>
        </div>
      )}

      {/* Pages Grid */}
      {section.pages && section.pages.length > 0 && (
        <div className="container mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Pages
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.pages.map((page, index) => (
              <PageCard
                key={page.id}
                page={page}
                projectSlug={projectSlug}
                sectionSlug={sectionSlug}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
      
      <ScrollToTop />
    </div>
  );
}

