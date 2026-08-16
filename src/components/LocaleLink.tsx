import { NavLink, Link, type LinkProps, type NavLinkProps } from 'react-router-dom'
import { useLocale } from '../i18n/useLocale'
import { withLocale } from '../i18n/locale'

function localizeTo(to: LinkProps['to'], locale: ReturnType<typeof useLocale>) {
  if (typeof to !== 'string') return to
  return withLocale(to, locale)
}

export function LocaleLink({ to, ...props }: LinkProps) {
  const locale = useLocale()
  return <Link {...props} to={localizeTo(to, locale)} />
}

export function LocaleNavLink({ to, ...props }: NavLinkProps) {
  const locale = useLocale()
  return <NavLink {...props} to={localizeTo(to, locale)} />
}
