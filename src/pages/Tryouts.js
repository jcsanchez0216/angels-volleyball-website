import React from 'react';

const expectations = [
  { title: 'Professional Evaluation', desc: 'Coaches assess your skills, attitude, and potential across all positions.' },
  { title: 'Team Placement', desc: 'Selected athletes are placed on teams matched to their skill level and age.' },
  { title: 'Fast Notification', desc: "You'll know the results within 48 hours of your tryout." },
  { title: 'Supportive Environment', desc: 'Tryouts are designed to be encouraging, not intimidating.' },
];

const programSummary = [
  { name: 'Academy', price: '$20/session', desc: 'Great for beginners' },
  { name: 'Hybrid', price: '$2,700/season', desc: 'Competitive & flexible' },
  { name: 'Club', price: 'Contact us', desc: 'Elite & intensive' },
];

export default function Tryouts() {
  return (
    <div className="pt-20 bg-paper">
      <section className="pt-24 pb-16 px-6 bg-ink text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">2026 Tryouts</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Are you ready to join the Angels family? Tryouts are coming soon. Limited spots available for all age groups and program levels.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-ink mb-6 uppercase tracking-tight">What to Expect</h2>
            <div className="space-y-6">
              {expectations.map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-taupe-light rounded-xl p-10 border-2 border-maroon">
            <h3 className="font-display text-3xl font-bold text-ink mb-6 uppercase">Tryout Details</h3>
            <div className="space-y-5">
              <div className="pb-5 border-b border-taupe">
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Tryout Fee</p>
                <p className="text-xl font-bold text-ink">$20</p>
              </div>
              <div className="pb-5 border-b border-taupe">
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Dates & Times</p>
                <p className="text-ink">August/September<br />Check back soon for specific dates</p>
              </div>
              <div className="pb-5 border-b border-taupe">
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Notification</p>
                <p className="text-ink">Within 48 hours</p>
              </div>
              <div>
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Age Groups</p>
                <p className="text-ink">10U - 18U<br />All skill levels welcome</p>
              </div>
            </div>
            <button className="w-full bg-maroon hover:bg-maroon-dark text-white font-bold py-4 rounded-lg mt-8 transition-colors">
              Register Interest
            </button>
            <p className="text-ink/70 text-xs text-center mt-3">Limited spots available</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-taupe-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Choose Your Program</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programSummary.map((prog, i) => (
              <div key={i} className="bg-white border border-taupe-light rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-ink mb-3">{prog.name}</h3>
                <p className="text-lg font-bold text-maroon mb-2">{prog.price}</p>
                <p className="text-ink/70 text-sm">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-ink text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight">Ready to Tryout?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Join a club known for developing elite athletes and building champions. Contact us with questions or to register.
          </p>
          <button className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-12 py-4 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
