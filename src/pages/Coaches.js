import React from 'react';

export default function Coaches() {
  const coaches = [
    { name: "Brian Sanchez", title: "Founder & Club Director", level: "Master Coach", bio: "15+ years of coaching expertise. Developed athletes from beginners to NCAA Division I level." },
    { name: "Theresa Sanchez", title: "Co-Founder & Co-Director", level: "Master Coach", bio: "30 years in volleyball. IMPACT, CAP, NMAA Certified. Expert in all age levels." },
    { name: "Mariah Sanchez", title: "Academy Director & Coach", level: "Club Coach", bio: "Angels alumni, former Cibola High player. Specializes in fundamentals and mental toughness." },
    { name: "Shannon Figueroa", title: "17U & 12U Head Coach", bio: "Dedicated to competitive excellence and player development at multiple levels." },
    { name: "Alejandra 'Ale' Jurado", title: "17U & 12U Assistant Coach", bio: "6 years competitive volleyball. Creates individualized coaching approaches for each player." },
    { name: "Trinity Williams", title: "14U & 16U Coach", bio: "Emphasizes positive reinforcement, mental focus, and keeping the game fun." },
    { name: "Dylan Begley", title: "11U Coach", bio: "Competitive since high school. Focuses on teamwork, fundamentals, and game understanding." }
  ];

  return (
    <div style={{paddingTop: '80px', backgroundColor: '#ffffff'}}>
      <section style={{paddingTop: '96px', paddingBottom: '64px', padding: '96px 24px 64px 24px', backgroundColor: '#f9fafb'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>Our Coaching Staff</h1>
          <div style={{height: '4px', background: '#dc2626', width: '80px', marginBottom: '32px'}}></div>
          <p style={{fontSize: '20px', color: '#4b5563', maxWidth: '768px', lineHeight: '1.6'}}>Meet the world-class coaches who develop elite athletes. All coaches are IMPACT Certified, SafeSport trained, and registered with USAV.</p>
        </div>
      </section>

      <section style={{paddingTop: '64px', paddingBottom: '96px', padding: '64px 24px 96px 24px', backgroundColor: '#ffffff'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
            {coaches.map((coach, i) => (
              <div key={i} style={{background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', transition: 'border-color 0.3s'}} onMouseOver={(e) => e.currentTarget.style.borderColor = '#dc2626'} onMouseOut={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
                <div style={{width: '56px', height: '56px', background: '#dc2626', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: '20px', marginBottom: '16px'}}>
                  {coach.name.charAt(0)}
                </div>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#111827'}}>{coach.name}</h3>
                <p style={{fontSize: '14px', fontWeight: '600', color: '#dc2626', marginTop: '6px'}}>{coach.title}</p>
                {coach.level && <p style={{fontSize: '11px', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', marginTop: '12px', display: 'inline-block', backgroundColor: '#ffffff', padding: '6px 10px', borderRadius: '4px', letterSpacing: '0.03em'}}>{coach.level}</p>}
                <p style={{color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginTop: '16px'}}>{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
