const services = [
  {
    number: "01",
    title: "Social Media",
    description:
      "Content planning, audience research, content calendars, campaign concepts and social media creatives.",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Keyword research, on-page SEO, website structure, content optimization and basic SEO audits.",
  },
  {
    number: "03",
    title: "Analytics",
    description:
      "Understanding traffic, engagement, conversions and campaign performance through data.",
  },
  {
    number: "04",
    title: "Campaign Strategy",
    description:
      "Audience targeting, campaign objectives, messaging, landing pages and conversion-focused thinking.",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-[#171717] text-white">
      <div className="container-width">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ac7b8]">
            What I&apos;m Building
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Marketing skills with a
            <span className="text-[#9ac7b8]"> technical foundation.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#171717] p-8 sm:p-10"
            >
              <span className="text-sm text-[#9ac7b8]">
                {service.number}
              </span>

              <h3 className="mt-12 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}