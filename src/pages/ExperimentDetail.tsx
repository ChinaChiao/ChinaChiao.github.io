import { Link, Navigate, useParams } from 'react-router-dom'
import { getExperiment } from '../data/experiments'
import { usePageTitle } from '../hooks/usePageTitle'

export function ExperimentDetail() {
  const { slug } = useParams()
  const item = slug ? getExperiment(slug) : undefined
  usePageTitle(item ? `${item.title} — 场域 FIELD` : '场域 FIELD')

  if (!item) return <Navigate to="/experiments" replace />

  return (
    <main id="main" className="subpage">
      <article className="exp-detail">
        <header className="subhero">
          <div className="shell">
            <p className="article__kicker">
              <Link to="/experiments">实验档案</Link>
              <span aria-hidden="true"> / </span>
              {item.code}
            </p>
            <h1 className="subhero__title">{item.title}</h1>
            <p className="subhero__en">{item.titleEn}</p>
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
              <h2>现场观察</h2>
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
              <h2>方法备注</h2>
              <p>{item.methodNote}</p>
            </section>
          </div>
          <p className="article__back">
            <Link to="/experiments">← 返回实验档案</Link>
          </p>
        </div>
      </article>
    </main>
  )
}
