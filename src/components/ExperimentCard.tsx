import { Link } from 'react-router-dom'
import type { Experiment } from '../types'

type Props = {
  experiment: Experiment
  index: number
}

export function ExperimentCard({ experiment, index }: Props) {
  return (
    <Link
      className={`exp-card exp-card--${index + 1}`}
      to={`/experiments/${experiment.slug}`}
    >
      <div className="exp-card__top">
        <span className="exp-card__code">{experiment.code}</span>
        <span className="exp-card__status">{experiment.status}</span>
      </div>
      <h3 className="exp-card__title">{experiment.title}</h3>
      <p className="exp-card__en">{experiment.titleEn}</p>
      <p className="exp-card__summary">{experiment.summary}</p>
      <div className="exp-card__foot">
        <span>{experiment.focus}</span>
        <span>{experiment.year}</span>
      </div>
      <span className="exp-card__mark" aria-hidden="true" />
    </Link>
  )
}
