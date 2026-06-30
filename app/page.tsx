import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
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
                Software that
                <span className="text-indigo-600"> empowers </span>
                your business
              </h1>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8 dark:text-zinc-400">
                Badhon Byte delivers robust ERP and POS solutions for businesses of all sizes.
                Permanent licenses with yearly service, or flexible monthly plans — choose what fits you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Link
                  href="/services"
                  className="rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 active:bg-indigo-700 sm:px-6"
                >
                  Explore Services
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">Our Software</h2>
              <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
                Purpose-built solutions to streamline your operations
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg sm:p-8 dark:border-zinc-800">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 sm:h-12 sm:w-12 dark:bg-indigo-900/50">
                  <svg className="h-5 w-5 text-indigo-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">ERP Software</h3>
                <p className="mb-4 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
                  End-to-end enterprise resource planning. Manage inventory, accounting, HR, procurement, and reporting
                  from a single platform.
                </p>
                <Link
                  href="/services#erp"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg sm:p-8 dark:border-zinc-800">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 sm:h-12 sm:w-12 dark:bg-indigo-900/50">
                  <svg className="h-5 w-5 text-indigo-600 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">POS Software</h3>
                <p className="mb-4 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
                  Fast, reliable point-of-sale system for retail and hospitality. Track sales, manage inventory, and
                  process payments with ease.
                </p>
                <Link
                  href="/services#pos"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Learn more
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
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">Simple Pricing</h2>
              <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
                Choose the plan that works best for your business
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="rounded-xl border-2 border-indigo-600 p-6 sm:p-8 dark:border-indigo-500">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">Permanent License</h3>
                <p className="mb-3 text-sm text-zinc-600 sm:mb-4 dark:text-zinc-400">One-time purchase, lifetime use</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">One-time</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">
                  + yearly service charge for updates & support
                </p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Full software ownership
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Yearly updates & support
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    On-premise deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Priority support
                  </li>
                </ul>
                <Link
                  href="/pricing"
                  className="block rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700"
                >
                  Get a Quote
                </Link>
              </div>

              <div className="rounded-xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">Monthly Service</h3>
                <p className="mb-3 text-sm text-zinc-600 sm:mb-4 dark:text-zinc-400">Flexible month-to-month subscription</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">Monthly</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">
                  cancel anytime, no long-term commitment
                </p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Cloud-hosted or on-premise
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    All features included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Automatic updates
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Standard support
                  </li>
                </ul>
                <Link
                  href="/pricing"
                  className="block rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Preview */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">Visit Our Office</h2>
            <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              We&apos;d love to hear from you. Drop by or reach out.
            </p>
            <div className="mx-auto mt-8 max-w-md rounded-xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8">
              <div className="mb-4 flex justify-center">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className="font-medium text-zinc-900 dark:text-zinc-50">Hightech Office, Rajpara</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Rajshahi, Bangladesh</p>
              <Link
                href="/contact"
                className="mt-5 inline-block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
