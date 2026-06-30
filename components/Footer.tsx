'use client'

import Link from 'next/link'
import { useTranslation } from './LanguageProvider'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center sm:text-left">
            <h3 className="mb-3 text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Badhon<span className="text-indigo-600">Byte</span>
            </h3>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {t('footer.desc')}
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/services', key: 'nav.services' as const },
                { href: '/pricing', key: 'nav.pricing' as const },
                { href: '/about', key: 'nav.about' as const },
                { href: '/contact', key: 'nav.contact' as const },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              {t('footer.office')}
            </h4>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {t('footer.officeAddress')}
              <br />
              {t('footer.officeLocation')}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500 sm:text-sm dark:border-zinc-800 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Badhon Byte. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
