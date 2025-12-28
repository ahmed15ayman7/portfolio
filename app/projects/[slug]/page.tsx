import { projects } from "@/data";
import type { Metadata } from "next";
import ProjectPageClient from "./ProjectPageClient";

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  // Get OG image (cover image)
  const ogImage = (project.ogImage ?? project.img).startsWith("http") 
    ? project.ogImage ?? project.img
    : `https://ahmed15ayman7.vercel.app${project.ogImage ?? project.img}`;

  return {
    title: `${project.title} | Ahmed Ayman Portfolio`,
    description: project.fullDescription || project.des,
    keywords: [
      project.title,
      "Ahmed Ayman",
      "Full Stack Developer",
      "Next.js",
      "React",
      "TypeScript",
      ...project.iconLists.map(icon => icon.replace("/", "").replace(".svg", "").replace(".png", "")),
    ],
    authors: [{ name: "Ahmed Ayman" }],
    creator: "Ahmed Ayman",
    publisher: "Ahmed Ayman",
    openGraph: {
      title: project.title,
      description: project.fullDescription || project.des,
      url: `https://ahmed15ayman7.vercel.app/projects/${project.slug}`,
      siteName: "Ahmed Ayman Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.fullDescription || project.des,
      images: [ogImage],
      creator: "@ahmed15ayman7",
    },
    alternates: {
      canonical: `https://ahmed15ayman7.vercel.app/projects/${project.slug}`,
    },
  };
}

export default function ProjectPage() {
  return <ProjectPageClient />;
}

