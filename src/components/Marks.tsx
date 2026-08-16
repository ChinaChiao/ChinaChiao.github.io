type MarkProps = {
  className?: string
}

export function CropMarks({ className }: MarkProps) {
  return (
    <div className={`marks-crop ${className ?? ''}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export function Proun({ className }: MarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 360"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="220" cy="96" r="78" fill="none" stroke="currentColor" strokeWidth="10" />
      <circle cx="220" cy="96" r="18" fill="var(--red)" />
      <rect x="28" y="188" width="168" height="22" fill="currentColor" />
      <rect x="28" y="224" width="86" height="86" fill="var(--red)" />
      <rect x="126" y="248" width="170" height="12" fill="var(--gold)" />
      <line x1="20" y1="40" x2="140" y2="320" stroke="currentColor" strokeWidth="4" />
    </svg>
  )
}

export function SectionKicker({
  index,
  label,
}: {
  index: string
  label: string
}) {
  return (
    <div className="kicker">
      <span className="kicker__index">{index}</span>
      <span className="kicker__rule" aria-hidden="true" />
      <span className="kicker__label">{label}</span>
    </div>
  )
}
