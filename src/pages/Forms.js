import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const documents = [
  {
    title: '2026-27 Handbook',
    description: 'Angels of Albuquerque Handbook. Season policies, coaching standards, practices, tournaments, payment and refund policy, and the grievance procedure.',
    file: 'angels-handbook-2026-27.pdf',
    downloadName: 'Angels of Alb VBC_Handbook_26-27.pdf',
    type: 'PDF',
    size: '65.8 KB',
  },
  {
    title: 'Code of Conduct',
    description: 'Parent and guardian code of conduct for the 2026-27 season.',
    file: 'angels-parent-code-of-conduct-2026-27.pdf',
    downloadName: 'Angels of Alb VBC_Code of Conduct_26-27.pdf',
    type: 'PDF',
    size: '61.7 KB',
  },
  {
    title: 'Player Code of Conduct',
    description: 'Angels player code of conduct and team commitment for the 2026-27 season.',
    file: 'angels-player-code-of-conduct-2026-27.pdf',
    downloadName: 'Angels of Alb VBC_Player Code of Conduct_26-27.pdf',
    type: 'PDF',
    size: '57.4 KB',
  },
  {
    title: 'Medical Release (WITHOUT Notary)',
    description: 'USAV Youth and Junior Volleyball Player Medical Release template. Print it, fill it out, and turn in the signed hard copy.',
    file: 'medical-release-form-template.docx',
    downloadName: 'TEMPLATE-Medical-Release-WITHOUT-Notary.docx',
    type: 'Word Doc',
    size: '29.9 KB',
  },
];

export default function Forms() {
  const [headRef, headVisible] = useScrollReveal();
  const [docsRef, docsVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">Parent Forms</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Club teams: by submitting your first payment you acknowledge that you have read, understand, and agree with the handbook, the code of conduct, and the player code of conduct below.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={docsRef} className={`max-w-4xl mx-auto reveal ${docsVisible ? 'is-visible' : ''}`}>
          <div className="space-y-6">
            {documents.map((doc) => (
              <div key={doc.file} className="card-cut bg-taupe-light p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">{doc.type} · {doc.size}</p>
                  <h2 className="font-display text-2xl font-bold text-ink uppercase mb-2">{doc.title}</h2>
                  <p className="text-ink/70 text-sm leading-relaxed max-w-xl">{doc.description}</p>
                </div>
                <a
                  href={`${process.env.PUBLIC_URL}/documents/${doc.file}`}
                  download={doc.downloadName}
                  className="bg-maroon hover:bg-maroon-dark text-white font-bold px-8 py-3 text-sm uppercase tracking-wider transition-colors text-center whitespace-nowrap"
                >
                  Download
                </a>
              </div>
            ))}
          </div>

          <div className="bg-maroon text-white p-6 mt-8">
            <p className="font-bold">Medical release: hard copies only</p>
            <p className="text-white/80 text-sm mt-2 leading-relaxed">
              Club dues must be current, and coaches must have a signed USAV medical release form before a player will be added to tournament rosters. Print the form, fill it out, and turn it in at the first practice. Coaches need these forms at practices and tournaments.
            </p>
          </div>

          <p className="text-ink/70 text-sm mt-8 leading-relaxed">
            Questions about registration can go to the club at{' '}
            <a className="font-bold text-maroon" href="mailto:angelsofalbuquerque@hotmail.com">angelsofalbuquerque@hotmail.com</a>
            {' '}or the <Link className="font-bold text-maroon" to="/contact">leadership contacts</Link> listed in the handbook.
          </p>
        </div>
      </section>
    </div>
  );
}
