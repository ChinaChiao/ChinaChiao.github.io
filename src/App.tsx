import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { ExperimentDetail } from './pages/ExperimentDetail'
import { Experiments } from './pages/Experiments'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { NoteDetail } from './pages/NoteDetail'
import { Notes } from './pages/Notes'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:slug" element={<NoteDetail />} />
          <Route path="experiments" element={<Experiments />} />
          <Route path="experiments/:slug" element={<ExperimentDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
