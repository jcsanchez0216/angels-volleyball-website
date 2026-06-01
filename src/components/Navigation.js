import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{position: 'fixed', width: '100%', backgroundColor: '#1a1a1a', zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.3)', borderBottom: '1px solid #333'}}>
      <div style={{maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
            <img src="/ANGELS OF ALB BOWTIE TEXT LOGO.jpg" alt="Angels of Albuquerque" style={{height: '60px', width: 'auto'}} />
          </Link>

          <div style={{display: 'flex', gap: '32px', alignItems: 'center'}}>
            <Link to="/" style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Home</Link>
            <Link to="/programs" style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Programs</Link>
            <Link to="/coaches" style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Coaches</Link>
            <Link to="/tryouts" style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Tryouts</Link>
            <Link to="/contact" style={{fontSize: '14px', fontWeight: '600', color: '#ffffff', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = '#b91c1c'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Contact</Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px'}}>
            {mobileMenuOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
          </button>
        </div>
      </div>
    </nav>
  );
}