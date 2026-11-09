import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import ProgramSubNav from '../components/ProgramSubNav';

const levels = [
  {
    id: 'local',
    name: 'Local',
    total: '$2,700',
    monthly: '$375',
    schedule: [
      { month: 'December', events: ['Chili Spike (JAN 2-3) Alb. NM'] },
      { month: 'January', events: ['El Paso Region Preliminary (JAN/FEB TBD) El Paso, TX'] },
      { month: 'February', events: ['Cactus Mini Tournament (FEB TBD) Alb. NM'] },
      { month: 'March', events: ['ARVC Shamrock Shenanigans (MAR TBD) Alb. NM', 'Alb. Preliminary (MAR TBD) Alb. NM'] },
      { month: 'April', events: ['ARVC Spring Slam (APR TBD) Alb. NM', 'Diggin’ it in Durango (APR TBD) Durango, CO'] },
      { month: 'May', events: ['SURVA Championship (MAY TBD) Alb. NM'] },
    ],
  },
  {
    id: 'regional',
    name: 'Regional',
    total: '$3,300',
    monthly: '$525',
    schedule: [
      { month: 'January', events: ['Chili Spike (JAN 2-3) Alb. NM', 'Amarillo Region Preliminary (JAN TBD) Amarillo, TX'] },
      { month: 'February', events: ['El Paso Region Preliminary (JAN/FEB TBD) El Paso, TX', 'Presidente Picante (FEB TBD) Alb. NM'] },
      { month: 'March', events: ['Alb. Preliminary (MAR TBD) Alb. NM'] },
      { month: 'April', events: ['ARVC Spring Slam (APR TBD) Alb. NM', 'Diggin’ it in Durango (APR TBD) Durango, CO'] },
      { month: 'May', events: ['SURVA Championship (MAY TBD) Alb. NM'] },
    ],
  },
  {
    id: 'national',
    name: 'National',
    total: '$3,700',
    monthly: '$625',
    schedule: [
      { month: 'December', events: ['DCVA Candy Cane Challenge (DEC 12-13) Alb. NM'] },
      { month: 'January', events: ['Chili Spike (JAN 2-3) Alb. NM', 'Tucson Cactus Invitational (JAN 16-17), Tucson, AZ'] },
      { month: 'February', events: ['El Paso Region Preliminary (JAN/FEB TBD) El Paso, TX', 'Festival Fiesta Classic (FEB 13-15) Phoenix, AZ'] },
      { month: 'March', events: ['Alb. Preliminary (MAR TBD) Alb. NM'] },
      { month: 'April', events: ['Red Rock Rave (APR 16-18) Las Vegas, NV, or Lone Star Classic (APR 16-18) Houston, TX, or Far Western (APR 23-25) Reno, NV'] },
      { month: 'May', events: ['SURVA Championship (MAY TBD) Alb. NM'] },
    ],
  },
];

