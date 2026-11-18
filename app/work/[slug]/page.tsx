
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const canonicalUrl = `/work/${slug}`;

  return {
    title: `${project.title} | Priyanka Fatarpekar`,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Priyanka Fatarpekar`,
      description: project.description,
      url: canonicalUrl,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const isSeoProject =
    project.slug === "seo-analytics-implementation";

  return (
    <main className="min-h-screen bg-[#f7f7f3]">
      <div className="container-width py-10">
        <Link
          href="/#work"
          className="text-sm font-medium text-[#666660] hover:text-[#1f5c4a]"
        >
          ← Back to work
        </Link>

        {/* HERO SECTION */}
        <div className="py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
            {project.number} · {project.category}
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#686862]">
            {project.description}
          </p>

          {project.slug === "skyline-properties" && (
            <Link
              href="/skyline-properties"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1f5c4a] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#174536]"
            >
              View Website
              <span>↗</span>
            </Link>
          )}

          {isSeoProject && (
            <a
              href="https://marketing-portfolio-gamma-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1f5c4a] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#174536]"
            >
              Visit Live Website
              <span>↗</span>
            </a>
          )}

          {project.cover ? (
            <div
              className={`relative mt-14 aspect-[16/8] overflow-hidden rounded-[32px] ${project.color}`}
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 sm:bottom-14 sm:left-14 sm:right-14">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                  Case Study
                </span>

                <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {isSeoProject
                    ? "Making websites discoverable, measurable and search-ready."
                    : "Marketing strategy, execution and learning."}
                </p>
              </div>
            </div>
          ) : (
            <div
              className={`mt-14 aspect-[16/8] rounded-[32px] ${project.color} p-8 sm:p-14`}
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Case Study
                </span>

                <p className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Marketing strategy, execution and learning.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* SEO & ANALYTICS CASE STUDY */}
        {isSeoProject ? (
          <>
            {/* 01 - PROJECT OVERVIEW */}
            <section className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                  01 · Overview
                </p>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold">
                  Project Objective
                </h2>

                <p className="mt-5 text-base leading-7 text-[#686862]">
                  This self-initiated project focuses on implementing
                  technical SEO and website analytics for my personal
                  digital marketing portfolio. The objective was to
                  improve search engine discoverability, establish a
                  structured website foundation and monitor website
                  activity using industry-standard tools.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-6">
                    <p className="text-sm text-[#777770]">Website</p>
                    <p className="mt-2 font-semibold">
                      Personal Marketing Portfolio
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6">
                    <p className="text-sm text-[#777770]">Platform</p>
                    <p className="mt-2 font-semibold">
                      Next.js & Vercel
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 02 - TECHNICAL SEO */}
            <section className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                  02 · Technical SEO
                </p>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold">
                  Building a search-friendly website
                </h2>

                <p className="mt-5 text-base leading-7 text-[#686862]">
                  Implemented essential on-page and technical SEO
                  elements to help search engines understand the
                  website structure and its content.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      title: "SEO Metadata",
                      description:
                        "Configured page titles, meta descriptions and relevant keywords to describe website content.",
                    },
                    {
                      title: "Canonical URLs",
                      description:
                        "Implemented canonical URLs to identify the preferred version of website pages.",
                    },
                    {
                      title: "XML Sitemap",
                      description:
                        "Created and configured sitemap.xml to provide search engines with the website's important URLs.",
                    },
                    {
                      title: "Robots.txt",
                      description:
                        "Configured robots.txt to communicate crawling instructions to search engine crawlers.",
                    },
                    {
                      title: "Open Graph & Social Metadata",
                      description:
                        "Added Open Graph and Twitter metadata to improve how website pages are presented when shared.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border-b border-black/10 pb-6"
                    >
                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#686862]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 03 - GOOGLE SEARCH CONSOLE */}
            <section className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                  03 · Search Console
                </p>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold">
                  Google Search Console Integration
                </h2>

                <p className="mt-5 text-base leading-7 text-[#686862]">
                  Connected the portfolio website to Google Search
                  Console to monitor search engine discovery, sitemap
                  processing and URL indexing.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    "Website ownership verified",
                    "XML sitemap submitted successfully",
                    "Three URLs discovered in sitemap",
                    "URL inspection and live testing performed",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-2xl bg-white p-5"
                    >
                      <span className="text-[#1f5c4a]">✓</span>
                      <p className="text-sm leading-6 text-[#595952]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#e8eee9] p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#1f5c4a]">
                    Sitemap status
                  </p>

                  <p className="mt-3 text-3xl font-semibold">
                    Success
                  </p>

                  <p className="mt-2 text-sm text-[#595952]">
                    3 discovered pages in the submitted sitemap.
                  </p>
                </div>

                <p className="mt-5 text-sm leading-6 text-[#777770]">
                  Note: Sitemap discovery and successful processing
                  do not necessarily mean every URL has been indexed
                  by Google.
                </p>

                {/* SEARCH CONSOLE SCREENSHOTS */}
                <div className="mt-10 space-y-8">
                  <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 sm:p-5">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image
                        src="/Assets/seo/search-console-sitemap.png"
                        alt="Google Search Console sitemap report showing successful sitemap submission"
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <figcaption className="px-2 pt-4 text-sm leading-6 text-[#777770]">
                      Google Search Console — Sitemap report showing
                      successful submission and discovered URLs.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 sm:p-5">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image
                        src="/Assets/seo/search-console-url-inspection.png"
                        alt="Google Search Console URL inspection report"
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <figcaption className="px-2 pt-4 text-sm leading-6 text-[#777770]">
                      Google Search Console — URL Inspection used to
                      check the website's indexing status and live
                      URL availability.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            {/* 04 - GOOGLE ANALYTICS */}
            <section className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                  04 · Website Analytics
                </p>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold">
                  Google Analytics 4 Integration
                </h2>

                <p className="mt-5 text-base leading-7 text-[#686862]">
                  Integrated Google Analytics 4 into the Next.js
                  website to collect website activity data and
                  understand how visitors interact with different
                  pages.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "GA4 Property",
                      description:
                        "Created a Google Analytics property and website data stream.",
                    },
                    {
                      title: "Measurement ID",
                      description:
                        "Configured the GA4 measurement ID in the Next.js root layout.",
                    },
                    {
                      title: "Realtime Tracking",
                      description:
                        "Tested the integration using the Realtime overview report.",
                    },
                    {
                      title: "Enhanced Measurement",
                      description:
                        "Enabled automatic measurement for supported website interactions.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-6"
                    >
                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="mt-3 text-sm leading-7 text-[#686862]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#e8eee9] p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#1f5c4a]">
                    Initial Realtime Test
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-semibold">1</p>
                      <p className="mt-1 text-sm text-[#595952]">
                        Active user
                      </p>
                    </div>

                    <div>
                      <p className="text-3xl font-semibold">2</p>
                      <p className="mt-1 text-sm text-[#595952]">
                        Page views
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-xs leading-5 text-[#777770]">
                    Figures recorded during initial testing and may
                    represent the developer's own visit. These are
                    not organic traffic or long-term audience
                    statistics.
                  </p>
                </div>

                {/* GA4 SCREENSHOTS */}
                <div className="mt-10 space-y-8">
                  <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 sm:p-5">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image
                        src="/Assets/seo/ga4-realtime.png"
                        alt="Google Analytics 4 Realtime overview showing initial website activity"
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <figcaption className="px-2 pt-4 text-sm leading-6 text-[#777770]">
                      Google Analytics 4 — Realtime Overview showing
                      initial active users, page views and recorded
                      events during testing.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 sm:p-5">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image
                        src="/Assets/seo/ga4-pages-and-screens.png"
                        alt="Google Analytics 4 Pages and screens report"
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <figcaption className="px-2 pt-4 text-sm leading-6 text-[#777770]">
                      Google Analytics 4 — Pages and Screens report
                      used to examine page-level activity. The
                      captured report shows no data for its selected
                      date range.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            {/* 05 - WEBSITE PERFORMANCE */}
            <section className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                  05 · Website Performance
                </p>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold">
                  Google PageSpeed Insights
                </h2>

                <p className="mt-5 text-base leading-7 text-[#686862]">
                  Evaluated the portfolio website using Google
                  PageSpeed Insights to assess performance,
                  accessibility, SEO and best practices across
                  desktop and mobile devices.
                </p>

                <h3 className="mt-10 text-xl font-semibold">
                  Desktop Assessment
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { label: "Performance", score: "100" },
                    { label: "Accessibility", score: "100" },
                    { label: "Best Practices", score: "100" },
                    { label: "SEO", score: "100" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white p-4 text-center"
                    >
                      <p className="text-3xl font-semibold text-[#1f9d65]">
                        {item.score}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-[#686862]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-5 text-[#777770]">
                  Desktop scores are from the PageSpeed Insights
                  report captured on 17 November 2026. Results may
                  vary between tests and devices.
                </p>

                {/* PAGESPEED SCREENSHOTS */}
                <div className="mt-10 space-y-8">
                  <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 sm:p-5">
                    <h3 className="mb-4 px-2 text-lg font-semibold">
                      Mobile Performance
                    </h3>

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image
                        src="/Assets/seo/pagespeed-mobile.png"
                        alt="Google PageSpeed Insights mobile assessment"
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <figcaption className="px-2 pt-4 text-sm leading-6 text-[#777770]">
                      Google PageSpeed Insights — Mobile assessment
                      of website performance, accessibility, best
                      practices and SEO.
                    </figcaption>
                  </figure>

                  <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 sm:p-5">
                    <h3 className="mb-4 px-2 text-lg font-semibold">
                      Desktop Performance
                    </h3>

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#f5f5f5]">
                      <Image
                        src="/Assets/seo/pagespeed-desktop.png"
                        alt="Google PageSpeed Insights desktop report showing scores of 100"
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <figcaption className="px-2 pt-4 text-sm leading-6 text-[#777770]">
                      Google PageSpeed Insights — Desktop assessment
                      showing 100 scores across Performance,
                      Accessibility, Best Practices and SEO.
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-8 rounded-2xl bg-[#e8eee9] p-6">
                  <p className="font-semibold text-[#1f5c4a]">
                    Performance assessment
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#595952]">
                    The desktop assessment provided a baseline
                    for evaluating the website's technical quality.
                    Mobile performance was assessed separately.
                  </p>
                </div>
              </div>
            </section>

            {/* 06 - TOOLS */}
            <section className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                  06 · Tools & Technologies
                </p>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold">
                  Tools used in this project
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "Google Search Console",
                    "Google Analytics 4",
                    "Google PageSpeed Insights",
                    "Vercel",
                    "Technical SEO",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-[#595952]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 07 - KEY LEARNINGS */}
            <section className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                  07 · Key Learnings
                </p>
              </div>

              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold">
                  What I learned
                </h2>

                <ul className="mt-7 space-y-4 text-base leading-7 text-[#686862]">
                  <li>
                    • Technical SEO provides a foundation for search
                    engine discovery.
                  </li>
                  <li>
                    • Sitemaps and canonical URLs help communicate
                    website structure and preferred URLs.
                  </li>
                  <li>
                    • Google Search Console helps monitor search
                    visibility and indexing.
                  </li>
                  <li>
                    • Google Analytics 4 provides insights into
                    website activity and visitor engagement.
                  </li>
                  <li>
                    • PageSpeed Insights helps assess website
                    performance and technical quality.
                  </li>
                  <li>
                    • Data should be monitored over time before
                    drawing conclusions about marketing performance.
                  </li>
                </ul>
              </div>
            </section>
          </>
        ) : (
          /* EXISTING CASE STUDY CONTENT FOR OTHER PROJECTS */
          <div className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                Overview
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold">
                Objective
              </h2>

              <p className="mt-5 text-base leading-7 text-[#686862]">
                This self-initiated project was created to apply
                digital marketing concepts to a practical business
                scenario and explore how audience, messaging and
                digital experience can work together.
              </p>

              <h2 className="mt-14 text-3xl font-semibold">
                Strategy
              </h2>

              <p className="mt-5 text-base leading-7 text-[#686862]">
                The project focuses on understanding the target
                audience, defining a clear objective, developing
                relevant messaging and creating a digital experience
                aligned with the desired action.
              </p>

              <h2 className="mt-14 text-3xl font-semibold">
                What I Learned
              </h2>

              <ul className="mt-5 space-y-3 text-base leading-7 text-[#686862]">
                <li>
                  • Audience should guide the message and creative direction.
                </li>
                <li>
                  • Every campaign should have a clear objective.
                </li>
                <li>
                  • Marketing decisions should connect back to measurable actions.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* PROJECT GALLERY */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="border-t border-black/10 py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
              Design Mockups
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image) => (
                <div
                  key={image.src}
                  className={`relative aspect-[3/4] overflow-hidden rounded-2xl ${project.color}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECT TAGS */}
        <div className="border-t border-black/10 py-12">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-[#666660]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BACK TO PROJECTS */}
        <div className="border-t border-black/10 py-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#1f5c4a] transition-all hover:gap-5"
          >
            ← Explore more projects
          </Link>
        </div>
      </div>
    </main>
  );
}
