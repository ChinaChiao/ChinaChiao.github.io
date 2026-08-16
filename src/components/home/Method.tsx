import { method } from '../../data/method'
import { SectionKicker } from '../Marks'

export function Method() {
  return (
    <section className="method" id="method" aria-labelledby="method-title">
      <div className="shell">
        <SectionKicker index="05" label="产品方法" />
        <h2 id="method-title" className="section-title">
          方法是立场，不是流程海报。
        </h2>
        <ol className="method__list">
          {method.map((item) => (
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
