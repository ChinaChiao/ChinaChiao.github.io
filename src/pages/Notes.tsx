import { NoteCard } from '../components/NoteCard'
import { SectionKicker } from '../components/Marks'
import { usePageTitle } from '../hooks/usePageTitle'
import { useNotesByDate, useT } from '../i18n/useLocale'

export function Notes() {
  const t = useT()
  usePageTitle(t.docNotes)
  const list = useNotesByDate()

  return (
    <main id="main" className="subpage">
      <header className="subhero">
        <div className="shell">
          <SectionKicker index="02" label="Notes" />
          <h1 className="subhero__title">{t.notesPageTitle}</h1>
          <p className="subhero__en">{t.notesPageEn}</p>
          <p className="section-lead">{t.notesPageLead}</p>
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
