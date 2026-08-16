import { visibleContacts } from '../../data/site'
import { useLocale, useSiteCopy, useT } from '../../i18n/useLocale'
import { SectionKicker } from '../Marks'

export function Signals() {
  const locale = useLocale()
  const t = useT()
  const siteCopy = useSiteCopy()
  const contacts = visibleContacts(siteCopy.contact)

  return (
    <section className="signals" id="signals" aria-labelledby="signals-title">
      <div className="shell">
        <SectionKicker index="06" label={t.signalsKicker} />
        <div className="signals__grid">
          <div>
            <h2 id="signals-title" className="section-title">
              {t.signalsTitle}
            </h2>
            <p className="section-lead">{siteCopy.thesis}</p>
          </div>
          <dl className="index-list">
            {siteCopy.education.map((item) => (
              <div key={item.schoolEn} className="index-list__row">
                <dt>{t.signalsEducation}</dt>
                <dd>
                  <strong>{locale === 'en' ? item.schoolEn : item.school}</strong>
                  <span>
                    {locale === 'en'
                      ? `${item.programEn} / ${item.program}`
                      : `${item.program} / ${item.programEn}`}
                  </span>
                  <span className="index-list__en">
                    {locale === 'en' ? item.school : item.schoolEn}
                  </span>
                </dd>
              </div>
            ))}
            <div className="index-list__row">
              <dt>{t.signalsWatching}</dt>
              <dd>
                <ul>
                  {siteCopy.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="index-list__row">
              <dt>{t.signalsCross}</dt>
              <dd>
                <ul>
                  {siteCopy.domains.map((item) => (
                    <li key={item.name}>
                      <strong>{item.name}</strong>
                      <span> — {item.note}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            {contacts.length > 0 ? (
              <div className="index-list__row">
                <dt>{t.signalsContact}</dt>
                <dd className="index-list__contact">
                  {contacts.map((item) => (
                    <a key={item.key} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>
    </section>
  )
}
