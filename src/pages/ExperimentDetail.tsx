import { Navigate, useParams } from 'react-router-dom'
import { ExperimentBench } from '../components/ExperimentBench'
import { LocaleLink } from '../components/LocaleLink'
import { usePageTitle } from '../hooks/usePageTitle'
import { withLocale } from '../i18n/locale'
import { useExperiment, useLocale, useT } from '../i18n/useLocale'

export function ExperimentDetail() {
  const { slug } = useParams()
  const locale = useLocale()
  const t = useT()
  const item = useExperiment(slug)
  usePageTitle(item ? `${item.title} — ${t.docBrand}` : t.docHome)

  if (!item) return <Navigate to={withLocale('/experiments', locale)} replace />

  return (
    <main id="main" className="subpage">
      <article className="exp-detail">
        <header className="subhero">
          <div className="shell">
            <p className="article__kicker">
              <LocaleLink to="/experiments">{t.archiveKicker}</LocaleLink>
              <span aria-hidden="true"> / </span>
              {item.code}
            </p>
            <h1 className="subhero__title">{item.title}</h1>
            {locale === 'zh' ? (
              <p className="subhero__en">{item.titleEn}</p>
            ) : null}
            <p className="section-lead">{item.summary}</p>
            <div className="article__meta">
              <span>{item.status}</span>
              <span>{item.year}</span>
              <span>{item.focus}</span>
            </div>
          </div>
        </header>
        <div className="shell exp-detail__wrap">
          <div className="exp-detail__body">
            <section>
              <h2>{t.expObserve}</h2>
              <ol className="exp-detail__obs">
                {item.observations.map((line, i) => (
                  <li key={line}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <p>{line}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section className="exp-detail__method">
              <h2>{t.expMethod}</h2>
              <p>{item.methodNote}</p>
            </section>
          </div>
          <ExperimentBench experiment={item} />
          <p className="article__back">
            <LocaleLink to="/experiments">{t.expBack}</LocaleLink>
          </p>
        </div>
      </article>
    </main>
  )
}
