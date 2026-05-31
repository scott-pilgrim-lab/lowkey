import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiSoundcloud } from 'react-icons/si';

const socialLinks = [
  { icon: FaTwitter, href: '#', label: 'Twitter', hover: 'hover:text-blue-400' },
  { icon: FaInstagram, href: '#', label: 'Instagram', hover: 'hover:text-pink-400' },
  { icon: FaFacebookF, href: '#', label: 'Facebook', hover: 'hover:text-blue-500' },
  { icon: SiSoundcloud, href: '#', label: 'SoundCloud', hover: 'hover:text-orange-400' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090806]/95 py-8 backdrop-blur-3xl">
      <div className="container-safe flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#b9a774]">LOWKEY</p>
          <h2 className="mt-3 text-xl font-serif font-semibold text-white sm:text-2xl">
            A premium music lounge for vinyl-inspired discovery.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#c7b79a]">
            Discover mood-driven soundscapes, elegant playlists, and a curated listening experience.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-[#4a3a26] bg-[#120f0d] text-[#c7b79a] transition ${social.hover}`}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
          <p className="text-[11px] text-[#b9a774]">© 2026 LOWKEY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
