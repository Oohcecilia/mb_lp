import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Clock, User, ArrowRight, Check } from 'lucide-react';
import mascot from "@/assets/Monkey.Business.Mascot.png";

const zones = [
  { id: 'front', name: 'The Front Row', desc: 'Closest to the mega-wall. Intense energy.', seats: '2–4', price: 'No minimum' },
  { id: 'dugout', name: 'The Dugout', desc: 'Booth-style privacy with premium views.', seats: '4–8', price: '$80 min' },
  { id: 'vip', name: 'The VIP Lounge', desc: 'Private screens, personal server, bottle service.', seats: '6–12', price: '$250 min', premium: true },
];

export default function Reservation() {
  const [zone, setZone] = useState('dugout');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reserve" className="relative bg-midnight text-white py-28 overflow-hidden">
      <div aria-hidden className="absolute right-0 top-20 font-display text-[20rem] leading-none text-white/[0.03] select-none pointer-events-none">
        BOOK
      </div>
      <div className="absolute inset-x-0 top-0 broadcast-rail" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-secondary" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-secondary">MONKEY · BUSINESS · SUITE </span>
            <span className="w-10 h-px bg-secondary" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
            Get in touch before<br />
            <span className="text-primary text-glow-red">game night sells out.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Weekends and championship nights fill within hours. Lock in your zone.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Zone selector */}
          <div className="lg:col-span-7">


            {/* Visual seating map */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl min-h-[360px] md:min-h-[420px] border border-white/10 bg-black/50 backdrop-blur-lg glow-red p-8 md:p-10 overflow-hidden rounded-2xl">

                {/* Top Accent Bar */}

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full space-y-8">

                  {/* Header */}
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl tracking-wide mb-3">
                      Reservations & Contact
                    </h2>
                    <p className="text-sm md:text-base text-white/60 max-w-md mx-auto">
                      Call our phone number or visit us directly to secure your spot before game night fills up.
                    </p>
                  </div>

                  {/* Locations */}
                  <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-8 text-white/80">

                    {/* Location 1 */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                          Location
                        </div>
                        <div className="text-sm md:text-base leading-relaxed">
                          Riverside Boardwalk, <br />
                          Iloilo City, Philippines
                        </div>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                          Phone
                        </div>
                        <a
                          href="tel:09283537154"
                          className="text-lg md:text-xl text-secondary font-semibold hover:opacity-80 transition"
                        >
                          0928 353 7154
                        </a>
                      </div>
                    </div>

                    {/* Divider (only visible on sm+) */}
                    <div className="hidden sm:block w-px bg-white/10" />

                    {/* Location 2 */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                          Location
                        </div>
                        <div className="text-sm md:text-base leading-relaxed">
                          Station 3, Ambulong, <br />
                          Brgy. Manoc-Manoc, Boracay, Malay, Philippines
                        </div>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                          Phone
                        </div>
                        <a
                          href="tel:09123456789"
                          className="text-lg md:text-xl text-secondary font-semibold hover:opacity-80 transition"
                        >
                          0998 727 2399
                        </a>
                      </div>
                    </div>

                  </div>

                </div>


              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5 flex items-center justify-center bg-transparent p-6 md:p-8 rounded-2xl">

            <img
              src={mascot} // ✅ correct usage
              alt="Mascot"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto max-h-[300px] md:max-h-[380px] object-contain drop-shadow-[0_0_25px_rgba(197,32,38,0.35)] hover:scale-105 transition-transform duration-500"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, ...props }) {
  return (
    <label className="block">
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-white/60 mb-2 uppercase">
        <Icon className="w-3.5 h-3.5" /> {label}
      </div>
      <input
        {...props}
        className="w-full bg-white/[0.04] border border-white/15 focus:border-secondary focus:bg-white/[0.08] text-white px-4 py-3 outline-none transition-all placeholder:text-white/30 [color-scheme:dark]"
      />
    </label>
  );
}