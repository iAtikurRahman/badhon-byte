import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h1 className="text-3xl font-bold text-zinc-900 sm:text-5xl dark:text-zinc-50">Contact Us</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
              Have a question or ready to get started? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-zinc-50">Get in Touch</h2>
                <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 transition-colors focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="erp">ERP Software</option>
                      <option value="pos">POS Software</option>
                      <option value="custom">Custom Development</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700 sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-zinc-50">Our Office</h2>
                <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">Visit us or reach out through any of these channels.</p>

                <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Address</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Hightech Office, Rajpara
                        <br />
                        Rajshahi, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Email</h3>
                      <p className="break-all text-sm text-zinc-600 dark:text-zinc-400">
                        contact@badhonbyte.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Phone</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        +880 1234-567890
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
