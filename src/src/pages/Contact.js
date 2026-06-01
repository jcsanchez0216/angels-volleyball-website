import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const BG = '#1a1a1a';
const CARD_BG = '#242424';
const MAROON = '#7b1426';
const MAROON_LIGHT = '#c0394e';
const WHITE = '#ffffff';
const GREY_TEXT = '#d1d1d1';
const MUTED = '#9a9a9a';

export default function Contact() {
  return (
    <div style={{ backgroundColor: BG }}>

      {/* Header */}
      <section style={{ paddingTop: '120px', paddingBottom: '56px', padding: '120px 24px 56px', backgroundColor: '#111111', borderBottom: `2px solid ${MAROON}` }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', color: WHITE, marginBottom: '12px' }}>Get in Touch</h1>
          <div style={{ height: '4px', background: MAROON, width: '60px', margin: '0 auto 24px' }}></div>
          <p style={{ fontSize: '18px', color: GREY_TEXT, maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
            Have questions? Want to register for tryouts? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ padding: '72px 24px', backgroundColor: BG }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '72px' }}>
            {[
              { icon: Mail, label: 'Email', value: 'angelsofalbuquerque@hotmail.com', action: 'Send us an email anytime' },
              { icon: Phone, label: 'Phone', value: '(505) 280-9570', action: 'Call us during business hours' },
              { icon: Instagram, label: 'Instagram', value: '@angels_of_abq_volleyball', action: 'Follow us for updates' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ backgroundColor: CARD_BG, padding: '32px', borderRadius: '10px', border: '1px solid #333', textAlign: 'center', borderTop: `3px solid ${MAROON}` }}>
                  <div style={{ width: '64px', height: '64px', background: `linear-gradient(135deg, ${MAROON}, #4a0d18)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <Icon style={{ width: '28px', height: '28px', color: WHITE }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: WHITE, marginBottom: '10px' }}>{item.label}</h3>
                  <p style={{ color: GREY_TEXT, fontWeight: '600', fontSize: '15px', marginBottom: '6px' }}>{item.value}</p>
                  <p style={{ color: MUTED, fontSize: '13px' }}>{item.action}</p>
                </div>
              );
            })}
          </div>

          {/* Leadership */}
          <div style={{ backgroundColor: CARD_BG, borderRadius: '10px', padding: '48px', border: '1px solid #333' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: WHITE, marginBottom: '8px', textAlign: 'center' }}>Our Leadership</h2>
            <div style={{ height: '4px', background: MAROON, width: '50px', margin: '0 auto 40px' }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {[
                { name: 'Brian Sanchez', title: 'Founder & Executive Director', email: 'Brian@angelsofalbuquerque.com' },
                { name: 'Theresa Sanchez', title: 'Founder & Associate Director', email: 'Theresa@angelsofalbuquerque.com' },
                { name: 'Lucy Mora', title: 'Treasurer', email: 'Lucy@angelsofalbuquerque.com' }
              ].map((person, i) => (
                <div key={i} style={{ backgroundColor: '#2e2e2e', padding: '24px', borderRadius: '8px', border: '1px solid #3a3a3a' }}>
                  <div style={{ width: '48px', height: '48px', background: `linear-gradient(135deg, ${MAROON}, #4a0d18)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: WHITE, fontWeight: '700', fontSize: '20px', marginBottom: '14px' }}>
                    {person.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: WHITE, marginBottom: '4px' }}>{person.name}</h3>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: MAROON_LIGHT, marginBottom: '10px' }}>{person.title}</p>
                  <p style={{ fontSize: '13px', color: MUTED }}>{person.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mailing Address */}
      <section style={{ padding: '56px 24px', backgroundColor: '#111111' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: WHITE, marginBottom: '24px' }}>Mailing Address</h2>
          <div style={{ backgroundColor: CARD_BG, padding: '28px', borderRadius: '10px', border: '1px solid #333' }}>
            <p style={{ fontSize: '15px', color: GREY_TEXT, lineHeight: '2', fontWeight: '500' }}>
              Angels of Albuquerque Volleyball Club<br />
              PO Box 67171<br />
              Albuquerque, NM 87193
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
