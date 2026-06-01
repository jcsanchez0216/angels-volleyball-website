import React, { useState } from 'react';
import { Menu, X, ChevronRight, Instagram, Mail, Phone } from 'lucide-react';

export default function AngelsWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const coaches = [
    {
      name: "Brian Sanchez",
      title: "Founder & Club Director",
      level: "Master Coach",
      bio: "15+ years of coaching expertise. Developed athletes from beginners to NCAA Division I level."
    },
    {
      name: "Theresa Sanchez",
      title: "Co-Founder & Co-Director",
      level: "Master Coach",
      bio: "30 years in volleyball. IMPACT, CAP, NMAA Certified. Expert in all age levels."
    },
    {
      name: "Mariah Sanchez",
      title: "Academy Director & Coach",
      level: "Club Coach",
      bio: "Angels alumni, former Cibola High player. Specializes in fundamentals and mental toughness."
    },
    {
      name: "Shannon Figueroa",
      title: "17U & 12U Head Coach",
      bio: "Dedicated to competitive excellence and player development at multiple levels."
    },
    {
      name: "Alejandra 'Ale' Jurado",
      title: "17U & 12U Assistant Coach",
      bio: "6 years competitive volleyball. Creates individualized coaching approaches for each player."
    },
    {
      name: "Trinity Williams",
      title: "14U & 16U Coach",
      bio: "Emphasizes positive reinforcement, mental focus, and keeping the game fun."
    },
    {
      name: "Dylan Begley",
      title: "11U Coach",
      bio: "Competitive since high school. Focuses on teamwork, fundamentals, and game understanding."
    }
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Wings Mark */}
            <div className="flex items-center gap-2">
              <img 
                src="/logos/wings-mark.png" 
                alt="Angels Wings Logo" 
                className="h-10 w-10"
              />
              <span className="hidden sm:block text-sm font-black text-gray-900">ANGELS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['Programs', 'Coaches', 'Tryouts', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700 hover:text-red-700 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {['Programs', 'Coaches', 'Tryouts', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-red-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Logos + Text */}
            <div>
              {/* Wings Mark Logo - Large */}
              <div className="mb-8 flex lg:justify-start justify-center">
                <img 
                  src="/logos/wings-mark-large.png" 
                  alt="Angels Wings Logo" 
                  className="h-24 w-24"
                />
              </div>

              {/* Full "ANGELS VOLLEYBALL" Text Logo */}
              <div className="mb-8">
                <img 
                  src="/logos/angels-text-logo.png" 
                  alt="Angels Volleyball Text Logo" 
                  className="max-w-md"
                />
              </div>

              <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
                Developing elite athletes. Building champions. Albuquerque's trusted volleyball program since 2010.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 font-semibold rounded-lg transition text-lg">
                  2026 Tryouts
                </button>
                <button className="border-2 border-white text-white px-8 py-4 font-semibold rounded-lg hover:bg-white/10 transition text-lg">
                  View Programs
                </button>
              </div>
            </div>

            {/* Right: Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-black text-red-400 mb-2">15+</div>
                <p className="text-white font-medium text-sm">Years Strong</p>
                <p className="text-gray-300 text-xs mt-2">Proven since 2010</p>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-black text-red-400 mb-2">7</div>
                <p className="text-white font-medium text-sm">Master Coaches</p>
                <p className="text-gray-300 text-xs mt-2">USAV Certified</p>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-black text-red-400 mb-2">3</div>
                <p className="text-white font-medium text-sm">Program Levels</p>
                <p className="text-gray-300 text-xs mt-2">Club, Hybrid, Academy</p>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
                <div className="text-4xl font-black text-red-400 mb-2">✓</div>
                <p className="text-white font-medium text-sm">USAV Sanctioned</p>
                <p className="text-gray-300 text-xs mt-2">Sun Country Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Angels */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Why Angels?</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            We're not just another volleyball club. We're a legacy built on proven coaching, competitive results, and genuine care for our athletes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Expert Coaching",
                desc: "Master coaches with decades of combined experience, certifications, and a track record of developing collegiate athletes."
              },
              {
                number: "02",
                title: "Better Value",
                desc: "Top-tier training at significantly lower costs than competing clubs. More money in your pocket, same excellence on court."
              },
              {
                number: "03",
                title: "Proven Results",
                desc: "15 years of developing athletes who succeed at the collegiate level and beyond. Our alumni speak for themselves."
              }
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-red-700 pl-6">
                <div className="text-sm font-black text-red-700 mb-3">{item.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Programs</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            Three paths to excellence. Find the right fit for your athlete.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Club Teams",
                subtitle: "USA Volleyball Junior Olympic",
                desc: "Elite-level competitive teams competing at regional and national tournaments. Intensive training with experienced coaches.",
                price: "Pricing available upon request"
              },
              {
                title: "Hybrid Program",
                subtitle: "Local Competition",
                desc: "Competitive teams with local tournament play. Perfect balance of serious training and community focus.",
                price: "$2,700 per season"
              },
              {
                title: "Academy",
                subtitle: "Skills Development",
                desc: "Specialized training focused on fundamentals. Master Coach instruction in serving, passing, setting, hitting.",
                price: "$20 per session"
              }
            ].map((prog, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-8 hover:border-red-700 hover:shadow-lg transition">
                <h3 className="text-2xl font-black text-gray-900 mb-2">{prog.title}</h3>
                <p className="text-sm font-semibold text-red-700 mb-4">{prog.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{prog.desc}</p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm font-bold text-gray-900">{prog.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12 text-lg">
            All ages 10–18 • Sun Country Region USAV Sanctioned & Insured
          </p>
        </div>
      </section>

      {/* Coaching Staff */}
      <section id="coaches" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Coaching Staff</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            Experienced. Certified. Dedicated to your athlete's growth.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {coaches.map((coach, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:bg-white hover:border-red-700 transition">
                <h3 className="text-xl font-black text-gray-900 mb-1">{coach.name}</h3>
                <p className="text-sm font-semibold text-red-700 mb-3">{coach.title}</p>
                {coach.level && <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">{coach.level}</p>}
                <p className="text-gray-600 leading-relaxed">{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tryouts CTA */}
      <section id="tryouts" className="py-24 px-6 lg:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">2026-2027 Tryouts</h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
            Ready to join the Angels? Tryouts are coming soon.
          </p>

          <div className="grid sm:grid-cols-2 gap-12 mb-12">
            <div className="text-left">
              <h3 className="font-black text-white mb-6 text-lg">What to Bring</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Comfortable athletic clothes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Athletic shoes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Water bottle (spill-proof)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Positive attitude</span>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-black text-white mb-6 text-lg">Tryout Details</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-bold">Ages:</span> 10–18
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-bold">Fee:</span> $20
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-red-400 font-bold">Notification:</span> Within 48 hours
              </p>
              <p className="text-gray-300">
                <span className="text-red-400 font-bold">Dates:</span> Coming soon
              </p>
            </div>
          </div>

          <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 font-bold rounded-lg transition text-lg">
            Get Notified
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">Get in Touch</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="tel:5052809570" className="text-center hover:bg-gray-50 p-6 rounded-lg transition">
              <Phone className="w-12 h-12 mx-auto mb-4 text-red-700" />
              <h3 className="font-bold text-gray-900 mb-2">Call</h3>
              <p className="text-gray-600 font-semibold">(505) 280-9570</p>
            </a>

            <a href="mailto:angelsofalbuquerque@hotmail.com" className="text-center hover:bg-gray-50 p-6 rounded-lg transition">
              <Mail className="w-12 h-12 mx-auto mb-4 text-red-700" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 font-semibold">angelsofalbuquerque@hotmail.com</p>
            </a>

            <a href="https://instagram.com/angels_of_abq_volleyball" target="_blank" rel="noopener noreferrer" className="text-center hover:bg-gray-50 p-6 rounded-lg transition">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-red-700" />
              <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 font-semibold">@angels_of_abq_volleyball</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <img 
              src="/logos/wings-mark.png" 
              alt="Angels Logo" 
              className="h-8 w-8"
            />
            <div>
              <div className="text-sm font-black text-white tracking-tight">ANGELS</div>
              <div className="text-xs text-gray-400 font-semibold">VOLLEYBALL CLUB</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-800">
            <div>
              <h3 className="font-bold text-white mb-4 text-sm">PROGRAMS</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#programs" className="hover:text-white transition">Club Teams</a></li>
                <li><a href="#programs" className="hover:text-white transition">Hybrid</a></li>
                <li><a href="#programs" className="hover:text-white transition">Academy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm">ABOUT</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#coaches" className="hover:text-white transition">Coaching Staff</a></li>
                <li><a href="#about" className="hover:text-white transition">Why Angels</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-sm">FOLLOW</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://instagram.com/angels_of_abq_volleyball" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
                <li><a href="tel:5052809570" className="hover:text-white transition">Phone</a></li>
                <li><a href="mailto:angelsofalbuquerque@hotmail.com" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Angels of Albuquerque Volleyball Club • Founded 2010 by Brian & Theresa Sanchez
          </p>
          <p className="text-xs text-gray-600 mt-2">
            USAV Sanctioned & Insured • Sun Country Region • 501(c)(3) Nonprofit
          </p>
        </div>
      </footer>
    </div>
  );
}
