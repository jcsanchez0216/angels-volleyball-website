import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import ProgramSubNav from '../components/ProgramSubNav';

const nationalSchedule = [
  {
    month: 'December',
    events: [
      { title: 'DCVA Candy Cane Challenge', location: 'Albuquerque, NM', dates: 'Dec 5-6' },
    ],
  },
  {
    month: 'January',
    events: [
      { title: 'Chili Spike', location: 'Albuquerque, NM', dates: 'Jan 2-3' },
      { title: 'Tucson Cactus Invitational', location: 'Tucson, AZ', dates: 'Jan 16-18' },
      { title: 'El Paso Region Preliminary', location: 'El Paso, TX', dates: 'Jan 30-31' },
    ],
  },
  {
    month: 'February',
    events: [
      { title: 'Phoenix Festival Fiesta Classic', location: 'Phoenix, AZ', dates: 'Feb 15-17' },
    ],
  },
  {
    month: 'March',
    events: [
      { title: 'Albuquerque Preliminary', location: 'Albuquerque, NM', dates: 'Mar 13-14' },
    ],
  },
  {
    month: 'April',
    events: [
      { title: 'Lone Star Classic', location: 'Houston, TX', dates: 'Apr 16-18' },
      { title: 'SURVA Championship', location: 'Albuquerque, NM', dates: 'Apr 24-25' },
    ],
  },
];

const nationalPayments = [
  { date: 'Due at Team Acceptance (1 Aug)', description: 'Uniform Deposit', amount: '$600' },
  { date: '1 Sept 2026', description: 'Tournament Package', amount: '$600' },
  { date: '1 Oct 2026', description: 'Monthly Payment', amount: '$625' },
  { date: '1 Nov 2026', description: 'Monthly Payment', amount: '$625' },
  { date: '1 Dec 2026', description: 'Monthly Payment', amount: '$625' },
  { date: '1 Jan 2027', description: 'Monthly Payment', amount: '$625' },
];

function TournamentCalendar({ schedule }) {
  return (
    <div className="card-cut bg-taupe-light p-8 md:p-10">
      {schedule.map((month, mi) => (
        <div key={mi} className={mi > 0 ? 'mt-8 pt-8 border-t border-taupe' : ''}>
          <h4 className="font-display text-2xl font-bold text-ink uppercase mb-4">{month.month}</h4>
          <div className="space-y-3">
            {month.events.map((ev, ei) => (
              <p key={ei} className="text-ink">
                {ev.title}
                <span className="text-ink/60"> — {ev.location}</span>
                <span className="text-ink/60 italic"> ({ev.dates})</span>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ComingSoon({ label }) {
  return (
    <div className="card-cut bg-taupe-light p-10 text-center">
      <p className="text-ink/70">{label} schedule and cost — check back soon.</p>
    </div>
  );
}

export default function ClubTeams() {
  const navigate = useNavigate();
  const [headRef, headVisible] = useScrollReveal();
  const [nationalRef, nationalVisible] = useScrollReveal();
  const [regionalRef, regionalVisible] = useScrollReveal();
  const [localRef, localVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <ProgramSubNav />
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">Club Teams</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            USA Volleyball Junior Olympic teams competing at the National, Regional, and Local level. Practices tentatively set for Tuesdays and Thursdays — times and locations TBD.
          </p>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <div className="bg-taupe-light border-b border-taupe px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <span className="text-ink/50 uppercase tracking-wider font-bold text-xs">Jump to</span>
          <a href="#national" className="font-bold text-maroon uppercase tracking-wider hover:text-maroon-dark transition-colors">National</a>
          <a href="#regional" className="font-bold text-maroon uppercase tracking-wider hover:text-maroon-dark transition-colors">Regional</a>
          <a href="#local" className="font-bold text-maroon uppercase tracking-wider hover:text-maroon-dark transition-colors">Local</a>
        </div>
      </div>

      <section id="national" className="relative py-24 px-6 bg-paper scroll-mt-20">
        <div ref={nationalRef} className={`max-w-4xl mx-auto reveal ${nationalVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">National</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />

          <h3 className="font-display text-2xl font-bold text-ink mb-6 uppercase tracking-tight">2026-2027 Tournament Calendar</h3>
          <TournamentCalendar schedule={nationalSchedule} />

          <h3 className="font-display text-2xl font-bold text-ink mb-6 mt-12 uppercase tracking-tight">Cost &amp; Payment Plan</h3>
          <div className="card-cut bg-white p-8 md:p-10 text-center">
            <p className="text-sm font-bold text-maroon uppercase tracking-wider mb-2">Total Season Cost</p>
            <p className="font-display text-5xl font-bold text-ink mb-6">$3,700</p>
            <p className="text-ink/70 max-w-md mx-auto leading-relaxed">
              $600 uniform deposit, $600 tournament package, plus four monthly payments of $625.
            </p>
          </div>

          <div className="space-y-4 mt-8">
            {nationalPayments.map((p, i) => (
              <div key={i} className="card-cut bg-taupe-light p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-1">{p.date}</p>
                  <p className="text-ink font-medium">{p.description}</p>
                </div>
                <p className="text-xl font-bold text-ink">{p.amount}</p>
              </div>
            ))}
          </div>

          <div className="bg-maroon text-white p-6 mt-6">
            <p className="font-bold">Late Payments</p>
            <p className="text-white/80 text-sm mt-1">
              Payments are due within 5 days of the posted date. A payment not received within that window is assessed a $20 late fee. If payment (including the late fee) still isn't received, the athlete will be removed from the roster and won't be able to practice or participate in tournaments until the balance is paid.
            </p>
          </div>

          <p className="text-ink/50 text-xs text-center mt-8 italic">Dates and schedule are subject to change.</p>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section id="regional" className="relative py-24 px-6 bg-taupe-light scroll-mt-20">
        <div ref={regionalRef} className={`max-w-4xl mx-auto reveal ${regionalVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Regional</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />
          <ComingSoon label="Regional" />
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section id="local" className="relative py-24 px-6 bg-paper scroll-mt-20">
        <div ref={localRef} className={`max-w-4xl mx-auto reveal ${localVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Local</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />
          <ComingSoon label="Local" />
        </div>
        <div className="divider-cut bg-ink" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-ink text-center">
        <div ref={ctaRef} className={`max-w-4xl mx-auto reveal ${ctaVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight">Questions?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Reach out if you have any questions about Club Teams, schedules, or payments.
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
