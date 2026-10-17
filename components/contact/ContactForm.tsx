

"use client";

import { useState } from 'react';
import type { FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Dynamic Email Subject Line for Contact Form
    formData.append("_subject", "New Contact Form Message - SDV Edutech");

    try {
      // Formspree Contact Form Endpoint
      const response = await fetch("https://formspree.io/f/xzedobor", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
        window.setTimeout(() => setSubmitted(false), 4000);
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Submission failed. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
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
            <option value="Custom software">Custom software</option>
            <option value="GIS and digital surveys">GIS and digital surveys</option>
            <option value="Smart education technology">Smart education technology</option>
            <option value="Internship Courses">Internship Courses</option>
            <option value="Other enquiry">Other enquiry</option>
          </select>
        </label>
        <label className="contact-field contact-field-full">
          <span>Message</span>
          <textarea name="message" placeholder="Share a few details about your project..." rows={5} required />
        </label>
      </div>

      <div className="contact-form-bottom">
        <button className="contact-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
