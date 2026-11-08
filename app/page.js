import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23E08B2E\" fill-opacity=\"0.15\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <p className="text-amber text-sm tracking-widest uppercase mb-4">Build. Power. Defend.</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            BUILD.<br />POWER.<br />DEFEND.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-steel mb-8">
            Britain is not short of land, energy, or talent. It is short of permission. A generation is trapped paying half its income for a damp room while the veto class blocks the houses, reactors, and railways that would make a life possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/act"
              className="bg-amber text-charcoal font-bold px-8 py-4 rounded hover:bg-copper transition text-center"
            >
              Start building
            </Link>
            <Link
              href="/about"
              className="border border-amber text-amber font-bold px-8 py-4 rounded hover:bg-amber/10 transition text-center"
            >
              The three pillars
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnosis */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">You were not meant to own a home.</h2>
        <p className="text-lg text-steel max-w-3xl mb-6">
          The planning system, nutrient neutrality rules, and heritage vetoes are not conservation. They are gerontocratic sabotage. Mainstream conservatism protects housing wealth and triple-locked pensions. Progressive liberalism offers symbolic politics while the material eviction continues.
        </p>
        <p className="text-lg max-w-3xl">
          Anglofuturism is the alternative: an insurgent, pro-growth movement that treats construction as a generational civil right.
        </p>
      </section>

      {/* Pillars */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">The three pillars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-6 rounded">
              <h3 className="text-2xl font-bold text-amber mb-3">Build</h3>
              <p className="text-steel">Immediate statutory planning rights for starter homes and high-density family terraces. High-quality classical modern architecture, not rabbit hutches.</p>
              <Link href="/build" className="inline-block mt-4 text-amber hover:underline">Explore →</Link>
            </div>
            <div className="border border-white/10 p-6 rounded">
              <h3 className="text-2xl font-bold text-amber mb-3">Power</h3>
              <p className="text-steel">Abundant, cheap, domestic base-load nuclear and gas. End the grid connection queues that strangle industry.</p>
              <Link href="/power" className="inline-block mt-4 text-amber hover:underline">Explore →</Link>
            </div>
            <div className="border border-white/10 p-6 rounded">
              <h3 className="text-2xl font-bold text-amber mb-3">Defend</h3>
              <p className="text-steel">End the taxpayer-funded legal aid and NGO compliance loops that stall national development. Defend the capacity of the nation to act.</p>
              <Link href="/defend" className="inline-block mt-4 text-amber hover:underline">Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision teaser */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">A Britain that builds again</h2>
        <p className="text-lg text-steel max-w-3xl mb-8">
          A Britain that builds again is a Britain where young people can own a house, energy is cheap enough to reindustrialise, and the civilisational toolbox (law, empiricism, institutions that outlast a ministry) is used on purpose. Not a museum. A laboratory and a foundry.
        </p>
        <Link href="/vision" className="text-amber font-bold hover:underline">See the vision →</Link>
      </section>
    </div>
  );
}
