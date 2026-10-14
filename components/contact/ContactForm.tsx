"use client";

import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 1000);
  }

  if (submitted) {
    return (
      <section className="contact-form contact-success" role="status" aria-live="polite">
        <span className="contact-success-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 4 4L19 6" />
          </svg>
        </span>
        <span className="contact-success-label">MESSAGE RECEIVED</span>
        <h2>Thank you!</h2>
        <p>Your form has been submitted successfully.<br />Our team will be in touch soon.</p>
        <span className="contact-success-progress" aria-hidden="true"><span /></span>
        <span className="contact-success-caption">A fresh form will be ready in a moment</span>
      </section>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span className="contact-kicker">LET&apos;S TALK</span>
        <h2>Send us a message</h2>
        <p>Tell us what you&apos;re building. Our team will get back to you.</p>
      </div>

      <div className="contact-form-grid">
        <label className="contact-field">
          <span>Your name</span>
          <input name="name" type="text" placeholder="e.g. Rahul Sharma" autoComplete="name" required />
        </label>
        <label className="contact-field">
          <span>Work email</span>
          <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
        </label>
        <label className="contact-field">
          <span>Phone <small>(optional)</small></span>
          <input name="phone" type="tel" placeholder="+91" autoComplete="tel" />
        </label>
        <label className="contact-field">
          <span>What can we help with?</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Custom software</option>
            <option>GIS and digital surveys</option>
            <option>Smart education technology</option>
            <option>Internship Courses</option>
            <option>Other enquiry</option>
          </select>
        </label>
        <label className="contact-field contact-field-full">
          <span>Message</span>
          <textarea name="message" placeholder="Share a few details about your project..." rows={5} required />
        </label>
      </div>

      <div className="contact-form-bottom">
        <button className="contact-submit" type="submit">
          Send message
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}

