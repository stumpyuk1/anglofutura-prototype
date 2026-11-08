export default function Evidence() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Act / Tools</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Map + evidence packs.</h1>

      <p className="text-lg text-steel mb-8">
        Short, factual one-pagers that show what a specific site could deliver. Drop them into local WhatsApp, Facebook, Discord, or renter groups. Facts travel further than slogans.
      </p>

      <div className="bg-navy p-6 rounded border border-amber/30 mb-10">
        <h2 className="text-2xl font-bold mb-3">How to make one</h2>
        <ol className="list-decimal list-inside space-y-2 text-steel">
          <li>Find a live scheme on the <a href="https://www.build-on.org.uk/map" className="text-amber hover:underline" target="_blank" rel="noopener noreferrer">Build On map</a> or a council portal.</li>
          <li>Pull the key numbers: homes proposed, site size, density, any energy or infrastructure element.</li>
          <li>Add one local context figure (rent as % of under-40 income, or local housing shortfall).</li>
          <li>Keep it to one page. No rhetoric. Just the facts and the link to comment.</li>
          <li>Share it. Ask one other person to post it.</li>
        </ol>
      </div>

      <div className="space-y-8 mb-10">
        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">Housing evidence pack template</h2>
          <div className="bg-charcoal p-4 rounded font-mono text-sm text-steel">
            <strong>Site:</strong> [Address / name]<br />
            <strong>Homes proposed:</strong> [number]<br />
            <strong>Type:</strong> [family homes / mixed / etc.]<br />
            <strong>Site size:</strong> [hectares]<br />
            <strong>Density:</strong> [dph]<br /><br />
            <strong>Local context:</strong><br />
            Average rent = [X]% of under-40 take-home pay<br />
            Years to save a deposit: [Y]<br />
            Homes refused in this ward last year: [Z]<br /><br />
            <strong>Comment by:</strong> [deadline]<br />
            <strong>Link:</strong> [council portal or Build On map]<br /><br />
            Well-designed homes on suitable land. The alternative is more locked-out renters.
          </div>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">Energy / capacity evidence pack template</h2>
          <div className="bg-charcoal p-4 rounded font-mono text-sm text-steel">
            <strong>Project:</strong> [SMR / grid / industrial load name]<br />
            <strong>Capacity:</strong> [MW or homes equivalent]<br />
            <strong>Location:</strong> [site]<br />
            <strong>What it unlocks:</strong> [factories / data / heating]<br /><br />
            <strong>Local context:</strong><br />
            Current industrial energy cost or connection delay: [figure]<br /><br />
            <strong>Status:</strong> [planning / connection queue / etc.]<br />
            <strong>Link:</strong> [planning or developer page]<br /><br />
            Abundant domestic base-load is the foundation of industry and heating. This project is part of it.
          </div>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold text-amber mb-3">Where to share</h2>
          <ul className="list-disc list-inside space-y-2 text-steel">
            <li>Local renter or young professional WhatsApp / Discord groups</li>
            <li>University housing campaigns</li>
            <li>Key-worker or hospital staff networks</li>
            <li>Ward or constituency Facebook groups (factual posts only)</li>
            <li>With the candidate scorecard — “This is the scheme the candidates were asked about”</li>
          </ul>
          <p className="mt-4 text-steel">One clear pack in the right group is worth more than ten vague posts.</p>
        </div>
      </div>

      <div className="bg-navy p-6 rounded border border-white/10">
        <h2 className="text-2xl font-bold mb-3">Start with a live scheme</h2>
        <p className="text-steel mb-3">
          You can support any undecided scheme in Great Britain — it does not have to be near you. Open the Build On map, pick one well-designed application anywhere in the country, fill the housing template, and share it. National capacity is built one site at a time.
        </p>
        <p className="text-steel text-sm mb-4">
          The Build On map shows larger undecided housing applications across England with direct links to the relevant council portals. Anyone in Great Britain can submit a representation on any scheme; you do not need to live in the local area.
        </p>
        <a
          href="https://www.build-on.org.uk/map"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber font-bold hover:underline"
        >
          Open the map →
        </a>
        <span className="mx-3 text-steel">|</span>
        <a href="/act" className="text-amber font-bold hover:underline">
          Back to local action →
        </a>
      </div>
    </div>
  );
}
