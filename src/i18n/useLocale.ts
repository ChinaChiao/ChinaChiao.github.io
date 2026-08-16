import { createContext, useContext, useMemo } from 'react'
import { experiments } from '../data/experiments'
import { method } from '../data/method'
import { notes } from '../data/notes'
import { site } from '../data/site'
import { timeline } from '../data/timeline'
import {
  experimentsEn,
  methodEn,
  notesEn,
  siteEn,
  timelineEn,
} from './enContent'
import { defaultLocale, type Locale } from './locale'
import { ui, type UiCopy } from './ui'

export type LocaleContextValue = {
  locale: Locale
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
})

export function useLocale() {
  return useContext(LocaleContext).locale
}

export function useT(): UiCopy {
  const locale = useLocale()
  return ui[locale] as UiCopy
}

export function useSiteCopy() {
  const locale = useLocale()
  return locale === 'en' ? siteEn : site
}

export function useTimeline() {
  const locale = useLocale()
  return useMemo(() => {
    if (locale === 'zh') return timeline
    return timeline.map((item) => ({ ...item, ...timelineEn[item.id] }))
  }, [locale])
}

export function useMethod() {
  const locale = useLocale()
  return useMemo(() => {
    if (locale === 'zh') return method
    return method.map((item) => ({ ...item, ...methodEn[item.index] }))
  }, [locale])
}

export function useExperiments() {
  const locale = useLocale()
  return useMemo(() => {
    if (locale === 'zh') return experiments
    return experiments.map((item) => ({ ...item, ...experimentsEn[item.slug] }))
  }, [locale])
}

export function useExperiment(slug: string | undefined) {
  const list = useExperiments()
  return slug ? list.find((item) => item.slug === slug) : undefined
}

export function useNotes() {
  const locale = useLocale()
  return useMemo(() => {
    if (locale === 'zh') return notes
    return notes.map((item) => ({ ...item, ...notesEn[item.slug] }))
  }, [locale])
}

export function useNote(slug: string | undefined) {
  const list = useNotes()
  return slug ? list.find((item) => item.slug === slug) : undefined
}

export function useFeaturedNotes() {
  const list = useNotes()
  return useMemo(() => {
    const pinned = list.find((item) => item.pinned) ?? list[0]
    const latest = list
      .filter((item) => item.slug !== pinned.slug)
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 2)
    return { pinned, latest }
  }, [list])
}

export function useNotesByDate() {
  const list = useNotes()
  return useMemo(
    () => list.slice().sort((a, b) => (a.date < b.date ? 1 : -1)),
    [list],
  )
}
