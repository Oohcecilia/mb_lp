import React from 'react';
import { Tv, UtensilsCrossed, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Tv,
    tag: '',
    title: 'Watch Sports',
    desc: 'Full coverage of every major league in dedicated fan zones. Wherever you sit, it feels like the front row.'
  },
  {
    icon: UtensilsCrossed,
    tag: '',
    title: 'Premium Food & Drinks',
    desc: 'An ever-changing selection of craft pours, signature cocktails, and ice-cold drafts, paired with crowd-favorite bar bites and nonstop game-night promos.'
  },
  {
    icon: Crown,
    tag: '',
    title: 'Game-Day Atmosphere',
    desc: 'Immersive surround sound, stadium-grade cheers on cue, and VIP suites built for groups who take their matchdays seriously.'
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-28 overflow-hidden">
      <div aria-hidden className="absolute -right-0 top-10 font-display text-[18rem] leading-none text-black/[0.03] select-none pointer-events-none">
        MVP
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-primary">ABOUT · THE · ARENA</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-midnight">
              Built for fans<br />
              who <span className="text-primary">never sit down.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-midnight/70 leading-relaxed">
            Monkey Business is Iloilo City’s only upscale sports bar. A place to hang out, chill with friends over drinks while watching your favorite sports on LED TV or just enjoy the view of the Esplanade in our outdoor dining area – be it late morning, mid-afternoon, early evening or anything in between.             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-b border-midnight/10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-10 ${i < 2 ? 'md:border-r border-midnight/10' : ''} hover:bg-midnight hover:text-white transition-colors duration-500`}
            >
              <span className="absolute top-6 right-6 font-mono text-xs tracking-widest text-midnight/30 group-hover:text-secondary transition-colors">
                {p.tag}
              </span>
              <div className="w-14 h-14 border border-midnight/15 group-hover:border-secondary flex items-center justify-center mb-8 transition-all group-hover:glow-gold">
                <p.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-3">{p.title}</h3>
              <p className="text-sm text-midnight/70 group-hover:text-white/70 leading-relaxed transition-colors">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}