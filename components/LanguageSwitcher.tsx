'use client'

import { useTranslation } from './LanguageProvider'

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation()

  return (
    <button
      onClick={() => setLocale(locale === 'bn' ? 'en' : 'bn')}
      className="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700 sm:px-4 sm:py-2 sm:text-sm"
      aria-label={`Switch language to ${locale === 'bn' ? 'English' : 'Bengali'}`}
    >
      {t('lang.switch')}
    </button>
  )
}
