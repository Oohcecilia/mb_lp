import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import whiskey from "@/assets/Whiskey.png";
import beer from "@/assets/Beer.jpeg";
import pizze from "@/assets/Pizze.jpg";
import signature from "@/assets/Signature.jpg";


const items = [
  {
    cat: 'SIGNATURE MOCКТАILS',
    img: `${signature}`,
    desc: "BARTENDER'S CHOICE, RED MARY, JUNGLE OF CEASAR, MIND BLOWER KIWI.",
    tint: 'rgba(197, 32, 38, 0.05)'
  },
  {
    cat: 'Pizza',
    img: `${pizze}`,
    desc: 'PIZZA MARGHERITA, PIZZA HAWAIIAN, PIZZA DON CARMELO.',
    tint: 'rgba(255, 140, 0, 0.08)'
  },
  {
    cat: 'BEERS',
    img: `${beer}`,
    desc: 'HEINEKEN, ASAHI TIGER CRYSTAL LIGHT, SAN MIGUEL PILSEN.',
    tint: 'rgba(255, 199, 11, 0.08)'
  },
  {
    cat: 'WHISKEY',
    img: `${whiskey}`,
    desc: 'JACK DANIELS, DALWHINNIE, GLENMORANGLE, JOHNNIE WALKER SERIES.',
    tint: 'rgba(120, 60, 20, 0.08)'
  },
];

function FoodCard({ item, idx, onHover }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      onMouseEnter={() => onHover(item.tint)}
      onMouseLeave={() => onHover('transparent')}
      className="group relative bg-midnight text-white overflow-hidden aspect-[4/5]"
    >
      <img
        src={item.img}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />

      <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
        <span className="font-mono text-[12px] tracking-[0.3em] text-secondary">{item.cat}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-sm text-white/70 leading-snug max-w-xs mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {item.desc}
        </p>
      </div>

      <div className="absolute top-0 left-0 h-8 w-px bg-secondary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
    </motion.div>
  );
}

export default function Menu() {
  const [tint, setTint] = useState('transparent');

  return (
    <section id="menu" className="relative py-28 transition-colors duration-700" style={{ backgroundColor: tint === 'transparent' ? '#FFFFFF' : tint }}>
      <div aria-hidden className="absolute left-0 top-20 font-display text-[14rem] leading-none text-black/[0.03] select-none pointer-events-none">
        EAT
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-primary">MENU · GALLERY</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-primary">
              Fuel for<br />
              <span className="text-primary">the faithful.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-midnight/70 leading-relaxed">
              We have a wide selection of imported and local beers as well as cocktails and wines that are perfect for any occasion. Our menus provide an array of good food choices from appetizers to main dishes that will satisfy anyone’s craving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it, i) => <FoodCard key={it.name} item={it} idx={i} onHover={setTint} />)}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-midnight/10 pt-6">
          <span className="font-mono text-xs tracking-widest text-midnight/60">BEST SPORTSBAR IN TOWN</span>
          {/* <a href="#" className="font-heading tracking-widest uppercase text-sm text-midnight hover:text-primary transition-colors">
            Full Menu →
          </a> */}
        </div>
      </div>
    </section>
  );
}