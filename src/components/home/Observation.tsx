import { SectionKicker } from '../Marks'
import { timeline } from '../../data/timeline'

export function Observation() {
  return (
    <section className="observe" id="observe" aria-labelledby="observe-title">
      <div className="shell">
        <SectionKicker index="02" label="AI 影响观察" />
        <div className="observe__head">
          <h2 id="observe-title" className="section-title">
            AI 正在改写任务如何开始、判断如何形成、产品如何被使用。
          </h2>
          <p className="section-lead">
            这不是一条“编码更快”的效率曲线。四阶段时间轴描述的是能力如何从助手，长成共创、业务层，再铺进日常基础设施。
          </p>
        </div>
        <ol className="timeline">
          {timeline.map((stage, i) => (
            <li key={stage.id} className={`timeline__item timeline__item--${i + 1}`}>
              <div className="timeline__index">
                <span>{stage.index}</span>
                <em>{stage.kicker}</em>
              </div>
              <div className="timeline__body">
                <h3>
                  {stage.title}
                  <small>{stage.titleEn}</small>
                </h3>
                <p>{stage.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
