'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function PricingPage() {
  const { t } = useTranslation()

  const permanentFeatures = [
    'pricingPage.permanentFeature1',
    'pricingPage.permanentFeature2',
    'pricingPage.permanentFeature3',
    'pricingPage.permanentFeature4',
    'pricingPage.permanentFeature5',
    'pricingPage.permanentFeature6',
  ] as const

  const monthlyFeatures = [
    'pricingPage.monthlyFeature1',
    'pricingPage.monthlyFeature2',
    'pricingPage.monthlyFeature3',
    'pricingPage.monthlyFeature4',
    'pricingPage.monthlyFeature5',
    'pricingPage.monthlyFeature6',
  ] as const

  const faqs = [
    { q: 'pricingPage.faqQ1', a: 'pricingPage.faqA1' },
    { q: 'pricingPage.faqQ2', a: 'pricingPage.faqA2' },
    { q: 'pricingPage.faqQ3', a: 'pricingPage.faqA3' },
    { q: 'pricingPage.faqQ4', a: 'pricingPage.faqA4' },
  ] as const

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h1 className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">{t('pricingPage.title')}</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              {t('pricingPage.subtitle')}
            </p>
          </div>
        </section>

        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
              {/* Permanent License */}
              <div className="relative rounded-xl border-2 border-indigo-600 p-6 shadow-lg sm:p-8 dark:border-indigo-500">
                <span className="absolute -top-3 left-4 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold text-white sm:left-6 sm:px-4 sm:py-1">
                  {t('pricingPage.permanentBadge')}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">{t('pricingPage.permanentTitle')}</h3>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">{t('pricingPage.permanentSub')}</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">{t('pricingPage.permanentPrice')}</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">{t('pricingPage.permanentExtra')}</p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  {permanentFeatures.map((key) => (
                    <li key={key} className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700"
                >
                  {t('pricingPage.permanentBtn')}
                </a>
              </div>

              {/* Monthly Service */}
              <div className="rounded-xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">{t('pricingPage.monthlyTitle')}</h3>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">{t('pricingPage.monthlySub')}</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">{t('pricingPage.monthlyPrice')}</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">{t('pricingPage.monthlyExtra')}</p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  {monthlyFeatures.map((key) => (
                    <li key={key} className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
                >
                  {t('pricingPage.monthlyBtn')}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900 sm:mb-12 sm:text-4xl dark:text-zinc-50">
              {t('pricingPage.faqTitle')}
            </h2>
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">{t(faq.q)}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 sm:mt-2 sm:text-base dark:text-zinc-400">{t(faq.a)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
