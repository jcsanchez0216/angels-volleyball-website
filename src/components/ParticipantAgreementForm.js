import React, { useState } from 'react';
import { participantFormConfig } from '../config/participantForm';
import { PARTICIPANT_WAIVER_TEXT } from '../data/participantWaiver';

const SIGNATURE_LABEL =
  'Typing your name here & checking the box next to the agreement & waiver below serves as your electronic signature, confirming that you have read, understand, & agree to the terms of the Angels of ABQ Athlete Participation Agreement';

const fields = [
  { name: 'athleteName', label: 'Athlete Name', autoComplete: 'name' },
  { name: 'dateOfBirth', label: 'Date of Birth', autoComplete: 'bday' },
  { name: 'address', label: 'Address', autoComplete: 'street-address' },
  { name: 'email', label: 'E-mail address', type: 'email', autoComplete: 'email' },
  { name: 'parentName', label: 'Parent/Guardian Name', autoComplete: 'name' },
  { name: 'parentPhone', label: 'Parent/Guardian Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'emergencyContact', label: 'Emergency Contact Name and Phone', autoComplete: 'off' },
];

const blank = () => Object.fromEntries(fields.map((field) => [field.name, '']));

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ParticipantAgreementForm({ program }) {
  const [values, setValues] = useState(blank);
  const [signature, setSignature] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [fieldErrors, setFieldErrors] = useState([]);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(null);

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const missing = [];
    fields.forEach((field) => {
      if (!values[field.name].trim()) missing.push(field.label);
    });
    if (values.email.trim() && !isEmail(values.email.trim())) {
      missing.push('E-mail address must be a valid email');
    }
    if (!signature.trim()) missing.push(SIGNATURE_LABEL);
    if (!agreed) missing.push('Agreement and waiver checkbox');
    setFieldErrors(missing);
    if (missing.length) {
      setStatus('error');
      setMessage('Please correct your input in the following fields:');
      return;
    }

    // Filled honeypot: acknowledge quietly and do not email.
    const snapshot = {
      program,
      'Athlete Name': values.athleteName.trim(),
      'Date of Birth': values.dateOfBirth.trim(),
      Address: values.address.trim(),
      'E-mail address': values.email.trim(),
      'Parent/Guardian Name': values.parentName.trim(),
      'Parent/Guardian Phone': values.parentPhone.trim(),
      'Emergency Contact Name and Phone': values.emergencyContact.trim(),
      'Electronic signature': signature.trim(),
      Agreement: 'Checked',
    };
    if (honeypot.trim()) {
      setSubmitted(snapshot);
      setStatus('success');
      setMessage('Your form message has been successfully sent.');
      return;
    }

    const endpoint = participantFormConfig.endpoint;
    if (!endpoint) {
      setStatus('error');
      setMessage(
        'Error while sending the form. Nothing was emailed, because the form service is not connected yet. Please email angelsofalbuquerque@hotmail.com. To turn delivery on, add a Formspree endpoint for Theresa Sanchez in src/config/participantForm.js.'
      );
      return;
    }

    setStatus('sending');
    setMessage('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Athlete Participant Agreement — ${program}`,
          _replyto: values.email.trim(),
          email: values.email.trim(),
          program,
          athlete_name: values.athleteName.trim(),
          date_of_birth: values.dateOfBirth.trim(),
          address: values.address.trim(),
          parent_guardian_name: values.parentName.trim(),
          parent_guardian_phone: values.parentPhone.trim(),
          emergency_contact_name_and_phone: values.emergencyContact.trim(),
          electronic_signature: signature.trim(),
          agreement_accepted: 'Yes',
          intended_recipient: `${participantFormConfig.recipientName} <${participantFormConfig.recipientEmail}>`,
          _gotcha: honeypot,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const detail = data.error
          || (Array.isArray(data.errors) ? data.errors.map((item) => item.message).filter(Boolean).join(' ') : '');
        throw new Error(detail || 'Error while sending the form. Please try again later.');
      }
      setSubmitted(snapshot);
      setStatus('success');
      setMessage('Your form message has been successfully sent.');
      setValues(blank());
      setSignature('');
      setAgreed(false);
      setFieldErrors([]);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Error while sending the form. Please try again later.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card-cut bg-white p-8 sm:p-10 text-left" role="status">
        <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-3">{program}</p>
        <h3 className="font-display text-3xl font-bold text-ink uppercase mb-4">Your form message has been successfully sent.</h3>
        <p className="text-ink/70 mb-4">You have entered the following data:</p>
        {submitted && (
          <dl className="space-y-3 text-sm">
            {Object.entries(submitted).filter(([key]) => key !== 'program').map(([key, value]) => (
              <div key={key}>
                <dt className="font-bold text-ink">{key}</dt>
                <dd className="text-ink/80">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-cut bg-white p-6 sm:p-10 text-left relative">
      <h3 className="font-display text-3xl font-bold text-ink uppercase mb-2">Athlete Participant Agreement</h3>
      <p className="text-ink/70 text-sm mb-8">
        Angels of Albuquerque Volleyball Club Athlete Participant Agreement. Fields marked with * are required.
      </p>

      {status === 'error' && (
        <div className="bg-maroon text-white p-4 mb-8" role="alert">
          <p className="font-bold">{message}</p>
          {fieldErrors.length > 0 && (
            <ul className="list-disc pl-5 mt-2 text-sm text-white/90 space-y-1">
              {fieldErrors.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={`${program}-${field.name}`} className="block text-sm font-bold text-ink mb-2">
              {field.label} <span className="text-maroon">*</span>
            </label>
            <input
              id={`${program}-${field.name}`}
              name={field.name}
              type={field.type || 'text'}
              autoComplete={field.autoComplete}
              required
              value={values[field.name]}
              onChange={update}
              className="w-full border border-taupe bg-paper px-4 py-3 text-ink focus:outline-none focus:border-maroon"
            />
          </div>
        ))}

        <div>
          <label htmlFor={`${program}-signature`} className="block text-sm font-bold text-ink mb-2">
            {SIGNATURE_LABEL} <span className="text-maroon">*</span>
          </label>
          <textarea
            id={`${program}-signature`}
            name="electronicSignature"
            required
            rows={3}
            value={signature}
            onChange={(event) => setSignature(event.target.value)}
            className="w-full border border-taupe bg-paper px-4 py-3 text-ink focus:outline-none focus:border-maroon"
          />
        </div>
      </div>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${program}-company`}>Company</label>
        <input
          id={`${program}-company`}
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="mt-8 border border-taupe bg-taupe-light/40 p-4 sm:p-6">
        <label className="flex items-start gap-3 font-bold text-ink">
          <input
            type="checkbox"
            name="legal"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            className="mt-1 h-4 w-4 accent-maroon"
            required
          />
          <span>* I have read and agree to the participant agreement and waiver below.</span>
        </label>
        <div className="mt-4 max-h-[28rem] overflow-y-auto bg-white border border-taupe p-4 text-sm leading-relaxed text-ink whitespace-pre-wrap">
          {PARTICIPANT_WAIVER_TEXT}
        </div>
      </div>

      <p className="text-ink/60 text-sm mt-6">
        <strong className="text-ink">Note:</strong> Fields marked with * are required.
      </p>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 bg-maroon hover:bg-maroon-dark disabled:opacity-60 text-white font-bold px-8 py-3 uppercase tracking-wider text-sm transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Send form'}
      </button>
    </form>
  );
}
