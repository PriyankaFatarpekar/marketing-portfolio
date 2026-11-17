// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { projects } from "@/data/projects";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export default async function ProjectPage({ params }: Props) {
//   const { slug } = await params;

//   const project = projects.find((item) => item.slug === slug);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-[#f7f7f3]">
//       <div className="container-width py-10">
//         <Link
//           href="/#work"
//           className="text-sm font-medium text-[#666660] hover:text-[#1f5c4a]"
//         >
//           ← Back to work
//         </Link>

//         <div className="py-20">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
//             {project.number} · {project.category}
//           </p>

//           <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
//             {project.title}
//           </h1>

//           <p className="mt-7 max-w-2xl text-lg leading-8 text-[#686862]">
//             {project.description}
//           </p>

//           <div
//             className={`mt-14 aspect-[16/8] rounded-[32px] ${project.color} p-8 sm:p-14`}
//           >
//             <div className="flex h-full flex-col justify-between">
//               <span className="text-sm font-semibold uppercase tracking-[0.2em]">
//                 Case Study
//               </span>

//               <p className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
//                 Marketing strategy, execution and learning.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
//               Overview
//             </p>
//           </div>

//           <div className="max-w-3xl">
//             <h2 className="text-3xl font-semibold">
//               Objective
//             </h2>

//             <p className="mt-5 text-base leading-7 text-[#686862]">
//               This self-initiated project was created to apply digital
//               marketing concepts to a practical business scenario and explore
//               how audience, messaging and digital experience can work together.
//             </p>

//             <h2 className="mt-14 text-3xl font-semibold">
//               Strategy
//             </h2>

//             <p className="mt-5 text-base leading-7 text-[#686862]">
//               The project focuses on understanding the target audience,
//               defining a clear objective, developing relevant messaging and
//               creating a digital experience aligned with the desired action.
//             </p>

//             <h2 className="mt-14 text-3xl font-semibold">
//               What I Learned
//             </h2>

//             <ul className="mt-5 space-y-3 text-base leading-7 text-[#686862]">
//               <li>• Audience should guide the message and creative direction.</li>
//               <li>• Every campaign should have a clear objective.</li>
//               <li>• Marketing decisions should connect back to measurable actions.</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-black/10 py-12">
//           <div className="flex flex-wrap gap-2">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-black/10 px-4 py-2 text-sm text-[#666660]"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

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

  return (
    <main className="min-h-screen bg-[#f7f7f3]">
      <div className="container-width py-10">
        <Link
          href="/#work"
          className="text-sm font-medium text-[#666660] hover:text-[#1f5c4a]"
        >
          ← Back to work
        </Link>

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
                  Marketing strategy, execution and learning.
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

        <div className="grid gap-14 border-t border-black/10 py-16 md:grid-cols-[0.5fr_1.5fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
              Overview
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">Objective</h2>

            <p className="mt-5 text-base leading-7 text-[#686862]">
              This self-initiated project was created to apply digital
              marketing concepts to a practical business scenario and explore
              how audience, messaging and digital experience can work
              together.
            </p>

            <h2 className="mt-14 text-3xl font-semibold">Strategy</h2>

            <p className="mt-5 text-base leading-7 text-[#686862]">
              The project focuses on understanding the target audience,
              defining a clear objective, developing relevant messaging and
              creating a digital experience aligned with the desired action.
            </p>

            <h2 className="mt-14 text-3xl font-semibold">What I Learned</h2>

            <ul className="mt-5 space-y-3 text-base leading-7 text-[#686862]">
              <li>• Audience should guide the message and creative direction.</li>
              <li>• Every campaign should have a clear objective.</li>
              <li>
                • Marketing decisions should connect back to measurable
                actions.
              </li>
            </ul>
          </div>
        </div>

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
      </div>
    </main>
  );
}