import { Button } from '../components/Button'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFound() {
  usePageTitle('未找到 — 场域 FIELD')

  return (
    <main id="main" className="subpage not-found">
      <div className="shell">
        <p className="not-found__num">404</p>
        <h1>这一页不在档案里。</h1>
        <p>回到场域，从笔记或实验继续。 </p>
        <div className="hero__actions">
          <Button to="/">返回首页</Button>
          <Button to="/notes" variant="secondary">
            阅读产品笔记
          </Button>
        </div>
      </div>
    </main>
  )
}
