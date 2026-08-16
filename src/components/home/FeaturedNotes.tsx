import { useFeaturedNotes, useT } from '../../i18n/useLocale'
import { LocaleLink } from '../LocaleLink'
import { NoteCard } from '../NoteCard'
import { SectionKicker } from '../Marks'

export function FeaturedNotes() {
  const t = useT()
  const { pinned, latest } = useFeaturedNotes()

  return (
    <section className="featured" id="notes" aria-labelledby="notes-title">
      <div className="shell">
        <div className="featured__head">
          <SectionKicker index="03" label={t.notesKicker} />
          <div>
            <h2 id="notes-title" className="section-title">
              {t.notesTitle}
            </h2>
            <LocaleLink className="text-link" to="/notes">
              {t.notesIndex}
            </LocaleLink>
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
