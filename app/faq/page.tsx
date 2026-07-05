'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function FaqPage() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    { q: 'pricingPage.faqQ1' as const, a: 'pricingPage.faqA1' as const },
    { q: 'pricingPage.faqQ2' as const, a: 'pricingPage.faqA2' as const },
    { q: 'pricingPage.faqQ3' as const, a: 'pricingPage.faqA3' as const },
    { q: 'pricingPage.faqQ4' as const, a: 'pricingPage.faqA4' as const },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="breadcumb-area" style={{ backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="breadcumb-content">
              <h4>{t('nav.faq')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.faq')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ padding: '100px 0' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('nav.faq')}</h5>
              <h1 className="section-main-title">{t('pricingPage.faqTitle')}</h1>
              <p className="section-title-descr">{t('pricingPage.subtitle')}</p>
            </div>
            <ul className="accordion">
              {faqs.map((faq, i) => (
                <li key={i} className={`cs_accordian ${i === openIndex ? 'active' : ''}`}>
                  <a onClick={() => setOpenIndex(i === openIndex ? -1 : i)}>
                    <span>{t(faq.q)}</span>
                  </a>
                  <p>{t(faq.a)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
