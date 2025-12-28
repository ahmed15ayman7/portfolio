// Color utilities and gradients for the portfolio
export const colors = {
  purple: "#CBACF9",
  purpleDark: "#7c3aed",
  blue: "#3b82f6",
  background: {
    dark: "#0a0c1f",
    card: "#13162D",
    cardAlt: "#1a1d3d",
  },
  text: {
    white: "#ffffff",
    gray: "#BEC1DD",
    grayDark: "#9CA3AF",
  },
};

export const gradients = {
  purple: "linear-gradient(135deg, #CBACF9 0%, #7c3aed 100%)",
  purpleBlue: "linear-gradient(135deg, #CBACF9 0%, #3b82f6 100%)",
  card: "linear-gradient(135deg, #13162D 0%, #1a1d3d 100%)",
  cardReverse: "linear-gradient(135deg, #1a1d3d 0%, #13162D 100%)",
  glow: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
};

export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

