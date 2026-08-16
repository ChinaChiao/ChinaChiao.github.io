import { useMethod, useT } from '../../i18n/useLocale'
import { SectionKicker } from '../Marks'

export function Method() {
  const t = useT()
  const list = useMethod()

  return (
    <section className="method" id="method" aria-labelledby="method-title">
      <div className="shell">
        <SectionKicker index="05" label={t.methodKicker} />
        <h2 id="method-title" className="section-title">
          {t.methodTitle}
        </h2>
        <ol className="method__list">
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
      </div>
    </section>
  )
}
