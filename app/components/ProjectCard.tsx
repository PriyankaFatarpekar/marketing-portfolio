// import Link from "next/link";

// type Project = {
//   slug: string;
//   number: string;
//   title: string;
//   category: string;
//   description: string;
//   tags: string[];
//   color: string;
// };

// export default function ProjectCard({ project }: { project: Project }) {
//   return (
//     <Link
//       href={`/work/${project.slug}`}
//       className="group block"
//     >
//       <article>
//         <div
//           className={`relative aspect-[16/10] overflow-hidden rounded-3xl ${project.color}`}
//         >
//           <div className="absolute inset-0 p-7">
//             <div className="flex items-start justify-between">
//               <span className="text-xs font-semibold uppercase tracking-[0.2em]">
//                 {project.number}
//               </span>

//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-lg transition duration-300 group-hover:rotate-45">
//                 ↗
//               </span>
//             </div>

//             <div className="absolute bottom-7 left-7">
//               <p className="text-sm font-medium text-black/50">
//                 {project.category}
//               </p>

//               <h3 className="mt-2 text-3xl font-semibold tracking-tight">
//                 {project.title}
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <p className="max-w-2xl text-sm leading-6 text-[#686862]">
//             {project.description}
//           </p>

//           <div className="mt-4 flex flex-wrap gap-2">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-[#666660]"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </article>
//     </Link>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article>
        {/* PROJECT COVER */}
        <div
          className={`relative aspect-[16/10] overflow-hidden rounded-3xl ${project.color}`}
        >
          {project.cover && (
            <>
              <Image
                src={project.cover}
                alt={`${project.title} project cover`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />
            </>
          )}

          {/* PROJECT DETAILS */}
          <div className="absolute inset-0 p-7">
            <div className="flex items-start justify-between">
              <span
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  project.cover ? "text-white" : ""
                }`}
              >
                {project.number}
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-lg transition duration-300 group-hover:rotate-45">
                ↗
              </span>
            </div>

            <div className="absolute bottom-7 left-7 right-7">
              <p
                className={`text-sm font-medium ${
                  project.cover ? "text-white/80" : "text-black/50"
                }`}
              >
                {project.category}
              </p>

              <h3
                className={`mt-2 text-3xl font-semibold tracking-tight ${
                  project.cover ? "text-white" : ""
                }`}
              >
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* DESCRIPTION AND TAGS */}
        <div className="mt-5">
          <p className="max-w-2xl text-sm leading-6 text-[#686862]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-[#666660]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
