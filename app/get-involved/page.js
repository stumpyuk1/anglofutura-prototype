'use client';

import { useState } from 'react';

export default function GetInvolved() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Anglofutura — Get Involved');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLocation / area: ${location}\n\n${message}`
    );
    window.location.href = `mailto:networkcommonsgov@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Get Involved</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Join the movement.</h1>

      <p className="text-lg text-steel mb-8">
        Tell us who you are and how you want to contribute. The form opens your email client addressed to the movement.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-navy border border-white/20 rounded px-4 py-3 text-white focus:border-amber outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-navy border border-white/20 rounded px-4 py-3 text-white focus:border-amber outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Location / area (optional)</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-navy border border-white/20 rounded px-4 py-3 text-white focus:border-amber outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">How do you want to get involved?</label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-navy border border-white/20 rounded px-4 py-3 text-white focus:border-amber outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-amber text-charcoal font-bold px-8 py-4 rounded hover:bg-copper transition"
        >
          Send via email
        </button>
      </form>

      <p className="mt-8 text-sm text-steel">
        This opens your email app with the message pre-filled to networkcommonsgov@gmail.com. You can also write directly to that address.
      </p>
    </div>
  );
}
