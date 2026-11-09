import React from 'react';
import { Mail } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const leadership = [
  { name: 'Brian Sanchez', title: 'Founder, Club Director', handbook: 'Handbook: Executive Director', email: 'Brian@angelsofalbuquerque.com' },
  { name: 'Theresa Sanchez', title: 'Founder, Co-Director', handbook: 'Handbook: Associate Director', email: 'Theresa@angelsofalbuquerque.com' },
  { name: 'Lucy Mora', title: 'Treasurer', handbook: 'Listed in the 2026-27 Club Handbook', email: 'Lucy@angelsofalbuquerque.com' },
];

export default function Contact() {
  const [headRef, headVisible] = useScrollReveal();
  const [methodsRef, methodsVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Contact</h1>
          <div className="h-1 w-20 bg-maroon mx-auto mb-8 rule-cut" />
          <p className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            The 2026-27 Club Handbook asks families to contact the club administrator, and lists the leadership emails below.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={methodsRef} className={`max-w-3xl mx-auto reveal ${methodsVisible ? 'is-visible' : ''}`}>
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-maroon" />
            </div>
            <h2 className="text-2xl font-bold text-ink mb-3">Club email</h2>
            <a href="mailto:angelsofalbuquerque@hotmail.com" className="text-ink font-bold text-lg hover:text-maroon">
              angelsofalbuquerque@hotmail.com
            </a>
            <p className="text-ink/70 text-sm mt-2">Website: www.angelsofalbuquerque.com</p>
          </div>

          <div className="bg-taupe-light p-8 sm:p-12">
            <h2 className="font-display text-3xl font-bold text-ink mb-8 text-center uppercase tracking-tight">Club Leadership</h2>
            <div className="grid grid-cols-1 gap-6">
              {leadership.map((person) => (
                <div key={person.email} className="card-cut bg-white p-6">
                  <div className="w-14 h-14 bg-maroon flex items-center justify-center text-white font-bold text-2xl mb-4" aria-hidden="true">
                    {person.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1">{person.name}</h3>
                  <p className="text-sm font-semibold text-maroon mb-1">{person.title}</p>
                  <p className="text-xs text-ink/60 mb-3">{person.handbook}</p>
                  <a href={`mailto:${person.email}`} className="text-sm text-ink hover:text-maroon">{person.email}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
