import type { Metadata } from "next";
import CvClient from "./CvClient";

const description =
  "Curriculum Vitae of Ahmed Ayman Ahmed Abdelgalel — Software Engineer at Target for General Contracting and Full Stack Developer working with React, Next.js, NestJS and PostgreSQL.";

export const metadata: Metadata = {
  title: "CV | Ahmed Ayman Abdelgalel",
  description,
  keywords: [
    "Ahmed Ayman Abdelgalel",
    "CV",
    "Resume",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "NestJS",
    "TypeScript",
  ],
  authors: [{ name: "Ahmed Ayman Ahmed Abdelgalel" }],
  creator: "Ahmed Ayman Ahmed Abdelgalel",
  publisher: "Ahmed Ayman Ahmed Abdelgalel",
  openGraph: {
    title: "CV | Ahmed Ayman Abdelgalel",
    description,
    url: "https://ahmed15ayman7.vercel.app/cv",
    siteName: "Ahmed Ayman Portfolio",
    images: [
      {
        url: "https://ahmed15ayman7.vercel.app/ah-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Ayman Abdelgalel CV",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Ahmed Ayman Abdelgalel",
    description,
    images: ["https://ahmed15ayman7.vercel.app/ah-logo.jpg"],
  },
  alternates: {
    canonical: "https://ahmed15ayman7.vercel.app/cv",
  },
};

const CvPage = () => <CvClient />;

export default CvPage;
