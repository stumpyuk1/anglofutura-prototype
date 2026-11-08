import Link from 'next/link';

export default function Build() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Build</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Housing as a generational civil right.</h1>
      <p className="text-lg text-steel mb-8">
        Britain did not become a global civilisation by consulting parish planning committees. It was built by nonconformist engineers, eccentric industrialists, and hard-headed visionaries who laid railways, iron bridges, and deep-shaft mines without environmental impact certificates. The current system is the opposite: organised opposition by the gerontocracy that already owns property, backed by progressive rules that make building almost impossible.
      </p>
      <p className="text-lg mb-8">
        We reverse it. Statutory planning rights for starter homes and high-density family terraces on low-grade land. High-status classical modern architecture. Housing as the physical gateway that mobilises the under-40s.
      </p>
      <div className="bg-navy p-8 rounded border border-white/10 mb-8">
        <h2 className="text-2xl font-bold mb-4">Start here</h2>
        <p className="mb-4">Use the map and toolkit at Build On to support well-designed schemes and tip the balance against organised NIMBY opposition.</p>
        <a
          href="https://www.build-on.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber text-charcoal font-bold px-6 py-3 rounded hover:bg-copper transition"
        >
          Go to Build On →
        </a>
      </div>
      <Link href="/act" className="text-amber hover:underline">See how to act locally →</Link>
    </div>
  );
}
