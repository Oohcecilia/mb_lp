import React, { useState } from 'react';
import { MapPin, Clock, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import tripadvisor from "@/assets/tripadvisor.svg";


const LOCATIONS = [
  {
    id: "iloilo",
    name: "Iloilo Branch",
    mapUrl: "https://www.google.com/maps?q=Monkey+Business+Sports+Bar&output=embed",
    address: "Riverside Boardwalk 5000, Iloilo City, Philippines",
    phone: "0928 353 7154",
    socials: [
      {
        type: "icon",
        icon: Instagram,
        href: "https://www.instagram.com/mb.iloilo/",
        label: "Instagram",
        color: "text-pink-500 hover:border-pink-500",
      },
      {
        type: "icon",
        icon: Facebook,
        href: "https://www.facebook.com/mbiloilo",
        label: "Facebook",
        color: "text-blue-500 hover:border-blue-500",
      },
      {
        type: "image",
        icon: tripadvisor,
        href: "https://www.tripadvisor.com/Restaurant_Review-g298466-d23226019-Reviews-Giuseppe_Pizzeria_Sicilian_Roast_Iloilo_City-Iloilo_City_Iloilo_Province_Panay_I.html",
        label: "Tripadvisor",
        color: "text-green-400 hover:border-green-400",
      },
    ],
    hours: [
      { d: "Mon - Thu", h: "10:00 AM – 12:00 MN" },
      { d: "Fri - Sun", h: "10:00 AM – 2:00 AM (next day)" },
    ],
  },
  {
    id: "boracay",
    name: "Boracay Branch",
    mapUrl: "https://www.google.com/maps?q=Monkey+Business+Sports+Bar+Boracay&output=embed",
    address:
      "Station 3, Ambulong, Brgy. Manoc-Manoc, Boracay, Malay, Philippines",
    phone: "0998 727 2399",
    socials: [
      { type: "icon", color: "text-pink-500 hover:border-pink-500", icon: Instagram, href: "https://www.instagram.com/giuseppe.boracay/", label: "Instagram" },
      { type: "icon", color: "text-blue-500 hover:border-blue-500", icon: Facebook, href: "https://www.facebook.com/monkeybusinessboracay", label: "Facebook" },
      { type: "image", color: "text-green-400 hover:border-green-400", icon: tripadvisor, href: "https://www.tripadvisor.com/Restaurant_Review-g26259616-d25436904-Reviews-Giuseppe_Pizzeria_And_Sicilian_Roast_Boracay_Island-Manoc_Manoc_Boracay_Malay_.html", label: "Tripadvisor" },
    ],
    hours: [
      { d: "Sun - Thu", h: "10:00 AM – 12:00 MN" },
      { d: "Fir - Dat", h: "10:00 AM – 2:00 AM (next day)" },
    ],
  },
];


function MapEmbed({ mapUrl }) {
  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm border border-white/10 group">
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        className="w-full h-full"
      />
    </div>
  );
}

export default function Footer() {

  // ✅ FIX: no null state (prevents crash)
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);

  return (
    <footer className="relative bg-[#050506] text-white pt-20 pb-8 overflow-hidden">

      <div aria-hidden className="absolute left-1/2 -translate-x-1/2 top-4 font-display text-[10rem] sm:text-[14rem] leading-none text-white/[0.025] select-none pointer-events-none tracking-widest">
        MONKEY BUSINESS
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
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
                <div className="font-display text-2xl tracking-wider">MONKEY BUSINESS</div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-secondary">
                  SPORTS · BAR
                </div>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[220px]">
              The city's premier sports bar — premium pours, championship energy, every night of the week.
            </p>

          </motion.div>

          {/* Map */}
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

            <MapEmbed mapUrl={activeLoc.mapUrl} />

            <div className="mt-4 flex gap-2 flex-wrap">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLoc(loc)}
                  className={`px-3 py-1 text-xs border transition ${activeLoc.id === loc.id
                    ? "bg-primary text-white border-primary"
                    : "border-white/20 text-white/60 hover:border-white/40"
                    }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">

              {/* LEFT: Address + Phone */}
              <div className="space-y-2 text-white/75">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{activeLoc.address}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>{activeLoc.phone}</span>
                </div>
              </div>

              {/* RIGHT: Socials */}
              <div className="flex sm:justify-end gap-3">
                {activeLoc.socials.map(({ type, icon: Icon, href, label, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-8 h-8 border border-white/20 flex items-center justify-center rounded-md hover:border-secondary hover:text-secondary hover:bg-white/[0.04] transition-all duration-300 ${color}`}
                  >
                    {type === "icon" ? (
                      <Icon className="w-4 h-4" />
                    ) : (
                      <img src={Icon} alt={label} className="w-4 h-4 object-contain" />
                    )}
                  </a>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Hours */}
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
              {activeLoc.hours?.length ? (
                activeLoc.hours.map((h, i) => (
                  <motion.div
                    key={h.d}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    className="flex items-center justify-between py-3.5 border-b border-white/8 font-mono text-xs px-1 -mx-1"
                  >
                    <span className="text-white/55 tracking-widest">{h.d}</span>
                    <span className="text-white tracking-wider">{h.h}</span>
                  </motion.div>
                ))
              ) : (
                <div className="py-4 text-white/40 text-sm">
                  Hours not available
                </div>
              )}
            </div>

            <a
              href="#reserve"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-secondary text-midnight font-heading uppercase tracking-widest text-xs py-3.5 hover:bg-secondary/90 transition-all duration-300 shadow-lg shadow-secondary/20"
            >
              Reserve a Table →
            </a>
          </motion.div>

        </div>

        {/* Bottom */}
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