import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const coaches = [
  {
    name: 'Brian Sanchez',
    title: 'Angels of Albuquerque Club Director',
    level: 'Master Coach',
    paragraphs: [
      'With over 15 years of coaching experience and a lifelong passion for the game, Coach Brian has dedicated himself to developing athletes both on and off the volleyball court. Coaching since 2010, he has worked with players at every level—from beginners learning the fundamentals of the game to elite national-level athletes who have gone on to compete at the NCAA Division I level.',
      'Known for his strong emphasis on player development, Coach Brian focuses not only on building technical skill and volleyball IQ, but also on helping athletes grow in confidence, leadership, discipline, and character. His coaching philosophy centers around creating a positive, competitive environment where players are challenged to reach their full potential while learning the value of teamwork, accountability, and perseverance.',
      'Coach Brian has played competitive volleyball since 1995 and brings decades of playing experience to his coaching style. His background includes both indoor hard court volleyball and sand/beach volleyball, giving athletes a well-rounded understanding of the game and helping them develop versatile skill sets that translate across all levels of competition.',
      'Throughout his career, Coach Brian has earned a reputation for building strong athletes, strong teams, and strong individuals—making a lasting impact on players long after their volleyball careers continue beyond the court.',
    ],
  },
  {
    name: 'Theresa Sanchez',
    title: 'Angels of Albuquerque Co-Director',
    level: 'Master Coach',
    paragraphs: [
      'Theresa Sanchez, better known as “Coach T,” is a Master Volleyball Coach and Co-Founder of the Angels of Albuquerque Volleyball Club with more than three decades of experience in the sport. Since beginning her playing career in 1995, Coach T has competed in both indoor hard court and sand/beach volleyball, developing a deep understanding of the game from every angle.',
      'Since 2010, Coach T has dedicated herself to coaching and mentoring athletes of all ages and skill levels, from 10U beginners to elite national-level players who have gone on to compete at the Division I collegiate level. Known for her fundamentally focused coaching style, she emphasizes strong technical development, discipline, teamwork, and confidence both on and off the court.',
      'Throughout her coaching career, Coach T has led and contributed to elementary, middle school, and high school volleyball programs while also mentoring and teaching coaching strategies to fellow coaches. Her passion for player development extends far beyond volleyball skills — she is deeply committed to teaching life lessons that help athletes grow into strong, confident, and successful individuals.',
      'Coach T’s impact on the volleyball community has positively influenced countless players and families throughout her tenure. She holds IMPACT Certification, CAP Certification, and an NMAA Coaching License, reflecting her commitment to excellence, education, and the continued growth of the sport.',
      'Respected for her leadership, knowledge, and dedication, Coach T continues to build athletes, mentor coaches, and shape the future of volleyball in New Mexico and beyond.',
    ],
  },
  {
    name: 'Mariah Sanchez',
    title: 'Angels of Albuquerque Academy Director',
    level: 'Club Coach',
    paragraphs: [
      'Angels of Albuquerque Academy Director and Angels Alumni, Mariah Sanchez has been passionate about volleyball since the age of 12 and has played competitive club volleyball since 2010. A former player for Cibola High School, Mariah competed at a high level throughout her career, including qualifying for Nationals.',
      'Since beginning her coaching career in 2018, Mariah has dedicated herself to developing athletes both on and off the court. As an Academy Coach and Director, she specializes in building strong fundamentals and creating well-rounded players with expertise in setting, serving, passing, and hitting. Her coaching style emphasizes discipline, hard work, and confidence while helping athletes grow into complete competitors.',
      'Mariah is also deeply focused on strength and conditioning, healthy lifestyle habits, nutrition, overall wellbeing, and mental toughness. Fully invested in each athlete’s personal and athletic development, she is committed to helping players reach their highest potential while creating a positive and supportive environment for growth.',
    ],
  },
  {
    name: 'Vanessa Perez',
    title: 'Group Skills Training Coach & Private Instructor',
    level: 'Master Coach',
    paragraphs: [
      'I played college volleyball as a setter at Arizona Western College followed by three years at Chicago State University. I have coached Vball off and on since the age of 18 (over 20 years…). I love the sport of volleyball and am passionate about coaching young players. My coaching philosophy: do the basics well, out hustle your opponents, and perform under pressure. When I coach, I push for skill development, mental toughness, teamwork and shaping volleyball intelligence. I believe that losing is a better teacher than winning. My favorite players to coach are those that have a strong work ethic, are super vocal, lead by example, and are willing to fail in order to grow.',
    ],
  },
  {
    name: 'Trinity Williams',
    title: 'Head Coach',
    paragraphs: [
      'Coach Trinity brings a diverse athletic background and a deep passion for player development to the court. Growing up in Colorado, her volleyball journey began early, attending summertime volleyball camps at her local high school during her elementary school years and later playing for her middle school team. This early foundation paved the way for high school volleyball and three years of club volleyball, where she gained versatile court experience playing as a setter, outside hitter, and opposite hitter.',
      'Before finding a home in Albuquerque a few years ago, Trinity started her coaching career by spending a few years coaching high school golf while earning her Bachelor’s degree in Finance. Since relocating, she has continued to invest in the local sports community with the Angels of Albuquerque Volleyball Club, most recently serving as the assistant coach for both a 14s and a 16s team this past season.',
      'When not working as an accountant, she stays active with sand volleyball, bowling, and weightlifting. As a mentor, Trinity firmly believes that players thrive and learn best through positive reinforcement. She emphasizes that playing a sport requires strong mental focus and a resilient attitude, and she is dedicated to keeping the game fun while helping athletes grow into well-rounded students and individuals both on and off the court.',
    ],
  },
  {
    name: 'Dylan Begley',
    title: '11U Club Coach',
    paragraphs: [
      'Dylan has been involved in competitive volleyball since his high school years, playing both high school and club volleyball and competing at the AAU level in 1989. During his senior year, he assisted in coaching both freshman and varsity girls volleyball teams, developing an early passion for mentoring athletes and teaching the fundamentals of the game.',
      'In addition to his coaching experience, Dylan continued to compete for many years in local indoor and outdoor volleyball leagues, gaining valuable experience across multiple styles of play. His background as both a player and coach allows him to connect with athletes of all skill levels while emphasizing teamwork, fundamentals, and a strong understanding of the game.',
    ],
  },
];

export default function Coaches() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light">
        <div ref={headRef} className={`max-w-3xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Meet Our Coaches</h1>
          <div className="h-1 w-20 bg-maroon mb-8 rule-cut" />
          <p className="text-xl text-ink/70 leading-relaxed">
            2026-2027 coaching staff. The club handbook says every Angels coach is IMPACT and SafeSport certified, registered with USAV, and has passed a background check.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="py-20 px-6 bg-paper">
        <div className="max-w-3xl mx-auto space-y-12">
          {coaches.map((coach) => (
            <article key={coach.name} className="card-cut bg-taupe-light/50 p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 shrink-0 bg-maroon flex items-center justify-center text-white font-bold text-xl" aria-hidden="true">
                  {coach.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-ink">{coach.name}</h2>
                  <p className="text-sm font-semibold text-maroon mt-1">{coach.title}</p>
                  {coach.level && (
                    <p className="text-[11px] font-bold text-white uppercase tracking-wide mt-3 inline-block bg-ink px-2.5 py-1.5">
                      {coach.level}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-4 text-ink/80 leading-relaxed">
                {coach.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
          <p className="text-ink/60 italic text-center">Check back soon for more updates.</p>
        </div>
      </section>
    </div>
  );
}
