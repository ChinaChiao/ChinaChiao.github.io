import { ExperimentCard } from '../components/ExperimentCard'
import { SectionKicker } from '../components/Marks'
import { experiments } from '../data/experiments'
import { usePageTitle } from '../hooks/usePageTitle'

export function Experiments() {
  usePageTitle('实验档案 — 场域 FIELD')

  return (
    <main id="main" className="subpage">
      <header className="subhero">
        <div className="shell">
          <SectionKicker index="03" label="Archive" />
          <h1 className="subhero__title">实验档案</h1>
          <p className="subhero__en">Four fields. One way of watching.</p>
          <p className="section-lead">
            每个实验都来自生活里的具体摩擦。AI Companion 是观察案例之一，不是身份的全部。
          </p>
        </div>
      </header>
      <section className="shell archive__grid archive__grid--page">
        {experiments.map((item, index) => (
          <ExperimentCard key={item.slug} experiment={item} index={index} />
        ))}
      </section>
    </main>
  )
}
