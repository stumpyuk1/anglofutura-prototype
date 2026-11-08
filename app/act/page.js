import Link from 'next/link';

export default function Act() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Act</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">How to act locally.</h1>
      <p className="text-lg text-steel mb-10">
        The fastest way to mobilise is to politicise the physical space people occupy. University towns, tech belts, and renter corridors are the beachhead. Start with housing — it is concrete, local, and immediate.
      </p>

      {/* Primary CTA */}
      <div className="bg-navy p-8 rounded border border-amber/30 mb-12">
        <h2 className="text-2xl font-bold mb-3">Start with housing</h2>
        <p className="mb-6">
          Find undecided schemes near you, generate clear evidence-based support letters, and tip the balance against organised NIMBY opposition. Anyone in England can comment on a planning application — you do not have to live next door.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.build-on.org.uk/map"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber text-charcoal font-bold px-6 py-3 rounded hover:bg-copper transition text-center"
          >
            Open the Build On map →
          </a>
          <a
            href="https://www.build-on.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-amber text-amber font-bold px-6 py-3 rounded hover:bg-amber/10 transition text-center"
          >
            Build On toolkit →
          </a>
        </div>
      </div>

      {/* How to act locally sections */}
      <h2 className="text-3xl font-bold mb-6">See how to act locally</h2>

      <div className="space-y-8 mb-12">
        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-3">1. Find a live scheme</h3>
          <p className="text-steel mb-3">
            Use the Build On map to locate undecided larger housing applications. Open the council portal from any marker. Focus on schemes that are well-designed and on suitable land.
          </p>
          <a href="https://www.build-on.org.uk/map" target="_blank" rel="noopener noreferrer" className="text-amber hover:underline">
            Browse the map →
          </a>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-3">2. Submit a clear representation</h3>
          <p className="text-steel mb-3">
            A short, factual letter focused on material planning considerations (housing need, design quality, site suitability, transport) carries more weight than slogans. The Build On toolkit helps you generate one in minutes.
          </p>
          <a href="https://www.build-on.org.uk/" target="_blank" rel="noopener noreferrer" className="text-amber hover:underline">
            Use the toolkit →
          </a>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-3">3. Show up at committee</h3>
          <p className="text-steel">
            Planning committees are public. Attend when a scheme you support is being decided. Speak if allowed, or simply be present. Councillors notice when the room is not only opponents.
          </p>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-3">4. Make building high-status</h3>
          <p className="text-steel">
            Share good schemes. Contrast squalid temporary housing with the classical-modern alternative. The goal is cultural: make the veto look ridiculous and construction look like common sense.
          </p>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-3">5. Connect locally</h3>
          <p className="text-steel mb-3">
            University towns, tech corridors, and high-renter areas are the natural base. Find others who want more homes and infrastructure. Coordinate comments and committee attendance.
          </p>
          <a href="mailto:hello@build-on.org.uk" className="text-amber hover:underline">
            hello@build-on.org.uk
          </a>
        </div>
      </div>

      {/* Stay informed */}
      <div className="bg-navy p-6 rounded border border-white/10">
        <h2 className="text-2xl font-bold mb-3">Stay informed</h2>
        <p className="text-steel mb-4">
          Action alerts and intercepts are coming. For now, use Build On for housing schemes and email hello@build-on.org.uk to get involved.
        </p>
        <p className="text-sm text-steel">
          A dedicated Anglofutura “Get Involved” form will be added here soon.
        </p>
      </div>

      <div className="mt-12">
        <Link href="/build" className="text-amber font-bold hover:underline">
          Read the Build pillar →
        </Link>
      </div>
    </div>
  );
}
