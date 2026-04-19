import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, MonitorPlay, Users, Quote } from 'lucide-react';

const features = [
  {
    icon: MonitorPlay,
    title: "Live HD Screens",
    desc: "Crystal-clear viewing from every angle."
  },
  {
    icon: Volume2,
    title: "Stadium Sound Experience",
    desc: "Immersive audio tuned for live sports intensity."
  },
  {
    icon: Users,
    title: "Lively Bar Atmosphere",
    desc: "A vibrant energy, and nonstop game-day vibe."
  },
];

const quotes = [
  { q: 'Best atmosphere in the city, hands down. Felt like I was in the stadium.', a: 'MARCUS T.', role: 'Season Ticket Holder' },
  { q: 'The wings + a Champions League final? It does not get better.', a: 'SOFIA R.', role: 'Foodie & Fan' },
  { q: 'Reserved the VIP dugout for UFC — they took care of everything.', a: 'DAVID K.', role: 'Fight Night Regular' },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-midnight text-white py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight" />

      <div aria-hidden className="absolute right-0 top-10 font-display text-[18rem] leading-none text-white/[0.03] select-none pointer-events-none">
        ROAR
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-secondary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-secondary">THE · EXPERIENCE</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
              You do not just<br />
              <span className="text-secondary">watch the game.</span><br />
              You feel it.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-20">
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              From the first whistle to the final buzzer, every square inch of Monkey Bussiness is engineered for one thing: the loudest, most electric matchday experience outside the bar itself.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group backdrop-blur-xl bg-white/[0.04] border border-white/10 p-8 hover:border-secondary transition-all"
            >
              <f.icon className="w-8 h-8 text-secondary mb-6" />
              <h3 className="font-display text-3xl mb-2">{f.title}</h3>
              <p className="text-sm text-white/60">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 p-8"
            >
              <Quote className="absolute top-6 right-2 w-6 h-6 text-primary/40" />
              <blockquote className="font-heading text-sm leading-snug mb-6">
                "{t.q}"
              </blockquote>
              <figcaption className="pt-5 border-t border-white/10">
                <div className="font-display text-lg tracking-wider text-secondary">{t.a}</div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-white/50 mt-1">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}