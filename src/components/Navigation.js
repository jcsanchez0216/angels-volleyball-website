import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', match: ['/'] },
  { to: '/club-teams', label: 'Club Teams', match: ['/club-teams'] },
  { to: '/hybrid-schedule', label: 'Hybrid Program', match: ['/hybrid-schedule', '/hybrid-program'] },
  { to: '/academy', label: 'Academy Program', match: ['/academy', '/academy-program'] },
  { to: '/forms', label: 'Parent Forms', match: ['/forms', '/parent-forms'] },
  { to: '/coaches', label: '2026-2027 Coaching Staff', match: ['/coaches', '/2026-2027-coaching-staff'] },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-ink z-50 shadow-lg border-b-2 border-maroon-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center gap-4 min-h-20 py-3">
          <Link to="/" className="block shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <img src={`${process.env.PUBLIC_URL}/wordmark.png`} alt="Angels of Albuquerque Volleyball" className="h-14 w-auto" width="114" height="56" />
          </Link>

          <div className="hidden lg:flex flex-wrap justify-end gap-x-5 gap-y-2 items-center">
            {links.map((link) => {
              const active = link.match.includes(location.pathname);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs font-bold uppercase tracking-wider pb-1 border-b-2 transition-colors ${
                    active ? 'text-maroon-light border-maroon-light' : 'text-white border-transparent hover:text-maroon-light'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-ink border-t border-maroon-light px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-white font-bold text-sm uppercase tracking-wider border-b border-white/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
