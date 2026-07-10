"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-8 grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {/* TODO: Connect this form to Formspree, Resend, or another form provider. */}
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Name
        <input name="name" className="border border-line bg-paper px-4 py-3 font-normal focus:outline-none focus:ring-2 focus:ring-rose" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Email
        <input name="email" type="email" className="border border-line bg-paper px-4 py-3 font-normal focus:outline-none focus:ring-2 focus:ring-rose" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Subject
        <input name="subject" className="border border-line bg-paper px-4 py-3 font-normal focus:outline-none focus:ring-2 focus:ring-rose" required />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Message
        <textarea name="message" rows={6} className="border border-line bg-paper px-4 py-3 font-normal focus:outline-none focus:ring-2 focus:ring-rose" required />
      </label>
      <button type="submit" className="bg-charcoal px-6 py-3 text-sm font-bold text-paper hover:bg-rose focus:outline-none focus:ring-2 focus:ring-rose">Submit</button>
      {sent ? <p className="border border-line bg-cream p-4 text-sm font-semibold text-charcoal">Thanks! This demo form shows the success state. Connect a provider before launch.</p> : null}
    </form>
  );
}
