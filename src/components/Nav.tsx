import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { stripLocale, withLocale } from '../i18n/locale'
import { useLocale, useSiteCopy, useT } from '../i18n/useLocale'
import { LocaleLink, LocaleNavLink } from './LocaleLink'

const paths = [
  { to: '/', key: 'home' as const, index: '01' },
  { to: '/notes', key: 'notes' as const, index: '02' },
  { to: '/experiments', key: 'experiments' as const, index: '03' },
  { to: '/about', key: 'about' as const, index: '04' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const locale = useLocale()
  const t = useT()
  const siteCopy = useSiteCopy()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const indexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const first = indexRef.current?.querySelector('a')
    first?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const bare = stripLocale(location.pathname)

  return (
    <header className="masthead">
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <div className="masthead__bar">
        <LocaleLink className="brand" to="/" aria-label={t.brandHome}>
          <span className="brand__mark" aria-hidden="true" />
          {locale === 'zh' ? (
            <span className="brand__zh">{siteCopy.nameZh}</span>
          ) : null}
          <span className="brand__en">{siteCopy.nameEn}</span>
        </LocaleLink>

        <p className="masthead__issue">
          {siteCopy.issue} <span>/</span> {siteCopy.year}
        </p>

        <nav className="masthead__nav" aria-label={t.navAria}>
          {paths.slice(1).map((link) => (
            <LocaleNavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `masthead__link${isActive ? ' is-active' : ''}`
              }
            >
              {t.nav[link.key]}
            </LocaleNavLink>
          ))}
        </nav>

        <div className="lang-switch" role="group" aria-label={t.langAria}>
          <Link
            to={withLocale(bare, 'zh')}
            lang="zh-CN"
            hrefLang="zh-CN"
            aria-current={locale === 'zh' ? 'true' : undefined}
          >
            中
          </Link>
          <Link
            to={withLocale(bare, 'en')}
            lang="en"
            hrefLang="en"
            aria-current={locale === 'en' ? 'true' : undefined}
          >
            EN
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={`index-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="site-index"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? t.indexClose : t.indexOpen}</span>
          <i aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <button
          type="button"
          className="site-index__veil"
          aria-label={t.indexClose}
          onClick={() => {
            setOpen(false)
            toggleRef.current?.focus()
          }}
        />
      ) : null}

      <div
        ref={indexRef}
        id="site-index"
        className={`site-index${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <div className="site-index__inner">
          <p className="site-index__kicker">{t.indexKicker}</p>
          <ul>
            {paths.map((link) => (
              <li key={link.to}>
                <LocaleNavLink to={link.to} end={link.to === '/'}>
                  <span className="site-index__num">{link.index}</span>
                  <span className="site-index__label">
                    <span className="site-index__zh">{t.nav[link.key]}</span>
                    {locale === 'zh' ? (
                      <span className="site-index__en">{t.navEn[link.key]}</span>
                    ) : null}
                  </span>
                </LocaleNavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
