import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import ProgramSubNav from '../components/ProgramSubNav';
import ParticipantAgreementForm from '../components/ParticipantAgreementForm';

const schedule = [
  {
    month: 'December',
    events: [
      { title: 'Albuquerque Christmas Extravanganza', note: '(Date and Time TBD)' },
    ],
  },
  {
    month: 'January',
    events: [
      { title: 'Albuquerque Winter Mini Tournament', note: '(Date and Time TBD)' },
      { notice: true, title: 'Mandatory Diggin It Durango Meeting', detail: 'Tentatively set for January 28 at practice.' },
    ],
  },
  {
    month: 'February',
    events: [
      { title: 'Albuquerque Sweetheart Mini Tournament', note: '(Date and Time TBD)' },
      { title: 'Rio Rancho Spring Series Tournament', note: '(Date and Time TBD)' },
    ],
  },
  {
    month: 'March',
    events: [
      { title: 'Shamrock Shennanigans — Albuquerque', note: '(Date and Time TBD)', sanctioned: true },
      { title: 'Shamrock Mini Tournament', note: '(Date and Time TBD)' },
    ],
  },
  {
    month: 'April',
    events: [
      { title: 'Spring Tournament', note: '(Date and Time TBD)' },
      { title: 'Rio Rancho Spring Series', note: '(Date and Time TBD)' },
      { notice: true, title: 'Optional Diggin it Durango — Durango, CO', detail: '(Date and Time TBD) · Sanctioned · Extra charge' },
    ],
  },
];

const payments = [
  { date: 'Due at team acceptance', description: 'Non-refundable / non-transferable team acceptance deposit', amount: '$300' },
  { date: '1 Sep', description: 'Non-refundable / non-transferable club dues', amount: '$300' },
  { date: '1 Oct', description: 'Non-refundable / non-transferable club dues', amount: '$300' },
  { date: '1 Nov', description: 'Non-refundable / non-transferable club dues', amount: '$300' },
  { date: '1 Dec', description: 'Non-refundable / non-transferable club dues', amount: '$300' },
  { date: '1 Jan', description: 'Non-refundable / non-transferable club dues', amount: '$300' },
  { date: '1 Feb', description: 'Non-refundable / non-transferable club dues', amount: '$300' },
];

const coaches = [
  '12u Coach Dylan Begley and TBD',
  '13u Coaches Mariah Sanchez and TBD',
  '14U Coach Sara Pena and TBD',
  '15U Coach TBD & Brian Sanchez',
];

export default function HybridSchedule() {
  const [headRef, headVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [scheduleRef, scheduleVisible] = useScrollReveal();
  const [costRef, costVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <ProgramSubNav />
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">Angels Hybrid Program</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            2026-2027 season. Tentative schedule and cost — may be subject to change.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={aboutRef} className={`max-w-3xl mx-auto reveal ${aboutVisible ? 'is-visible' : ''}`}>
          <div className="space-y-5 text-ink/80 leading-relaxed">
            <p>
              The Angels of Albuquerque Hybrid Program is designed for athletes who are ready to take the next step beyond academy training and experience competitive volleyball in a team-focused environment. Teams are formed through tryouts as well as evaluations within our Academy Program, allowing coaches to identify athletes who demonstrate the skills, work ethic, and readiness needed for tournament play.
            </p>
            <p>
              Players selected for the Hybrid Program must possess the fundamental volleyball skills necessary to compete, including serving, passing, setting, hitting, movement, and overall court awareness. Our goal is to continue developing these core fundamentals while introducing athletes to advanced team concepts, communication, rotations, and competitive gameplay in a structured club-style setting.
            </p>
            <p>
              The Hybrid Program serves as a low-cost alternative to traditional club volleyball while still providing athletes with valuable tournament experience, high-level coaching, and consistent team training. All tournaments are local, making the program more affordable and accessible for families, with an optional out-of-town tournament in Durango in April available for an additional fee.
            </p>
            <p>
              Athletes train alongside players with similar skill levels under the direction of experienced coaches who focus on player development, confidence building, teamwork, and game strategy. This program is designed to bridge the gap between our Academy Program and full club volleyball, helping athletes transition into higher levels of competition while continuing to strengthen their skills, knowledge of the game, and love for volleyball.
            </p>
          </div>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-taupe-light">
        <div ref={scheduleRef} className={`max-w-4xl mx-auto reveal ${scheduleVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">2026-2027 Tentative Schedule &amp; Cost</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-10 rule-cut" />

          <div className="card-cut bg-white p-8 mb-8 text-center">
            <p className="text-xl font-bold text-ink">Days, times, and locations TBD</p>
            <ul className="mt-4 space-y-2 text-ink/80">
              {coaches.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </div>

          <div className="card-cut bg-white p-8 md:p-10">
            {schedule.map((month, mi) => (
              <div key={month.month} className={mi > 0 ? 'mt-8 pt-8 border-t border-taupe' : ''}>
                <h3 className="font-display text-2xl font-bold text-ink uppercase mb-4">{month.month}</h3>
                <div className="space-y-3">
                  {month.events.map((ev) => (
                    ev.notice ? (
                      <div key={ev.title} className="bg-maroon text-white p-4">
                        <p className="font-bold">{ev.title}</p>
                        {ev.detail && <p className="text-white/80 text-sm mt-1">{ev.detail}</p>}
                      </div>
                    ) : (
                      <p key={ev.title} className="text-ink">
                        {ev.title}
                        {ev.note && <span className="text-ink/60 italic"> {ev.note}</span>}
                        {ev.sanctioned && (
                          <span className="text-maroon font-bold text-xs uppercase tracking-wide ml-2 align-middle">
                            Sanctioned
                          </span>
                        )}
                      </p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={costRef} className={`max-w-4xl mx-auto reveal ${costVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Total Cost for Hybrid Team $2,100</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-10 rule-cut" />

          <div className="card-cut bg-taupe-light p-6 mb-6">
            <p className="font-bold text-ink">$300 team acceptance deposit due upon team acceptance.</p>
            <p className="text-ink/70 text-sm mt-2">Payments are due on the 1st of every month, with a 5-day grace period. Payments received after the 5th will be assessed a $20 late fee.</p>
            <p className="text-ink/70 text-sm mt-2">The published schedule’s payment-link column is blank, so no online checkout is listed here.</p>
          </div>

          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.date} className="card-cut bg-taupe-light p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-1">{payment.date}</p>
                  <p className="text-ink font-medium">{payment.description}</p>
                </div>
                <p className="text-xl font-bold text-ink">{payment.amount}</p>
              </div>
            ))}
          </div>
          <p className="text-ink/50 text-xs text-center mt-8 italic">May be subject to change.</p>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section id="participant-agreement" className="py-24 px-6 bg-taupe-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-ink mb-4 uppercase tracking-tight">Participant Agreement</h2>
          <div className="h-1 w-20 bg-maroon mb-10 rule-cut" />
          <ParticipantAgreementForm program="Hybrid" />
        </div>
      </section>
    </div>
  );
}
