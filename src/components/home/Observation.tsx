import { useRef, useState } from 'react'
import { useT, useTimeline } from '../../i18n/useLocale'
import { SectionKicker } from '../Marks'

export function Observation() {
  const t = useT()
  const stages = useTimeline()
  const [current, setCurrent] = useState(0)
  const refs = useRef<Array<HTMLButtonElement | null>>([])

  const move = (delta: number) => {
    setCurrent((value) => {
      const next = (value + delta + stages.length) % stages.length
      queueMicrotask(() => refs.current[next]?.focus({ preventScroll: true }))
      return next
    })
  }

  return (
    <section className="observe" id="observe" aria-labelledby="observe-title">
      <div className="shell">
        <SectionKicker index="02" label={t.observeKicker} />
        <div className="observe__head">
          <h2 id="observe-title" className="section-title">
            {t.observeTitle}
          </h2>
          <p className="section-lead">{t.observeLead}</p>
        </div>
        <ol className="timeline">
          {stages.map((stage, i) => (
            <li
              key={stage.id}
              className={`timeline__item timeline__item--${i + 1}${i === current ? ' is-current' : ''}`}
            >
              <button
                ref={(node) => {
                  refs.current[i] = node
                }}
                type="button"
                className="timeline__hit"
                aria-current={i === current ? 'step' : undefined}
                onClick={() => setCurrent(i)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                    event.preventDefault()
                    move(1)
                  }
                  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                    event.preventDefault()
                    move(-1)
                  }
                }}
              >
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
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
