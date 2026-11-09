import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const programs = [
  {
    name: 'Academy',
    price: '$20/session',
    age: 'Ages 11–17',
    description: 'Specialized training offered by master coaches: serving, passing, setting, hitting, blocking, positional training, and more.',
    details: 'Tuesdays and Thursdays, 5:30–7:00 PM, at the LBJ Middle School west-side gym. Pay online or at the gym, and only for the days you attend. The academy description also welcomes athletes ages 10–17.',
    path: '/academy',
    linkLabel: 'Academy details',
  },
  {
    name: 'Hybrid',
    price: '$2,100 total',
    age: 'Local tournaments',
    description: 'Not quite Academy and not quite Club. Competitive teams competing locally at a low cost.',
    details: 'Teams are formed through tryouts and academy evaluations. Days, times, and locations are still TBD. An optional Durango tournament in April has an extra charge.',
    path: '/hybrid-schedule',
    linkLabel: 'Schedule and cost',
  },
  {
    name: 'Club',
    price: '$2,700–$3,700',
    age: 'Local, Regional, National',
    description: 'USA Volleyball Junior Olympic teams. Practices are tentatively Tuesdays and Thursdays, with times and locations TBD.',
    details: 'Published season totals: Local $2,700, Regional $3,300, National $3,700. Coaches are assigned after tryouts.',
    path: '/club-teams',
    linkLabel: 'Schedules and cost',
  },
];

const included = [
  { title: 'Three programs', desc: 'Academy training, Hybrid local teams, and Club teams at local, regional, and national level.' },
  { title: 'Certified coaches', desc: 'The handbook says every Angels coach is IMPACT and SafeSport certified, registered with USAV, and background-checked.' },
  { title: 'Sun Country Region', desc: 'The club is a member of SURVA, the Sun Country Region of USA Volleyball.' },
  { title: 'Parent paperwork', desc: 'Handbook, codes of conduct, and the USAV medical release (without notary) are available to download.' },
];

export default function Programs() {
  const navigate = useNavigate();
  const [headRef, headVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();
  const [includedRef, includedVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Our Programs</h1>
          <div className="h-1 w-20 bg-maroon mb-8 rule-cut" />
          <p className="text-xl text-ink/70 max-w-2xl leading-relaxed">
            2026-2027 season. Academy, Hybrid, and Club — each with its own schedule and cost.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={cardsRef} className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${cardsVisible ? 'is-visible' : ''}`}>
          {programs.map((prog) => (
            <div key={prog.name} className="card-cut bg-taupe-light overflow-hidden flex flex-col">
              <div className="bg-maroon px-8 py-8 text-white">
                <h2 className="font-display text-3xl font-bold uppercase">{prog.name}</h2>
                <div className="text-3xl font-bold mt-2">{prog.price}</div>
                <p className="text-xs font-bold text-white/80 uppercase tracking-wider mt-3">{prog.age}</p>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-ink/80 leading-relaxed mb-4 font-medium">{prog.description}</p>
                <p className="text-ink/70 text-sm leading-relaxed">{prog.details}</p>
                <button
                  onClick={() => navigate(prog.path)}
                  className="mt-6 w-full bg-maroon hover:bg-maroon-dark text-white font-bold py-3 text-sm uppercase tracking-wider transition-colors"
                >
                  {prog.linkLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-taupe-light">
        <div ref={includedRef} className={`max-w-7xl mx-auto reveal ${includedVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Across the Club</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {included.map((item) => (
              <div key={item.title} className="card-cut bg-white p-6">
                <h3 className="font-display text-lg font-bold text-ink mb-3 uppercase">{item.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
