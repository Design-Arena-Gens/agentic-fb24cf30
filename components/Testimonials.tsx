import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="success" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="md:text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">Success Stories</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-5xl">Real results from learners</h2>
          <p className="mt-4 max-w-2xl text-base text-sand/70 md:mx-auto">
            Our methodology blends knowledge, behavior design, and community accountability. Outcomes speak for
            themselves.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-sky/40 p-8"
            >
              <p className="text-base text-sand/70">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-heading text-lg font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-widest text-mint/80">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
