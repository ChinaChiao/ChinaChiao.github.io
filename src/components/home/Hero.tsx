import { useLocale, useSiteCopy, useT } from '../../i18n/useLocale'
import { Button } from '../Button'
import { CropMarks, Proun } from '../Marks'

export function Hero() {
  const locale = useLocale()
  const t = useT()
  const siteCopy = useSiteCopy()
  const primary = locale === 'en' ? siteCopy.heroEn : siteCopy.heroZh
  const secondary = locale === 'en' ? siteCopy.heroZh : siteCopy.heroEn

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__board" aria-hidden="true" />
      <CropMarks />
      <div className="shell hero__layout">
        <div className="hero__copy">
          <div className="hero__tags">
            <span className="stamp">{siteCopy.role}</span>
            <span className="stamp">{siteCopy.educationShort}</span>
          </div>
          <p className="hero__issue">
            {siteCopy.issue} · EVERYDAY EXPERIMENTS · SINCE 2024
          </p>
          <h1
            id="hero-title"
            className={locale === 'en' ? 'hero__zh hero__zh--en' : 'hero__zh'}
          >
            {primary}
          </h1>
          <p className="hero__en">{secondary}</p>
          <p className="hero__intro">{siteCopy.intro}</p>
          <div className="hero__actions">
            <Button to="/notes">{t.heroCtaNotes}</Button>
            <Button to="/experiments" variant="secondary">
              {t.heroCtaLabs}
            </Button>
          </div>
        </div>

        <aside className="hero__aside" aria-hidden="true">
          <div className="hero__composition">
            <Proun className="hero__proun" />
            <p className="hero__vertical">AI-NATIVE / 2024—</p>
            <p className="hero__giant">01</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
