import { resourceLibrary } from "@/lib/data";

export function ResourceLibrary() {
  return (
    <section id="resources" className="border-b border-white/5 bg-sky/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="md:text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">Resource Hub</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-5xl">
            Tools and templates that turn lessons into daily habits
          </h2>
          <p className="mt-4 max-w-2xl text-base text-sand/70 md:mx-auto">
            Members unlock a growing library of calculators, playbooks, and accountability systems tested with thousands
            of learners.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resourceLibrary.map((column) => (
            <article
              key={column.category}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-midnight/60 p-8"
            >
              <header>
                <h3 className="font-heading text-xl font-semibold text-white">{column.category}</h3>
              </header>
              <ul className="space-y-3 text-sm text-sand/70">
                {column.items.map((item) => (
                  <li key={item} className="relative pl-6">
                    <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-mint" />
                    {item}
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
