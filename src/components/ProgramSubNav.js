import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/academy', label: 'Academy' },
  { to: '/hybrid-schedule', label: 'Hybrid' },
  { to: '/club-teams', label: 'Club' },
];

export default function ProgramSubNav() {
  const location = useLocation();

  return (
    <div className="bg-ink border-b border-white/10 px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="text-white/50 uppercase tracking-wider font-bold text-xs">Programs</span>
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`font-bold uppercase tracking-wider transition-colors ${
                active ? 'text-maroon-light' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          to="/programs"
          className="ml-auto text-white/50 hover:text-white text-xs uppercase tracking-wider transition-colors"
        >
          ← All Programs
        </Link>
      </div>
    </div>
  );
}
