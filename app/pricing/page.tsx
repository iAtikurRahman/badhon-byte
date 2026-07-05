'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function PricingPage() {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <section
          className="breadcumb-area"
          style={{ backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 100%)' }}
        >
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="breadcumb-content">
              <h4>{t('pricingPage.title')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.pricing')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('pricingPage.title')}</h5>
              <h1 className="section-main-title">{t('pricingSection.title')}</h1>
              <p className="section-title-descr">{t('pricingPage.subtitle')}</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
              {/* Permanent */}
              <div style={{ flex: '0 0 400px' }}>
                <div className="pricing-single-box featured">
                  <span className="pricing-badge">{t('pricingPage.permanentBadge')}</span>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>🏆</div>
                  <h3 className="pricing-title">{t('pricingPage.permanentTitle')}</h3>
                  <p className="pricing-sub">{t('pricingPage.permanentSub')}</p>
                  <div className="pricing-price">{t('pricingPage.permanentPrice')}</div>
                  <p className="pricing-extra">{t('pricingPage.permanentExtra')}</p>
                  <ul className="pricing-features">
                    {[
                      'pricingPage.permanentFeature1',
                      'pricingPage.permanentFeature2',
                      'pricingPage.permanentFeature3',
                      'pricingPage.permanentFeature4',
                      'pricingPage.permanentFeature5',
                      'pricingPage.permanentFeature6',
                    ].map((key) => (
                      <li key={key}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t(key as any)}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="badhon-btn" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                    {t('pricingPage.permanentBtn')}
                  </Link>
                </div>
              </div>
              {/* Monthly */}
              <div style={{ flex: '0 0 400px' }}>
                <div className="pricing-single-box">
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔄</div>
                  <h3 className="pricing-title">{t('pricingPage.monthlyTitle')}</h3>
                  <p className="pricing-sub">{t('pricingPage.monthlySub')}</p>
                  <div className="pricing-price">{t('pricingPage.monthlyPrice')}</div>
                  <p className="pricing-extra">{t('pricingPage.monthlyExtra')}</p>
                  <ul className="pricing-features">
                    {[
                      'pricingPage.monthlyFeature1',
                      'pricingPage.monthlyFeature2',
                      'pricingPage.monthlyFeature3',
                      'pricingPage.monthlyFeature4',
                      'pricingPage.monthlyFeature5',
                      'pricingPage.monthlyFeature6',
                    ].map((key) => (
                      <li key={key}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t(key as any)}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="badhon-btn badhon-btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                    {t('pricingPage.monthlyBtn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-area" style={{ background: '#fafafa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('pricingPage.faqTitle')}</h5>
              <h1 className="section-main-title">{t('pricingPage.faqTitle')}</h1>
            </div>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <PricingFaq t={t} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function PricingFaq({ t }: { t: (key: any) => string }) {
  const [openIndex, setOpenIndex] = useState(-1)

  const faqs = [
    { q: 'pricingPage.faqQ1' as const, a: 'pricingPage.faqA1' as const },
    { q: 'pricingPage.faqQ2' as const, a: 'pricingPage.faqA2' as const },
    { q: 'pricingPage.faqQ3' as const, a: 'pricingPage.faqA3' as const },
    { q: 'pricingPage.faqQ4' as const, a: 'pricingPage.faqA4' as const },
  ]

  return (
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
  )
}
