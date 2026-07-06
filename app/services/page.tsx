'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function ServicesPage() {
  const { t } = useTranslation()

  const erpFeatures = [
    'servicesPage.erpFeature1',
    'servicesPage.erpFeature2',
    'servicesPage.erpFeature3',
    'servicesPage.erpFeature4',
    'servicesPage.erpFeature5',
    'servicesPage.erpFeature6',
  ] as const

  const posFeatures = [
    'servicesPage.posFeature1',
    'servicesPage.posFeature2',
    'servicesPage.posFeature3',
    'servicesPage.posFeature4',
    'servicesPage.posFeature5',
    'servicesPage.posFeature6',
  ] as const

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
              <h4>{t('servicesPage.title')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.services')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ERP Section */}
        <section id="erp" className="about-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 -15px' }}>
              <div className="about-text-col" style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="section-title text-left">
                  <h5 className="section-sub-title">NEXORA ERP Software</h5>
                  <h1 className="section-main-title">NEXORA ERP Software</h1>
                  <p className="section-title-descr">{t('servicesPage.erpDesc')}</p>
                </div>
                <ul className="pricing-features" style={{ marginBottom: '25px' }}>
                  {erpFeatures.map((key) => (
                    <li key={key}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-img-col" style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="about-thumb">
                  <div style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(255,60,0,0.08) 0%, rgba(255,60,0,0.02) 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,60,0,0.1)',
                  }}>
                    <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                      <rect x="30" y="40" width="190" height="170" rx="12" stroke="#ff3c00" strokeWidth="2" fill="rgba(255,60,0,0.03)" />
                      <rect x="55" y="70" width="80" height="14" rx="4" fill="rgba(255,60,0,0.2)" />
                      <rect x="55" y="94" width="140" height="8" rx="4" fill="rgba(255,60,0,0.1)" />
                      <rect x="55" y="110" width="120" height="8" rx="4" fill="rgba(255,60,0,0.1)" />
                      <rect x="55" y="126" width="130" height="8" rx="4" fill="rgba(255,60,0,0.1)" />
                      <rect x="55" y="150" width="100" height="35" rx="6" fill="#ff3c00" opacity="0.8" />
                    </svg>
                  </div>
                  <h4 className="about-title">NEXORA ERP Software</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POS Section */}
        <section id="pos" style={{ padding: '100px 0', background: '#fafafa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 -15px' }}>
              <div className="about-img-col" style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="about-thumb">
                  <div style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(135deg, rgba(255,60,0,0.08) 0%, rgba(255,60,0,0.02) 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,60,0,0.1)',
                  }}>
                    <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
                      <rect x="40" y="30" width="170" height="190" rx="8" stroke="#ff3c00" strokeWidth="2" fill="rgba(255,60,0,0.03)" />
                      <rect x="65" y="55" width="120" height="60" rx="6" fill="rgba(255,60,0,0.1)" />
                      <text x="125" y="90" textAnchor="middle" fill="#ff3c00" fontSize="10" fontWeight="600">RECEIPT</text>
                      <rect x="65" y="130" width="120" height="8" rx="4" fill="rgba(255,60,0,0.1)" />
                      <rect x="65" y="148" width="100" height="8" rx="4" fill="rgba(255,60,0,0.1)" />
                      <rect x="65" y="166" width="110" height="8" rx="4" fill="rgba(255,60,0,0.1)" />
                      <rect x="85" y="190" width="80" height="20" rx="4" fill="#ff3c00" opacity="0.8" />
                    </svg>
                  </div>
                  <h4 className="about-title">{t('servicesPage.posTitle')}</h4>
                </div>
              </div>
              <div className="about-text-col" style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="section-title text-left">
                  <h5 className="section-sub-title">{t('servicesPage.posTitle')}</h5>
                  <h1 className="section-main-title">{t('servicesPage.posTitle')}</h1>
                  <p className="section-title-descr">{t('servicesPage.posDesc')}</p>
                </div>
                <ul className="pricing-features" style={{ marginBottom: '25px' }}>
                  {posFeatures.map((key) => (
                    <li key={key}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Custom CTA */}
        <section style={{ padding: '100px 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h5 className="section-sub-title">{t('servicesPage.customTitle')}</h5>
              <h1 className="section-main-title">{t('servicesPage.customTitle')}</h1>
              <p className="section-title-descr" style={{ maxWidth: '700px', margin: '0 auto 30px' }}>
                {t('servicesPage.customDesc')}
              </p>
              <Link href="/contact" className="badhon-btn">
                {t('servicesPage.customBtn')} &#8594;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
