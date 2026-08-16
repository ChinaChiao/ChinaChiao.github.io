export type ContactKey = 'email' | 'github' | 'x' | 'linkedin' | 'website'

export type Contact = Partial<Record<ContactKey, string>>

export type Education = {
  school: string
  schoolEn: string
  program: string
  programEn: string
  place: string
}

export type NoteBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }

export type Note = {
  slug: string
  title: string
  question: string
  theme: string
  date: string
  minutes: number
  pinned?: boolean
  lede: string
  body: NoteBlock[]
}

export type ExperimentDemo = 'companion' | 'datalens' | 'play' | 'media'

export type Experiment = {
  slug: string
  code: string
  title: string
  titleEn: string
  summary: string
  focus: string
  status: string
  year: string
  observations: string[]
  methodNote: string
  insight: string
  demo: ExperimentDemo
}

export type TimelineStage = {
  id: string
  index: string
  title: string
  titleEn: string
  kicker: string
  body: string
}

export type MethodPrinciple = {
  index: string
  title: string
  titleZh: string
  body: string
}

export type SignalItem = {
  key: string
  label: string
  value: string
}
