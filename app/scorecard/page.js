export default function Scorecard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Act / Tools</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Candidate scorecard & canvassing pack.</h1>

      <p className="text-lg text-steel mb-8">
        A short, repeatable way to find out where local councillors and parliamentary candidates stand on building, energy, and the nation state as the democratic arena. Use it on the doorstep, in emails, or at hustings.
      </p>

      <div className="bg-navy p-6 rounded border border-amber/30 mb-10">
        <h2 className="text-2xl font-bold mb-3">The three questions</h2>
        <p className="text-steel mb-4">Ask these in order. Record the answers. Score each Yes / Partial / No.</p>
        <ol className="list-decimal list-inside space-y-3 text-lg">
          <li><strong>Build:</strong> Will you support statutory rights for well-designed starter homes and family terraces on suitable land, and vote against the organised veto that blocks them?</li>
          <li><strong>Power:</strong> Will you support abundant domestic base-load nuclear (including SMRs) and the grid connections needed for industry, rather than treating energy as a climate seminar topic?</li>
          <li><strong>Defend:</strong> Do you treat the nation state as the primary arena of democratic self-government, or do you support further transfer of decisions to supra-national or post-national bodies that cannot be voted out?</li>
        </ol>
      </div>

      <div className="space-y-8 mb-10">
        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">How to score</h2>
          <ul className="space-y-2 text-steel">
            <li><strong>Yes</strong> — Clear commitment that matches the question.</li>
            <li><strong>Partial</strong> — Hedged, conditional, or “I support the principle but…”</li>
            <li><strong>No</strong> — Explicit opposition or refusal to answer.</li>
          </ul>
          <p className="mt-4 text-steel">Three Yes answers = strong. Two Yes = usable. One or zero = does not understand the lock-out.</p>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">Doorstep / email script</h2>
          <p className="text-steel mb-3 italic">
            “I’m speaking to candidates about three things that matter to people under 40 who are locked out of housing and watching industry decline. Can I ask you three short questions?”
          </p>
          <p className="text-steel">Then ask the three questions above. Note the answers. Thank them and move on. Do not debate on the doorstep.</p>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">Simple scorecard (copy or print)</h2>
          <div className="bg-charcoal p-4 rounded font-mono text-sm text-steel">
            Candidate: ___________________________<br />
            Ward / Seat: _________________________<br />
            Date: ________________________________<br /><br />
            Build: &nbsp;&nbsp; Yes / Partial / No &nbsp;&nbsp; Notes: _______________<br />
            Power: &nbsp; Yes / Partial / No &nbsp;&nbsp; Notes: _______________<br />
            Defend: Yes / Partial / No &nbsp;&nbsp; Notes: _______________<br /><br />
            Overall: _____ / 3 Yes
          </div>
          <p className="mt-3 text-sm text-steel">Photograph or type the completed card and share it in local groups.</p>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">How to use the results</h2>
          <ul className="list-disc list-inside space-y-2 text-steel">
            <li>Share completed scorecards in local WhatsApp, Facebook, or renter groups.</li>
            <li>At hustings or public meetings, ask the three questions again and note consistency.</li>
            <li>For councillors, focus on the Build question first — it is local and immediate.</li>
            <li>For parliamentary candidates, weight Power and Defend more heavily.</li>
            <li>Publish a short local summary: “Of the candidates in this seat, X scored 3/3, Y scored 1/3.”</li>
          </ul>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">Follow-up letter (optional)</h2>
          <p className="text-steel mb-3">If a candidate gives a clear Yes, send a short confirmation:</p>
          <p className="text-steel italic">
            “Thank you for confirming your support for [Build / Power / Defend]. We will be sharing this with local groups of people under 40 who are locked out of housing and watching national capacity decline. If your position changes, please let us know.”
          </p>
        </div>
      </div>

      <div className="bg-navy p-6 rounded border border-white/10">
        <h2 className="text-2xl font-bold mb-3">Next steps</h2>
        <p className="text-steel mb-4">
          Print or screenshot the scorecard. Ask the three questions. Share the results. The veto is strongest when no one asks candidates to choose.
        </p>
        <a href="/act" className="text-amber font-bold hover:underline">
          Back to local action →
        </a>
      </div>
    </div>
  );
}
