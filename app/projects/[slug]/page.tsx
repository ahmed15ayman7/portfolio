"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { SectionCard } from "@/components/ui/SectionCard";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    // إذا لم يكن هناك sections، قم بإعادة التوجيه للرابط
    if (project && (!project.sections || project.sections.length === 0)) {
      window.location.href = project.link;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/#projects")}
            className="text-purple hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-100 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 w-full h-full">
          <ParticlesBackground className="opacity-30" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <img src="/bg.png" alt="background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black-100/50 to-black-100" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Projects", href: "/#projects" },
              { label: project.title, href: `/projects/${project.slug}` },
            ]}
            className="mb-8"
          />

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.push("/#projects")}
            className="flex items-center gap-2 text-purple hover:text-purple/80 transition-colors mb-8"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue-500/20 rounded-3xl blur-3xl" />
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1">
                  <div className="relative bg-[#0a0c1f] rounded-xl overflow-hidden aspect-video">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {project.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Icons */}
              <div className="flex items-center gap-3 flex-wrap">
                {project.iconLists.map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-[2px]"
                  >
                    <div className="w-full h-full rounded-full bg-[#0a0c1f] flex items-center justify-center">
                      <img src={icon} alt="tech icon" className="w-6 h-6" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 flex-wrap">
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple to-blue-500 text-white font-semibold"
                  >
                    <FaExternalLinkAlt />
                    <span>Visit Live Site</span>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#13162D] to-[#1a1d3d] text-white font-semibold"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Tools Section */}
      {project.tools && project.tools.stacks && (
        <div className="container mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Tech Stack & Tools
          </motion.h2>

          <div className="space-y-12">
            {project.tools.stacks.map((stack, stackIndex) => (
              <motion.div
                key={stackIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-1"
              >
                <div className="relative bg-[#0a0c1f] rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-purple mb-2">
                    {stack.title}
                  </h3>
                  {stack.notes && (
                    <p className="text-gray-400 mb-6">{stack.notes}</p>
                  )}

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {stack.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={toolIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#13162D] to-[#1a1d3d] p-[1px]"
                      >
                        <div className="relative bg-[#0a0c1f] rounded-xl p-4 h-full">
                          <div className="flex items-start gap-3">
                            {tool.icon && (
                              <img
                                src={tool.icon}
                                alt={tool.name}
                                className="w-8 h-8 flex-shrink-0"
                              />
                            )}
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">
                                {tool.name}
                              </h4>
                              {tool.description && (
                                <p className="text-sm text-gray-400 mt-1">
                                  {tool.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Sections Grid */}
      {project.sections && project.sections.length > 0 && (
        <div className="container mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Project Sections
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.sections.map((section, index) => (
              <SectionCard
                key={section.id}
                section={section}
                projectSlug={project.slug}
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

