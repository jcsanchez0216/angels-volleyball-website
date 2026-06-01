import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_BG = '#2e2e2e';
const MAROON = '#7b1426';
const WHITE = '#ffffff';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/programs', label: 'Programs' },
    { to: '/coaches', label: 'Coaches' },
    { to: '/tryouts', label: 'Tryouts' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{ position: 'fixed', width: '100%', backgroundColor: NAV_BG, zIndex: 50, boxShadow: '0 2px 12px rgba(0,0,0,0.4)', borderBottom: `2px solid ${MAROON}` }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src="/angels-logo.jpg" alt="Angels of Albuquerque" style={{ height: '64px', width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {links.map(link => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: active ? MAROON : WHITE,
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    borderBottom: active ? `2px solid ${MAROON}` : '2px solid transparent',
                    paddingBottom: '2px',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={e => { if (!active) e.target.style.color = '#c0394e'; }}
                  onMouseOut={e => { if (!active) e.target.style.color = WHITE; }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: WHITE, display: 'none' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: NAV_BG, borderTop: `1px solid ${MAROON}`, padding: '16px 24px' }}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: WHITE, textDecoration: 'none', fontWeight: '600', fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', borderBottom: '1px solid #3a3a3a' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
