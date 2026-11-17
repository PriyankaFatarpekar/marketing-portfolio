import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[76px]">
      <div className="container-width">
        <div className="grid min-h-[calc(100vh-76px)] items-center gap-16 py-20 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1f5c4a]/20 bg-[#dfece7] px-4 py-2 text-sm font-medium text-[#1f5c4a]">
              <span className="h-2 w-2 rounded-full bg-[#1f5c4a]" />
              Open to Digital Marketing Opportunities
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Digital marketing
              <span className="block text-[#1f5c4a]">
                with a technical edge.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#65655f] sm:text-lg">
              I combine a background in web development with digital
              marketing, content, SEO and campaign strategy to create
              user-focused digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#1f5c4a] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold transition hover:bg-white"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#595952]">
  <span className="inline-flex items-center gap-2">
    <MapPin size={16} strokeWidth={1.8} className="text-[#1f5c4a]" />
    Based in Sharjah, UAE
  </span>

  <span className="text-[#a3a39b]">→</span>

  <span>Open to opportunities in Dubai & Sharjah</span>
</div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative ml-auto aspect-square max-w-[440px] overflow-hidden rounded-[40px] bg-[#1f5c4a] p-8">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/20" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full border border-white/20" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="text-sm font-medium text-white/60">
                  DIGITAL / WEB / GROWTH
                </div>

                <div>
                  <p className="text-6xl font-semibold tracking-tight text-white">
                    01
                  </p>
                  <p className="mt-3 max-w-[250px] text-sm leading-6 text-white/70">
                    Understanding the audience before creating the experience.
                  </p>
                </div>

                <div className="flex justify-between border-t border-white/15 pt-5 text-xs text-white/50">
                  <span>STRATEGY</span>
                  <span>CREATIVE</span>
                  <span>ANALYTICS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
