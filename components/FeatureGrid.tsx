'use client';

import { featureHighlights } from "@/lib/data";
import { IconBadge } from "./IconBadge";
import { motion } from "framer-motion";

export function FeatureGrid() {
  return (
    <section id="programs" className="border-b border-white/5 bg-sky/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="md:text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">Programs</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-5xl">
            A coaching system that adapts to your money goals
          </h2>
          <p className="mt-4 max-w-2xl text-base text-sand/70 md:mx-auto">
            Whether you are stabilizing cash flow, investing for the first time, or planning legacy goals, Moneywise
            Academy layers instruction, practice, and accountability into every track.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featureHighlights.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-midnight/60 p-8 shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-transparent to-lagoon/40" />
              </div>
              <IconBadge icon={feature.icon} />
              <h3 className="mt-6 font-heading text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-sand/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
