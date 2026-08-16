import { Navigate, useParams } from 'react-router-dom'
import { formatDate } from '../data/notes'
import { usePageTitle } from '../hooks/usePageTitle'
import { withLocale } from '../i18n/locale'
import { useLocale, useNote, useT } from '../i18n/useLocale'
import type { NoteBlock } from '../types'
import { LocaleLink } from '../components/LocaleLink'

function Block({ block }: { block: NoteBlock }) {
  if (block.type === 'h') return <h2>{block.text}</h2>
  if (block.type === 'quote') return <blockquote>{block.text}</blockquote>
  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return <p>{block.text}</p>
}

export function NoteDetail() {
  const { slug } = useParams()
  const locale = useLocale()
  const t = useT()
  const note = useNote(slug)
  usePageTitle(note ? `${note.title} — ${t.docBrand}` : t.docHome)

  if (!note) return <Navigate to={withLocale('/notes', locale)} replace />

  return (
    <main id="main" className="subpage">
      <article className="article">
        <header className="article__header">
          <div className="shell article__header-inner">
            <p className="article__kicker">
              <LocaleLink to="/notes">{t.notesPageTitle}</LocaleLink>
              <span aria-hidden="true"> / </span>
              {note.theme}
            </p>
            <h1>{note.title}</h1>
            <p className="article__q">{note.question}</p>
            <div className="article__meta">
              <time dateTime={note.date}>{formatDate(note.date)}</time>
              <span>{note.minutes} min read</span>
              {note.pinned ? <span className="stamp stamp--red">{t.notesPinned}</span> : null}
            </div>
          </div>
        </header>
        <div className="shell article__body">
          <p className="article__lede">{note.lede}</p>
          {note.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
          <p className="article__back">
            <LocaleLink to="/notes">{t.notesBack}</LocaleLink>
          </p>
        </div>
      </article>
    </main>
  )
}
