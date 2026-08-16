import { SectionKicker } from '../components/Marks'
import { visibleContacts } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'
import { useLocale, useMethod, useSiteCopy, useT } from '../i18n/useLocale'

export function About() {
  const locale = useLocale()
  const t = useT()
  const siteCopy = useSiteCopy()
  const list = useMethod()
  usePageTitle(t.docAbout)
  const contacts = visibleContacts(siteCopy.contact)

  return (
    <main id="main" className="subpage">
      <header className="subhero">
        <div className="shell">
          <SectionKicker index="04" label={t.aboutKicker} />
          <h1 className="subhero__title">{t.aboutTitle}</h1>
          <p className="subhero__en">{siteCopy.role}</p>
          <p className="section-lead">
            {locale === 'en' ? siteCopy.heroEn : siteCopy.heroZh}
          </p>
        </div>
      </header>

      <div className="shell about">
        <section className="about__block">
          <h2>{t.aboutStory}</h2>
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
        </section>

        <section className="about__block">
          <h2>{t.aboutEdu}</h2>
          <ul className="about__edu">
            {siteCopy.education.map((item) => (
              <li key={item.schoolEn}>
                <strong>
                  {locale === 'en'
                    ? `${item.schoolEn} / ${item.programEn}`
                    : `${item.school} / ${item.program}`}
                </strong>
                <span>
                  {locale === 'en'
                    ? `${item.school} · ${item.program}`
                    : `${item.schoolEn} · ${item.programEn}`}
                </span>
                <span>{item.place}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about__block">
          <h2>{t.aboutBase}</h2>
          <p>{t.aboutBaseP}</p>
        </section>

        <section className="about__block">
          <h2>{t.aboutMethod}</h2>
          <ol className="method__list method__list--compact">
            {list.map((item) => (
              <li key={item.index} className="method__item">
                <span className="method__num">{item.index}</span>
                <div>
                  <h3>
                    {item.title}
                    <small>{item.titleZh}</small>
                  </h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {contacts.length > 0 ? (
          <section className="about__block" id="contact">
            <h2>{t.aboutContact}</h2>
            <div className="index-list__contact">
              {contacts.map((item) => (
                <a key={item.key} href={item.href}>
                  {item.label} / {item.value}
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  )
}
