import { Link } from 'react-router-dom'
import { featuredNotes } from '../../data/notes'
import { NoteCard } from '../NoteCard'
import { SectionKicker } from '../Marks'

export function FeaturedNotes() {
  const { pinned, latest } = featuredNotes()

  return (
    <section className="featured" id="notes" aria-labelledby="notes-title">
      <div className="shell">
        <div className="featured__head">
          <SectionKicker index="03" label="精选产品笔记" />
          <div>
            <h2 id="notes-title" className="section-title">
              先读主张，再看实验。
            </h2>
            <Link className="text-link" to="/notes">
              进入笔记索引
            </Link>
          </div>
        </div>
        <div className="featured__grid">
          <NoteCard note={pinned} layout="feature" />
          <div className="featured__latest">
            {latest.map((note) => (
              <NoteCard key={note.slug} note={note} layout="stack" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
