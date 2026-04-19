import React, { useState } from 'react';
import { ArrowRight, Tv } from 'lucide-react';
import { motion } from 'framer-motion';

const sports = [
  {
    id: 'football',
    label: 'Football',
    emoji: '⚽',
    tag: '01',
    color: '#C52026',
    leagues: ['Premier League', 'Champions League', 'La Liga', 'Bundesliga', 'Serie A'],
    desc: 'Every match, every derby, every title race — live on our dedicated football zone with surround commentary and full premium atmosphere.',
    screens: 12,
    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'basketball',
    label: 'Basketball',
    emoji: '🏀',
    tag: '02',
    color: '#FFC70B',
    leagues: ['NBA', 'EuroLeague', 'NCAA March Madness', 'FIBA World Cup'],
    desc: 'Quarter-by-quarter tension, last-second buzzer beaters and playoff drama projected in full 4K HDR.',
    screens: 8,
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'combat',
    label: 'UFC & Boxing',
    emoji: '🥊',
    tag: '04',
    color: '#FFC70B',
    leagues: ['UFC PPV', 'Bellator', 'Boxing World Titles', 'ONE Championship'],
    desc: 'Every PPV event projected live on screens with dedicated seating for serious fans. No blackouts. No excuses.',
    screens: 6,
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'racing',
    label: 'Formula 1',
    emoji: '🏎️',
    tag: '06',
    color: '#FFC70B',
    leagues: ['F1 World Championship', 'MotoGP', 'IndyCar', 'Formula E'],
    desc: 'Feel every lap, every pit stop and every overtake on race day. Multi-screen setups so you never miss a moment of the action.',
    screens: 6,
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=85&auto=format&fit=crop'
  }
];

function SportCard({ sport, idx, isActive, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: idx * 0.07 }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden transition-all duration-500 ${isActive ? 'ring-2 ring-primary shadow-xl shadow-primary/15' : 'hover:shadow-lg hover:shadow-black/10'
        }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-midnight">
        <img
          src={sport.img}
          alt={sport.label}
          className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'scale-110 opacity-60' : 'opacity-50 group-hover:opacity-70 group-hover:scale-105'
            }`}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />


        {/* Emoji + Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110 origin-left">
            {sport.emoji}
          </div>
          <h3 className="font-display text-2xl text-white leading-none tracking-wide">{sport.label}</h3>

          {/* Leagues (visible on active) */}
          <motion.div
            initial={false}
            animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex flex-wrap gap-1.5">
              {sport.leagues.map(l => (
                <span key={l} className="font-mono text-[10px] tracking-wider bg-white/10 backdrop-blur px-2 py-1 text-white/80">
                  {l}
                </span>
              ))}
            </div>
            {/* <p className="mt-3 text-sm text-white/70 leading-relaxed">{sport.desc}</p> */}
          </motion.div>
        </div>

        {/* Active indicator line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: `linear-gradient(90deg, ${sport.color}, transparent)` }}
        />
      </div>
    </motion.article>
  );
}

export default function WatchSports() {
  const [active, setActive] = useState('football');

  return (
    <section id="live" className="relative bg-[#F8F8F8] py-28 overflow-hidden">
      {/* Background number */}
      <div aria-hidden className="absolute left-0 top-20 font-display text-[15rem] leading-none text-black/[0.03] select-none pointer-events-none">
        SPORT
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-px bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-primary">WATCH · SPORTS</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-midnight"
            >
              Your sport.<br />
              <span className="text-primary">Our screens.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="text-lg text-midnight/70 leading-relaxed">
              Every major league, live and nonstop — from Sunday kickoffs to Saturday fight nights in dedicated fan zones.
            </p>
          </motion.div>
        </div>

        {/* Sport Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {sports.map((s, i) => (
            <SportCard
              key={s.id}
              sport={s}
              idx={i}
              isActive={active === s.id}
              onClick={() => setActive(active === s.id ? null : s.id)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 pt-8 border-t border-midnight/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <span className="font-mono text-xs tracking-widest text-midnight/50">
            EXPLORE SPORTS · EVERY LEAGUE, EVERY MOMENT
          </span>
          {/* <a href="#reserve" className="inline-flex items-center gap-2 font-heading tracking-widest uppercase text-sm text-midnight hover:text-primary transition-colors">
            Reserve Your Zone <ArrowRight className="w-4 h-4" />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}