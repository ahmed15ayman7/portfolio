import { projects } from "@/data";

export function generateProjectMetadata(slug: string) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Ahmed Ayman Portfolio",
      description: "The requested project could not be found.",
    };
  }

  const ogImage = project.img.startsWith("http") 
    ? project.img 
    : `https://ahmed15ayman7.vercel.app${project.img}`;

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
    ].join(", "),
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

export function generateSectionMetadata(projectSlug: string, sectionSlug: string) {
  const project = projects.find((p) => p.slug === projectSlug);
  const section = project?.sections?.find((s) => s.slug === sectionSlug);

  if (!project || !section) {
    return {
      title: "Section Not Found | Ahmed Ayman Portfolio",
      description: "The requested section could not be found.",
    };
  }

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
    ].join(", "),
    openGraph: {
      title: `${section.title} - ${project.title}`,
      description: section.description || section.summary,
      url: `https://ahmed15ayman7.vercel.app/projects/${projectSlug}/${sectionSlug}`,
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
      canonical: `https://ahmed15ayman7.vercel.app/projects/${projectSlug}/${sectionSlug}`,
    },
  };
}

export function generatePageMetadata(projectSlug: string, sectionSlug: string, pageSlug: string) {
  const project = projects.find((p) => p.slug === projectSlug);
  const section = project?.sections?.find((s) => s.slug === sectionSlug);
  const page = section?.pages?.find((p) => p.slug === pageSlug);

  if (!project || !section || !page) {
    return {
      title: "Page Not Found | Ahmed Ayman Portfolio",
      description: "The requested page could not be found.",
    };
  }

  const desktopImages = page.images.filter(
    (img) => img.src.includes("/disktop/") || img.src.includes("/desktop/")
  );
  const ogImageSrc = desktopImages[0]?.src || page.images[0]?.src || project.img;
  const ogImage = ogImageSrc.startsWith("http") 
    ? ogImageSrc 
    : `https://ahmed15ayman7.vercel.app${ogImageSrc}`;

  const featuresText = page.features ? ` Features: ${page.features.slice(0, 3).join(", ")}` : "";

  return {
    title: `${page.title} - ${section.title} - ${project.title} | Ahmed Ayman Portfolio`,
    description: `${page.description}${featuresText}`,
    keywords: [
      page.title,
      section.title,
      project.title,
      "Ahmed Ayman",
      ...(page.features || []),
    ].join(", "),
    openGraph: {
      title: `${page.title} - ${section.title} - ${project.title}`,
      description: page.description,
      url: `https://ahmed15ayman7.vercel.app/projects/${projectSlug}/${sectionSlug}/${pageSlug}`,
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
      canonical: `https://ahmed15ayman7.vercel.app/projects/${projectSlug}/${sectionSlug}/${pageSlug}`,
    },
  };
}

