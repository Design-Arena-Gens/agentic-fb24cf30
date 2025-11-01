'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const heroItems = [
  "Bank-level security for your data",
  "CFP®-reviewed curriculum & templates",
  "90-day behavior coaching included"
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(91,192,190,0.25),_transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mint">
            Transform how you feel about money
          </div>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Master personal finance with coaching, tools, and real-world practice.
          </h1>
          <p className="mt-6 text-lg text-sand/80 md:text-xl">
            Moneywise Academy blends expert instruction with interactive simulations so you can build confident
            money habits, invest with clarity, and design a life aligned with your values.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#enroll"
              className="flex items-center justify-center rounded-full bg-mint px-6 py-3 text-base font-semibold text-midnight shadow-glow transition hover:translate-y-0.5 hover:shadow-none"
            >
              Start your free week
            </Link>
            <Link
              href="#curriculum"
              className="flex items-center justify-center rounded-full border border-mint/40 px-6 py-3 text-base font-semibold text-sand/80 transition hover:border-mint hover:text-mint"
            >
              Explore curriculum
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-sand/70">
                <FiCheckCircle className="h-5 w-5 text-mint" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-sky/60 p-6 shadow-2xl backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-white">Financial Confidence Score</h2>
              <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-mint">Live demo</span>
            </div>
            <div className="space-y-6">
              {[
                { label: "Emergency Fund Readiness", value: 82 },
                { label: "Investing Momentum", value: 76 },
                { label: "Values-aligned Spending", value: 91 },
                { label: "Debt Payoff Velocity", value: 88 }
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-sm text-sand/60">
                    <span>{metric.label}</span>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-midnight/60">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-mint via-sand to-mint"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-midnight/70 p-5">
              <p className="text-sm text-sand/70">
                “Your readiness score shows strong momentum. Next up: automate your Roth IRA contributions and set up a
                sinking fund for travel every quarter.”
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-mint/80">Coach Natalie · CFP®, Moneywise live</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
