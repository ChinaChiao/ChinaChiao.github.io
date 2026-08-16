import { useEffect, useMemo, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { htmlLang, localeFromPath, stripLocale, withLocale } from './locale'
import { LocaleContext } from './useLocale'

function setLink(
  rel: string,
  key: string,
  href: string,
  hrefLang?: string,
) {
  const selector = `link[data-i18n="${key}"]`
  let node = document.querySelector<HTMLLinkElement>(selector)
  if (!node) {
    node = document.createElement('link')
    node.dataset.i18n = key
    document.head.append(node)
  }
  node.rel = rel
  node.href = href
  if (hrefLang) node.setAttribute('hreflang', hrefLang)
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const locale = localeFromPath(pathname)
  const value = useMemo(() => ({ locale }), [locale])

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale)
    try {
      localStorage.setItem('field-locale', locale)
    } catch {
      /* ignore */
    }

    const path = stripLocale(pathname)
    setLink('canonical', 'canonical', withLocale(path, locale))
    setLink('alternate', 'zh', path, 'zh-CN')
    setLink('alternate', 'en', withLocale(path, 'en'), 'en')
    setLink('alternate', 'default', '/', 'x-default')
  }, [locale, pathname])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
