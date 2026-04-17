import React from 'react';

const games = [
  { league: 'EPL', home: 'ARS', away: 'CHE', score: '2-1', status: 'LIVE', min: "67'" },
  { league: 'NBA', home: 'LAL', away: 'BOS', score: '88-92', status: 'LIVE', min: 'Q3' },
  { league: 'UFC', home: 'JONES', away: 'MIOCIC', score: 'R2', status: 'LIVE', min: '3:42' },
  { league: 'UCL', home: 'RMA', away: 'BAY', score: '1-1', status: 'HT', min: '45+2' },
  { league: 'NFL', home: 'KC', away: 'BUF', score: '24-17', status: 'LIVE', min: 'Q4' },
  { league: 'MLB', home: 'NYY', away: 'BOS', score: '5-3', status: 'LIVE', min: '7th' },
  { league: 'F1', home: 'VER', away: 'HAM', score: 'L48', status: 'LIVE', min: 'LAP 48' },
  { league: 'LALIGA', home: 'BAR', away: 'ATM', score: '3-0', status: 'LIVE', min: "82'" },
];

export default function LiveTicker() {
  const loop = [...games, ...games];
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-midnight text-white border-b border-white/10 overflow-hidden">
      <div className="flex items-stretch">
        <div className="flex items-center gap-2 px-4 bg-primary text-primary-foreground font-display text-sm tracking-widest shrink-0">
          <span className="relative inline-block w-2 h-2 rounded-full bg-white live-dot" />
          LIVE
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-8 py-2 whitespace-nowrap ticker-scroll font-mono text-xs">
            {loop.map((g, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-secondary font-bold">{g.league}</span>
                <span className="text-white/90">{g.home}</span>
                <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded-sm">{g.score}</span>
                <span className="text-white/90">{g.away}</span>
                <span className="text-white/50">· {g.min}</span>
                <span className="w-px h-3 bg-white/20" />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}