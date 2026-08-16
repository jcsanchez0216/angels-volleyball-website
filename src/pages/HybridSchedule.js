import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const schedule = [
  {
    month: 'December',
    events: [
      { title: 'Albuquerque Christmas Extravaganza', note: '(Date and Time TBD)' },
    ],
  },
  {
    month: 'January',
    events: [
      { title: 'Chili Spike - Albuquerque, NM', note: '(Date and Time TBD)', sanctioned: true },
      { title: 'Albuquerque Winter Mini Tournament', note: '(Date and Time TBD)' },
      { notice: true, title: 'Mandatory Diggin It Durango Meeting', detail: 'Tentatively set for Jan 28, at practice.' },
    ],
  },
  {
    month: 'February',
    events: [
      { title: 'Albuquerque Sweetheart Mini Tournament', note: '(Date and Time TBD)' },
      { title: 'Presidente Picante - Albuquerque', note: '(Date and Time TBD)', sanctioned: true },
    ],
  },
  {
    month: 'March',
    events: [
      { title: 'Shamrock Shennanigans - Albuquerque', note: '(Date and Time TBD)', sanctioned: true },
      { title: 'Shamrock Mini Tournament', note: '(Date and Time TBD)' },
    ],
  },
  {
    month: 'April',
    events: [
      { title: 'Spring Tournament', note: '(Date and Time TBD)' },
      { notice: true, title: 'Optional: Diggin It Durango - Durango, CO', detail: '(Date and Time TBD) · Sanctioned · Additional charge applies.' },
    ],
  },
];

const payments = [
  { date: 'Due at Team Acceptance', description: 'Uniform Fee (non-refundable, non-transferable)', amount: '$600', link: 'https://square.link/u/55g1Vjj6' },
  { date: '1 Sept 2026', description: 'Tournament Fee (non-refundable, non-transferable)', amount: '$600', link: 'https://square.link/u/XDrDrKQw' },
  { date: '1 Oct 2026', description: 'Club Dues (non-refundable, non-transferable)', amount: '$300', link: null },
  { date: '1 Nov 2026', description: 'Club Dues (non-refundable, non-transferable)', amount: '$300', link: null },
  { date: '1 Dec 2026', description: 'Club Dues (non-refundable, non-transferable)', amount: '$300', link: null },
  { date: '1 Jan 2027', description: 'Club Dues (non-refundable, non-transferable)', amount: '$300', link: null },
  { date: '1 Feb 2027', description: 'Club Dues (non-refundable, non-transferable)', amount: '$300', link: null },
];

export default function HybridSchedule() {
  const navigate = useNavigate();
  const [headRef, headVisible] = useScrollReveal();
  const [scheduleRef, scheduleVisible] = useScrollReveal();
  const [costRef, costVisible] = useScrollReveal();
  const [paymentsRef, paymentsVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">Hybrid Program Schedule</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            2026-2027 season tournament calendar and payment schedule. Tentative — dates and details are subject to change.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={scheduleRef} className={`max-w-4xl mx-auto reveal ${scheduleVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Tournament Calendar</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />

          <div className="card-cut bg-taupe-light p-8 md:p-10">
            {schedule.map((month, mi) => (
              <div key={mi} className={mi > 0 ? 'mt-8 pt-8 border-t border-taupe' : ''}>
                <h3 className="font-display text-2xl font-bold text-ink uppercase mb-4">{month.month}</h3>
                <div className="space-y-3">
                  {month.events.map((ev, ei) =>
                    ev.notice ? (
                      <div key={ei} className="bg-maroon text-white p-4">
                        <p className="font-bold">{ev.title}</p>
                        {ev.detail && <p className="text-white/80 text-sm mt-1">{ev.detail}</p>}
                      </div>
                    ) : (
                      <p key={ei} className="text-ink">
                        {ev.title}
                        {ev.note && <span className="text-ink/60 italic"> {ev.note}</span>}
                        {ev.sanctioned && (
                          <span className="text-maroon font-bold text-xs uppercase tracking-wide ml-2 align-middle">
                            Sanctioned
                          </span>
                        )}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-taupe-light">
        <div ref={costRef} className={`max-w-4xl mx-auto reveal ${costVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Team Cost &amp; Payment Plan</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-12 rule-cut" />

          <div className="card-cut bg-white p-8 md:p-10 text-center">
            <p className="text-sm font-bold text-maroon uppercase tracking-wider mb-2">Total Season Cost</p>
            <p className="font-display text-5xl font-bold text-ink mb-6">$2,700</p>
            <p className="text-ink/70 max-w-md mx-auto leading-relaxed">
              $2,100 in tournament fees &amp; club dues, plus a $600 uniform fee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="card-cut bg-white p-6">
              <p className="font-bold text-ink mb-1">Uniform Fee</p>
              <p className="text-ink/70 text-sm">$600, due upon team acceptance.</p>
            </div>
            <div className="card-cut bg-white p-6">
              <p className="font-bold text-ink mb-1">Tournament Package</p>
              <p className="text-ink/70 text-sm">$600, due September 1, 2026.</p>
            </div>
          </div>

          <div className="card-cut bg-white p-6 mt-6">
            <p className="font-bold text-ink mb-1">Payment Plan</p>
            <p className="text-ink/70 text-sm">Remaining payments are due on the 1st of every month, with a 5-day grace period.</p>
          </div>

          <div className="bg-maroon text-white p-6 mt-6">
            <p className="font-bold">Late Payments</p>
            <p className="text-white/80 text-sm mt-1">Payments received after the 5th of the month will be assessed a $20 late fee.</p>
          </div>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={paymentsRef} className={`max-w-4xl mx-auto reveal ${paymentsVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Payment Schedule</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />

          <div className="space-y-4">
            {payments.map((p, i) => (
              <div key={i} className="card-cut bg-taupe-light p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-1">{p.date}</p>
                  <p className="text-ink font-medium">{p.description}</p>
                </div>
                <div className="flex items-center gap-4 sm:flex-shrink-0">
                  <p className="text-xl font-bold text-ink">{p.amount}</p>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-maroon hover:bg-maroon-dark text-white font-bold px-6 py-2 text-sm transition-colors whitespace-nowrap"
                    >
                      Pay Now
                    </a>
                  ) : (
                    <span className="text-ink/50 text-sm italic whitespace-nowrap">Link coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-ink/50 text-xs text-center mt-8 italic">Schedule, costs, and payment links are subject to change.</p>
        </div>
        <div className="divider-cut bg-ink" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-ink text-center">
        <div ref={ctaRef} className={`max-w-4xl mx-auto reveal ${ctaVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight">Questions?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Reach out if you have any questions about the schedule, payments, or your Hybrid Program spot.
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
