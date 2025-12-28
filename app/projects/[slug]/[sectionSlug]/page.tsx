import { projects } from "@/data";
import type { Metadata } from "next";
import SectionPageClient from "./SectionPageClient";

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string; sectionSlug: string } 
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  const section = project?.sections?.find((s) => s.slug === params.sectionSlug);

  if (!project || !section) {
    return {
      title: "Section Not Found",
      description: "The requested section could not be found.",
    };
  }

  // Get OG image (first image from section or first page)
  const sectionImages = section.images && section.images.length > 0
    ? section.images
    : section.pages[0]?.images || [];
  
  const ogImageSrc = sectionImages[0]?.src || project.img;
  const ogImage = ogImageSrc.startsWith("http") 
    ? ogImageSrc 
    : `https://ahmed15ayman7.vercel.app${ogImageSrc}`;

  return {
    title: `${section.title} - ${project.title} | Ahmed Ayman Portfolio`,
    description: section.description || section.summary,
    keywords: [
      section.title,
      project.title,
      "Ahmed Ayman",
      "Full Stack Developer",
      "Next.js",
      "React",
    ],
    authors: [{ name: "Ahmed Ayman" }],
    creator: "Ahmed Ayman",
    publisher: "Ahmed Ayman",
    openGraph: {
      title: `${section.title} - ${project.title}`,
      description: section.description || section.summary,
      url: `https://ahmed15ayman7.vercel.app/projects/${project.slug}/${section.slug}`,
      siteName: "Ahmed Ayman Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: section.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${section.title} - ${project.title}`,
      description: section.description || section.summary,
      images: [ogImage],
      creator: "@ahmed15ayman7",
    },
    alternates: {
      canonical: `https://ahmed15ayman7.vercel.app/projects/${project.slug}/${section.slug}`,
    },
  };
}

export default function SectionPage() {
  return <SectionPageClient />;
}

