'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-40">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
                {t('hero.title')}
                <span className="text-indigo-600"> {t('hero.titleHighlight')} </span>
                {t('hero.titleEnd')}
              </h1>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8 dark:text-zinc-400">
                {t('hero.subtitle')}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Link
                  href="/services"
                  className="rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 active:bg-indigo-700 sm:px-6"
                >
                  {t('hero.btnServices')}
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
                >
                  {t('hero.btnPricing')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">{t('servicesSection.title')}</h2>
              <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">{t('servicesSection.subtitle')}</p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg sm:p-8 dark:border-zinc-800">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 sm:h-12 sm:w-12 dark:bg-indigo-900/50">
                  <svg className="h-5 w-5 text-indigo-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">{t('servicesSection.erpTitle')}</h3>
                <p className="mb-4 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">{t('servicesSection.erpDesc')}</p>
                <Link
                  href="/services#erp"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {t('servicesSection.learnMore')}
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg sm:p-8 dark:border-zinc-800">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 sm:h-12 sm:w-12 dark:bg-indigo-900/50">
                  <svg className="h-5 w-5 text-indigo-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">{t('servicesSection.posTitle')}</h3>
                <p className="mb-4 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">{t('servicesSection.posDesc')}</p>
                <Link
                  href="/services#pos"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {t('servicesSection.learnMore')}
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">{t('pricingSection.title')}</h2>
              <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">{t('pricingSection.subtitle')}</p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="rounded-xl border-2 border-indigo-600 p-6 sm:p-8 dark:border-indigo-500">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">{t('pricingSection.permanentTitle')}</h3>
                <p className="mb-3 text-sm text-zinc-600 sm:mb-4 dark:text-zinc-400">{t('pricingSection.permanentSub')}</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">{t('pricingSection.permanentPrice')}</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">{t('pricingSection.permanentExtra')}</p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.permanentFeature1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.permanentFeature2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.permanentFeature3')}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.permanentFeature4')}
                  </li>
                </ul>
                <Link
                  href="/pricing"
                  className="block rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700"
                >
                  {t('pricingSection.permanentBtn')}
                </Link>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">{t('pricingSection.monthlyTitle')}</h3>
                <p className="mb-3 text-sm text-zinc-600 sm:mb-4 dark:text-zinc-400">{t('pricingSection.monthlySub')}</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">{t('pricingSection.monthlyPrice')}</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">{t('pricingSection.monthlyExtra')}</p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.monthlyFeature1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.monthlyFeature2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.monthlyFeature3')}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {t('pricingSection.monthlyFeature4')}
                  </li>
                </ul>
                <Link
                  href="/pricing"
                  className="block rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
                >
                  {t('pricingSection.monthlyBtn')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Preview */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">{t('contactPreview.title')}</h2>
            <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">{t('contactPreview.subtitle')}</p>
            <div className="mx-auto mt-8 max-w-md rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8">
              <div className="mb-4 flex justify-center">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className="font-medium text-zinc-900 dark:text-zinc-50">{t('contactPreview.address')}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('contactPreview.location')}</p>
              <Link
                href="/contact"
                className="mt-5 inline-block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700 sm:w-auto"
              >
                {t('contactPreview.btn')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
