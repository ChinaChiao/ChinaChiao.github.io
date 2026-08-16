import { Link } from 'react-router-dom'
import { formatDate } from '../data/notes'
import type { Note } from '../types'

type Props = {
  note: Note
  layout?: 'feature' | 'stack' | 'row'
}

export function NoteCard({ note, layout = 'stack' }: Props) {
  return (
    <article className={`note-card note-card--${layout}`}>
      <div className="note-card__meta">
        {note.pinned ? <span className="stamp stamp--red">置顶</span> : null}
        <span className="note-card__theme">{note.theme}</span>
        <span className="note-card__dot" aria-hidden="true" />
        <time dateTime={note.date}>{formatDate(note.date)}</time>
        <span className="note-card__dot" aria-hidden="true" />
        <span>{note.minutes} min</span>
      </div>
      <h3 className="note-card__title">
        <Link to={`/notes/${note.slug}`}>{note.title}</Link>
      </h3>
      <p className="note-card__q">{note.question}</p>
      {layout === 'feature' ? <p className="note-card__lede">{note.lede}</p> : null}
      <Link className="note-card__go" to={`/notes/${note.slug}`}>
        阅读 <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
