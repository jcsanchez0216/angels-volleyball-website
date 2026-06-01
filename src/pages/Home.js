import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Trophy, Users } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section style={{paddingTop: '128px', paddingBottom: '80px', padding: '128px 24px 80px 24px', background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #7f1d1d 100%)'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'}}>
            <div>
              <div style={{marginBottom: '24px'}}>
                <h1 style={{fontSize: '56px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px', letterSpacing: '-0.02em'}}>ANGELS</h1>
                <div style={{height: '6px', background: '#ef4444', width: '128px'}}></div>
              </div>
              <p style={{fontSize: '20px', color: '#f3f4f6', marginBottom: '32px', maxWidth: '448px', lineHeight: '1.6', fontWeight: '500'}}>Developing elite athletes. Building champions. Albuquerque's trusted volleyball program since 2010.</p>
              <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                <button onClick={() => navigate('/tryouts')} style={{background: '#dc2626', color: '#ffffff', padding: '12px 32px', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 10px 15px rgba(0,0,0,0.2)'}}>2026 Tryouts</button>
                <button onClick={() => navigate('/programs')} style={{border: '2px solid #ffffff', color: '#ffffff', padding: '12px 32px', fontWeight: 'bold', borderRadius: '8px', background: 'transparent', cursor: 'pointer', fontSize: '16px'}}>View Programs</button>
              </div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
              {[
                { num: '15+', label: 'Years Strong', sub: 'Proven since 2010' },
                { num: '7', label: 'Master Coaches', sub: 'USAV Certified' },
                { num: '3', label: 'Program Levels', sub: 'Club, Hybrid, Academy' },
                { num: '✓', label: 'USAV Sanctioned', sub: 'Sun Country Region' }
              ].map((stat, i) => (
                <div key={i} style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', padding: '24px'}}>
                  <div style={{fontSize: '48px', fontWeight: 'bold', color: stat.num === '✓' ? '#4ade80' : '#f87171', marginBottom: '8px'}}>{stat.num}</div>
                  <p style={{color: '#ffffff', fontWeight: 'bold', fontSize: '14px'}}>{stat.label}</p>
                  <p style={{color: '#d1d5db', fontSize: '12px', marginTop: '8px'}}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', backgroundColor: '#ffffff'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{marginBottom: '64px'}}>
            <h2 style={{fontSize: '48px', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>Why Angels?</h2>
            <div style={{height: '4px', background: '#dc2626', width: '80px'}}></div>
          </div>
          <p style={{fontSize: '20px', color: '#4b5563', marginBottom: '64px', maxWidth: '768px', lineHeight: '1.6'}}>We're not just another volleyball club. We're a legacy built on proven coaching, competitive results, and genuine care for our athletes.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
            {[
              { icon: Award, title: "Expert Coaching", desc: "Master coaches with decades of combined experience, certifications, and a track record of developing collegiate athletes." },
              { icon: Trophy, title: "Proven Results", desc: "15 years of developing athletes who succeed at the collegiate level and beyond. Our alumni speak for themselves." },
              { icon: Users, title: "Better Value", desc: "Top-tier training at significantly lower costs than competing clubs. More money in your pocket, same excellence on court." }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{backgroundColor: '#f9fafb', padding: '32px', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
                  <Icon style={{width: '48px', height: '48px', color: '#dc2626', marginBottom: '16px'}} />
                  <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '12px'}}>{item.title}</h3>
                  <p style={{color: '#4b5563', lineHeight: '1.6'}}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
