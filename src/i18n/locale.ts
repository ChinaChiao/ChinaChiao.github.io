export type Locale = 'zh' | 'en'

export const locales: Locale[] = ['zh', 'en']
export const defaultLocale: Locale = 'zh'

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh'
}

export function stripLocale(pathname: string) {
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/en/')) {
    const rest = pathname.slice(3)
    return rest.startsWith('/') ? rest : `/${rest}`
  }
  return pathname
}

export function withLocale(pathname: string, locale: Locale) {
  const path = stripLocale(pathname)
  if (locale === 'zh') return path || '/'
  if (path === '/') return '/en'
  return `/en${path}`
}

export function htmlLang(locale: Locale) {
  return locale === 'zh' ? 'zh-CN' : 'en'
}
