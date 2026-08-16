import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { playTick } from '../lib/tone'
import type { Experiment, ExperimentDemo } from '../types'

const prompts: Record<ExperimentDemo, string> = {
  companion: '说一句今天卡住的事。',
  datalens: '选一个问题，看证据怎么排。',
  play: '按下去。反馈应该立刻到。',
  media: '走完一圈：钩子、反馈、原型。',
}

const companionReplies = [
  '先记下这个摩擦。下一步不是更大的模型，是让它在对的时刻出现。',
  '如果这句话要被记住一周，它得短，而且得跟你今天做过的事有关。',
  '角色感来自节奏，不来自更长的自我介绍。',
]

const lensQueries = [
  {
    id: 'open',
    label: '哪些现场被打开最多',
    bars: [
      { name: 'Companion', value: 42 },
      { name: 'Data Lens', value: 31 },
      { name: 'Play', value: 18 },
      { name: 'Media', value: 27 },
    ],
    note: '打开多不等于有效。Companion 被点得多，是因为它先许诺了关系。',
  },
  {
    id: 'steps',
    label: '提问到结论平均几步',
    bars: [
      { name: '1 步', value: 22 },
      { name: '2 步', value: 38 },
      { name: '3 步', value: 27 },
      { name: '4+ 步', value: 13 },
    ],
    note: '超过三步，人会放弃追问，开始相信第一张图。',
  },
  {
    id: 'retry',
    label: '失败后还会再问吗',
    bars: [
      { name: '再问', value: 46 },
      { name: '改口', value: 21 },
      { name: '离开', value: 33 },
    ],
    note: '再问一次，说明证据路径还看得见。不问了，多半是被确定感噎住。',
  },
]

const mediaSteps = [
  { id: 'hook', title: '钩子', body: '三秒里把摩擦说清楚。' },
  { id: 'echo', title: '反馈', body: '看谁被戳到，记下原话。' },
  { id: 'make', title: '原型', body: '把那句原话做成可按的一步。' },
]

const mediaNotes = [
  '这一圈值是因为反馈改了形状，不是因为曝光数字变大。',
  '钩子如果不能变成下一步，就只是开头。',
  '循环成立：表达带来使用，使用修正表达。',
]

type BenchProps = {
  experiment: Experiment
}

export function ExperimentBench({ experiment }: BenchProps) {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="bench" aria-labelledby="bench-title">
      <header className="bench__head">
        <div>
          <p className="bench__kicker">现场 / Live bench</p>
          <h2 id="bench-title" className="bench__title">
            可把玩的现场
          </h2>
        </div>
        <p className="bench__meta">
          {reduced ? '已按系统偏好关闭声响与位移' : '按下去会有一声轻响'}
        </p>
      </header>
      <p className="bench__prompt">{prompts[experiment.demo]}</p>
      <blockquote className="bench__insight">{experiment.insight}</blockquote>
      <div className="bench__stage">
        {experiment.demo === 'companion' ? <CompanionBench /> : null}
        {experiment.demo === 'datalens' ? <DataLensBench /> : null}
        {experiment.demo === 'play' ? <PlayBench /> : null}
        {experiment.demo === 'media' ? <MediaBench /> : null}
      </div>
    </section>
  )
}

