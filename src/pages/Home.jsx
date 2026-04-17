import React from 'react';
import Navbar from '@/components/sportsbar/Navbar';
import Hero from '@/components/sportsbar/Hero';
import About from '@/components/sportsbar/About';
import LiveGames from '@/components/sportsbar/LiveGames';
import Menu from '@/components/sportsbar/Menu';
import Experience from '@/components/sportsbar/Experience';
import Events from '@/components/sportsbar/Events';
import Reservation from '@/components/sportsbar/Reservation';
import Footer from '@/components/sportsbar/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Navbar />
      <main style={{ scrollBehavior: 'smooth' }}>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <LiveGames />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}