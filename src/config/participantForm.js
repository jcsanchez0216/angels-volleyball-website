/**
 * Athlete Participant Agreement — where submissions should go.
 *
 * Theresa Sanchez is a founder and the Associate Director named in the
 * 2026-27 Club Handbook (Parent Forms download):
 *   Theresa@angelsofalbuquerque.com
 * The live IONOS form does not publish a recipient. If that handbook
 * address is not the inbox she wants, replace `recipientEmail` here
 * (or set REACT_APP_PARTICIPANT_FORM_EMAIL). No other file needs to change.
 *
 * GitHub Pages cannot send email by itself. Create a form at
 * https://formspree.io with her address, confirm Formspree’s verification
 * email, then paste the endpoint below or in .env as
 * REACT_APP_PARTICIPANT_FORM_ENDPOINT (see .env.example). Example:
 *   https://formspree.io/f/abcdwxyz
 * Until `endpoint` is set, the form still works in the browser and shows
 * an error on submit instead of pretending the email went out.
 */
const fromEnv = (name) => (process.env[name] || '').trim();

export const participantFormConfig = {
  recipientName: 'Theresa Sanchez',
  recipientEmail: fromEnv('REACT_APP_PARTICIPANT_FORM_EMAIL') || 'Theresa@angelsofalbuquerque.com',
  endpoint: fromEnv('REACT_APP_PARTICIPANT_FORM_ENDPOINT'),
};
