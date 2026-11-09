import React, { Suspense, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import StatNumber from '../components/StatNumber';
import shouldSkipIntro from '../utils/introSkip';
import IntroErrorBoundary from '../components/IntroErrorBoundary';

const EmblemLoader = React.lazy(() => import('../components/EmblemLoader'));

const stats = [
  { num: '2010', label: 'Established', sub: 'Founders Brian and Theresa Sanchez' },
  { num: '3', label: 'Program Levels', sub: 'Club, Hybrid, Academy' },
  { num: '$20', label: 'Academy Session', sub: 'Pay only for practices you attend' },
  { num: '✓', label: 'Sun Country Region', sub: 'Member of SURVA / USA Volleyball' },
];

const programs = [
  {
    title: 'Club Teams',
    path: '/club-teams',
    desc: 'USA Volleyball Junior Olympic teams. National, regional, and local competitive programs.',
  },
  {
    title: 'Hybrid Program',
    path: '/hybrid-schedule',
    desc: 'Not quite Academy and not quite Club. Competitive teams competing locally at a low cost.',
  },
  {
    title: 'Academy Program',
    path: '/academy',
    desc: 'Specialized training offered by master coaches. Serving, passing, setting, hitting, blocking, positional training, and more.',
  },
];

const whyAngels = [
  { title: 'Expert Coaching', desc: 'Master coaches with decades of combined experience, certifications, and a track record of developing collegiate athletes.' },
  { title: 'Proven Results', desc: 'Developing athletes since 2010, including players who have gone on to compete at the collegiate level.' },
  { title: 'Better Value', desc: 'Academy training at $20 a session, and a Hybrid program built as a lower-cost way to play local tournaments.' },
];

export default function Home() {
  const navigate = useNavigate();
  const [statsRef, statsVisible] = useScrollReveal();
  const [academyRef, academyVisible] = useScrollReveal();
  const [programsRef, programsVisible] = useScrollReveal();
  const [whyRef, whyVisible] = useScrollReveal();
  const [skipIntro] = useState(shouldSkipIntro);
  const [introDone, setIntroDone] = useState(skipIntro);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <div>
      {!skipIntro && (
        <IntroErrorBoundary onComplete={handleIntroComplete}>
          <Suspense fallback={<div className="fixed inset-0 z-[100] bg-ink" aria-hidden="true" />}>
            <EmblemLoader onComplete={handleIntroComplete} />
          </Suspense>
        </IntroErrorBoundary>
      )}

      <section className="relative overflow-hidden bg-ink pt-32 pb-24 px-6">
        <img
          src={`${process.env.PUBLIC_URL}/emblem.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 top-4 w-[420px] max-w-none opacity-10"
          width="420"
          height="257"
        />
        <div
          className={`absolute left-0 right-0 bottom-0 h-2/5 bg-gradient-to-r from-maroon via-maroon-dark to-ink [clip-path:polygon(0_40%,100%_0%,100%_100%,0%_100%)] ${introDone ? 'animate-sweep-in' : ''}`}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`text-maroon-light font-bold uppercase tracking-widest text-sm mb-3 ${introDone ? 'animate-fade-up' : ''}`}>
              Established 2010
            </p>
            <h1 className={`font-display text-6xl font-bold text-white tracking-tight mb-2 uppercase ${introDone ? 'animate-fade-up' : ''}`}>Angels</h1>
            <div className={`h-1.5 w-32 bg-maroon-light mb-6 rule-cut ${introDone ? 'animate-fade-up-1' : ''}`} />
            <p className={`text-xl text-white/90 mb-3 max-w-md leading-relaxed font-medium ${introDone ? 'animate-fade-up-1' : ''}`}>
              Developing elite athletes. Building champions. Albuquerque’s trusted volleyball program since 2010.
            </p>
            <p className={`text-white/70 mb-8 ${introDone ? 'animate-fade-up-1' : ''}`}>
              Founders: Brian and Theresa Sanchez
            </p>
            <div className={`flex gap-4 flex-wrap ${introDone ? 'animate-fade-up-2' : ''}`}>
              <button
                onClick={() => navigate('/academy')}
                className="bg-maroon-light hover:bg-white text-ink font-bold px-8 py-3 shadow-lg transition-colors"
              >
                Angels Academy
              </button>
              <button
                onClick={() => navigate('/programs')}
                className="border border-white/40 hover:border-white text-white font-bold px-8 py-3 transition-colors"
              >
                View Programs
              </button>
            </div>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`card-cut bg-maroon-dark border border-maroon-light/40 p-6 reveal ${introDone && statsVisible ? 'is-visible' : ''}`}
                aria-label={`${stat.num} ${stat.label}`}
              >
                <div className="text-4xl font-bold mb-2 min-h-12">
                  {stat.num === '✓' ? (
                    <img
                      src={`${process.env.PUBLIC_URL}/usav-logo.png`}
                      alt="USA Volleyball"
                      className="w-12 h-12"
                    />
                  ) : (
                    <span className="text-white">
                      <StatNumber value={stat.num} active={introDone && statsVisible} />
                    </span>
                  )}
                </div>
                <p className="text-white font-bold text-sm">{stat.label}</p>
                <p className="text-white/60 text-xs mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="bg-paper py-24 px-6">
        <div ref={academyRef} className={`max-w-7xl mx-auto reveal ${academyVisible ? 'is-visible' : ''}`}>
          <div className="mb-10">
            <h2 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Angels Academy</h2>
            <div className="h-1 w-20 bg-maroon rule-cut" />
          </div>
          <div className="bg-maroon text-white p-6 mb-8">
            <p className="font-bold uppercase tracking-wide">No practice November 24 and November 26</p>
            <p className="text-white/80 text-sm mt-1">
              November 3 was also a no-practice date and has already passed. Academy is at LBJ Middle School, ages 11–17.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-cut bg-taupe-light p-6">
              <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">When</p>
              <p className="text-2xl font-bold text-ink">Tue &amp; Thu</p>
              <p className="text-ink/70 mt-2">5:30 PM – 7:00 PM</p>
            </div>
            <div className="card-cut bg-taupe-light p-6">
              <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Cost</p>
              <p className="text-2xl font-bold text-ink">$20 per practice</p>
              <p className="text-ink/70 mt-2">Only pay for the practices you attend.</p>
            </div>
            <div className="card-cut bg-taupe-light p-6">
              <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Where</p>
              <p className="text-2xl font-bold text-ink">LBJ Middle School</p>
              <p className="text-ink/70 mt-2">
                West-side gym<br />
                6811 Taylor Ranch Dr NW<br />
                Albuquerque, NM 87120
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate('/academy')}
            className="mt-8 bg-maroon hover:bg-maroon-dark text-white font-bold px-8 py-3 uppercase tracking-wider text-sm transition-colors"
          >
            Angels Academy
          </button>
        </div>
      </section>

      <section className="relative bg-taupe-light py-24 px-6">
        <div ref={programsRef} className={`max-w-7xl mx-auto reveal ${programsVisible ? 'is-visible' : ''}`}>
          <div className="mb-12">
            <h2 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Our Programs</h2>
            <div className="h-1 w-20 bg-maroon rule-cut" />
            <p className="text-ink/70 mt-4">2026-2027 season</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((item) => (
              <div key={item.title} className="card-cut bg-white p-8 flex flex-col">
                <h3 className="font-display text-2xl font-bold text-ink uppercase mb-3">{item.title}</h3>
                <p className="text-ink/70 leading-relaxed flex-1">{item.desc}</p>
                <button
                  onClick={() => navigate(item.path)}
                  className="mt-6 text-left font-bold text-maroon uppercase tracking-wider text-sm hover:text-maroon-dark"
                >
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="bg-paper py-24 px-6">
        <div ref={whyRef} className={`max-w-7xl mx-auto reveal ${whyVisible ? 'is-visible' : ''}`}>
          <div className="mb-12">
            <h2 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Why Angels?</h2>
            <div className="h-1 w-20 bg-maroon rule-cut" />
          </div>
          <p className="text-xl text-ink/70 mb-12 max-w-2xl leading-relaxed">
            A club built on coaching, competitive results, and care for our athletes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyAngels.map((item) => (
              <div key={item.title} className="card-cut bg-taupe-light p-8">
                <h3 className="font-display text-2xl font-bold text-ink mb-3 uppercase">{item.title}</h3>
                <p className="text-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 px-6 text-center">
        <p className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight">“We believe in ANGELS!”</p>
      </section>
    </div>
  );
}
