
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="section-padding">
      <div className="container-width">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
              Selected Work
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Ideas turned into
              <span className="text-[#1f5c4a]">
                {" "}case studies.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#595952]">
            Self-initiated projects created to apply digital marketing
            concepts in practical scenarios.
          </p>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}








// import { projects } from "@/data/projects";
// import ProjectCard from "./ProjectCard";

// export default function Projects() {
//   return (
//     <section id="work" className="section-padding">
//       <div className="container-width">
//         <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
//               Selected Work
//             </p>

//             <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
//               Ideas turned into
//               <span className="text-[#1f5c4a]"> case studies.</span>
//             </h2>
//           </div>

//           <p className="max-w-sm text-sm leading-6 text-[#777770]">
//             Self-initiated projects created to apply digital marketing
//             concepts in practical scenarios.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-14 md:grid-cols-2">
//           {projects.map((project) => (
//             <ProjectCard key={project.slug} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }