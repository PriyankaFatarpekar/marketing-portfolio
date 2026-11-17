const skillGroups = [
  {
    title: "Digital Marketing",
    skills: [
      "Social Media Marketing",
      "Content Strategy",
      "SEO Fundamentals",
      "Campaign Planning",
      "Lead Generation",
    ],
  },
  {
    title: "Analytics",
    skills: [
      "Marketing Analytics",
      "Campaign Performance",
      "Excel",
      "Google Sheets",
    ],
  },
  {
    title: "Web",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Responsive Web Design",
    ],
  },
  {
    title: "Design & Collaboration",
    skills: ["Figma", "Canva", "GitHub", "Jira", "Slack"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-black/5">
      <div className="container-width">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
            Skills & Tools
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            What I bring to
            <span className="text-[#1f5c4a]"> the table.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-black/10 bg-white p-7 sm:p-9"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#f1f1ed] px-3.5 py-2 text-sm text-[#555550]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}