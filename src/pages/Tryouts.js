import React from 'react';

export default function Tryouts() {
  return (
    <div style={{paddingTop: '80px', backgroundColor: '#ffffff'}}>
      <section style={{paddingTop: '96px', paddingBottom: '64px', padding: '96px 24px 64px 24px', background: 'linear-gradient(90deg, #b91c1c, #7f1d1d)', color: '#ffffff'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto', textAlign: 'center'}}>
          <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>2026 Tryouts</h1>
          <p style={{fontSize: '20px', lineHeight: '1.6', maxWidth: '768px', margin: '0 auto', color: '#fee2e2'}}>Are you ready to join the Angels family? Tryouts are coming soon. Limited spots available for all age groups and program levels.</p>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', backgroundColor: '#ffffff'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
            <div>
              <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '24px'}}>What to Expect</h2>
              <div style={{space: '24px'}}>
                {[
                  { title: 'Professional Evaluation', desc: 'Coaches assess your skills, attitude, and potential across all positions.' },
                  { title: 'Team Placement', desc: 'Selected athletes are placed on teams matched to their skill level and age.' },
                  { title: 'Fast Notification', desc: 'You\'ll know the results within 48 hours of your tryout.' },
                  { title: 'Supportive Environment', desc: 'Tryouts are designed to be encouraging, not intimidating.' }
                ].map((item, i) => (
                  <div key={i} style={{marginBottom: '24px'}}>
                    <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '8px'}}>{item.title}</h3>
                    <p style={{color: '#4b5563', lineHeight: '1.6'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{backgroundColor: '#f9fafb', padding: '40px', borderRadius: '12px', border: '2px solid #dc2626'}}>
              <h3 style={{fontSize: '28px', fontWeight: 'bold', color: '#111827', marginBottom: '24px'}}>Tryout Details</h3>
              <div style={{space: '16px'}}>
                <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                  <p style={{fontSize: '12px', fontWeight: 'bold', color: '#dc2626', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em'}}>Tryout Fee</p>
                  <p style={{fontSize: '20px', fontWeight: 'bold', color: '#111827'}}>$20</p>
                </div>
                <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                  <p style={{fontSize: '12px', fontWeight: 'bold', color: '#dc2626', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em'}}>Dates & Times</p>
                  <p style={{fontSize: '16px', color: '#111827'}}>August/September<br/>Check back soon for specific dates</p>
                </div>
                <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #e5e7eb'}}>
                  <p style={{fontSize: '12px', fontWeight: 'bold', color: '#dc2626', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em'}}>Notification</p>
                  <p style={{fontSize: '16px', color: '#111827'}}>Within 48 hours</p>
                </div>
                <div>
                  <p style={{fontSize: '12px', fontWeight: 'bold', color: '#dc2626', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em'}}>Age Groups</p>
                  <p style={{fontSize: '16px', color: '#111827'}}>10U - 18U<br/>All skill levels welcome</p>
                </div>
              </div>
              <button style={{width: '100%', backgroundColor: '#dc2626', color: '#ffffff', padding: '16px', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px', marginTop: '32px'}}>Register Interest</button>
              <p style={{color: '#6b7280', fontSize: '12px', textAlign: 'center', marginTop: '12px'}}>Limited spots available</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', backgroundColor: '#f9fafb'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <h2 style={{fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', textAlign: 'center'}}>Choose Your Program</h2>
          <div style={{height: '4px', background: '#dc2626', width: '80px', margin: '0 auto 64px'}}></div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            {[
              { name: 'Academy', price: '$20/session', desc: 'Great for beginners' },
              { name: 'Hybrid', price: '$2,700/season', desc: 'Competitive & flexible' },
              { name: 'Club', price: 'Contact us', desc: 'Elite & intensive' }
            ].map((prog, i) => (
              <div key={i} style={{backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '12px'}}>{prog.name}</h3>
                <p style={{fontSize: '18px', fontWeight: 'bold', color: '#dc2626', marginBottom: '8px'}}>{prog.price}</p>
                <p style={{color: '#4b5563', fontSize: '14px'}}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', background: 'linear-gradient(90deg, #b91c1c, #7f1d1d)', color: '#ffffff', textAlign: 'center'}}>
        <div style={{maxWidth: '64rem', margin: '0 auto'}}>
          <h2 style={{fontSize: '42px', fontWeight: 'bold', marginBottom: '24px'}}>Ready to Tryout?</h2>
          <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '32px', color: '#fee2e2'}}>Join a club known for developing elite athletes and building champions. Contact us with questions or to register.</p>
          <button style={{backgroundColor: '#ffffff', color: '#b91c1c', padding: '16px 48px', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px'}}>Contact Us</button>
        </div>
      </section>
    </div>
  );
}
