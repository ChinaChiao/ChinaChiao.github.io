import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useLocale, useSiteCopy, useT } from '../i18n/useLocale'
import { visibleContacts } from '../data/site'
import { LocaleLink } from './LocaleLink'

export function Footer() {
  const t = useT()
  const locale = useLocale()
  const siteCopy = useSiteCopy()
  const contacts = visibleContacts(siteCopy.contact)
  const reduced = usePrefersReducedMotion()

  return (
    <footer className="site-footer">
      <div
        className={`shell site-footer__grid${contacts.length ? '' : ' site-footer__grid--solo'}`}
      >
        <div>
          <p className="site-footer__brand">
            {locale === 'zh'
              ? `${siteCopy.nameZh} / ${siteCopy.nameEn}`
              : siteCopy.nameEn}
          </p>
          <p className="site-footer__role">{siteCopy.role}</p>
        </div>
        <nav aria-label={t.footerNav}>
          <LocaleLink to="/notes">{t.footerNotes}</LocaleLink>
          <LocaleLink to="/experiments">{t.footerLabs}</LocaleLink>
          <LocaleLink to="/about">{t.footerAbout}</LocaleLink>
        </nav>
        {contacts.length > 0 ? (
          <div className="site-footer__contact">
            {contacts.map((item) => (
              <a key={item.key} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
        <div className="site-footer__colophon-row">
          <p className="site-footer__colophon">
            {t.footerColophon}
            <br />
            © {siteCopy.year} {siteCopy.nameEn}
          </p>
          <button
            type="button"
            className="press top-link"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: reduced ? 'auto' : 'smooth',
              })
            }
          >
            {t.top}
          </button>
        </div>
      </div>
    </footer>
  )
}
