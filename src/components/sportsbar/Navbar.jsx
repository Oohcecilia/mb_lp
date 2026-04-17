import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Watch Sports', href: '#live' },
  { label: 'Reserve', href: '#reserve' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Determine which section is in view
  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isHero = !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_4px_24px_-8px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-9 h-9 bg-primary flex items-center justify-center overflow-hidden clip-angle">
            <span className="font-display text-white text-lg leading-none relative z-10">MB</span>
            <span className="absolute inset-0 bg-black/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left" />
          </div>
          <div className="leading-none">
            <div className={`font-display text-xl tracking-wider transition-colors duration-500 ${isHero ? 'text-white' : 'text-midnight'}`}>
              Monkey Business
            </div>
            <div className="font-mono text-[10px] text-primary tracking-[0.3em]">SPORTS · BAR</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map(l => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`relative px-4 py-2 text-sm font-heading tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-primary'
                    : isHero
                    ? 'text-white/85 hover:text-white'
                    : 'text-midnight/70 hover:text-midnight'
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-px left-3 right-3 h-[2px] bg-primary rounded-full"
                    style={{ boxShadow: '0 0 8px rgba(197,32,38,0.6)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#reserve"
          className={`hidden lg:inline-flex items-center gap-2 font-heading tracking-widest uppercase text-sm px-5 py-2.5 transition-all duration-300 shrink-0 ${
            scrolled
              ? 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20'
              : 'bg-white/10 backdrop-blur border border-white/25 text-white hover:bg-white/20'
          }`}
        >
          Reserve
          <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 transition-colors ${isHero ? 'text-white' : 'text-midnight'}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Subtle bottom line when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      )}

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-midnight/8 shadow-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 font-heading tracking-wider uppercase text-sm border-b border-midnight/6 transition-colors ${
                    active === l.href ? 'text-primary' : 'text-midnight/80 hover:text-midnight'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-3 bg-primary text-white text-center py-3.5 font-heading tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}