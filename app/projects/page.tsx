import type { Metadata } from "next";
import { projects } from "@/data";
import AllProjectsClient from "./AllProjectsClient";

const description =
  "Every project Ahmed Ayman has shipped — full platforms, academy and accreditation systems, publishing platforms and more, built with Next.js, NestJS and TypeScript.";

export const metadata: Metadata = {
  title: "All Projects | Ahmed Ayman Portfolio",
  description,
  keywords: [
    "Ahmed Ayman",
    "Projects",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    ...projects.map((project) => project.title),
  ],
  authors: [{ name: "Ahmed Ayman" }],
  creator: "Ahmed Ayman",
  publisher: "Ahmed Ayman",
  openGraph: {
    title: "All Projects | Ahmed Ayman Portfolio",
    description,
    url: "https://ahmed15ayman7.com/projects",
    siteName: "Ahmed Ayman Portfolio",
    images: [
      {
        url: "https://ahmed15ayman7.com/ah-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Ayman Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Projects | Ahmed Ayman Portfolio",
    description,
    images: ["https://ahmed15ayman7.com/ah-logo.jpg"],
  },
  alternates: {
    canonical: "https://ahmed15ayman7.com/projects",
  },
};

const AllProjectsPage = () => <AllProjectsClient />;

export default AllProjectsPage;
