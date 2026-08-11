import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const coaches = [
  { name: 'Brian Sanchez', title: 'Founder & Club Director', level: 'Master Coach', bio: '15+ years of coaching expertise. Developed athletes from beginners to NCAA Division I level.' },
  { name: 'Theresa Sanchez', title: 'Co-Founder & Co-Director', level: 'Master Coach', bio: '30 years in volleyball. IMPACT, CAP, NMAA Certified. Expert in all age levels.' },
  { name: 'Mariah Sanchez', title: 'Academy Director & Coach', level: 'Club Coach', bio: "Angels alumni, former Cibola High player. Specializes in fundamentals and mental toughness." },
  { name: 'Shannon Figueroa', title: '17U & 12U Head Coach', bio: 'Dedicated to competitive excellence and player development at multiple levels.' },
  { name: "Alejandra 'Ale' Jurado", title: '17U & 12U Assistant Coach', bio: '6 years competitive volleyball. Creates individualized coaching approaches for each player.' },
  { name: 'Trinity Williams', title: '14U & 16U Coach', bio: 'Emphasizes positive reinforcement, mental focus, and keeping the game fun.' },
  { name: 'Dylan Begley', title: '11U Coach', bio: 'Competitive since high school. Focuses on teamwork, fundamentals, and game understanding.' },
];

export default function Coaches() {
  const [headRef, headVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Our Coaching Staff</h1>
          <div className="h-1 w-20 bg-maroon mb-8 rule-cut" />
          <p className="text-xl text-ink/70 max-w-2xl leading-relaxed">
            Meet the world-class coaches who develop elite athletes. All coaches are IMPACT Certified, SafeSport trained, and registered with USAV.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-paper">
        <div ref={cardsRef} className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${cardsVisible ? 'is-visible' : ''}`}>
          {coaches.map((coach, i) => (
            <div key={i} className="card-cut bg-taupe-light/40 hover:bg-taupe-light/70 transition-colors p-8">
              <div className="w-14 h-14 bg-maroon rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {coach.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-ink">{coach.name}</h3>
              <p className="text-sm font-semibold text-maroon mt-1.5">{coach.title}</p>
              {coach.level && (
                <p className="text-[11px] font-bold text-white uppercase tracking-wide mt-3 inline-block bg-ink px-2.5 py-1.5">
                  {coach.level}
                </p>
              )}
              <p className="text-ink/70 text-sm leading-relaxed mt-4">{coach.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
