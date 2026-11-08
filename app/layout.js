import './globals.css';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Anglofutura — Build. Power. Defend.',
  description: 'Insurgent pro-growth movement for under-40s. Housing, energy, national capacity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-charcoal text-white antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-sm text-steel">
          <p>Anglofutura · Build. Power. Defend. · The envelope is not the sky.</p>
        </footer>
      </body>
    </html>
  );
}
