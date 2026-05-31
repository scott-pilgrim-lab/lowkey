import { FaPlay, FaPause } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

// Import our single source of truth data file
import { tracksData } from '../data/tracksData';

// Reusable individual Card Component
const PlaylistCard = ({ playlist, isPlaying, onPlay, onPause, isCurrentTrack }) => {
  const handlePlayClick = () => {
    if (isCurrentTrack) {
      if (isPlaying) {
        onPause();
      } else {
        onPlay(playlist);
      }
    } else {
      onPlay(playlist);
    }
  };

  return (
    <div className="group relative cursor-pointer rounded-xl bg-neutral-900/40 p-4 transition-all duration-300 hover:bg-neutral-900/80 border border-neutral-800/50">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-900 mb-4 relative">
        <img
          src={playlist.coverUrl} // Fixed: pointing to coverUrl instead of image
          alt={playlist.playlistName}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Vinyl record backup asset in case any future url ever breaks
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500';
          }}
        />
        <button
          onClick={handlePlayClick}
          className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#b59058] text-black shadow-[0_16px_40px_-20px_rgba(181,144,88,0.9)] opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-[#ceb071]"
          aria-label={isCurrentTrack && isPlaying ? 'Pause' : 'Play'}
        >
          {isCurrentTrack && isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
        </button>
        <div className="absolute top-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] uppercase font-bold text-amber-500 tracking-wider backdrop-blur-sm">
          {playlist.duration}
        </div>
      </div>

      <h4 className="text-sm font-semibold text-neutral-100 truncate">{playlist.playlistName}</h4>
      <p className="text-xs text-neutral-400 mt-1 truncate">{playlist.featuredTrack}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[11px] text-amber-500/80 font-medium truncate">{playlist.artist}</span>
        <span className="text-[10px] text-neutral-500 bg-neutral-800/40 px-1.5 py-0.5 rounded">Album Art</span>
      </div>
    </div>
  );
};

