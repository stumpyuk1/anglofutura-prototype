export default function Power() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Power</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Abundant domestic base-load.</h1>
      <p className="text-lg text-steel mb-8">
        Energy is not a climate seminar topic. It is the foundation of industry, heating, and national capacity. We want abundant, cheap, domestic base-load: nuclear (including small modular reactors) and gas where it is needed, with the grid connection queues scrapped.
      </p>
      <p className="text-lg mb-8">
        Progressive net-zero sequencing and NIMBY vetoes have produced scarcity, high bills, and industrial decline. Anglofuturism treats cheap power as a civilisational necessity and a high-status project. Rolls-Royce SMRs powering industrial hubs is not a fantasy; it is the minimum viable future.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-2">Nuclear</h3>
          <p className="text-steel">Small Modular Reactors and conventional plant. Domestic fuel cycle where possible.</p>
        </div>
        <div className="border border-white/10 p-6 rounded">
          <h3 className="text-xl font-bold text-amber mb-2">Grid</h3>
          <p className="text-steel">End connection queues. Build transmission. Prioritise industrial load.</p>
        </div>
      </div>
    </div>
  );
}
