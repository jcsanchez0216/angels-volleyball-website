import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const programs = [
  { name: 'Academy', price: '$20/session', description: 'Perfect for beginners and developing young athletes. Learn fundamentals in a supportive environment.', age: 'Ages 10-14', details: 'Focus on learning the basics, building confidence, and having fun. Great for new players!' },
  { name: 'Hybrid', price: '$2,700/season', description: 'Competitive training with flexible tournament schedule. Balance development with competition.', age: 'Ages 11-18', details: 'Train hard and compete! Mix of skill development and tournament play throughout the season.' },
  { name: 'Club', price: 'Contact for pricing', description: 'Elite competitive program. Multiple tournaments, advanced skill development, college prep.', age: 'Ages 14-18', details: 'Our most competitive program. Designed for serious athletes aiming for college recruitment.' },
];

const included = [
  { title: 'Expert Coaching', desc: 'Master coaches with IMPACT, SafeSport, and USAV certifications' },
  { title: 'Team Environment', desc: 'Build lifelong friendships in a supportive, competitive setting' },
  { title: 'Skill Development', desc: 'Progressive training focused on technical and mental growth' },
  { title: 'Tournament Play', desc: 'Compete against top clubs throughout the season' },
  { title: 'Leadership Training', desc: 'Develop life skills beyond volleyball' },
  { title: 'College Prep', desc: 'Resources and coaching to prepare for college recruitment' },
];

export default function Programs() {
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
            Choose the program that fits your goals. All programs include expert coaching, structured development, and a supportive team environment.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={cardsRef} className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${cardsVisible ? 'is-visible' : ''}`}>
          {programs.map((prog, i) => (
            <div key={i} className="card-cut bg-white overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="bg-maroon px-8 py-8 text-white">
                <h2 className="font-display text-3xl font-bold uppercase">{prog.name}</h2>
                <div className="text-3xl md:text-4xl font-bold mt-2">{prog.price}</div>
                <p className="text-xs font-bold text-white/80 uppercase tracking-wider mt-3">{prog.age}</p>
              </div>
              <div className="p-8">
                <p className="text-ink/80 leading-relaxed mb-4 font-medium">{prog.description}</p>
                <p className="text-ink/70 text-sm leading-relaxed">{prog.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-taupe-light">
        <div ref={includedRef} className={`max-w-7xl mx-auto reveal ${includedVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">What's Included in All Programs</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {included.map((item, i) => (
              <div key={i} className="card-cut bg-white p-6">
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
