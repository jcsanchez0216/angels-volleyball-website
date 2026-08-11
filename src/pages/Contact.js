import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'angelsofalbuquerque@hotmail.com', action: 'Send us an email anytime' },
  { icon: Phone, label: 'Phone', value: '(505) 280-9570', action: 'Call us during business hours' },
  { icon: Instagram, label: 'Instagram', value: '@angels_of_abq_volleyball', action: 'Follow us for updates' },
];

const leadership = [
  { name: 'Brian Sanchez', title: 'Founder & Executive Director', email: 'Brian@angelsofalbuquerque.com' },
  { name: 'Theresa Sanchez', title: 'Founder & Associate Director', email: 'Theresa@angelsofalbuquerque.com' },
];

export default function Contact() {
  const [headRef, headVisible] = useScrollReveal();
  const [methodsRef, methodsVisible] = useScrollReveal();
  const [addressRef, addressVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Get in Touch</h1>
          <div className="h-1 w-20 bg-maroon mx-auto mb-8 rule-cut" />
          <p className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Have questions? Want to register for tryouts? We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={methodsRef} className={`max-w-7xl mx-auto reveal ${methodsVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {contactMethods.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-maroon" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-3">{item.label}</h3>
                  <p className="text-ink font-bold text-lg mb-2">{item.value}</p>
                  <p className="text-ink/70 text-sm">{item.action}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-taupe-light p-12">
            <h2 className="font-display text-3xl font-bold text-ink mb-8 text-center uppercase tracking-tight">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {leadership.map((person, i) => (
                <div key={i} className="card-cut bg-white p-6">
                  <div className="w-14 h-14 bg-maroon rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {person.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1">{person.name}</h3>
                  <p className="text-sm font-semibold text-maroon mb-3">{person.title}</p>
                  <p className="text-[13px] text-ink/70">{person.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-taupe-light text-center">
        <div ref={addressRef} className={`max-w-3xl mx-auto reveal ${addressVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl font-bold text-ink mb-8 uppercase tracking-tight">Mailing Address</h2>
          <div className="card-cut bg-white p-8">
            <p className="text-ink leading-loose font-medium">
              Angels of Albuquerque Volleyball Club<br />
              PO Box 67171<br />
              Albuquerque, NM 87193
            </p>
          </div>
        </div>
        <div className="divider-cut bg-ink" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-ink text-center text-white">
        <div ref={ctaRef} className={`max-w-3xl mx-auto reveal ${ctaVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold mb-6 uppercase tracking-tight">Questions?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            We're here to help! Contact us with any questions about our programs, tryouts, or anything else.
          </p>
          <button className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-12 py-4 transition-colors">
            Send us a Message
          </button>
        </div>
      </section>
    </div>
  );
}
