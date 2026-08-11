import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Trophy, Users } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import StatNumber from '../components/StatNumber';

const stats = [
  { num: '15+', label: 'Years Strong', sub: 'Proven since 2010' },
  { num: '7', label: 'Master Coaches', sub: 'USAV Certified' },
  { num: '3', label: 'Program Levels', sub: 'Club, Hybrid, Academy' },
  { num: '✓', label: 'USAV Sanctioned', sub: 'Sun Country Region' },
];

const whyAngels = [
  { icon: Award, title: 'Expert Coaching', desc: 'Master coaches with decades of combined experience, certifications, and a track record of developing collegiate athletes.' },
  { icon: Trophy, title: 'Proven Results', desc: '15 years of developing athletes who succeed at the collegiate level and beyond. Our alumni speak for themselves.' },
  { icon: Users, title: 'Better Value', desc: 'Top-tier training at significantly lower costs than competing clubs. More money in your pocket, same excellence on court.' },
];

export default function Home() {
  const navigate = useNavigate();
  const [statsRef, statsVisible] = useScrollReveal();
  const [whyRef, whyVisible] = useScrollReveal();

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 px-6">
        <img
          src={`${process.env.PUBLIC_URL}/emblem.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 -top-24 w-[420px] max-w-none opacity-10"
          width="420"
          height="257"
        />
        <div
          className="absolute left-0 right-0 bottom-0 h-2/5 bg-gradient-to-r from-maroon to-maroon-dark animate-sweep-in [clip-path:polygon(0_40%,100%_0%,100%_100%,0%_100%)]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-6xl font-bold text-white tracking-tight mb-2 uppercase animate-fade-up">Angels</h1>
            <div className="h-1.5 w-32 bg-maroon-light mb-6 rule-cut animate-fade-up-1" />
            <p className="text-xl text-white/90 mb-8 max-w-md leading-relaxed font-medium animate-fade-up-1">
              Developing elite athletes. Building champions. Albuquerque's trusted volleyball program since 2010.
            </p>
            <div className="flex gap-4 flex-wrap animate-fade-up-2">
              <button
                onClick={() => navigate('/tryouts')}
                className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-8 py-3 shadow-lg transition-colors"
              >
                2026 Tryouts
              </button>
              <button
                onClick={() => navigate('/programs')}
                className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white/10 transition-colors"
              >
                View Programs
              </button>
            </div>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`card-cut bg-white/10 backdrop-blur p-6 reveal ${statsVisible ? 'is-visible' : ''}`}
                aria-label={`${stat.num} ${stat.label}`}
              >
                <div className="text-5xl font-bold mb-2">
                  {stat.num === '✓' ? (
                    <span className="text-emerald-400">✓</span>
                  ) : (
                    <span className="text-white">
                      <StatNumber value={stat.num} active={statsVisible} />
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
        <div className="max-w-7xl mx-auto">
          <div ref={whyRef} className={`reveal ${whyVisible ? 'is-visible' : ''}`}>
            <div className="mb-16">
              <h2 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Why Angels?</h2>
              <div className="h-1 w-20 bg-maroon rule-cut" />
            </div>
            <p className="text-xl text-ink/70 mb-16 max-w-2xl leading-relaxed">
              We're not just another volleyball club. We're a legacy built on proven coaching, competitive results, and genuine care for our athletes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyAngels.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card-cut bg-taupe-light/60 p-8">
                    <Icon className="w-12 h-12 text-maroon mb-4" />
                    <h3 className="font-display text-2xl font-bold text-ink mb-3 uppercase">{item.title}</h3>
                    <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
