import React from 'react';

const BG = '#1a1a1a';
const CARD_BG = '#242424';
const MAROON = '#7b1426';
const MAROON_LIGHT = '#c0394e';
const WHITE = '#ffffff';
const GREY_TEXT = '#d1d1d1';
const MUTED = '#9a9a9a';

export default function Coaches() {
  const coaches = [
    { name: 'Brian Sanchez', title: 'Founder & Club Director', level: 'Master Coach', bio: '15+ years of coaching expertise. Developed athletes from beginners to NCAA Division I level.' },
    { name: 'Theresa Sanchez', title: 'Co-Founder & Co-Director', level: 'Master Coach', bio: '30 years in volleyball. IMPACT, CAP, NMAA Certified. Expert in all age levels.' },
    { name: 'Mariah Sanchez', title: 'Academy Director & Coach', level: 'Club Coach', bio: 'Angels alumni, former Cibola High player. Specializes in fundamentals and mental toughness.' },
    { name: 'Shannon Figueroa', title: '17U & 12U Head Coach', bio: 'Dedicated to competitive excellence and player development at multiple levels.' },
    { name: "Alejandra 'Ale' Jurado", title: '17U & 12U Assistant Coach', bio: '6 years competitive volleyball. Creates individualized coaching approaches for each player.' },
    { name: 'Trinity Williams', title: '14U & 16U Coach', bio: 'Emphasizes positive reinforcement, mental focus, and keeping the game fun.' },
    { name: 'Dylan Begley', title: '11U Coach', bio: 'Competitive since high school. Focuses on teamwork, fundamentals, and game understanding.' }
  ];

  return (
    <div style={{ backgroundColor: BG }}>

      {/* Header */}
      <section style={{ paddingTop: '120px', paddingBottom: '56px', padding: '120px 24px 56px', backgroundColor: '#111111', borderBottom: `2px solid ${MAROON}` }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', color: WHITE, marginBottom: '12px' }}>Our Coaching Staff</h1>
          <div style={{ height: '4px', background: MAROON, width: '60px', marginBottom: '24px' }}></div>
          <p style={{ fontSize: '18px', color: GREY_TEXT, maxWidth: '640px', lineHeight: '1.7' }}>
            Meet the coaches who develop elite athletes. All coaches are IMPACT Certified, SafeSport trained, and registered with USAV.
          </p>
        </div>
      </section>

      {/* Coach Cards */}
      <section style={{ padding: '72px 24px', backgroundColor: BG }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {coaches.map((coach, i) => (
              <div key={i}
                style={{ backgroundColor: CARD_BG, borderRadius: '10px', padding: '28px', border: '1px solid #333', transition: 'border-color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.borderColor = MAROON}
                onMouseOut={e => e.currentTarget.style.borderColor = '#333'}
              >
                <div style={{ width: '52px', height: '52px', background: `linear-gradient(135deg, ${MAROON}, #4a0d18)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: WHITE, fontWeight: '700', fontSize: '20px', marginBottom: '16px' }}>
                  {coach.name.charAt(0)}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: WHITE, marginBottom: '4px' }}>{coach.name}</h3>
                <p style={{ fontSize: '13px', fontWeight: '600', color: MAROON_LIGHT, marginBottom: '12px' }}>{coach.title}</p>
                {coach.level && (
                  <span style={{ fontSize: '10px', fontWeight: '700', color: MUTED, textTransform: 'uppercase', letterSpacing: '0.08em', backgroundColor: '#333', padding: '4px 10px', borderRadius: '4px', display: 'inline-block', marginBottom: '14px' }}>
                    {coach.level}
                  </span>
                )}
                <p style={{ color: GREY_TEXT, fontSize: '14px', lineHeight: '1.7', marginTop: coach.level ? '0' : '14px' }}>{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