function CompanionBench() {
  const inputId = useId()
  const logRef = useRef<HTMLDivElement>(null)
  const [input, setInput] = useState('')
  const [log, setLog] = useState<{ role: 'site' | 'you'; text: string }[]>([
    {
      role: 'site',
      text: '在。今天想被记住哪一件小事？',
    },
  ])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [log])

  const send = (event: FormEvent) => {
    event.preventDefault()
    const text = input.trim()
    if (!text) return

    playTick(600, 'triangle', 0.045)
    const reply =
      companionReplies[Math.floor(Math.random() * companionReplies.length)]

    setInput('')
    const next: { role: 'site' | 'you'; text: string }[] = [
      ...log,
      { role: 'you', text },
      { role: 'site', text: reply },
    ]
    setLog(next.slice(-6))
  }

  return (
    <div className="bench-chat">
      <div
        ref={logRef}
        className="bench-log"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        aria-label="伴侣对话"
      >
        {log.map((entry, index) => (
          <p
            key={`${entry.role}-${index}`}
            className={`bench-msg bench-msg--${entry.role}`}
          >
            <span>{entry.role === 'you' ? '你' : '现场'}</span>
            {entry.text}
          </p>
        ))}
      </div>
      <form className="bench-form" onSubmit={send}>
        <label className="visually-hidden" htmlFor={inputId}>
          对伴侣说一句
        </label>
        <input
          id={inputId}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="例如：晚上不想再解释一遍今天做了什么"
        />
        <button className="press" type="submit">
          发送
        </button>
      </form>
    </div>
  )
}

function DataLensBench() {
  const reduced = usePrefersReducedMotion()
  const [activeId, setActiveId] = useState(lensQueries[0].id)
  const [pending, setPending] = useState(false)
  const active = lensQueries.find((item) => item.id === activeId) ?? lensQueries[0]
  const max = Math.max(...active.bars.map((bar) => bar.value))

  const run = (id: string) => {
    playTick(480, 'square', 0.04)
    setActiveId(id)
    if (reduced) {
      setPending(false)
      return
    }
    setPending(true)
    window.setTimeout(() => setPending(false), 220)
  }

  return (
    <div className="bench-lens">
      <div className="bench-chips" role="group" aria-label="选择一个问题">
        {lensQueries.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`press bench-chip${item.id === activeId ? ' is-on' : ''}`}
            aria-pressed={item.id === activeId}
            onClick={() => run(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="bench-evidence" aria-live="polite" aria-busy={pending}>
        <p className="bench-kicker">证据路径</p>
        <ul className={`bench-bars${pending ? ' is-pending' : ''}`}>
          {active.bars.map((bar) => (
            <li key={bar.name}>
              <span>{bar.name}</span>
              <span
                className="bench-bar"
                style={{ width: `${Math.round((bar.value / max) * 100)}%` }}
              />
              <b>{bar.value}</b>
            </li>
          ))}
        </ul>
        <p className="bench-note">{active.note}</p>
      </div>
    </div>
  )
}

function PlayBench() {
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const timer = useRef<number>(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const hit = () => {
    const nextCombo = combo + 1
    const freq = Math.min(420 + nextCombo * 46, 880)
    playTick(freq, 'square', 0.05)
    setCombo(nextCombo)
    setScore((value) => value + 40 * nextCombo)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCombo(0), 1400)
  }

  return (
    <div className="bench-play">
      <p className="bench-score" aria-live="polite" aria-atomic="true">
        <span className="bench-score__num">{score}</span>
        <span className="bench-score__combo">连击 {combo || '—'}</span>
      </p>
      <button className="press press--accent bench-pulse" type="button" onClick={hit}>
        按下去
      </button>
      <p className="bench-note">规则稳定，反馈诚实。松手后连击会掉。</p>
    </div>
  )
}

function MediaBench() {
  const [step, setStep] = useState(0)
  const [cycles, setCycles] = useState(0)
  const [note, setNote] = useState(mediaNotes[0])

  const advance = () => {
    playTick(step === 2 ? 640 : 500, 'sine', 0.045)
    if (step === 2) {
      const next = cycles + 1
      setCycles(next)
      setNote(mediaNotes[next % mediaNotes.length])
      setStep(0)
      return
    }
    setStep((value) => value + 1)
  }

  return (
    <div className="bench-media">
      <ol className="bench-steps">
        {mediaSteps.map((item, index) => (
          <li
            key={item.id}
            className={index === step ? 'is-on' : ''}
            aria-current={index === step ? 'step' : undefined}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
      <div className="bench-media__foot">
        <button className="press" type="button" onClick={advance}>
          走一拍
        </button>
        <p className="bench-note" aria-live="polite">
          已走完 {cycles} 圈。{note}
        </p>
      </div>
    </div>
  )
}
