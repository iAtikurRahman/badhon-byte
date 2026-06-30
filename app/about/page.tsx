import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h1 className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">About Badhon Byte</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              We build software that helps businesses grow.
            </p>
          </div>
        </section>

        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">Our Story</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:mt-4 sm:text-base dark:text-zinc-400">
                  Badhon Byte was founded with a simple mission: make powerful software accessible to businesses of all
                  sizes. Based in Rajshahi, we&apos;ve been delivering ERP, POS, and custom software solutions that
                  streamline operations, reduce costs, and drive growth.
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600 sm:mt-4 sm:text-base dark:text-zinc-400">
                  We believe in building long-term partnerships with our clients. Every solution we deliver is backed by
                  continuous support, regular updates, and a commitment to quality.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="mb-4 text-base font-semibold text-zinc-900 sm:text-lg dark:text-zinc-50">Why choose us?</h3>
                <ul className="space-y-3 text-sm text-zinc-600 sm:space-y-4 dark:text-zinc-400">
                  {[
                    { title: 'Experienced Team', desc: 'Years of expertise in software development and business process automation.' },
                    { title: 'Local Support', desc: 'Based in Rajshahi — we understand local business needs.' },
                    { title: 'Tailored Solutions', desc: 'Every business is unique. We customize accordingly.' },
                    { title: 'Reliable & Secure', desc: 'Your data is safe with enterprise-grade security practices.' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      <div>
                        <strong className="text-zinc-900 dark:text-zinc-50">{item.title}</strong>
                        <br />
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-4xl dark:text-zinc-50">Visit Our Office</h2>
            <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              We&apos;re located at Hightech Office, Rajpara, Rajshahi. Drop by for a chat.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-600 sm:mt-8 dark:text-zinc-400">
              <svg className="h-5 w-5 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-left">Hightech Office, Rajpara, Rajshahi, Bangladesh</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
