import { Button } from '../Button'
import { CropMarks, Proun } from '../Marks'
import { site } from '../../data/site'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__board" aria-hidden="true" />
      <CropMarks />
      <div className="shell hero__layout">
        <div className="hero__copy">
          <div className="hero__tags">
            <span className="stamp">{site.role}</span>
            <span className="stamp">{site.educationShort}</span>
          </div>
          <p className="hero__issue">
            {site.issue} · EVERYDAY EXPERIMENTS · SINCE 2024
          </p>
          <h1 id="hero-title" className="hero__zh">
            {site.heroZh}
          </h1>
          <p className="hero__en">{site.heroEn}</p>
          <p className="hero__intro">{site.intro}</p>
          <div className="hero__actions">
            <Button to="/notes">阅读产品笔记</Button>
            <Button to="/experiments" variant="secondary">
              查看实验档案
            </Button>
          </div>
        </div>

        <aside className="hero__aside" aria-hidden="true">
          <div className="hero__composition">
            <Proun className="hero__proun" />
            <p className="hero__vertical">AI-NATIVE / 2024—</p>
            <p className="hero__giant">01</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
