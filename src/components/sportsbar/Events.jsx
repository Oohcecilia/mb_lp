import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Flame } from 'lucide-react';

const events = [
  { day: 'MON', title: 'Football Night', subtitle: 'Monday Night Football', desc: 'Wings + pitcher combo $29.', img: 'https://base44.app/api/apps/public/static-images/img_5ef8cc5318a1.png' },
  { day: 'THU', title: 'Happy Hour', subtitle: 'Thursdays · 4–7pm', desc: 'Half-off drafts, $1 sliders.', img: 'https://base44.app/api/apps/public/static-images/img_f4d50c998331.png' },
  { day: 'SAT', title: 'Fight Night', subtitle: 'UFC & Boxing PPV', desc: 'Main-card projected on the mega-wall.', img: 'https://base44.app/api/apps/public/static-images/img_e9a9b08a8062.png' },
];

export default function Events() {
  return (
    <section id="events" className="relative bg-white py-28 overflow-hidden">
      <div aria-hidden className="absolute right-10 bottom-10 font-display text-[14rem] leading-none text-midnight/[0.03] select-none pointer-events-none">
        WEEK
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Today's Special Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-midnight text-white mb-16 overflow-hidden group"
        >
          <div className="absolute inset-y-0 left-0 w-2 bg-primary" />
          <div className="absolute inset-y-0 right-0 w-2 bg-secondary" />
          <div className="grid md:grid-cols-12 gap-6 p-8 md:p-10 items-center">
            <div className="md:col-span-2 flex items-center gap-2">
              <Flame className="w-6 h-6 text-secondary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-secondary">TODAY</span>
            </div>
            <div className="md:col-span-7">
              <div className="font-mono text-xs text-white/50 tracking-widest mb-2">CHAMPIONS LEAGUE FINAL · 21:00 KO</div>
              <h3 className="font-display text-4xl md:text-5xl leading-none">REAL MADRID vs BAYERN MUNICH</h3>
              <p className="mt-3 text-white/70 max-w-xl">Complimentary welcome shot with any reservation. Prime seats going fast.</p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <a href="#reserve" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-heading uppercase tracking-widest text-sm px-6 py-3 pulse-red">
                Book Tonight <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-primary">WEEKLY · LINEUP</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-midnight">
              Every night<br />
              <span className="text-primary">is a main event.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center gap-2 font-mono text-xs text-midnight/60 tracking-widest">
            <Calendar className="w-4 h-4" />
            UPDATED WEEKLY · NO COVER CHARGE
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[4/5] bg-midnight overflow-hidden"
            >
              <img src={e.img} alt={e.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />

              <div className="absolute top-5 left-5 bg-primary text-white font-display text-lg tracking-widest px-3 py-1">
                {e.day}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-mono text-[10px] tracking-[0.25em] text-secondary mb-2">{e.subtitle}</div>
                <h3 className="font-display text-3xl leading-none mb-3">{e.title}</h3>
                <p className="text-sm text-white/70 mb-4">{e.desc}</p>
                <a href="#reserve" className="inline-flex items-center gap-2 font-heading text-xs tracking-widest uppercase border-b border-white/30 group-hover:border-secondary group-hover:text-secondary transition-colors pb-0.5">
                  Reserve Spot <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}