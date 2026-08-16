import { site, visibleContacts } from '../../data/site'
import { SectionKicker } from '../Marks'

export function Signals() {
  const contacts = visibleContacts(site.contact)

  return (
    <section className="signals" id="signals" aria-labelledby="signals-title">
      <div className="shell">
        <SectionKicker index="06" label="个人信号与联系" />
        <div className="signals__grid">
          <div>
            <h2 id="signals-title" className="section-title">
              编辑式索引，而不是简历堆叠。
            </h2>
            <p className="section-lead">{site.thesis}</p>
          </div>
          <dl className="index-list">
            {site.education.map((item) => (
              <div key={item.schoolEn} className="index-list__row">
                <dt>Education</dt>
                <dd>
                  <strong>{item.school}</strong>
                  <span>
                    {item.program} / {item.programEn}
                  </span>
                  <span className="index-list__en">{item.schoolEn}</span>
                </dd>
              </div>
            ))}
            <div className="index-list__row">
              <dt>Now watching</dt>
              <dd>
                <ul>
                  {site.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="index-list__row">
              <dt>Cross field</dt>
              <dd>
                <ul>
                  {site.domains.map((item) => (
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
                <dt>Contact</dt>
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
