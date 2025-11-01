import Link from "next/link";
import { newsletterBenefits } from "@/lib/data";

export function CallToAction() {
  return (
    <section id="enroll" className="py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-mint/30 bg-gradient-to-br from-mint/10 via-midnight to-lagoon/50 px-10 py-16 shadow-glow">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">Join the Academy</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Start your free Moneywise Foundation sprint today
            </h2>
            <p className="mt-4 text-base text-sand/70">
              Access the first week of lessons, live office hours, and spending plan templates at no cost. No credit card
              required.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-sand/70">
              {newsletterBenefits.map((benefit) => (
                <li key={benefit} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-mint" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 rounded-3xl border border-white/10 bg-midnight/70 p-8">
            <form className="space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-sand/50">
                  Full name
                  <input
                    type="text"
                    name="name"
                    placeholder="Jordan Lee"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-sand/80 outline-none transition focus:border-mint/60 focus:text-white"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-sand/50">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@futurewealth.com"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-sand/80 outline-none transition focus:border-mint/60 focus:text-white"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-sand/50">
                  Primary goal
                  <select
                    name="goal"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-sand/80 outline-none transition focus:border-mint/60 focus:text-white"
                  >
                    <option value="budgeting">Build a sustainable budget</option>
                    <option value="debt">Accelerate debt payoff</option>
                    <option value="invest">Start investing with confidence</option>
                    <option value="future">Plan for retirement or college</option>
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-mint px-6 py-3 text-base font-semibold text-midnight shadow-glow transition hover:translate-y-0.5 hover:shadow-none"
              >
                Reserve my spot
              </button>
              <p className="text-center text-xs text-sand/50">
                By joining you agree to our{" "}
                <Link href="#" className="font-semibold text-mint hover:underline">
                  terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-semibold text-mint hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
