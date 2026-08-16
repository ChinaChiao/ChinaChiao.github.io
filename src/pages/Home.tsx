import { Archive } from '../components/home/Archive'
import { FeaturedNotes } from '../components/home/FeaturedNotes'
import { Hero } from '../components/home/Hero'
import { Method } from '../components/home/Method'
import { Observation } from '../components/home/Observation'
import { Signals } from '../components/home/Signals'
import { usePageTitle } from '../hooks/usePageTitle'
import { useT } from '../i18n/useLocale'

export function Home() {
  const t = useT()
  usePageTitle(t.docHome)

  return (
    <main id="main">
      <Hero />
      <Observation />
      <FeaturedNotes />
      <Archive />
      <Method />
      <Signals />
    </main>
  )
}