export default function Home({ currentTrack, isPlaying, onPlay, onPause }) {
  // Separate playlists cleanly by mood filtering
  const chillTracks = tracksData.filter((p) => p.mood === 'chill');
  const energeticTracks = tracksData.filter((p) => p.mood === 'energetic');
  const ambientTracks = tracksData.filter((p) => p.mood === 'ambient');
  const melancholicTracks = tracksData.filter((p) => p.mood === 'melancholic');

  const heroImage = '/hero-snoop.jpg';

  return (
    <div className="pb-20 bg-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0805] via-[#0f0c09] to-[#090806]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="spotlight-effect spotlight-1" />
        <div className="spotlight-effect spotlight-2" />
        <div className="spotlight-effect spotlight-3" />
        <div className="light-leak light-leak-1" />
        <div className="light-leak light-leak-2" />

        <div className="absolute inset-0 flex items-center justify-end overflow-hidden">
          <div className="relative w-full h-full md:w-3/4 lg:w-2/3">
            <div className="absolute inset-0 image-mask">
              <img
                src={heroImage}
                alt="Snoop Dogg"
                className="h-full w-full object-cover object-center brightness-110 contrast-125"
              />
            </div>
            <div className="rim-light-overlay absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black/90" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at right, transparent 20%, rgba(0,0,0,0.7) 100%)',
              }}
            />
          </div>
        </div>

        <div className="film-grain-overlay absolute inset-0 pointer-events-none" />

        <div className="container-safe relative z-10 flex items-center min-h-screen">
          <div className="w-full md:w-1/2 max-w-2xl">
            <div className="space-y-8">
              <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-[#5f4f35] bg-black/60 backdrop-blur-md px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-[#c7a25b] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
                <span>Hip-Hop Classics</span>
              </div>

              <div className="space-y-4">
                <h1 className="animate-fade-in-up-delay-1 text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-[-0.03em] text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
                  Curated Mood Playlists.
                </h1>
              </div>

              <p className="animate-fade-in-up-delay-2 max-w-lg text-lg leading-8 text-[#bfa971] font-light">
                Four core moods, real songs, and premium atmospheric imagery for every listening state.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#mood-dashboard"
                  className="animate-fade-in-up-delay-2 inline-flex items-center justify-center rounded-full bg-[#8b5a2b] hover:bg-[#a0692d] text-white font-semibold px-8 py-4 transition-all duration-300 shadow-[0_20px_50px_-20px_rgba(139,90,43,0.8)] hover:shadow-[0_25px_60px_-15px_rgba(160,105,45,0.9)]"
                >
                  Browse Moods
                </a>
                <Link
                  to="/explore"
                  className="animate-fade-in-up-delay-2 inline-flex items-center justify-center rounded-full border border-[#5f4f35] bg-black/50 hover:bg-black/70 text-[#c7a25b] hover:text-[#d4b57c] font-medium px-8 py-4 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore Collection
                </Link>
              </div>

              <div className="animate-fade-in-up-delay-2 pt-12 text-[11px] uppercase tracking-[0.5em] text-[#5f4f35] font-semibold">
                Est. 2024 • Premium Selection
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mood-dashboard" className="bg-black text-white px-6 md:px-12 py-12 space-y-16">
        {/* 1. CHILL SECTOR */}
        <section>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">01 // Chill Lounge</span>
            <h2 className="text-2xl font-serif mt-1 text-neutral-100">Relax with mellow rhythms.</h2>
            <p className="text-sm text-neutral-400 mt-1">Smooth transitions, low-fidelity beats, and downtempo jazz cuts.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {chillTracks.map((track) => (
              <PlaylistCard
                key={track.id}
                playlist={track}
                isPlaying={isPlaying}
                onPlay={onPlay}
                onPause={onPause}
                isCurrentTrack={currentTrack?.id === track.id}
              />
            ))}
          </div>
        </section>

        {/* 2. ENERGETIC SECTOR */}
        <section>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">02 // Energetic Tempo</span>
            <h2 className="text-2xl font-serif mt-1 text-neutral-100">Ignite the room with motion.</h2>
            <p className="text-sm text-neutral-400 mt-1">High fidelity electronic basslines, modern hip hop, and fast rhythms.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {energeticTracks.map((track) => (
              <PlaylistCard
                key={track.id}
                playlist={track}
                isPlaying={isPlaying}
                onPlay={onPlay}
                onPause={onPause}
                isCurrentTrack={currentTrack?.id === track.id}
              />
            ))}
          </div>
        </section>

        {/* 3. AMBIENT SECTOR */}
        <section>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">03 // Atmospheric Ambient</span>
            <h2 className="text-2xl font-serif mt-1 text-neutral-100">Get lost in expansive soundscapes.</h2>
            <p className="text-sm text-neutral-400 mt-1">Minimal compositions, spacious drones, and cinematic textural pieces.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ambientTracks.map((track) => (
              <PlaylistCard
                key={track.id}
                playlist={track}
                isPlaying={isPlaying}
                onPlay={onPlay}
                onPause={onPause}
                isCurrentTrack={currentTrack?.id === track.id}
              />
            ))}
          </div>
        </section>

        {/* 4. MELANCHOLIC SECTOR */}
        <section>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">04 // Melancholic Echoes</span>
            <h2 className="text-2xl font-serif mt-1 text-neutral-100">Vibe with beautiful, bittersweet sounds.</h2>
            <p className="text-sm text-neutral-400 mt-1">Late-night emotional lyrics, minor chord progressions, and reflective vocals.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {melancholicTracks.map((track) => (
              <PlaylistCard
                key={track.id}
                playlist={track}
                isPlaying={isPlaying}
                onPlay={onPlay}
                onPause={onPause}
                isCurrentTrack={currentTrack?.id === track.id}
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
