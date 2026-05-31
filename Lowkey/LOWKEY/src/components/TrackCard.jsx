import { FaPlay, FaPause } from 'react-icons/fa';

export default function TrackCard({ track, isPlaying, onPlay, onPause, isCurrentTrack }) {
  const initials = track.artist
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');

  const handlePlayClick = () => {
    if (isCurrentTrack) {
      if (isPlaying) {
        onPause();
      } else {
        onPlay(track);
      }
    } else {
      onPlay(track);
    }
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#3f3428] bg-[#0d0c0a] shadow-[0_14px_45px_-25px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={track.coverUrl}
            alt={track.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 rounded-full border border-[#7f6a3f]/20 bg-[#130f0c]/95 px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-[#d8ba8e]">
          {track.mood}
        </div>
        <button
          onClick={handlePlayClick}
          className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#b59058] text-black shadow-[0_16px_40px_-20px_rgba(181,144,88,0.9)] opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-[#ceb071]"
          aria-label={isCurrentTrack && isPlaying ? 'Pause' : 'Play'}
        >
          {isCurrentTrack && isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
        </button>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">{track.title}</p>
          <p className="mt-1 text-[11px] text-zinc-400 truncate">{track.artist}</p>
        </div>
        <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-wider text-[#d4b57c]">
          <span className="rounded-full bg-white/5 px-2 py-1">{track.mood}</span>
          <span className="rounded-full bg-white/5 px-2 py-1">{track.duration}</span>
        </div>
      </div>
    </div>
  );
}
