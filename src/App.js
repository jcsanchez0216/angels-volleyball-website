import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Coaches from './pages/Coaches';
import Tryouts from './pages/Tryouts';
import Contact from './pages/Contact';
import HybridSchedule from './pages/HybridSchedule';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/tryouts" element={<Tryouts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hybrid-schedule" element={<HybridSchedule />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-taupe py-12 px-6">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-center">
        <img src={`${process.env.PUBLIC_URL}/wordmark.png`} alt="" className="h-10 w-auto opacity-90" width="81" height="40" />
        <p className="text-sm text-white/70">&copy; 2026 Angels of Albuquerque Volleyball Club. A 501(c)(3) nonprofit organization. All rights reserved.</p>
        <p className="text-xs text-taupe">USAV Sanctioned • Sun Country Region • Albuquerque, New Mexico</p>
      </div>
    </footer>
  );
}

export default App;
