export default function About() {
  return (
    <section id="about" className="section-padding border-t border-black/5">
      <div className="container-width">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
              About Me
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A technical background.
              <span className="text-[#1f5c4a]">
                {" "}
                A new marketing direction.
              </span>
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-[#666660]">
              <p>
                I&apos;m an IT professional with professional experience in
                web development, where I&apos;ve worked on responsive websites,
                web applications and digital products.
              </p>

              <p>
                I&apos;m now transitioning into digital marketing, combining my
                understanding of websites, user experience and technology with
                marketing strategy, content and analytics.
              </p>

              <p>
                My technical background helps me look at marketing beyond just
                content — from how users discover a product to how they
                interact with a landing page and ultimately convert.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Web Development", "Professional experience"],
                ["02", "Digital Marketing", "Building practical skills"],
                ["03", "Dubai", "Relocating Sept. 2026"],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-black/10 bg-white p-5"
                >
                  <p className="text-xs font-bold text-[#1f5c4a]">{number}</p>
                  <h3 className="mt-6 font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-[#777770]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}