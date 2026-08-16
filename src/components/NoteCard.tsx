import { formatDate } from '../data/notes'
import { useT } from '../i18n/useLocale'
import type { Note } from '../types'
import { LocaleLink } from './LocaleLink'

type Props = {
  note: Note
  layout?: 'feature' | 'stack' | 'row'
}

export function NoteCard({ note, layout = 'stack' }: Props) {
  const t = useT()

  return (
    <article className={`note-card note-card--${layout}`}>
      <div className="note-card__meta">
        {note.pinned ? <span className="stamp stamp--red">{t.notesPinned}</span> : null}
        <span className="note-card__theme">{note.theme}</span>
        <span className="note-card__dot" aria-hidden="true" />
        <time dateTime={note.date}>{formatDate(note.date)}</time>
        <span className="note-card__dot" aria-hidden="true" />
        <span>{note.minutes} min</span>
      </div>
      <h3 className="note-card__title">
        <LocaleLink to={`/notes/${note.slug}`}>{note.title}</LocaleLink>
      </h3>
      <p className="note-card__q">{note.question}</p>
      {layout === 'feature' ? <p className="note-card__lede">{note.lede}</p> : null}
      <LocaleLink className="note-card__go" to={`/notes/${note.slug}`}>
        {t.notesRead} <span aria-hidden="true">→</span>
      </LocaleLink>
    </article>
  )
}
