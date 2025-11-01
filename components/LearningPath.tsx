const phases = [
  {
    title: "Assess",
    summary: "Complete your money mindset profile and baseline assessment.",
    detail:
      "Identify blind spots across cash flow, risk, and wealth-building. We benchmark your confidence score to tailor the experience."
  },
  {
    title: "Activate",
    summary: "Apply lessons through weekly challenges and guided templates.",
    detail:
      "Implement automation, renegotiate expenses, and run debt scenarios with coach feedback in the Money Lab workspace."
  },
  {
    title: "Advance",
    summary: "Build long-term plans with accountability from your cohort.",
    detail:
      "Track milestone progress, celebrate wins in community sessions, and get personalized next steps for continued momentum."
  }
];

export function LearningPath() {
  return (
    <section className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="md:text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">Methodology</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
            A science-backed path from overwhelmed to money confident
          </h2>
          <p className="mt-4 text-base text-sand/70 md:mx-auto md:max-w-2xl">
            We blend behavioral psychology, expert coaching, and rich data insights. Expect measurable progress every 14
            days.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-midnight/60 p-8 transition hover:border-mint/40"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/70">Phase {index + 1}</div>
              <h3 className="font-heading text-2xl font-semibold text-white">{phase.title}</h3>
              <p className="text-sm text-mint/80">{phase.summary}</p>
              <p className="text-sm text-sand/70">{phase.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
