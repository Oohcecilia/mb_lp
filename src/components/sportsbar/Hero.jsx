import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import mascot from "@/assets/MB_logo-1.png";
import heroBg from "@/assets/HERO_BG.png";



export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-midnight text-white overflow-hidden pt-24">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />

        {/* Fade overlay (top + bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" />
      </div>

      <div aria-hidden className="absolute right-0 top-30 font-display text-[22rem] leading-none text-white/[0.04] select-none pointer-events-none">
        MB
      </div>
      <div aria-hidden className="absolute left-6 bottom-8 font-display text-[9rem] leading-none text-primary/10 select-none pointer-events-none hidden md:block">
        LIVE
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-28 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-6rem)]">
        <div className="lg:col-span-8">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.88] tracking-tight"
          >
            WHERE EVERY
            <br />
            GAME FEELS
            <br />
            LIKE A{' '}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #FFC70B 0%, #C52026 55%, #FFC70B 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'tickerScroll 8s linear infinite'
                }}
              >
                FINAL.
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary text-glow-gold" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed"
          >
            Where live sports, craft drinks, and unforgettable nights come together.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
          >
            <a
              href="#reserve"
              className="group flex-1 inline-flex justify-center items-center gap-3 bg-primary text-white font-heading uppercase tracking-widest text-sm px-7 py-4 pulse-red"
            >
              Reserve a Table
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#menu"
              className="group flex-1 inline-flex justify-center items-center gap-3 border border-white/20 hover:border-secondary backdrop-blur-md bg-white/[0.03] text-white font-heading uppercase tracking-widest text-sm px-7 py-4 transition-all hover:bg-white/[0.06]"
            >
              <UtensilsCrossed className="w-4 h-4 fill-secondary text-secondary" />
              View Menu
            </a>
          </motion.div>

          {/* Stats rail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 grid grid-cols-3 max-w-xl border-t border-white/10 pt-6"
          >
            {[
              { k: 'HD Screens' },
              { k: 'Beers' },
              { k: 'VIP Suites' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-[18px] text-secondary text-glow-gold text-center">
                  {s.k}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating "Match of the Day" card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 hidden lg:block bg-transparent"
        >
          <div className="relative bg-transparent  flex items-center justify-center">
            <img
              src={mascot}
              alt="Mascot"
              className="w-full max-w-sm h-auto max-h-[220px] md:max-h-[300px] lg:max-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="mt-4 font-mono text-[10px] tracking-[0.25em] text-white/40 text-right">
            KICK · OFF · LIVE · NOW
          </div>
        </motion.div>
      </div>

      {/* broadcast rail bottom */}
      <div className="absolute bottom-0 inset-x-0 broadcast-rail" />
    </section>
  );
}