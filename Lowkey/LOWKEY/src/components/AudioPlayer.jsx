import { useRef, useEffect, useState } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeMute, FaVolumeUp, FaRandom, FaListUl } from 'react-icons/fa';
import { tracksData } from '../data/tracksData';

export default function AudioPlayer({ currentTrack, isPlaying, onPlay, onPause }) {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);

  const activeIndex = currentTrack ? tracksData.findIndex((track) => track.id === currentTrack.id) : -1;
  const previousTrack = activeIndex > 0 ? tracksData[activeIndex - 1] : tracksData[tracksData.length - 1];
  const nextTrack = activeIndex >= 0 ? tracksData[(activeIndex + 1) % tracksData.length] : null;

  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    audioRef.current.src = currentTrack.audioUrl;
    audioRef.current.load();
    // Ensure playback rate is always normal (remove speed control)
    try { audioRef.current.playbackRate = 1; } catch (e) {}
    setCurrentTime(0);

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentTrack]);

  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    if (isPlaying) {
      // Force normal playback speed when starting playback
      try { audioRef.current.playbackRate = 1; } catch (e) {}
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      // Ensure any external or accidental changes to speed are reset
      try { audioRef.current.playbackRate = 1; } catch (e) {}
    }
  };

  const handleProgressChange = (e) => {
    const nextTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = nextTime;
    }
    setCurrentTime(nextTime);
  };

  const handleVolumeChange = (e) => {
    const nextVolume = parseFloat(e.target.value);
    setVolume(nextVolume);
    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
    if (nextVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[min(96vw,880px)] -translate-x-1/2 rounded-3xl border border-[#5f4f35] bg-[#0f0c09]/95 px-4 py-3 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-opacity duration-500 ease-out opacity-100">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => onPause()}
      />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-12 w-12 overflow-hidden rounded-2xl border border-[#5f4f35] bg-[#110f0c]">
              <img src={currentTrack?.coverUrl} alt={currentTrack?.title} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-serif font-semibold text-white">{currentTrack?.title}</p>
              <p className="truncate text-xs uppercase tracking-[0.24em] text-[#b9a575]">{currentTrack?.artist}</p>
            </div>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-4 md:flex">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#5f4f35] bg-[#110f0c] text-[#d2b36e] transition hover:border-[#d2b36e] hover:text-white"
              aria-label="Shuffle"
            >
              <FaRandom size={14} />
            </button>
            <button
              onClick={() => onPlay(previousTrack)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#5f4f35] bg-[#110f0c] text-[#d2b36e] transition hover:border-[#d2b36e] hover:text-white"
              aria-label="Previous"
            >
              <FaStepBackward size={14} />
            </button>
            <button
              onClick={() => (isPlaying ? onPause() : onPlay(currentTrack))}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#b18d4f] text-black shadow-[0_20px_40px_-20px_rgba(177,141,79,0.9)] transition hover:bg-[#ceb66f]"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
            </button>
            <button
              onClick={() => nextTrack && onPlay(nextTrack)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#5f4f35] bg-[#110f0c] text-[#d2b36e] transition hover:border-[#d2b36e] hover:text-white"
              aria-label="Next"
            >
              <FaStepForward size={14} />
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#5f4f35] bg-[#110f0c] text-[#d2b36e] transition hover:border-[#d2b36e] hover:text-white"
              aria-label="Queue"
            >
              <FaListUl size={14} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#5f4f35] bg-[#110f0c] text-[#d2b36e] transition hover:border-[#d2b36e] hover:text-white"
              aria-label="Toggle mute"
            >
              {isMuted || volume === 0 ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-[#2f291f] accent-[#c7a25b]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 text-[0.72rem] text-[#b9a575]">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.01"
          value={currentTime}
          onChange={handleProgressChange}
          aria-label="Seek"
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[#2f291f] accent-[#c7a25b]"
        />
        <div className="relative h-1 overflow-hidden rounded-full bg-[#2f291f]">
          <div
            className="h-full bg-gradient-to-r from-[#c7a25b] via-[#a67e43] to-[#c7a25b] transition-all duration-200"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
      </div>
    </div>
  );
}
