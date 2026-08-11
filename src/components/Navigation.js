import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/tryouts', label: 'Tryouts' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-ink z-50 shadow-lg border-b-2 border-maroon">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}>
            <img src={`${process.env.PUBLIC_URL}/wordmark.png`} alt="Angels of Albuquerque Volleyball" className="h-14 w-auto" />
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {links.map(link => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-bold uppercase tracking-wider pb-1 border-b-2 transition-colors ${
                    active ? 'text-maroon border-maroon' : 'text-white border-transparent hover:text-maroon'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-ink border-t border-maroon px-6 py-4">
          {links.map(link => (
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
