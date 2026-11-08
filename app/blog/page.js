export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-amber text-sm tracking-widest uppercase mb-4">Blog / Resources</p>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Resources.</h1>

      <p className="text-lg text-steel mb-10">
        Reading that underpins the movement. Essays and arguments on the nation state, practical knowledge, housing, and the limits of progressive liberalism.
      </p>

      <div className="space-y-8">
        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold mb-3">Metisocracy</h2>
          <p className="text-steel mb-3">
            Essays on recovering practical knowledge, judgement, and institutional capacity in an age of targets, spreadsheets, and managerial abstraction.
          </p>
          <a
            href="https://metisocracy.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber font-bold hover:underline"
          >
            metisocracy.substack.com →
          </a>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold mb-3">John Mearsheimer — The Great Delusion</h2>
          <p className="text-steel mb-3">
            Why nationalism and realism almost always trump liberalism. The nation state as the primary unit of democratic self-government.
          </p>
          <a
            href="https://www.lse.ac.uk/asset-library/events/20190117-great-delusion-presentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber font-bold hover:underline"
          >
            LSE presentation (PDF) →
          </a>
        </div>

        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-2xl font-bold mb-3">Build On</h2>
          <p className="text-steel mb-3">
            Practical housing activism: find schemes, write evidence-based support letters, tip the balance against organised vetoes.
          </p>
          <a
            href="https://www.build-on.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber font-bold hover:underline"
          >
            build-on.org.uk →
          </a>
        </div>
      </div>

      <p className="mt-12 text-steel">
        More essays and movement writing will be added here.
      </p>
    </div>
  );
}
