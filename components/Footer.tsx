import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-zinc-900 dark:text-zinc-50">
              Badhon<span className="text-indigo-600">Byte</span>
            </h3>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Building powerful software solutions for businesses. ERP, POS, and custom software development.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/services', label: 'Services' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Office
            </h4>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Hightech Office, Rajpara
              <br />
              Rajshahi, Bangladesh
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Badhon Byte. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
