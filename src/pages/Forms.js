import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const documents = [
  {
    title: 'Club Handbook',
    description: 'Season policies, coaching staff standards, practice and tournament expectations, payment and refund policy, and the grievance procedure.',
    file: 'angels-handbook-2026-27.pdf',
    type: 'PDF',
    size: '66 KB',
  },
  {
    title: 'Parent & Guardian Code of Conduct',
    description: 'Expectations for parents and guardians supporting their athlete throughout the season.',
    file: 'angels-parent-code-of-conduct-2026-27.pdf',
    type: 'PDF',
    size: '62 KB',
  },
  {
    title: 'Player Code of Conduct',
    description: 'Standards of conduct and commitment expected of every athlete representing the club.',
    file: 'angels-player-code-of-conduct-2026-27.pdf',
    type: 'PDF',
    size: '57 KB',
  },
  {
    title: 'Youth & Junior Volleyball Medical Release Form',
    description: 'Required for every athlete before joining a tournament roster. Print, complete legibly, and sign by hand.',
    file: 'medical-release-form-template.docx',
    type: 'Word Doc',
    size: '30 KB',
  },
];

export default function Forms() {
  const navigate = useNavigate();
  const [headRef, headVisible] = useScrollReveal();
  const [docsRef, docsVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">Club Forms &amp; Handbook</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Required reading and paperwork for every Angels family. By submitting your first payment, you acknowledge that you have read, understand, and agree with all forms and statements below.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={docsRef} className={`max-w-4xl mx-auto reveal ${docsVisible ? 'is-visible' : ''}`}>
          <div className="space-y-6">
            {documents.map((doc, i) => (
              <div key={i} className="card-cut bg-taupe-light p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">{doc.type} &middot; {doc.size}</p>
                  <h2 className="font-display text-2xl font-bold text-ink uppercase mb-2">{doc.title}</h2>
                  <p className="text-ink/70 text-sm leading-relaxed max-w-xl">{doc.description}</p>
                </div>
                <a
                  href={`${process.env.PUBLIC_URL}/documents/${doc.file}`}
                  download
                  className="bg-maroon hover:bg-maroon-dark text-white font-bold px-8 py-3 text-sm uppercase tracking-wider transition-colors text-center whitespace-nowrap"
                >
                  Download
                </a>
              </div>
            ))}
          </div>

          <div className="bg-maroon text-white p-6 mt-8">
            <p className="font-bold">Medical Release Form: Hard Copies Only</p>
            <p className="text-white/80 text-sm mt-1">
              Coaches must have a signed Medical Release Form on file before a player joins a tournament roster. Print the form, complete it legibly, and submit the signed hard copy to your coach at your athlete's first practice.
            </p>
          </div>
        </div>
        <div className="divider-cut bg-ink" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-ink text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight">Questions?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Reach out to club leadership if you have any questions about these forms or your athlete's registration.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-12 py-4 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
