"use client";

import { useState } from "react";

// TODO(backend): wire form submission to Resend + a server action (or Formspree).
// Right now this mirrors the prototype — prevent default and swap the button to a
// success label. Replace with a real POST handler when the backend is ready.

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(backend): POST to /api/contact or call a server action.
    setStatus("submitting");
    // Mirror the prototype's optimistic swap — no real network call yet.
    setTimeout(() => setStatus("done"), 200);
  }

  const buttonLabel =
    status === "done" ? "Received — thank you" : "Send Message";

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="c-name">
          Full Name <span />
        </label>
        <input
          id="c-name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          disabled={status === "done"}
        />
      </div>
      <div className="field">
        <label htmlFor="c-email">
          Email <span />
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          placeholder="name@email.com"
          disabled={status === "done"}
        />
      </div>
      <div className="field">
        <label htmlFor="c-phone">
          Phone <span className="opt">Optional</span>
        </label>
        <input
          id="c-phone"
          name="phone"
          type="tel"
          placeholder="(___) ___-____"
          disabled={status === "done"}
        />
      </div>
      <div className="field">
        <label htmlFor="c-message">
          Message <span />
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          placeholder="What are you preparing for — a home purchase, an SBA package, a document audit? A sentence or two is plenty to start."
          disabled={status === "done"}
        />
      </div>
      <div className="form-submit">
        <button
          type="submit"
          className="btn"
          disabled={status !== "idle"}
          style={status === "done" ? { opacity: 0.7 } : undefined}
        >
          {buttonLabel}
          {status !== "done" && <span className="arr">→</span>}
        </button>
        <span className="note">
          By sending, you agree to the{" "}
          <a href="/disclaimers">privacy policy</a>.
        </span>
      </div>
    </form>
  );
}
