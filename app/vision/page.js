export default function Vision() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Vision</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">A Britain that builds again.</h1>

      <p className="text-lg text-steel mb-8">
        Every critique of sewage, rust, and £900 box rooms is paired with the alternative: completed classical-modern terraces, operational SMRs, reindustrialised corridors. Not a museum. A laboratory and a foundry.
      </p>

      <img
        src="/images/jL81l.jpg"
        alt="Classical modern housing vision"
        className="w-full rounded mb-12"
      />

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Housing</h2>
          <img
            src="/images/bED3n.jpg"
            alt="High-density classical modern terraces"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <p className="text-lg text-steel mb-3">
            High-density, high-quality classical-modern terraces and family homes that young people can own. Streets that work. Permanence instead of temporary HMO extraction.
          </p>
          <p className="text-lg">
            The alternative to the gerontocratic veto is not rabbit hutches. It is statutory rights for starter homes and family terraces on suitable land, built to a standard that makes ownership normal again for the under-40s.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Energy</h2>
          <img
            src="/images/Xl4VB.jpg"
            alt="Domestic nuclear power"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <p className="text-lg text-steel mb-3">
            Cheap, abundant domestic base-load. Industrial hubs powered by small modular reactors. Bills that do not double. Capacity that supports reindustrialisation.
          </p>
          <p className="text-lg">
            Energy is not a climate seminar topic. It is the foundation of industry, heating, and national capacity. Rolls-Royce SMRs and conventional plant, with connection queues ended, is the minimum viable future.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Infrastructure</h2>
          <img
            src="/images/z3Ms2.jpg"
            alt="Infrastructure and national capacity"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <p className="text-lg text-steel mb-3">
            Railways, roads, and ports that get built. The civilisational toolbox used on purpose: law, empiricism, institutions that outlast a ministry.
          </p>
          <p className="text-lg">
            A Britain that can still do difficult things on purpose. Not endless consultation and veto, but delivery of the infrastructure a high-skill, high-energy country requires.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-navy p-8 rounded border border-white/10">
        <h2 className="text-2xl font-bold mb-4">Post-policy Britain</h2>
        <p className="text-lg text-steel">
          Young people can own a house. Energy is cheap enough to reindustrialise. The nation state remains the arena in which these decisions are made. Construction is high-status again. The veto class no longer holds a generational veto over the future.
        </p>
      </div>

      <p className="mt-12 text-xl">Not a museum. A laboratory and a foundry.</p>
    </div>
  );
}
