import { NoteCard } from '../components/NoteCard'
import { SectionKicker } from '../components/Marks'
import { notesByDate } from '../data/notes'
import { usePageTitle } from '../hooks/usePageTitle'

export function Notes() {
  usePageTitle('产品笔记 — 场域 FIELD')
  const list = notesByDate()

  return (
    <main id="main" className="subpage">
      <header className="subhero">
        <div className="shell">
          <SectionKicker index="02" label="Notes" />
          <h1 className="subhero__title">产品笔记</h1>
          <p className="subhero__en">Product notes on judgment, life, and form.</p>
          <p className="section-lead">
            这里写的不是教程合集，而是把生活观察压成可讨论的主张。先问题，再主题，再时间。
          </p>
        </div>
      </header>
      <section className="shell notes-index">
        {list.map((note) => (
          <NoteCard key={note.slug} note={note} layout="row" />
        ))}
      </section>
    </main>
  )
}
