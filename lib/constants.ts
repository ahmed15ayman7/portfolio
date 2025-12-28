// Animation durations (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  verySlow: 1,
};

// Animation delays (in seconds)
export const ANIMATION_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
};

// Carousel settings
export const CAROUSEL_SETTINGS = {
  autoPlayInterval: 5000,
  transitionDuration: 500,
};

// Swiper settings
export const SWIPER_SETTINGS = {
  thumbnailsPerRow: 4,
  spaceBetween: 8,
};

// Particles settings
export const PARTICLES_SETTINGS = {
  count: 50,
  maxDistance: 100,
  speed: 0.5,
  opacity: 0.5,
};

// Breakpoints (matches Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Project card dimensions
export const PROJECT_CARD = {
  minHeight: {
    lg: "32.5rem",
    default: "25rem",
  },
  width: {
    sm: "24rem",
    default: "80vw",
  },
};

// Image dimensions
export const IMAGE_DIMENSIONS = {
  hero: {
    aspectRatio: "16/9",
  },
  thumbnail: {
    aspectRatio: "4/3",
  },
  card: {
    height: {
      section: "12rem",
      page: "10rem",
    },
  },
};

// Z-index layers
export const Z_INDEX = {
  background: 0,
  content: 10,
  header: 100,
  modal: 1000,
  tooltip: 10000,
};

// Transition easings
export const EASINGS = {
  easeInOut: [0.25, 0.4, 0.25, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
};

