import { ExperimentCard } from '../components/ExperimentCard'
import { SectionKicker } from '../components/Marks'
import { usePageTitle } from '../hooks/usePageTitle'
import { useExperiments, useT } from '../i18n/useLocale'

export function Experiments() {
  const t = useT()
  usePageTitle(t.docLabs)
  const list = useExperiments()

  return (
    <main id="main" className="subpage">
      <header className="subhero">
        <div className="shell">
          <SectionKicker index="03" label="Archive" />
          <h1 className="subhero__title">{t.archiveKicker}</h1>
          <p className="subhero__en">{t.archivePageEn}</p>
          <p className="section-lead">{t.archivePageLead}</p>
        </div>
      </header>
      <section className="shell archive__grid archive__grid--page">
        {list.map((item, index) => (
          <ExperimentCard key={item.slug} experiment={item} index={index} />
        ))}
      </section>
    </main>
  )
}
