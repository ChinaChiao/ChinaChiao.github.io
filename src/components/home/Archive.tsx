import { Link } from 'react-router-dom'
import { experiments } from '../../data/experiments'
import { ExperimentCard } from '../ExperimentCard'
import { SectionKicker } from '../Marks'

export function Archive() {
  return (
    <section className="archive" id="archive" aria-labelledby="archive-title">
      <div className="shell">
        <div className="archive__head">
          <SectionKicker index="04" label="实验档案" />
          <div>
            <h2 id="archive-title" className="section-title">
              四个现场，一种观察方式。
            </h2>
            <p className="section-lead">
              AI 伴侣只是其中一个案例。数据、游戏与传播共同构成视角。网络安全不单独陈列，它作为工程底座写在方法里。
            </p>
            <Link className="text-link" to="/experiments">
              打开完整档案
            </Link>
          </div>
        </div>
        <div className="archive__grid">
          {experiments.map((item, index) => (
            <ExperimentCard key={item.slug} experiment={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
