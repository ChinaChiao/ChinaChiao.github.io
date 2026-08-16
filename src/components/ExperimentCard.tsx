import type { Experiment } from '../types'
import { useLocale } from '../i18n/useLocale'
import { LocaleLink } from './LocaleLink'

type Props = {
  experiment: Experiment
  index: number
}

export function ExperimentCard({ experiment, index }: Props) {
  const locale = useLocale()

  return (
    <LocaleLink
      className={`exp-card exp-card--${index + 1}`}
      to={`/experiments/${experiment.slug}`}
    >
      <div className="exp-card__top">
        <span className="exp-card__code">{experiment.code}</span>
        <span className="exp-card__status">{experiment.status}</span>
      </div>
      <h3 className="exp-card__title">{experiment.title}</h3>
      {locale === 'zh' ? (
        <p className="exp-card__en">{experiment.titleEn}</p>
      ) : null}
      <p className="exp-card__summary">{experiment.summary}</p>
      <div className="exp-card__foot">
        <span>{experiment.focus}</span>
        <span>{experiment.year}</span>
      </div>
      <span className="exp-card__mark" aria-hidden="true" />
    </LocaleLink>
  )
}
