import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-3xl shadow-[0_24px_120px_-55px_rgba(0,0,0,0.85)]">
      <div className="container-safe flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-[1.8rem] border border-[#6b5335] bg-[#120f0c]/90 text-sm font-semibold uppercase tracking-[0.28em] text-[#d5b16f] shadow-[0_18px_40px_-26px_rgba(213,177,111,0.95)]">
            LK
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.35em] text-[#b9a775]">Analog lounge</p>
            <p className="text-2xl font-serif font-semibold uppercase tracking-[0.18em] text-white">LOWKEY</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link text-sm uppercase tracking-[0.24em] text-[#cfb37b] transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-[#c3af85] transition hover:bg-[#2f220f]/95 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-3xl">
          <div className="container-safe flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="rounded-3xl border border-white/10 bg-[#0f0d0c] px-4 py-3 text-sm uppercase tracking-[0.18em] text-[#c3af85] transition hover:border-[#b88f38]/70 hover:bg-[#2f220f]/90 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