function LevelSection({ level }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">{level.name}</h2>
      <div className="h-1 w-20 bg-maroon mx-auto mb-10 rule-cut" />
      <p className="text-center text-ink/60 text-sm mb-8">2026-2027 Angels {level.name} Schedule &amp; Cost</p>

      <div className="card-cut bg-white p-8 md:p-10">
        {level.schedule.map((month, index) => (
          <div key={month.month} className={index > 0 ? 'mt-8 pt-8 border-t border-taupe' : ''}>
            <h3 className="font-display text-2xl font-bold text-ink uppercase mb-4">{month.month}</h3>
            <div className="space-y-3">
              {month.events.map((event) => (
                <p key={event} className="text-ink">{event}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card-cut bg-ink text-white p-8 mt-8 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-maroon-light mb-2">Total cost</p>
        <p className="font-display text-5xl font-bold">{level.total}</p>
      </div>

      <div className="space-y-4 mt-6">
        <div className="card-cut bg-taupe-light p-6">
          <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-1">Uniform package</p>
          <p className="text-ink font-medium">$600 due at team acceptance (no later than July 25)</p>
        </div>
        <div className="card-cut bg-taupe-light p-6">
          <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-1">Tournament package</p>
          <p className="text-ink font-medium">$600 due September 1</p>
        </div>
        <div className="card-cut bg-taupe-light p-6">
          <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-1">Payment plan</p>
          <p className="text-ink font-medium mb-3">Payment due the 1st week of the month</p>
          <ul className="text-ink space-y-1">
            {['1 Oct', '1 Nov', '1 Dec', '1 Jan'].map((date) => (
              <li key={date} className="flex justify-between gap-4 border-t border-taupe/70 pt-2">
                <span>{date}</span>
                <span className="font-bold">{level.monthly}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-ink/50 text-xs text-center mt-6 italic">Dates and schedule are subject to change.</p>
    </div>
  );
}

export default function ClubTeams() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <ProgramSubNav />
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">Angels Club Teams</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            USA Volleyball Junior Olympic teams at the local, regional, and national level.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="py-20 px-6 bg-paper">
        <div className="max-w-3xl mx-auto space-y-5 text-ink/80 leading-relaxed">
          <p>
            A competitive USA Volleyball club team is built through a selective tryout process that identifies athletes who demonstrate not only advanced volleyball skills, but also the qualities necessary to succeed at a high level. Players are chosen based on their technical ability, work ethic, athleticism, coachability, leadership, endurance, volleyball IQ, and commitment to continuous improvement.
          </p>
          <p>
            Beyond talent, selected athletes consistently display strong character, a positive attitude, and a team-first mindset. They support and encourage their teammates, embrace challenges, and contribute to a culture of accountability, respect, and excellence both on and off the court.
          </p>
          <p>
            Guided by experienced and knowledgeable coaches, these teams participate in local, regional, and national competitions throughout the season. Training focuses on advanced skill development, tactical understanding, physical conditioning, mental toughness, and team chemistry. Coaches challenge athletes to reach their full potential while helping them develop confidence, discipline, and leadership skills that extend beyond volleyball.
          </p>
          <p>
            The result is a highly competitive team environment where dedicated athletes work together toward common goals, compete against top-level opponents, and strive for success at every tournament while representing their club with pride, sportsmanship, and integrity.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-10 card-cut bg-taupe-light p-8">
          <p className="font-bold text-ink">Practices tentatively set for Tuesdays and Thursdays. Times and locations TBD.</p>
          <p className="text-ink/80 mt-3">
            Coaches will be assigned after tryouts. For a list of current coaches, see the{' '}
            <Link to="/coaches" className="font-bold text-maroon hover:text-maroon-dark">2026-2027 Coaching Staff</Link>.
          </p>
        </div>
      </section>

      <div className="bg-taupe-light border-y border-taupe px-6 py-3 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
          <span className="text-ink/50 uppercase tracking-wider font-bold text-xs">Jump to</span>
          {levels.map((level) => (
            <a key={level.id} href={`#${level.id}`} className="font-bold text-maroon uppercase tracking-wider hover:text-maroon-dark transition-colors">
              {level.name}
            </a>
          ))}
        </div>
      </div>

      {levels.map((level, index) => (
        <section
          key={level.id}
          id={level.id}
          className={`relative py-24 px-6 scroll-mt-32 ${index % 2 === 0 ? 'bg-taupe-light' : 'bg-paper'}`}
        >
          <LevelSection level={level} />
        </section>
      ))}

      <section className="py-16 px-6 bg-ink text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold uppercase mb-4">Handbook payment policy</h2>
          <p className="text-white/80 leading-relaxed">
            The 2026-27 Club Handbook says a non-refundable uniform deposit is due upon team placement, the remaining balance is paid on a monthly schedule, and payments are due on the 1st of each month. A $20 late fee applies to payments made more than 5 days after the due date. A $50 fee is charged for returned checks. Athletes with delinquent accounts are ineligible to practice or play in tournaments until the balance is paid in full. All club fees are non-refundable.
          </p>
          <p className="text-white/60 text-sm mt-4">
            The published club schedules do not list online checkout links.
          </p>
        </div>
      </section>
    </div>
  );
}
