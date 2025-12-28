// Project navigation helpers
export const getProjectPath = (slug: string) => `/projects/${slug}`;

export const getSectionPath = (projectSlug: string, sectionSlug: string) =>
  `/projects/${projectSlug}/${sectionSlug}`;

export const getPagePath = (
  projectSlug: string,
  sectionSlug: string,
  pageSlug: string
) => `/projects/${projectSlug}/${sectionSlug}/${pageSlug}`;

// Check if images exist
export const hasDesktopImages = (images: any[]) =>
  images.some(
    (img) => img.src.includes("/disktop/") || img.src.includes("/desktop/")
  );

export const hasMobileImages = (images: any[]) =>
  images.some((img) => img.src.includes("/mobile/"));

// Filter images by type
export const getDesktopImages = (images: any[]) =>
  images.filter(
    (img) => img.src.includes("/disktop/") || img.src.includes("/desktop/")
  );

export const getMobileImages = (images: any[]) =>
  images.filter((img) => img.src.includes("/mobile/"));

// Get first image from section or pages
export const getFirstSectionImage = (section: any) => {
  if (section.images && section.images.length > 0) {
    return section.images[0];
  }
  if (section.pages && section.pages.length > 0) {
    const firstPage = section.pages[0];
    if (firstPage.images && firstPage.images.length > 0) {
      return firstPage.images[0];
    }
  }
  return null;
};

// Format YouTube video URL
export const getYouTubeEmbedUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}`;

export const getYouTubeThumbnail = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

// Navigation helpers
export const getNextPage = (pages: any[], currentSlug: string) => {
  const currentIndex = pages.findIndex((p) => p.slug === currentSlug);
  return currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;
};

export const getPreviousPage = (pages: any[], currentSlug: string) => {
  const currentIndex = pages.findIndex((p) => p.slug === currentSlug);
  return currentIndex > 0 ? pages[currentIndex - 1] : null;
};

