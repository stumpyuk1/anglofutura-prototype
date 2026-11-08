'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/build', label: 'Build' },
    { href: '/power', label: 'Power' },
    { href: '/defend', label: 'Defend' },
    { href: '/vision', label: 'Vision' },
    { href: '/act', label: 'Act' },
    { href: '/blog', label: 'Blog' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ANGLOFUTURA
        </Link>
        <button
          className="md:hidden text-amber"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-amber transition">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 py-3 space-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 hover:text-amber"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
