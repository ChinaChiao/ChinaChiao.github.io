import { Link } from 'react-router-dom'
import { site, visibleContacts } from '../data/site'

export function Footer() {
  const contacts = visibleContacts(site.contact)

  return (
    <footer className="site-footer">
      <div
        className={`shell site-footer__grid${contacts.length ? '' : ' site-footer__grid--solo'}`}
      >
        <div>
          <p className="site-footer__brand">
            {site.nameZh} / {site.nameEn}
          </p>
          <p className="site-footer__role">{site.role}</p>
        </div>
        <nav aria-label="页脚导航">
          <Link to="/notes">产品笔记</Link>
          <Link to="/experiments">实验档案</Link>
          <Link to="/about">方法与关于</Link>
        </nav>
        {contacts.length > 0 ? (
          <div className="site-footer__contact">
            {contacts.map((item) => (
              <a key={item.key} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
        <p className="site-footer__colophon">
          Constructivist field notes. Cybersecurity as the engineering base.
          <br />
          © {site.year} {site.nameEn}
        </p>
      </div>
    </footer>
  )
}
