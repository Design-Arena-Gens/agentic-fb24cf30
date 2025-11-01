import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faqs" className="border-b border-white/5 bg-sky/30 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">FAQs</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
            Everything you need to know before enrolling
          </h2>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-transparent bg-midnight/60 p-6 transition hover:border-mint/20"
            >
              <h3 className="font-heading text-xl font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-sand/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
