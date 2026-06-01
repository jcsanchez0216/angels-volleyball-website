import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{paddingTop: '80px', backgroundColor: '#1a1a1a'}}>
      <section style={{paddingTop: '96px', paddingBottom: '64px', padding: '96px 24px 64px 24px', backgroundColor: '#111111'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto', textAlign: 'center'}}>
          <h1 style={{fontSize: '48px', fontWeight: 'bold', color: '#111827', marginBottom: '16px'}}>Get in Touch</h1>
          <div style={{height: '4px', background: '#dc2626', width: '80px', margin: '0 auto 32px'}}></div>
          <p style={{fontSize: '20px', color: '#4b5563', maxWidth: '768px', margin: '0 auto', lineHeight: '1.6'}}>Have questions? Want to register for tryouts? We'd love to hear from you. Reach out using any of the methods below.</p>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', backgroundColor: '#1a1a1a'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginBottom: '96px'}}>
            {[
              { icon: Mail, label: "Email", value: "angelsofalbuquerque@hotmail.com", action: "Send us an email anytime" },
              { icon: Phone, label: "Phone", value: "(505) 280-9570", action: "Call us during business hours" },
              { icon: Instagram, label: "Instagram", value: "@angels_of_abq_volleyball", action: "Follow us for updates" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{textAlign: 'center'}}>
                  <div style={{width: '80px', height: '80px', background: '#fee2e2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'}}>
                    <Icon style={{width: '40px', height: '40px', color: '#dc2626'}} />
                  </div>
                  <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '12px'}}>{item.label}</h3>
                  <p style={{color: '#111827', fontWeight: 'bold', fontSize: '18px', marginBottom: '8px'}}>{item.value}</p>
                  <p style={{color: '#4b5563', fontSize: '14px'}}>{item.action}</p>
                </div>
              );
            })}
          </div>

          <div style={{backgroundColor: '#111111', borderRadius: '12px', padding: '48px', border: '1px solid #e5e7eb'}}>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '32px', textAlign: 'center'}}>Our Leadership</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px'}}>
              {[
                { name: 'Brian Sanchez', title: 'Founder & Executive Director', email: 'Brian@angelsofalbuquerque.com' },
                { name: 'Theresa Sanchez', title: 'Founder & Associate Director', email: 'Theresa@angelsofalbuquerque.com' },
                { name: 'Lucy Mora', title: 'Treasurer', email: 'Lucy@angelsofalbuquerque.com' }
              ].map((person, i) => (
                <div key={i} style={{backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
                  <div style={{width: '56px', height: '56px', background: '#dc2626', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: '24px', marginBottom: '16px'}}>
                    {person.name.charAt(0)}
                  </div>
                  <h3 style={{fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '4px'}}>{person.name}</h3>
                  <p style={{fontSize: '14px', fontWeight: '600', color: '#dc2626', marginBottom: '12px'}}>{person.title}</p>
                  <p style={{fontSize: '13px', color: '#4b5563'}}>{person.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', backgroundColor: '#111111'}}>
        <div style={{maxWidth: '64rem', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '32px'}}>Mailing Address</h2>
          <div style={{backgroundColor: '#1a1a1a', padding: '32px', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
            <p style={{fontSize: '16px', color: '#111827', lineHeight: '1.8', fontWeight: '500'}}>
              Angels of Albuquerque Volleyball Club<br/>
              PO Box 67171<br/>
              Albuquerque, NM 87193
            </p>
          </div>
        </div>
      </section>

      <section style={{paddingTop: '96px', paddingBottom: '96px', padding: '96px 24px', background: 'linear-gradient(90deg, #b91c1c, #7f1d1d)', color: '#ffffff'}}>
        <div style={{maxWidth: '64rem', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '42px', fontWeight: 'bold', marginBottom: '24px'}}>Questions?</h2>
          <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '32px', color: '#fee2e2'}}>We're here to help! Contact us with any questions about our programs, tryouts, or anything else.</p>
          <button style={{backgroundColor: '#1a1a1a', color: '#b91c1c', padding: '16px 48px', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px'}}>Send us a Message</button>
        </div>
      </section>
    </div>
  );
}
