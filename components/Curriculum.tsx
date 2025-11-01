import { curriculumTracks } from "@/lib/data";

export function Curriculum() {
  return (
    <section id="curriculum" className="border-b border-white/5 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row">
        <div className="md:w-1/3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">Curriculum</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
            Build financial fluency one intentional sprint at a time
          </h2>
          <p className="mt-4 text-base text-sand/70">
            Each track blends live instruction, curated resources, and guided action plans. Graduate with a working
            money system—not just theory.
          </p>
        </div>

        <div className="flex-1 space-y-6">
          {curriculumTracks.map((track) => (
            <article
              key={track.name}
              className="rounded-3xl border border-mint/20 bg-sky/40 p-8 shadow-glow shadow-transparent transition hover:border-mint/60"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-heading text-2xl font-semibold text-white">{track.name}</h3>
                <span className="rounded-full bg-midnight/70 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-mint/90">
                  {track.duration}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-sand/70">
                {track.outcomes.map((outcome) => (
                  <li key={outcome} className="relative pl-6">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-mint" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
