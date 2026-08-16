import { Link, Navigate, useParams } from 'react-router-dom'
import { formatDate, getNote } from '../data/notes'
import { usePageTitle } from '../hooks/usePageTitle'
import type { NoteBlock } from '../types'

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
  const note = slug ? getNote(slug) : undefined
  usePageTitle(note ? `${note.title} — 场域 FIELD` : '场域 FIELD')

  if (!note) return <Navigate to="/notes" replace />

  return (
    <main id="main" className="subpage">
      <article className="article">
        <header className="article__header">
          <div className="shell article__header-inner">
            <p className="article__kicker">
              <Link to="/notes">产品笔记</Link>
              <span aria-hidden="true"> / </span>
              {note.theme}
            </p>
            <h1>{note.title}</h1>
            <p className="article__q">{note.question}</p>
            <div className="article__meta">
              <time dateTime={note.date}>{formatDate(note.date)}</time>
              <span>{note.minutes} min read</span>
              {note.pinned ? <span className="stamp stamp--red">置顶</span> : null}
            </div>
          </div>
        </header>
        <div className="shell article__body">
          <p className="article__lede">{note.lede}</p>
          {note.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
          <p className="article__back">
            <Link to="/notes">← 返回笔记索引</Link>
          </p>
        </div>
      </article>
    </main>
  )
}
