import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import tripadvisor from "@/assets/tripadvisor.svg";

const hours = [
  { d: 'SUN - WED', h: '5:30PM - 12AM' },
  { d: 'THU - SAT ', h: '5:30PM - 2AM' }
];

const socials = [
  { type: "icon", icon: Instagram, href: "https://www.instagram.com/mb.iloilo/", label: "Instagram" },
  { type: "image", icon: tripadvisor, href: "https://www.tripadvisor.com/Restaurant_Review-g298466-d23226019-Reviews-Giuseppe_Pizzeria_Sicilian_Roast_Iloilo_City-Iloilo_City_Iloilo_Province_Panay_I.html", label: "Tripadvisor" },
  { type: "icon", icon: Facebook, href: "https://www.facebook.com/mbiloilo", label: "Facebook" },
];

const LAT = 10.7202;
const LNG = 122.5621;


function MapEmbed() {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm border border-white/10 group">
      <iframe
        title="Stadium Sports Bar Location"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.012},${LAT - 0.007},${LNG + 0.012},${LAT + 0.007}&layer=mapnik&marker=${LAT},${LNG}`}
        className="w-full h-full grayscale contrast-[1.1] brightness-[0.7] sepia-[0.25] hue-rotate-[-10deg] transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-90"
        style={{ border: 0 }}
      />
      {/* Red pin overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="relative -mt-4">
          <div className="w-5 h-5 rounded-full bg-primary border-2 border-white shadow-lg shadow-primary/40" />
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
        </div>
      </div>
      {/* Label */}
      <div className="absolute bottom-3 left-3 backdrop-blur-md bg-midnight/80 border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-widest text-white/90">
        MONKEY BUSINESS · SPORTS · BAR
      </div>
      {/* Hover to interact hint */}
      <div className="absolute top-3 right-3 backdrop-blur-md bg-midnight/70 border border-white/10 px-2 py-1 font-mono text-[9px] tracking-widest text-white/60 transition-opacity duration-300 group-hover:opacity-0">
        HOVER TO INTERACT
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#050506] text-white pt-20 pb-8 overflow-hidden">
      <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-4 font-display text-[10rem] sm:text-[14rem] leading-none text-white/[0.025] select-none pointer-events-none tracking-widest">
        MONKEY BUSINESS
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">

          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary flex items-center justify-center clip-angle">
                <span className="font-display text-xl text-white leading-none">MB</span>
              </div>
              <div>
                <div className="font-display text-2xl tracking-wider"> MONKEY BUSINESS</div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-secondary">SPORTS · BAR</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[220px]">
              The city's premier sports bar — premium pours, championship energy, every night of the week.
            </p>
            <div className="flex gap-3">
              {socials.map(({ type, icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-white/12 flex items-center justify-center rounded-md hover:border-secondary hover:text-secondary hover:bg-white/[0.04] transition-all duration-300"
                >
                  {type === "icon" ? (
                    <Icon className="w-4 h-4" />
                  ) : (
                    <img src={Icon} alt={label} className="w-4 h-4 object-contain" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map col — spans 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-secondary mb-4 flex items-center gap-2">
              <MapPin className="w-3 h-3" /> LOCATION
            </div>
            <MapEmbed />
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2 text-white/75">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Riverside Boardwalk 5000 Iloilo City</span>
              </div>
              <div className="flex items-center gap-2 text-white/75">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>0928 353 7154</span>
              </div>
              {/* <div className="flex items-center gap-2 text-white/75">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>hello@stadiumbar.co</span>
              </div> */}
            </div>
          </motion.div>

          {/* Hours col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-secondary mb-4 flex items-center gap-2">
              <Clock className="w-3 h-3" /> OPENING · HOURS
            </div>
            <div className="border-t border-white/10">
              {hours.map((h, i) => (
                <motion.div
                  key={h.d}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-center justify-between py-3.5 border-b border-white/8 font-mono text-xs group hover:bg-white/[0.02] transition-colors px-1 -mx-1"
                >
                  <span className="text-white/55 tracking-widest group-hover:text-white/80 transition-colors">{h.d}</span>
                  <span className="text-white tracking-wider">{h.h}</span>
                </motion.div>
              ))}
            </div>
            <a
              href="#reserve"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-secondary text-midnight font-heading uppercase tracking-widest text-xs py-3.5 hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20"
            >
              Reserve a Table →
            </a>

            {/* Quick links */}
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="#live" className="font-mono text-[11px] tracking-wider text-white/40 hover:text-white/80 transition-colors">
                Watch Sports
              </a>
              <a href="#menu" className="font-mono text-[11px] tracking-wider text-white/40 hover:text-white/80 transition-colors">
                Our Menu
              </a>

            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl tracking-[0.35em] text-white/70">
            EAT · DRINK · CHEER · REPEAT
          </div>
          <div className="font-mono text-[10px] tracking-widest text-white/35">
            © {new Date().getFullYear()} MONKEY BUSINESS SPORTS BAR · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}