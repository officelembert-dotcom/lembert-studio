'use client'

import { useRef, useState } from 'react'

function formatTime(seconds: number) {
  if (!isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !isFinite(audio.duration)) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    audio.currentTime = ratio * audio.duration
  }

  return (
    <div
      className="flex items-center gap-5"
      style={{
        padding: '1.25rem 1.5rem',
        border: '1px solid rgba(227,217,189,0.12)',
        maxWidth: '520px',
      }}
    >
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      <button
        onClick={toggle}
        aria-label={playing ? 'Pause' : 'Play'}
        className="shrink-0 flex items-center justify-center transition-opacity hover:opacity-80"
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1px solid var(--amber)',
          color: 'var(--amber)',
          background: 'transparent',
          cursor: 'pointer',
        }}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <rect x="2" y="1" width="3.5" height="12" />
            <rect x="8.5" y="1" width="3.5" height="12" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M3 1.5 L12 7 L3 12.5 Z" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div
          onClick={seek}
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={current}
          style={{
            height: '2px',
            background: 'rgba(227,217,189,0.15)',
            cursor: 'pointer',
            position: 'relative',
            padding: '8px 0',
            backgroundClip: 'content-box',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: 0,
              height: '2px',
              width: duration ? `${(current / duration) * 100}%` : '0%',
              background: 'var(--amber)',
            }}
          />
        </div>
        <div
          className="font-inter flex justify-between"
          style={{ fontSize: '11px', opacity: 0.5, marginTop: '2px' }}
        >
          <span>{formatTime(current)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  )
}
