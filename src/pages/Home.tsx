import { Archive } from '../components/home/Archive'
import { FeaturedNotes } from '../components/home/FeaturedNotes'
import { Hero } from '../components/home/Hero'
import { Method } from '../components/home/Method'
import { Observation } from '../components/home/Observation'
import { Signals } from '../components/home/Signals'
import { usePageTitle } from '../hooks/usePageTitle'

export function Home() {
  usePageTitle('场域 FIELD — AI-native Product Builder')

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
