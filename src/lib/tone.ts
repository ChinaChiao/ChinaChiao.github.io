let ctx: AudioContext | null = null

function getContext() {
  if (typeof window === 'undefined') return null
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null

  const Ctor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext
  if (!Ctor) return null

  ctx ??= new Ctor()
  return ctx
}

export function playTick(
  freq = 520,
  type: OscillatorType = 'square',
  duration = 0.05,
) {
  const audio = getContext()
  if (!audio) return

  if (audio.state === 'suspended') void audio.resume()

  const osc = audio.createOscillator()
  const gain = audio.createGain()
  const now = audio.currentTime

  osc.type = type
  osc.frequency.setValueAtTime(freq, now)
  gain.gain.setValueAtTime(0.032, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration)
  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start(now)
  osc.stop(now + duration)
}
