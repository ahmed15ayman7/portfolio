import { projects } from "@/data";
import type { Metadata } from "next";
import PageDetailsClient from "./PageDetailsClient";

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string; sectionSlug: string; pageSlug: string } 
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  const section = project?.sections?.find((s) => s.slug === params.sectionSlug);
  const page = section?.pages?.find((p) => p.slug === params.pageSlug);

  if (!project || !section || !page) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    };
  }

  // Get OG image (first desktop image or first image)
  const desktopImages = page.images.filter(
    (img) => img.src.includes("/disktop/") || img.src.includes("/desktop/")
  );
  const ogImageSrc = page.ogImage ||  desktopImages[0]?.src || page.images[0]?.src || (project.ogImage ?? project.img);
  const ogImage = ogImageSrc.startsWith("http") 
    ? ogImageSrc 
    : `https://ahmed15ayman7.vercel.app${ogImageSrc}`;

  // Create features text for description
  const featuresText = page.features ? ` Features: ${page.features.slice(0, 3).join(", ")}` : "";

  return {
    title: `${page.title} - ${section.title} - ${project.title} | Ahmed Ayman Portfolio`,
    description: `${page.description}${featuresText}`,
    keywords: [
      page.title,
      section.title,
      project.title,
      "Ahmed Ayman",
      "Full Stack Developer",
      "Next.js",
      "React",
      ...(page.features || []),
    ],
    authors: [{ name: "Ahmed Ayman" }],
    creator: "Ahmed Ayman",
    publisher: "Ahmed Ayman",
    openGraph: {
      title: `${page.title} - ${section.title} - ${project.title}`,
      description: page.description,
      url: `https://ahmed15ayman7.vercel.app/projects/${project.slug}/${section.slug}/${page.slug}`,
      siteName: "Ahmed Ayman Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} - ${section.title}`,
      description: page.description,
      images: [ogImage],
      creator: "@ahmed15ayman7",
    },
    alternates: {
      canonical: `https://ahmed15ayman7.vercel.app/projects/${project.slug}/${section.slug}/${page.slug}`,
    },
  };
}

export default function PageDetailsPage() {
  return <PageDetailsClient />;
}

