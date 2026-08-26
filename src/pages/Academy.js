import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import ProgramSubNav from '../components/ProgramSubNav';

const skills = [
  'Serving', 'Passing', 'Setting', 'Hitting', 'Blocking',
  'Defensive Skills', 'Positional Training', 'Court Awareness', 'Volleyball IQ',
];

export default function Academy() {
  const navigate = useNavigate();
  const [headRef, headVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [detailsRef, detailsVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <ProgramSubNav />
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">Angels Training Academy</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Fundamentals-based training with our master coaches, for ages 11-17 and every skill level.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={aboutRef} className={`max-w-4xl mx-auto reveal ${aboutVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">What We Train</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-12 rule-cut" />
          <p className="text-ink/70 text-center max-w-2xl mx-auto leading-relaxed mb-12">
            Our experienced master coaches emphasize proper technique, skill development, and the fundamentals needed for long-term success — building confidence, endurance, strength, coordination, quickness, discipline, and a strong work ethic along the way. Advanced players may be evaluated for placement on a Club or Hybrid team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="bg-taupe-light text-ink font-bold text-sm px-4 py-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-taupe-light">
        <div ref={detailsRef} className={`max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 reveal ${detailsVisible ? 'is-visible' : ''}`}>
          <div className="card-cut bg-white p-8">
            <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Cost</p>
            <p className="text-2xl font-bold text-ink mb-1">$20 per session</p>
            <p className="text-ink/70 text-sm">$25 if paying by credit card. Pay only for the days you attend, online or at the gym.</p>
          </div>
          <div className="card-cut bg-white p-8">
            <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Schedule</p>
            <p className="text-2xl font-bold text-ink mb-1">Tue &amp; Thu, 5:30-7:00 PM</p>
            <p className="text-ink/70 text-sm">Starting Tuesday, August 25, 2026.</p>
          </div>
          <div className="card-cut bg-white p-8 sm:col-span-2">
            <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Location</p>
            <p className="text-2xl font-bold text-ink mb-1">LBJ Middle School</p>
            <p className="text-ink/70 text-sm">Auxiliary gym, northwest side.</p>
          </div>
        </div>
        <div className="divider-cut bg-ink" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-ink text-center">
        <div ref={ctaRef} className={`max-w-4xl mx-auto reveal ${ctaVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight">Ready to Train?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Reach out with any questions about the Academy program, or to get your athlete signed up.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-12 py-4 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
