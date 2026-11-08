export default function Act() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Act</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Low-friction on-ramps.</h1>
      <p className="text-lg text-steel mb-8">
        Targeted at university towns, tech belts, and renter corridors. The fastest way to mobilise is to politicise the physical space people occupy.
      </p>
      <div className="space-y-6">
        <div className="bg-navy p-6 rounded border border-white/10">
          <h2 className="text-2xl font-bold mb-2">Housing action</h2>
          <p className="mb-4">Find undecided schemes, generate evidence-based support letters, tip the balance.</p>
          <a href="https://www.build-on.org.uk/map" target="_blank" rel="noopener noreferrer" className="text-amber font-bold hover:underline">
            Open the Build On map →
          </a>
        </div>
        <div className="bg-navy p-6 rounded border border-white/10">
          <h2 className="text-2xl font-bold mb-2">Local planning</h2>
          <p>Show up to committees. Submit representations. Make building high-status and the veto ridiculous.</p>
        </div>
        <div className="bg-navy p-6 rounded border border-white/10">
          <h2 className="text-2xl font-bold mb-2">Stay informed</h2>
          <p>Intercepts and action alerts. (Newsletter coming.)</p>
        </div>
      </div>
    </div>
  );
}
