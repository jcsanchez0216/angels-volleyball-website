import React from 'react';
import { useNavigate } from 'react-router-dom';

const BG = '#1a1a1a';
const CARD_BG = '#242424';
const MAROON = '#7b1426';
const MAROON_LIGHT = '#c0394e';
const WHITE = '#ffffff';
const GREY_TEXT = '#d1d1d1';
const MUTED = '#9a9a9a';

export default function Tryouts() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: BG }}>

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '64px', padding: '120px 24px 64px', background: `linear-gradient(135deg, #111111 0%, ${MAROON} 100%)` }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '52px', fontWeight: '800', color: WHITE, marginBottom: '20px' }}>2026 Tryouts</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.7', maxWidth: '640px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
            Are you ready to join the Angels family? Tryouts are coming soon. Limited spots available for all age groups and program levels.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '72px 24px', backgroundColor: BG }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>

            {/* What to Expect */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '800', color: WHITE, marginBottom: '8px' }}>What to Expect</h2>
              <div style={{ height: '4px', background: MAROON, width: '50px', marginBottom: '32px' }}></div>
              {[
                { title: 'Professional Evaluation', desc: 'Coaches assess your skills, attitude, and potential across all positions.' },
                { title: 'Team Placement', desc: 'Selected athletes are placed on teams matched to their skill level and age.' },
                { title: 'Fast Notification', desc: "You'll know the results within 48 hours of your tryout." },
                { title: 'Supportive Environment', desc: 'Tryouts are designed to be encouraging, not intimidating.' }
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '28px', paddingLeft: '16px', borderLeft: `3px solid ${MAROON}` }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: WHITE, marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ color: GREY_TEXT, lineHeight: '1.7', fontSize: '14px' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Details Card */}
            <div style={{ backgroundColor: CARD_BG, padding: '40px', borderRadius: '10px', border: `2px solid ${MAROON}` }}>
              <h3 style={{ fontSize: '26px', fontWeight: '800', color: WHITE, marginBottom: '28px' }}>Tryout Details</h3>
              {[
                { label: 'Tryout Fee', value: '$20' },
                { label: 'Dates & Times', value: 'August/September\nCheck back soon for specific dates' },
                { label: 'Notification', value: 'Within 48 hours' },
                { label: 'Age Groups', value: '10U – 18U\nAll skill levels welcome' }
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: MAROON_LIGHT, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>{item.label}</p>
                  <p style={{ fontSize: '16px', color: WHITE, fontWeight: '500', whiteSpace: 'pre-line' }}>{item.value}</p>
                </div>
              ))}
              <button
                onClick={() => navigate('/contact')}
                style={{ width: '100%', backgroundColor: MAROON, color: WHITE, padding: '14px', fontWeight: '700', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '15px', marginTop: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                Register Interest
              </button>
              <p style={{ color: MUTED, fontSize: '12px', textAlign: 'center', marginTop: '10px' }}>Limited spots available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section style={{ padding: '72px 24px', backgroundColor: '#111111' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: WHITE, marginBottom: '12px', textAlign: 'center' }}>Choose Your Program</h2>
          <div style={{ height: '4px', background: MAROON, width: '50px', margin: '0 auto 48px' }}></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { name: 'Academy', price: '$20/session', desc: 'Great for beginners. Ages 10–14.' },
              { name: 'Hybrid', price: '$2,700/season', desc: 'Competitive & flexible. Ages 11–18.' },
              { name: 'Club', price: 'Contact us', desc: 'Elite & intensive. Ages 14–18.' }
            ].map((prog, i) => (
              <div key={i} style={{ backgroundColor: CARD_BG, padding: '28px', borderRadius: '10px', border: '1px solid #333', textAlign: 'center', borderTop: `3px solid ${MAROON}` }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: WHITE, marginBottom: '10px' }}>{prog.name}</h3>
                <p style={{ fontSize: '18px', fontWeight: '700', color: MAROON_LIGHT, marginBottom: '8px' }}>{prog.price}</p>
                <p style={{ color: MUTED, fontSize: '13px' }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 24px', background: `linear-gradient(90deg, ${MAROON}, #4a0d18)`, textAlign: 'center' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: WHITE, marginBottom: '16px' }}>Ready to Tryout?</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '32px', color: 'rgba(255,255,255,0.8)' }}>
            Join a club known for developing elite athletes and building champions. Contact us with questions or to register.
          </p>
          <button onClick={() => navigate('/contact')} style={{ backgroundColor: WHITE, color: MAROON, padding: '14px 48px', fontWeight: '700', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '15px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
}
