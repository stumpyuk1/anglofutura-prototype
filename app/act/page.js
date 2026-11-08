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
          <p className="text-steel mb-4">
            The veto class wins culturally when opposition looks normal and building looks greedy or low-quality. Reverse that. Treat well-designed construction as a civilisational good and the organised block as an extraction of the young.
          </p>
          <ul className="text-steel space-y-2 list-disc list-inside mb-3">
            <li>Share completed or proposed classical-modern terraces and family homes, not just abstract “housing units.”</li>
            <li>Contrast damp HMOs, box rooms, and temporary accommodation with permanent streets that work.</li>
            <li>Post the numbers: local housing shortfall, rents as a share of under-40 income, years to save a deposit.</li>
            <li>When a good scheme is approved, say so publicly. When a bad veto wins, name the cost in homes not built.</li>
            <li>Use the language of competence and permanence rather than “development” or “units.”</li>
          </ul>
          <p className="text-steel">
            The goal is cultural: make the veto look ridiculous and construction look like common sense.
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

        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-3">6. Track outcomes and name the cost</h3>
          <p className="text-steel mb-4">
            Approvals and refusals are public. Record them. The veto is strongest when its consequences stay invisible.
          </p>
          <ul className="text-steel space-y-2 list-disc list-inside mb-3">
            <li>Note the date, scheme, and decision for every application you support or watch.</li>
            <li>When a scheme is refused, calculate or estimate the homes not built and the years of delay.</li>
            <li>Publish short local summaries: “This ward refused X homes this year. Average rent is Y% of under-40 take-home.”</li>
            <li>Keep a simple shared list (spreadsheet or group chat) so patterns become obvious to others.</li>
            <li>Contrast the refusal with the classical-modern alternative that could have been built instead.</li>
          </ul>
          <p className="text-steel">
            Making the cost visible is how the veto loses legitimacy.
          </p>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-3">7. Recruit one other person</h3>
          <p className="text-steel mb-4">
            One committed commenter or committee attendee multiplies. The under-40 renter cohort is large but unorganised. Start small.
          </p>
          <ul className="text-steel space-y-2 list-disc list-inside mb-3">
            <li>Send the Build On map link to one person who is currently renting or locked out.</li>
            <li>Offer to draft a first representation with them using the toolkit.</li>
            <li>Invite them to a single committee meeting. Presence is easier than speaking.</li>
            <li>Share one concrete local number (rent share, deposit years, or homes refused) so the issue feels immediate.</li>
            <li>If they engage, introduce them to hello@build-on.org.uk or a local group chat.</li>
          </ul>
          <p className="text-steel">
            Movement grows by repeated low-friction recruitment, not by waiting for a perfect organisation.
          </p>
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
