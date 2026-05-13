/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect, useState, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  ListMusic,
  ChevronUp,
  X
} from 'lucide-react';
import { Song, PLAYLIST } from './constants';

export default function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = PLAYLIST[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(e => console.error("Playback failed", e));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative h-screen w-screen bg-zinc-950 flex flex-col items-center justify-center font-sans">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-radial from-indigo-500/20 via-transparent to-transparent blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-radial from-rose-500/20 via-transparent to-transparent blur-3xl"
        />
      </div>

      <audio 
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextTrack}
      />

      <div className="z-10 w-full max-w-md px-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentTrack.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Cover Art */}
            <div className="relative group w-72 h-72 mb-12">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700 opacity-50" />
              <motion.img 
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src={currentTrack.coverUrl} 
                alt={currentTrack.title}
                className="relative w-full h-full object-cover rounded-full shadow-2xl z-10 border border-white/10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-white/20 z-20 shadow-inner" />
            </div>

            {/* Meta Info */}
            <div className="text-center mb-10 translate-y-[-10px]">
              <h2 className="text-3xl font-medium tracking-[0.15em] mb-3 uppercase">{currentTrack.title}</h2>
              <p className="text-white/40 text-xs font-mono uppercase tracking-[0.3em]">{currentTrack.artist}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Player Controls */}
        <div className="glass p-8 rounded-[40px] space-y-8 shadow-2xl">
          {/* Progress Bar */}
          <div className="space-y-2">
            <input 
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1 block"
            />
            <div className="flex justify-between text-[10px] font-mono text-white/30 tracking-widest uppercase">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button 
              onClick={() => setShowPlaylist(true)}
              className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <ListMusic size={22} />
            </button>

            <div className="flex items-center gap-6">
              <button 
                onClick={prevTrack}
                className="p-2 text-white/60 hover:text-white transition-all active:scale-90"
              >
                <SkipBack fill="currentColor" size={26} />
              </button>
              
              <button 
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/20"
              >
                {isPlaying ? <Pause fill="black" size={28} /> : <Play fill="black" className="ml-1" size={28} />}
              </button>

              <button 
                onClick={nextTrack}
                className="p-2 text-white/60 hover:text-white transition-all active:scale-90"
              >
                <SkipForward fill="currentColor" size={26} />
              </button>
            </div>

            <div className="flex items-center group relative">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                {isMuted || volume === 0 ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>
              
              <div className="absolute bottom-full right-[-10px] mb-6 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none group-hover:pointer-events-auto origin-bottom">
                <div className="glass px-4 py-3 rounded-2xl flex items-center gap-3">
                  <input 
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-24 h-1"
                  />
                  <span className="text-[10px] font-mono text-white/60 w-6">{Math.round(volume * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Drawer */}
      <AnimatePresence>
        {showPlaylist && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPlaylist(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute inset-x-0 bottom-0 z-30 h-3/4 glass-dark rounded-t-[50px] px-8 pt-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="space-y-1">
                  <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">Queue</h3>
                  <p className="text-xl font-medium tracking-tight">Your Soundtrack</p>
                </div>
                <button 
                  onClick={() => setShowPlaylist(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-[calc(75vh-160px)] pr-2 scrollbar-none pb-10">
                {PLAYLIST.map((track, index) => (
                  <motion.button 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={track.id}
                    onClick={() => {
                      setCurrentTrackIndex(index);
                      setIsPlaying(true);
                      setShowPlaylist(false);
                    }}
                    className={`w-full flex items-center gap-5 p-5 rounded-[24px] transition-all group ${
                      index === currentTrackIndex ? 'bg-white/10 border border-white/10 shadow-lg' : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="relative">
                      <img src={track.coverUrl} alt={track.title} className="w-14 h-14 rounded-xl object-cover" />
                      {index === currentTrackIndex && isPlaying && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
                          <div className="flex items-end gap-0.5 h-4">
                            <motion.div animate={{ height: [4, 16, 8, 12, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-white" />
                            <motion.div animate={{ height: [8, 4, 16, 8, 12] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-white" />
                            <motion.div animate={{ height: [12, 8, 4, 16, 8] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-0.5 bg-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-sm font-medium tracking-wide ${index === currentTrackIndex ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                        {track.title}
                      </p>
                      <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest mt-1 group-hover:text-white/50">{track.artist}</p>
                    </div>
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40">
                      {formatTime(track.duration)}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      <div className="absolute bottom-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] pointer-events-none">
        Harmonix Premium Engine
      </div>
    </div>
  );
}
