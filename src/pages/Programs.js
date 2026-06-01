import React from 'react';

export default function Programs() {
  const programs = [
    { name: "Academy", price: "$20/session", description: "Perfect for beginners and developing young athletes. Learn fundamentals in a supportive environment.", age: "Ages 10-14", details: "Focus on learning the basics, building confidence, and having fun. Great for new players!" },
    { name: "Hybrid", price: "$2,700/season", description: "Competitive training with flexible tournament schedule. Balance development with competition.", age: "Ages 11-18", details: "Train hard and compete! Mix of skill development and tournament play throughout the season." },
    { name: "Club", price: "Contact for pricing", description: "Elite competitive program. Multiple tournaments, advanced skill development, college prep.", age: "Ages 14-18", details: "Our most competitive program. Designed for serious athletes aiming for college recruitment." }
  ];

  return (
    <div style={{paddingTop: '80px', backgroundColor: '#1a1a1a'}}>
      <section style={{paddingTop: '96px', paddingBottom: '64px', padding: '96px 24px 64px 24px', backgroundColor: '#111111'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>Our Programs</h1>
          <div style={{height: '4px', background: '#dc2626', width: '80px', marginBottom: '32px'}}></div>
          <p style={{fontSize: '20px', color: '#4b5563', maxWidth: '768px', lineHeight: '1.6'}}>Choose the program that fits your goals. All programs include expert coaching, structured development, and a supportive team environment.</p>
        </div>
      </section>

      <section style={{paddingTop: '64px', paddingBottom: '96px', padding: '64px 24px 96px 24px', backgroundColor: '#1a1a1a'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px'}}>
            {programs.map((prog, i) => (
              <div key={i} style={{backgroundColor: '#1a1a1a', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb', overflow: 'hidden', transition: 'transform 0.3s', cursor: 'pointer'}} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{background: 'linear-gradient(90deg, #dc2626, #b91c1c)', padding: '32px', color: '#ffffff'}}>
                  <h2 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '12px'}}>{prog.name}</h2>
                  <div style={{fontSize: '36px', fontWeight: 'bold'}}>{prog.price}</div>
                  <p style={{fontSize: '12px', fontWeight: 'bold', color: '#fee2e2', textTransform: 'uppercase', marginTop: '12px', letterSpacing: '0.05em'}}>{prog.age}</p>
                </div>
                <div style={{padding: '32px'}}>
                  <p style={{color: '#4b5563', lineHeight: '1.6', marginBottom: '16px', fontSize: '16px', fontWeight: '500'}}>{prog.description}</p>
                  <p style={{color: '#6b7280', lineHeight: '1.6', fontSize: '14px'}}>{prog.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', backgroundColor: '#111111'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <h2 style={{fontSize: '42px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', textAlign: 'center'}}>What's Included in All Programs</h2>
          <div style={{height: '4px', background: '#dc2626', width: '80px', margin: '0 auto 64px'}}></div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px'}}>
            {[
              { title: 'Expert Coaching', desc: 'Master coaches with IMPACT, SafeSport, and USAV certifications' },
              { title: 'Team Environment', desc: 'Build lifelong friendships in a supportive, competitive setting' },
              { title: 'Skill Development', desc: 'Progressive training focused on technical and mental growth' },
              { title: 'Tournament Play', desc: 'Compete against top clubs throughout the season' },
              { title: 'Leadership Training', desc: 'Develop life skills beyond volleyball' },
              { title: 'College Prep', desc: 'Resources and coaching to prepare for college recruitment' }
            ].map((item, i) => (
              <div key={i} style={{backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
                <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '12px'}}>{item.title}</h3>
                <p style={{color: '#4b5563', fontSize: '14px', lineHeight: '1.6'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
