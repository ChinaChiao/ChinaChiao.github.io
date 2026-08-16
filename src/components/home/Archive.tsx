import { useExperiments, useT } from '../../i18n/useLocale'
import { ExperimentCard } from '../ExperimentCard'
import { LocaleLink } from '../LocaleLink'
import { SectionKicker } from '../Marks'

export function Archive() {
  const t = useT()
  const list = useExperiments()

  return (
    <section className="archive" id="archive" aria-labelledby="archive-title">
      <div className="shell">
        <div className="archive__head">
          <SectionKicker index="04" label={t.archiveKicker} />
          <div>
            <h2 id="archive-title" className="section-title">
              {t.archiveTitle}
            </h2>
            <p className="section-lead">{t.archiveLead}</p>
            <LocaleLink className="text-link" to="/experiments">
              {t.archiveLink}
            </LocaleLink>
          </div>
        </div>
        <div className="archive__grid">
          {list.map((item, index) => (
            <ExperimentCard key={item.slug} experiment={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
