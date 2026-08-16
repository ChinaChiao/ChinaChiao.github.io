import { Button } from '../components/Button'
import { usePageTitle } from '../hooks/usePageTitle'
import { useT } from '../i18n/useLocale'

export function NotFound() {
  const t = useT()
  usePageTitle(t.docMissing)

  return (
    <main id="main" className="subpage not-found">
      <div className="shell">
        <p className="not-found__num">404</p>
        <h1>{t.notFoundTitle}</h1>
        <p>{t.notFoundBody}</p>
        <div className="hero__actions">
          <Button to="/">{t.notFoundHome}</Button>
          <Button to="/notes" variant="secondary">
            {t.heroCtaNotes}
          </Button>
        </div>
      </div>
    </main>
  )
}
