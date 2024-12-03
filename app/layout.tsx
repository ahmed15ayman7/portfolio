import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Ayman Abdelgalel | Front-End Developer Portfolio",
  description:
    "Discover Ahmed Ayman Abdelgalel's portfolio, showcasing expertise in front-end development with technologies like HTML, CSS, JavaScript, TypeScript, Bootstrap, React, Tailwind CSS, Next.js, MongoDB, Git/GitHub, and MySQL. Explore modern, responsive, and user-focused web applications.",
  keywords: [
    "Ahmed Ayman Abdelgalel",
    "Front-End Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS Developer",
    "MongoDB Developer",
    "Responsive Web Design",
    "HTML CSS JavaScript",
    "Full-Stack Developer",
  ],
  authors: [
    {
      name: "Ahmed Ayman Ahmed Abdelgalel",
      url: "https://ahmed15ayman7.vercel.app",
    },
  ],
  openGraph: {
    title: "Ahmed Ayman Abdelgalel | Front-End Developer Portfolio",
    description:
      "Showcasing Ahmed Ayman Abdelgalel's projects, skills, and expertise in web development using modern tools and frameworks.",
    url: "https://ahmed15ayman7.vercel.app",
    type: "website",
    images: [
      {
        url: "https://ahmed15ayman7.vercel.app/ah-logo.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Ayman Abdelgalel Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ayman Abdelgalel | Front-End Developer Portfolio",
    description:
      "Discover the professional portfolio of Ahmed Ayman Abdelgalel, a front-end developer skilled in modern web technologies.",
    images: ["https://ahmed15ayman7.vercel.app/ah-logo.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ah-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
