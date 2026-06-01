import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{position: 'fixed', width: '100%', backgroundColor: '#ffffff', zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderBottom: '1px solid #e5e7eb'}}>
      <div style={{maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
            <div style={{width: '48px', height: '48px', background: 'linear-gradient(135deg, #b91c1c, #7f1d1d)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: '#ffffff', fontWeight: 'bold', fontSize: '18px'}}>⚡</span>
            </div>
            <span style={{fontSize: '18px', fontWeight: 'bold', color: '#111827'}}>ANGELS</span>
          </Link>

          <div style={{display: 'flex', gap: '32px', alignItems: 'center'}}>
            <Link to="/" style={{fontSize: '14px', fontWeight: '600', color: '#374151', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#374151'}>Home</Link>
            <Link to="/programs" style={{fontSize: '14px', fontWeight: '600', color: '#374151', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#374151'}>Programs</Link>
            <Link to="/coaches" style={{fontSize: '14px', fontWeight: '600', color: '#374151', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#374151'}>Coaches</Link>
            <Link to="/tryouts" style={{fontSize: '14px', fontWeight: '600', color: '#374151', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#374151'}>Tryouts</Link>
            <Link to="/contact" style={{fontSize: '14px', fontWeight: '600', color: '#374151', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#374151'}>Contact</Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px'}}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
