"use client";

import { FaDownload } from "react-icons/fa6";

import {
  cvEducation,
  cvExperience,
  cvLanguages,
  cvProfile,
  cvProjects,
  cvSkills,
  type CvEntry,
} from "@/data/cv";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const Entry = ({ entry }: { entry: CvEntry }) => (
  <div className="cv-entry break-inside-avoid">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 className="text-base font-semibold text-slate-900">
        {entry.title}
        {entry.org && <span className="text-slate-500"> · {entry.org}</span>}
      </h3>
      <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
        {entry.period}
      </span>
    </div>

    {(entry.meta || entry.link) && (
      <p className="mt-0.5 text-xs text-slate-500">
        {entry.meta}
        {entry.meta && entry.link && " · "}
        {entry.link && (
          <a
            href={`https://${entry.link}`}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-700 underline underline-offset-2"
          >
            {entry.link}
          </a>
        )}
      </p>
    )}

    <ul className="mt-2 space-y-1">
      {entry.points.map((point, i) => (
        <li
          key={i}
          className="relative ps-4 text-[13px] leading-relaxed text-slate-700
                     before:absolute before:start-0 before:top-[0.6em] before:h-1 before:w-1
                     before:rounded-full before:bg-indigo-400"
        >
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="cv-section mt-7">
    <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-700">
      {title}
    </h2>
    <div className="mt-1 h-px w-full bg-slate-200" />
    <div className="mt-4 space-y-5">{children}</div>
  </section>
);

const CvClient = () => (
  <main className="relative bg-black-100 min-h-screen">
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-10">
      <div className="cv-chrome">
        <Breadcrumb items={[{ label: "CV", href: "/cv" }]} />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Curriculum <span className="text-purple">Vitae</span>
            </h1>
            <p className="mt-2 text-white-200 text-sm">
              Last updated October 2026
            </p>
          </div>

          <a
            href="/ahmed-ayman-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5
                       px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <FaDownload />
            Download PDF
          </a>
        </div>
      </div>

      {/* the sheet itself — light, so it prints and exports cleanly */}
      <article
        id="cv-sheet"
        className="cv-sheet mt-8 rounded-2xl bg-white px-8 py-10 text-slate-800 shadow-2xl md:px-12 md:py-14"
      >
        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {cvProfile.name}
          </h1>
          <p className="mt-1.5 text-sm font-medium text-indigo-700">
            {cvProfile.headline}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
            <span>{cvProfile.location}</span>
            <span>{cvProfile.phone}</span>
            <a
              href={`mailto:${cvProfile.email}`}
              className="text-indigo-700 underline underline-offset-2"
            >
              {cvProfile.email}
            </a>
            <a
              href={`https://${cvProfile.site}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-700 underline underline-offset-2"
            >
              {cvProfile.site}
            </a>
            <a
              href={`https://${cvProfile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-700 underline underline-offset-2"
            >
              {cvProfile.linkedin}
            </a>
            <a
              href={`https://${cvProfile.github}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-700 underline underline-offset-2"
            >
              {cvProfile.github}
            </a>
          </div>
        </header>

        <Section title="Summary">
          <p className="text-[13px] leading-relaxed text-slate-700">
            {cvProfile.summary}
          </p>
        </Section>

        <Section title="Experience">
          {cvExperience.map((entry) => (
            <Entry key={entry.title + entry.period} entry={entry} />
          ))}
        </Section>

        <Section title="Selected Projects">
          {cvProjects.map((entry) => (
            <Entry key={entry.title} entry={entry} />
          ))}
        </Section>

        <Section title="Education">
          {cvEducation.map((entry) => (
            <Entry key={entry.title} entry={entry} />
          ))}
        </Section>

        <Section title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            {cvSkills.map((skill) => (
              <div key={skill.group} className="break-inside-avoid">
                <h3 className="text-[13px] font-semibold text-slate-900">
                  {skill.group}
                </h3>
                <p className="mt-0.5 text-[13px] leading-relaxed text-slate-700">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Languages">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {cvLanguages.map((lang) => (
              <p key={lang.name} className="text-[13px] text-slate-700">
                <span className="font-semibold text-slate-900">
                  {lang.name}
                </span>{" "}
                — {lang.level}
              </p>
            ))}
          </div>
        </Section>
      </article>
    </div>
  </main>
);

export default CvClient;
