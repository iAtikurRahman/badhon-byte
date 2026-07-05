'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function AboutPage() {
  const { t } = useTranslation()

  const reasons = [
    { title: 'aboutPage.why1Title', desc: 'aboutPage.why1Desc' },
    { title: 'aboutPage.why2Title', desc: 'aboutPage.why2Desc' },
    { title: 'aboutPage.why3Title', desc: 'aboutPage.why3Desc' },
    { title: 'aboutPage.why4Title', desc: 'aboutPage.why4Desc' },
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
              <h4>{t('aboutPage.title')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.about')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="about-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 -15px' }}>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
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
                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                      <circle cx="150" cy="150" r="100" stroke="#ff3c00" strokeWidth="2" fill="rgba(255,60,0,0.03)" />
                      <path d="M150 70 L190 110 L170 110 L170 180 L130 180 L130 110 L110 110 L150 70Z" fill="rgba(255,60,0,0.2)" />
                      <text x="150" y="150" textAnchor="middle" fill="#ff3c00" fontSize="16" fontWeight="600">BB</text>
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="section-title text-left">
                  <h5 className="section-sub-title">{t('aboutPage.title')}</h5>
                  <h1 className="section-main-title">{t('aboutPage.storyTitle')}</h1>
                  <p className="section-title-descr">{t('aboutPage.subtitle')}</p>
                </div>
                <div className="about-text">
                  <p style={{ fontSize: '15px', lineHeight: '26px', color: '#7a7a7a', marginBottom: '20px' }}>
                    {t('aboutPage.storyP1')}
                  </p>
                  <p style={{ fontSize: '15px', lineHeight: '26px', color: '#7a7a7a', marginBottom: '25px' }}>
                    {t('aboutPage.storyP2')}
                  </p>
                </div>
                <Link href="/contact" className="badhon-btn">
                  {t('contactPage.title')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ padding: '80px 0', background: '#fafafa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('aboutPage.whyTitle')}</h5>
              <h1 className="section-main-title">{t('aboutPage.whyTitle')}</h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
              {reasons.map((item) => (
                <div key={item.title} style={{
                  flex: '0 0 250px',
                  background: '#fff',
                  padding: '35px 25px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#ff3c00' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#e8e8e8' }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255,60,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#050a1e' }}>
                    {t(item.title)}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '24px', color: '#7a7a7a', marginBottom: 0 }}>
                    {t(item.desc)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office */}
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h5 className="section-sub-title">{t('aboutPage.officeTitle')}</h5>
              <h1 className="section-main-title">{t('aboutPage.officeTitle')}</h1>
              <p className="section-title-descr" style={{ maxWidth: '600px', margin: '0 auto' }}>
                {t('aboutPage.officeDesc')}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 30px',
                background: 'rgba(255,60,0,0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(255,60,0,0.1)',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: '16px', color: '#050a1e' }}>{t('aboutPage.officeAddress')}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
