import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'

const links = [
  { to: '/', label: '首页', en: 'Index', index: '01' },
  { to: '/notes', label: '笔记', en: 'Notes', index: '02' },
  { to: '/experiments', label: '实验', en: 'Archive', index: '03' },
  { to: '/about', label: '关于', en: 'About', index: '04' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="masthead">
      <a className="skip" href="#main">
        跳到正文
      </a>
      <div className="masthead__bar">
        <Link className="brand" to="/" aria-label="场域 FIELD 首页">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__zh">{site.nameZh}</span>
          <span className="brand__en">{site.nameEn}</span>
        </Link>

        <p className="masthead__issue">
          {site.issue} <span>/</span> {site.year}
        </p>

        <nav className="masthead__nav" aria-label="主导航">
          {links.slice(1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `masthead__link${isActive ? ' is-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`index-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="site-index"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? '关闭' : '索引'}</span>
          <i aria-hidden="true" />
        </button>
      </div>

      <div
        id="site-index"
        className={`site-index${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <div className="site-index__inner">
          <p className="site-index__kicker">Field Index / 场域索引</p>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>
                  <span className="site-index__num">{link.index}</span>
                  <span className="site-index__zh">{link.label}</span>
                  <span className="site-index__en">{link.en}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
