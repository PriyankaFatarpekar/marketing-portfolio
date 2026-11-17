export default function Certifications() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="rounded-[32px] bg-[#dfece7] p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f5c4a]">
                Certifications
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Continuous learning.
              </h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1f5c4a]">
                  Digital Marketing
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  HubSpot Digital Marketing Certification
                </h3>
                <p className="mt-2 text-sm text-[#6b6b65]">
                  Add your certification details here after completion.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1f5c4a]">
                  Existing Certification
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  NPTEL — Software Testing
                </h3>
                <p className="mt-2 text-sm text-[#6b6b65]">
                  Software testing certification from your technical
                  background.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}