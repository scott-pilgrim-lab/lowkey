import { useState } from 'react';
import TrackCard from '../components/TrackCard';
import { tracksData, moodCategories } from '../data/tracksData';
import { FaFilter } from 'react-icons/fa';

export default function Explore({ currentTrack, isPlaying, onPlay, onPause }) {
  const [selectedMood, setSelectedMood] = useState('all');

  const filteredTracks =
    selectedMood === 'all'
      ? tracksData
      : tracksData.filter((track) => track.mood === selectedMood);

  const totalListeningHours = Math.max(
    1,
    Math.round(
      tracksData.reduce((acc, track) => {
        const [minutes, seconds] = track.duration.split(':').map(Number);
        return acc + (minutes * 60 + (seconds || 0));
      }, 0) / 3600
    )
  );

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden bg-[#0f0d0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,175,80,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,145,40,0.08),transparent_18%)]" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="container-safe relative z-10 py-12 sm:py-14">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#6d5739] bg-[#120f0d]/80 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#d2b276] shadow-[0_14px_35px_-25px_rgba(255,165,47,0.4)]">
              <FaFilter className="text-[#ebc17a]" />
              <span>Discovery</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-serif font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Explore music by <span className="text-[#d4b67d]">Mood</span>
              </h1>
              <p className="max-w-3xl text-base leading-7 text-[#c7b79a] sm:text-lg">
                Filter curated tracks by mood and discover rich, analog-inspired soundscapes built for the night.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-[-2rem] max-w-6xl px-4 sm:px-6">
        <div className="glass-panel border border-[#4d3f2b] p-4 shadow-[0_25px_80px_-45px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {moodCategories.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition duration-300 ${
                    selectedMood === mood.id
                      ? 'border-[#d4b57c] bg-[#d4b57c]/15 text-white shadow-[0_20px_60px_-45px_rgba(212,181,124,0.35)]'
                      : 'border-[#4d3f2b] bg-[#0f0d0b] text-[#b9a67b] hover:border-[#d4b57c]/70 hover:bg-[#1a140b]/90 hover:text-white'
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${selectedMood === mood.id ? 'bg-white' : 'bg-[#b9a67b]'}`} />
                  {mood.label}
                </button>
              ))}
            </div>
            <div className="rounded-full bg-[#140f09]/90 px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#b9a67b]">
              {filteredTracks.length} {filteredTracks.length === 1 ? 'track' : 'tracks'} ready
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-safe">
          {filteredTracks.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {filteredTracks.map((track) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  isPlaying={isPlaying && currentTrack?.id === track.id}
                  onPlay={() => onPlay(track)}
                  onPause={onPause}
                  isCurrentTrack={currentTrack?.id === track.id}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-[#b9a67b]">No tracks match this mood yet. Try another filter!</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-10">
        <div className="container-safe">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass-panel p-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#b9a67b]">Mood categories</p>
              <p className="mt-4 text-3xl font-serif font-semibold text-white">{moodCategories.length - 1}</p>
              <p className="mt-3 text-sm text-[#c7b79a]">Distinct vibes for every late-night mood.</p>
            </div>
            <div className="glass-panel p-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#b9a67b]">Total tracks</p>
              <p className="mt-4 text-3xl font-serif font-semibold text-white">{tracksData.length}+</p>
              <p className="mt-3 text-sm text-[#c7b79a]">A growing archive of premium music.</p>
            </div>
            <div className="glass-panel p-5">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#b9a67b]">Listening hours</p>
              <p className="mt-4 text-3xl font-serif font-semibold text-white">{totalListeningHours}+</p>
              <p className="mt-3 text-sm text-[#c7b79a]">Hours of curated analog sound.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
