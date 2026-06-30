import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h1 className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">Pricing</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              Flexible pricing options for businesses of every size. No hidden fees.
            </p>
          </div>
        </section>

        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
              {/* Permanent License */}
              <div className="relative rounded-xl border-2 border-indigo-600 p-6 shadow-lg sm:p-8 dark:border-indigo-500">
                <span className="absolute -top-3 left-4 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold text-white sm:left-6 sm:px-4 sm:py-1">
                  Best Value
                </span>
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">Permanent License</h3>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">Own it forever. Pay once.</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">Contact us</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">for a custom quote based on your needs</p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  {[
                    'Full license ownership',
                    'Yearly service charge for updates & support',
                    'On-premise deployment',
                    'Priority support with dedicated engineer',
                    'Customizable to your workflow',
                    'Free training & onboarding',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700"
                >
                  Get a Quote
                </a>
              </div>

              {/* Monthly Service */}
              <div className="rounded-xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 sm:text-xl dark:text-zinc-50">Monthly Service</h3>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">Flexible, month-to-month.</p>
                <p className="mb-1">
                  <span className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">Contact us</span>
                </p>
                <p className="mb-4 text-sm text-zinc-600 sm:mb-6 dark:text-zinc-400">for pricing based on your requirements</p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-600 sm:mb-8 sm:space-y-3 dark:text-zinc-400">
                  {[
                    'No long-term commitment',
                    'Cloud-hosted or on-premise',
                    'All features included',
                    'Automatic updates',
                    'Standard support',
                    'Cancel anytime',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block rounded-lg border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-zinc-900 sm:mb-12 sm:text-4xl dark:text-zinc-50">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
              {[
                {
                  q: 'What is the yearly service charge?',
                  a: 'The yearly service charge covers software updates, security patches, bug fixes, and technical support. It ensures your software stays up-to-date and runs smoothly.',
                },
                {
                  q: 'Can I switch from monthly to permanent?',
                  a: 'Yes! You can upgrade from a monthly plan to a permanent license at any time. We\'ll credit your previous payments toward the license cost.',
                },
                {
                  q: 'Is the software cloud-based or on-premise?',
                  a: 'Both options are available. With a permanent license, you get on-premise deployment. Monthly subscribers can choose either cloud-hosted or on-premise.',
                },
                {
                  q: 'Do you offer customizations?',
                  a: 'Absolutely. We tailor our ERP and POS software to match your specific business processes. Custom development is available for both license types.',
                },
              ].map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">{faq.q}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 sm:mt-2 sm:text-base dark:text-zinc-400">{faq.a}</p>
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
