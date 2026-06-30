import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h1 className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">Our Services</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              We build software that scales with your business. From ERP to POS and custom development.
            </p>
          </div>
        </section>

        <section id="erp" className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 sm:h-14 sm:w-14 dark:bg-indigo-900/50">
                  <svg className="h-6 w-6 text-indigo-600 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">ERP Software</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:mt-4 sm:text-base dark:text-zinc-400">
                  Our ERP system brings all your business operations into one unified platform. From inventory and
                  supply chain to accounting and HR, streamline every department with real-time data and powerful
                  reporting.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-600 sm:mt-6 sm:space-y-3 dark:text-zinc-400">
                  {[
                    'Inventory & Warehouse Management',
                    'Accounting & Financial Reporting',
                    'Human Resources & Payroll',
                    'Procurement & Supply Chain',
                    'CRM & Sales Management',
                    'Business Intelligence & Analytics',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="mb-4 text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">Why choose our ERP?</h3>
                <ul className="space-y-3 text-sm text-zinc-600 sm:space-y-4 dark:text-zinc-400">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">1</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">Modular design</strong> &mdash; pick only the modules you need</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">2</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">On-premise or cloud</strong> &mdash; deploy where you&apos;re comfortable</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">3</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">Customizable</strong> &mdash; tailored to your workflow</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">4</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">24/7 support</strong> &mdash; we&apos;re here when you need us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pos" className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div className="order-2 md:order-1 rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="mb-4 text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">Why choose our POS?</h3>
                <ul className="space-y-3 text-sm text-zinc-600 sm:space-y-4 dark:text-zinc-400">
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">1</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">Lightning-fast checkout</strong> &mdash; serve more customers in less time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">2</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">Offline mode</strong> &mdash; keep selling even without internet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">3</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">Multi-payment support</strong> &mdash; cash, card, mobile payments</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50">4</span>
                    <span><strong className="text-zinc-900 dark:text-zinc-50">Real-time inventory sync</strong> &mdash; never oversell again</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 sm:h-14 sm:w-14 dark:bg-indigo-900/50">
                  <svg className="h-6 w-6 text-indigo-600 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">POS Software</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:mt-4 sm:text-base dark:text-zinc-400">
                  A powerful point-of-sale system designed for retail stores, restaurants, and hospitality businesses.
                  Process transactions in seconds, track inventory in real time, and gain insights into your sales
                  performance.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-600 sm:mt-6 sm:space-y-3 dark:text-zinc-400">
                  {[
                    'Billing & Checkout',
                    'Inventory & Stock Management',
                    'Sales Reports & Analytics',
                    'Customer Management',
                    'Multi-user & Role Access',
                    'Receipt Printing & Digital Invoicing',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">Need something custom?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              We also build custom software tailored to your unique business requirements. Get in touch to discuss your project.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700 sm:w-auto sm:px-6"
            >
              Talk to Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
