import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import ProgramSubNav from '../components/ProgramSubNav';
import ParticipantAgreementForm from '../components/ParticipantAgreementForm';

const ACADEMY_PAY_URL = 'https://checkout.square.site/merchant/TXG1VAH1KVKJK/checkout/VVOZ3X6AD23QYFBPSY6MSYZZ?src=sheet';

const skills = [
  'Serving', 'Passing', 'Setting', 'Hitting', 'Blocking',
  'Defensive Skills', 'Positional Training', 'Court Awareness', 'Volleyball IQ',
];

export default function Academy() {
  const [headRef, headVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [detailsRef, detailsVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <ProgramSubNav />
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-4 uppercase tracking-tight">Angels Training Academy</h1>
          <p className="text-2xl text-maroon-light font-bold uppercase tracking-wide">Ages 11–17</p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-16 px-6 bg-paper">
        <div ref={detailsRef} className={`max-w-4xl mx-auto reveal ${detailsVisible ? 'is-visible' : ''}`}>
          <div className="bg-maroon text-white p-6 mb-8">
            <p className="font-bold">No practice November 24 and November 26</p>
            <p className="text-white/80 text-sm mt-1">
              November 3 was also listed as a no-practice date and has already passed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card-cut bg-taupe-light p-8">
              <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Where</p>
              <p className="text-2xl font-bold text-ink mb-2">LBJ Middle School</p>
              <p className="text-ink/80 text-sm leading-relaxed">
                Gym on the west side of the school<br />
                6811 Taylor Ranch Dr NW<br />
                Albuquerque, NM 87120
              </p>
            </div>
            <div className="card-cut bg-taupe-light p-8">
              <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">When</p>
              <p className="text-2xl font-bold text-ink mb-2">Tuesdays and Thursdays</p>
              <p className="text-ink/80 text-sm">5:30 PM – 7:00 PM</p>
            </div>
            <div className="card-cut bg-white border border-taupe p-8 sm:col-span-2">
              <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Cost</p>
              <ul className="text-ink space-y-2 text-lg font-medium">
                <li>Only $20 per training session</li>
                <li>Pay online or at the gym</li>
                <li>Pay only for the days you attend</li>
              </ul>
              <a
                href={ACADEMY_PAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-maroon hover:bg-maroon-dark text-white font-bold px-8 py-3 uppercase tracking-wider text-sm transition-colors"
              >
                Pay now
              </a>
            </div>
          </div>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-taupe-light">
        <div ref={aboutRef} className={`max-w-3xl mx-auto reveal ${aboutVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 uppercase tracking-tight">Training</h2>
          <div className="h-1 w-20 bg-maroon mb-8 rule-cut" />
          <div className="space-y-5 text-ink/80 leading-relaxed">
            <p>
              At our volleyball training academy, athletes are developed through a complete, fundamentals-based approach designed to build strong, confident, and well-rounded players. We focus on every aspect of the game including serving, passing, setting, hitting, blocking, defensive skills, positional training, court awareness, and overall volleyball IQ.
            </p>
            <p>
              All training sessions are led by experienced master coaches who are passionate about teaching proper technique, skill development, and the fundamentals needed for long-term success on the court. Whether an athlete is just beginning their volleyball journey or competing at an advanced level, our programs are designed to meet players where they are and help them reach their full potential. Advanced players that attend the academy may given an opportunity to be evaluated by our club coaches for placement on a club team or hybrid team.
            </p>
            <p>
              We welcome athletes ages 10–17 of all skill levels. Our training philosophy focuses on strengthening fundamentals, enhancing each athlete’s natural strengths, and improving areas that need development. Beyond volleyball skills, we are committed to building confidence, endurance, strength, coordination, quickness, discipline, and a strong work ethic that carries over both on and off the court.
            </p>
            <p>
              Our goal is to create a positive, challenging, and encouraging environment where athletes grow as players, teammates, and individuals while developing a true passion for the game.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {skills.map((skill) => (
              <span key={skill} className="bg-white text-ink font-bold text-sm px-4 py-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section id="participant-agreement" className="py-24 px-6 bg-paper">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-ink mb-4 uppercase tracking-tight">Participant Agreement</h2>
          <div className="h-1 w-20 bg-maroon mb-10 rule-cut" />
          <ParticipantAgreementForm program="Academy" />
        </div>
      </section>
    </div>
  );
}
