'use client'

import { useTranslation } from './LanguageProvider'

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation()

  return (
    <button
      onClick={() => setLocale(locale === 'bn' ? 'en' : 'bn')}
      style={{
        background: 'rgba(255, 60, 0, 0.1)',
        border: '1px solid rgba(255, 60, 0, 0.2)',
        color: '#ff3c00',
        padding: '8px 16px',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'var(--heading-font)',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#ff3c00'
        e.currentTarget.style.color = '#fff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 60, 0, 0.1)'
        e.currentTarget.style.color = '#ff3c00'
      }}
      aria-label={`Switch language to ${locale === 'bn' ? 'English' : 'Bengali'}`}
    >
      {t('lang.switch')}
    </button>
  )
}
