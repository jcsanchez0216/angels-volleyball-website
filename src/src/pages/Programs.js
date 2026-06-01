import React from 'react';

const BG = '#1a1a1a';
const CARD_BG = '#242424';
const MAROON = '#7b1426';
const MAROON_LIGHT = '#c0394e';
const WHITE = '#ffffff';
const GREY_TEXT = '#d1d1d1';
const MUTED = '#9a9a9a';

export default function Programs() {
  const programs = [
    {
      name: 'Academy',
      price: '$20/session',
      description: 'Perfect for beginners and developing young athletes. Learn fundamentals in a supportive environment.',
      age: 'Ages 10–14',
      details: 'Focus on learning the basics, building confidence, and having fun. Great for new players!'
    },
    {
      name: 'Hybrid',
      price: '$2,700/season',
      description: 'Competitive training with flexible tournament schedule. Balance development with competition.',
      age: 'Ages 11–18',
      details: 'Train hard and compete! Mix of skill development and tournament play throughout the season.'
    },
    {
      name: 'Club',
      price: 'Contact for pricing',
      description: 'Elite competitive program. Multiple tournaments, advanced skill development, college prep.',
      age: 'Ages 14–18',
      details: 'Our most competitive program. Designed for serious athletes aiming for college recruitment.'
    }
  ];

  return (
    <div style={{ backgroundColor: BG }}>

      {/* Header */}
      <section style={{ paddingTop: '120px', paddingBottom: '56px', padding: '120px 24px 56px', backgroundColor: '#111111', borderBottom: `2px solid ${MAROON}` }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', color: WHITE, marginBottom: '12px' }}>Our Programs</h1>
          <div style={{ height: '4px', background: MAROON, width: '60px', marginBottom: '24px' }}></div>
          <p style={{ fontSize: '18px', color: GREY_TEXT, maxWidth: '640px', lineHeight: '1.7' }}>
            Choose the program that fits your goals. All programs include expert coaching, structured development, and a supportive team environment.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section style={{ padding: '72px 24px', backgroundColor: BG }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {programs.map((prog, i) => (
              <div key={i} style={{ backgroundColor: CARD_BG, borderRadius: '10px', border: '1px solid #333', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'default' }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ background: `linear-gradient(135deg, ${MAROON}, #4a0d18)`, padding: '32px', color: WHITE }}>
                  <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px' }}>{prog.name}</h2>
                  <div style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px' }}>{prog.price}</div>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{prog.age}</p>
                </div>
                <div style={{ padding: '32px' }}>
                  <p style={{ color: GREY_TEXT, lineHeight: '1.7', marginBottom: '16px', fontSize: '15px', fontWeight: '500' }}>{prog.description}</p>
                  <p style={{ color: MUTED, lineHeight: '1.7', fontSize: '14px' }}>{prog.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: '72px 24px', backgroundColor: '#111111' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: WHITE, marginBottom: '12px', textAlign: 'center' }}>What's Included in All Programs</h2>
          <div style={{ height: '4px', background: MAROON, width: '60px', margin: '0 auto 56px' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Expert Coaching', desc: 'Master coaches with IMPACT, SafeSport, and USAV certifications' },
              { title: 'Team Environment', desc: 'Build lifelong friendships in a supportive, competitive setting' },
              { title: 'Skill Development', desc: 'Progressive training focused on technical and mental growth' },
              { title: 'Tournament Play', desc: 'Compete against top clubs throughout the season' },
              { title: 'Leadership Training', desc: 'Develop life skills beyond volleyball' },
              { title: 'College Prep', desc: 'Resources and coaching to prepare for college recruitment' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: CARD_BG, padding: '24px', borderRadius: '10px', border: '1px solid #333', borderLeft: `3px solid ${MAROON}` }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: WHITE, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: MUTED, fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
