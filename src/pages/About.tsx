import { method } from '../data/method'
import { site, visibleContacts } from '../data/site'
import { SectionKicker } from '../components/Marks'
import { usePageTitle } from '../hooks/usePageTitle'

export function About() {
  usePageTitle('关于与方法 — 场域 FIELD')
  const contacts = visibleContacts(site.contact)

  return (
    <main id="main" className="subpage">
      <header className="subhero">
        <div className="shell">
          <SectionKicker index="04" label="About" />
          <h1 className="subhero__title">关于场域</h1>
          <p className="subhero__en">{site.role}</p>
          <p className="section-lead">{site.heroZh}</p>
        </div>
      </header>

      <div className="shell about">
        <section className="about__block">
          <h2>叙事</h2>
          <p>
            我不是来证明“我会写代码”。从 2024
            年起，我持续用 AI 把生活里的具体摩擦做成可体验的产品实验：交互原型、数据分析、应用落地。AI
            伴侣只是其中一个观察案例。真正要看的，是 AI
            如何从助手拓展成共创、业务层，再变成日常生活的基础设施。
          </p>
          <p>
            这个站点面向同行开发者、HR
            与潜在合作者。我希望三秒能被记住形式，三十秒能被说清立场：先锋审美，愿意试新技术，并把生活观察转化成产品实验。
          </p>
        </section>

        <section className="about__block">
          <h2>教育</h2>
          <ul className="about__edu">
            {site.education.map((item) => (
              <li key={item.schoolEn}>
                <strong>
                  {item.school} / {item.program}
                </strong>
                <span>
                  {item.schoolEn} · {item.programEn}
                </span>
                <span>{item.place}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="about__block">
          <h2>工程底座</h2>
          <p>
            网络安全不单独包装成对外项目。它是默认的工程底座：边界、滥用、权限、失败模式。做伴侣、做数据透镜、做会传播的产品时，这套训练决定哪些东西不能被生成出来就算完成。
          </p>
        </section>

        <section className="about__block">
          <h2>方法</h2>
          <ol className="method__list method__list--compact">
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
        </section>

        {contacts.length > 0 ? (
          <section className="about__block" id="contact">
            <h2>联系</h2>
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
