import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Trophy, Users } from 'lucide-react';

const BG = '#1a1a1a';
const CARD_BG = '#242424';
const MAROON = '#7b1426';
const MAROON_LIGHT = '#c0394e';
const WHITE = '#ffffff';
const GREY_TEXT = '#d1d1d1';
const MUTED = '#9a9a9a';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: BG }}>

      {/* Hero */}
      <section style={{ paddingTop: '128px', paddingBottom: '80px', padding: '128px 24px 80px 24px', background: `linear-gradient(135deg, #111111 0%, #1a1a1a 50%, ${MAROON} 100%)` }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h1 style={{ fontSize: '64px', fontWeight: '900', color: WHITE, marginBottom: '8px', letterSpacing: '-0.02em', lineHeight: '1' }}>ANGELS</h1>
                <p style={{ fontSize: '16px', fontWeight: '700', color: MAROON_LIGHT, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>of Albuquerque</p>
                <div style={{ height: '4px', background: MAROON_LIGHT, width: '80px' }}></div>
              </div>
              <p style={{ fontSize: '18px', color: GREY_TEXT, marginBottom: '32px', maxWidth: '448px', lineHeight: '1.7' }}>
                Developing elite athletes. Building champions. Albuquerque's trusted volleyball program since 2010.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/tryouts')} style={{ background: MAROON, color: WHITE, padding: '14px 36px', fontWeight: '700', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '15px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  2026 Tryouts
                </button>
                <button onClick={() => navigate('/programs')} style={{ border: `2px solid ${WHITE}`, color: WHITE, padding: '14px 36px', fontWeight: '700', borderRadius: '6px', background: 'transparent', cursor: 'pointer', fontSize: '15px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  View Programs
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { num: '15+', label: 'Years Strong', sub: 'Proven since 2010' },
                { num: '7', label: 'Master Coaches', sub: 'USAV Certified' },
                { num: '3', label: 'Program Levels', sub: 'Club, Hybrid, Academy' },
                { num: '✓', label: 'USAV Sanctioned', sub: 'Sun Country Region' }
              ].map((stat, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '24px' }}>
                  <div style={{ fontSize: '42px', fontWeight: '800', color: stat.num === '✓' ? '#4ade80' : MAROON_LIGHT, marginBottom: '8px' }}>{stat.num}</div>
                  <p style={{ color: WHITE, fontWeight: '600', fontSize: '14px' }}>{stat.label}</p>
                  <p style={{ color: MUTED, fontSize: '12px', marginTop: '4px' }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Angels */}
      <section style={{ padding: '96px 24px', backgroundColor: BG }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '800', color: WHITE, marginBottom: '12px' }}>Why Angels?</h2>
            <div style={{ height: '4px', background: MAROON, width: '60px' }}></div>
          </div>
          <p style={{ fontSize: '18px', color: GREY_TEXT, marginBottom: '56px', maxWidth: '640px', lineHeight: '1.7' }}>
            We're not just another volleyball club. We're a legacy built on proven coaching, competitive results, and genuine care for our athletes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: Award, title: 'Expert Coaching', desc: 'Master coaches with decades of combined experience, certifications, and a track record of developing collegiate athletes.' },
              { icon: Trophy, title: 'Proven Results', desc: '15 years of developing athletes who succeed at the collegiate level and beyond. Our alumni speak for themselves.' },
              { icon: Users, title: 'Better Value', desc: 'Top-tier training at significantly lower costs than competing clubs. More money in your pocket, same excellence on court.' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ backgroundColor: CARD_BG, padding: '32px', borderRadius: '10px', border: '1px solid #333', borderTop: `3px solid ${MAROON}` }}>
                  <Icon style={{ width: '40px', height: '40px', color: MAROON_LIGHT, marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: WHITE, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: GREY_TEXT, lineHeight: '1.7', fontSize: '15px' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '72px 24px', background: `linear-gradient(90deg, ${MAROON}, #4a0d18)` }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: WHITE, marginBottom: '16px' }}>Ready to Join the Angels Family?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', lineHeight: '1.6' }}>
            Tryouts for the 2026 season are coming up. Limited spots available.
          </p>
          <button onClick={() => navigate('/tryouts')} style={{ backgroundColor: WHITE, color: MAROON, padding: '14px 48px', fontWeight: '700', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '15px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Learn About Tryouts
          </button>
        </div>
      </section>

    </div>
  );
}
