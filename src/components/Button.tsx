import type { ReactNode } from 'react'
import { LocaleLink } from './LocaleLink'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = {
  children: ReactNode
  variant?: Variant
  to?: string
  href?: string
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  className,
  onClick,
}: Props) {
  const press = variant === 'primary' ? 'press press--accent' : 'press'
  const cls = `btn btn--${variant} ${press} ${className ?? ''}`.trim()

  if (to) {
    return (
      <LocaleLink className={cls} to={to} onClick={onClick}>
        {children}
      </LocaleLink>
    )
  }

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        className={cls}
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
