export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#171717] text-white">
      <div className="container-width">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9ac7b8]">
            Get In Touch
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Let&apos;s create something
            <span className="text-[#9ac7b8]"> meaningful.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55">
            I&apos;m currently based in India and planning to relocate to
            Dubai in September 2026. I&apos;m open to opportunities in digital
            marketing, marketing coordination and related roles.
          </p>

         <div className="mt-10 flex flex-wrap gap-3">
  <a
    href="mailto:priyankasanjayfatarpekar@gmail.com"
    className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#171717] transition hover:-translate-y-1"
  >
    Email Me →
  </a>

  <a
    href="https://www.linkedin.com/in/priyanka-fatarpekar-131427263/"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/10"
  >
    LinkedIn ↗
  </a>
</div>
        </div>
      </div>
    </section>
  );
}