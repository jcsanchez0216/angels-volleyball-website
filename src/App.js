import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Coaches from './pages/Coaches';
import Tryouts from './pages/Tryouts';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/tryouts" element={<Tryouts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Footer() {
  return (
    <footer style={{backgroundColor: '#111827', color: '#d1d5db', paddingTop: '48px', paddingBottom: '48px', padding: '48px 24px'}}>
      <div style={{maxWidth: '80rem', margin: '0 auto', borderTop: '1px solid #374151', paddingTop: '32px', textAlign: 'center'}}>
        <p style={{fontSize: '14px'}}>&copy; 2026 Angels of Albuquerque Volleyball Club. A 501(c)(3) nonprofit organization. All rights reserved.</p>
        <p style={{fontSize: '12px', color: '#6b7280', marginTop: '16px'}}>USAV Sanctioned • Sun Country Region • Albuquerque, New Mexico</p>
      </div>
    </footer>
  );
}

export default App;
