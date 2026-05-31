import { Link } from 'react-router-dom';
import { FaLeaf, FaHeart, FaMusic, FaUser } from 'react-icons/fa';

const values = [
  {
    icon: FaMusic,
    title: 'Curation',
    description:
      'Every track is selected to evoke emotion and feel like a warm vinyl discovery.',
  },
  {
    icon: FaHeart,
    title: 'Emotion',
    description:
      'Ambient, soulful, and nostalgic tracks that connect the listener to a mood.',
  },
  {
    icon: FaLeaf,
    title: 'Minimalism',
    description:
      'Elegant, uncluttered design with a premium lounge atmosphere.',
  },
  {
    icon: FaUser,
    title: 'Community',
    description:
      'Designed for anyone who loves music culture and late-night listening.',
  },
];

const team = [
  {
    name: 'Maroun issa',
    role: 'Founder & Curator',
    contribution: 'Led the vision and track selection for LOWKEY.',
  },
  {
    name: 'Maroun issa',
    role: 'Full-Stack Developer',
    contribution: 'Built the responsive UI, audio playback, and site interactions.',
  },
  {
    name: 'Maroun issa',
    role: 'Creative Director',
    contribution: 'Styled the brand experience and music lounge aesthetic.',
  },
  {
    name: 'Maroun issa',
    role: 'Audio Engineer',
    contribution: 'Optimized playback quality and track flow for every mood.',
  },
];

export default function About() {
  return (
    <div className="pb-40">
      <section className="relative overflow-hidden bg-[#090806] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,168,70,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,142,45,0.1),transparent_18%)]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container-safe relative z-10 py-24">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#bda26e]">About LOWKEY</p>
            <h1 className="text-5xl font-serif font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              A warm, late-night music lounge for modern vinyl lovers.
            </h1>
            <p className="text-lg leading-8 text-[#c8b894]">
              We craft a premium listening experience with analog textures, soulful curation, and the mood of a luxury hip-hop studio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0e0c09]">
        <div className="container-safe">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-semibold text-white mb-6">Our philosophy</h2>
            <p className="text-base leading-8 text-[#c7b79a]">
              LOWKEY blends the nostalgia of vinyl and analog recording with premium modern curation. Every feature is meant to feel cinematic, warm, and intimate.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="glass-panel p-8 border border-[#4a3a26] transition duration-300 hover:border-[#d4b57c]">
                  <div className="flex items-center justify-center mb-4 h-16 w-16 rounded-full bg-[#1c1610]/90 text-[#d2b36e]">
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-[#c7b79a]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-safe">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-serif font-semibold text-white">Meet the team</h2>
            <p className="mt-4 text-[#c7b79a]">
              A small crew of music lovers, designers, and engineers shaping LOWKEY's nostalgic, premium journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <div key={index} className="glass-panel p-8 border border-[#4a3a26] transition duration-300 hover:border-[#d4b57c]">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1d1610]/90 text-[#dbc38e] text-xl font-semibold">
                    {member.name
                      .split(' ')
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{member.name}</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#b9a676]">{member.role}</p>
                  </div>
                </div>
                <p className="text-[#c7b79a]">{member.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0d0b09]">
        <div className="container-safe text-center">
          <h2 className="text-4xl font-serif font-semibold text-white mb-4">A refined sound experience.</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#c7b79a] mb-8">
            LOWKEY is built for listeners who appreciate premium music, thoughtful pacing, and a moody, lounge-ready aesthetic.
          </p>
          <Link to="/explore" className="btn-primary">Explore our Sound</Link>
        </div>
      </section>
    </div>
  );
}
