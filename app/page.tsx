'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="hero-area" style={{ background: '#050a1e', overflow: 'hidden' }}>
          {/* Rotating circle decoration */}
          <div style={{
            position: 'absolute',
            right: '-100px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '1px dashed rgba(255,60,0,0.15)',
            animation: 'rotateme 30s linear infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            right: '50px',
            top: '30%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '1px solid rgba(255,60,0,0.08)',
            animation: 'rotateme 20s linear infinite reverse',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 -15px' }}>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }} className="hero-content-col">
                <div className="hero-contant">
                  <h5>BadhonByte IT Service</h5>
                  <h1>
                    {t('hero.title')}{' '}
                    <span style={{ color: '#ff3c00' }}>{t('hero.titleHighlight')}</span>{' '}
                    {t('hero.titleEnd')}
                  </h1>
                  <p>{t('hero.subtitle')}</p>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
<a href="#services" className="badhon-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
  {t('hero.btnServices')}
</a>
                    <div className="hero-video-icon">
                      <span>
                        <i>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </i>
                        <span className="video-text">WATCH VIDEO</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px', textAlign: 'center' }} className="hero-thumb-col">
                <div className="hero-thumb">
                  <svg width="420" height="420" viewBox="0 0 420 420" fill="none" style={{ maxWidth: '100%' }}>
                    {/* Dashboard monitor frame */}
                    <rect x="50" y="60" width="320" height="240" rx="16" fill="rgba(255,60,0,0.1)" stroke="rgba(255,60,0,0.25)" strokeWidth="1.5" />
                    {/* Screen header bar */}
                    <rect x="50" y="60" width="320" height="40" rx="16" fill="rgba(255,60,0,0.08)" />
                    <rect x="50" y="84" width="320" height="16" fill="rgba(255,60,0,0.08)" />
                    {/* Dots */}
                    <circle cx="70" cy="80" r="4" fill="#ff3c00" />
                    <circle cx="84" cy="80" r="4" fill="rgba(255,255,255,0.3)" />
                    <circle cx="98" cy="80" r="4" fill="rgba(255,255,255,0.3)" />
                    {/* Chart bars */}
                    <rect x="75" y="130" width="30" height="60" rx="4" fill="rgba(255,60,0,0.4)" />
                    <rect x="115" y="110" width="30" height="80" rx="4" fill="rgba(255,60,0,0.6)" />
                    <rect x="155" y="140" width="30" height="50" rx="4" fill="rgba(255,60,0,0.3)" />
                    <rect x="195" y="100" width="30" height="90" rx="4" fill="#ff3c00" />
                    <rect x="235" y="120" width="30" height="70" rx="4" fill="rgba(255,60,0,0.5)" />
                    {/* Line chart overlay */}
                    <polyline points="75,170 115,145 155,160 195,130 235,150" stroke="#fff" strokeWidth="2" fill="none" opacity="0.5" />
                    {/* Pie chart */}
                    <circle cx="200" cy="230" r="25" fill="none" stroke="rgba(255,60,0,0.2)" strokeWidth="8" />
                    <circle cx="200" cy="230" r="25" fill="none" stroke="#ff3c00" strokeWidth="8" strokeDasharray="40 117" strokeDashoffset="0" transform="rotate(-90 200 230)" />
                    {/* Bottom bar */}
                    <rect x="75" y="270" width="100" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
                    <rect x="185" y="270" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
                    {/* Thumb drive icon below */}
                    <rect x="60" y="330" width="50" height="30" rx="6" fill="rgba(255,60,0,0.15)" stroke="rgba(255,60,0,0.3)" strokeWidth="1" />
                    <rect x="70" y="320" width="30" height="15" rx="3" fill="rgba(255,60,0,0.2)" />
                    {/* Laptop icon */}
                    <rect x="300" y="320" width="55" height="40" rx="5" fill="rgba(255,60,0,0.12)" stroke="rgba(255,60,0,0.25)" strokeWidth="1" />
                    <rect x="295" y="355" width="65" height="6" rx="3" fill="rgba(255,60,0,0.15)" />
                    {/* Floating chart elements */}
                    <circle cx="290" cy="130" r="8" fill="rgba(255,60,0,0.2)" stroke="#ff3c00" strokeWidth="1" />
                    <text x="290" y="133" textAnchor="middle" fill="#ff3c00" fontSize="8" fontWeight="600">%</text>
                    {/* Small dots */}
                    <circle cx="340" cy="200" r="5" fill="rgba(255,60,0,0.3)" />
                    <circle cx="350" cy="220" r="3" fill="rgba(255,60,0,0.15)" />
                    <circle cx="335" cy="240" r="4" fill="rgba(255,60,0,0.2)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Features ===== */}
        <section className="feature-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="feature-box">
              {[
                { icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>', title: 'Web Application Development', desc: 'Custom web apps built with modern technology' },
                { icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>', title: 'Mobile Application Development', desc: 'Native & cross-platform mobile solutions' },
                { icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', title: 'Digital Marketing', desc: 'SEO, social media & paid advertising' },
                { icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>', title: 'IT Consultation', desc: 'Expert advice on technology strategy' },
                { icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>', title: 'Cloud Services', desc: 'Cloud infrastructure & hosting solutions' },
              ].map((item, i) => (
                <div key={i} className="feature-sinble-single-box">
                  <div className="feature-icon" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                  <div className="feature-content">
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Services ===== */}
        <section id="services" className="sservice-area" style={{ background: '#fafafa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ margin: '0 -15px' }}>
              <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }}>
                <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                  <h5 className="section-sub-title">{t('servicesPage.title')}</h5>
                  <h1 className="section-main-title">
                    {t('servicesPage.subtitle')}
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '0 -15px' }}>
              {[
                {
                  icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
                  title: 'NEXORA ERP Software',
                  desc: t('servicesPage.erpDesc').slice(0, 85) + '...',
                  link: '/services#erp',
                },
                {
                  icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>',
                  title: t('servicesPage.posTitle'),
                  desc: t('servicesPage.posDesc').slice(0, 85) + '...',
                  link: '/services#pos',
                },
                {
                  icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>',
                  title: t('servicesPage.customTitle'),
                  desc: t('servicesPage.customDesc').slice(0, 85) + '...',
                  link: '/contact',
                },
              ].map((item, i) => (
                <div key={i} style={{ flex: '0 0 33.333%', maxWidth: '33.333%', padding: '0 15px', display: 'flex' }}>
                  <div className="service-single-box" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="service-icon" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                    <div className="service-content" style={{ flex: 1 }}>
                      <h3 className="service-title">{item.title}</h3>
                      <p className="service-text">{item.desc}</p>
                      <div className="service-btn">
                        <Link href={item.link}>
                          <span>&#8594;</span> {t('servicesSection.learnMore')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="service-shape">
            <svg width="100" height="200" viewBox="0 0 100 200" fill="none">
              <circle cx="50" cy="100" r="40" stroke="rgba(255,60,0,0.1)" strokeWidth="2" fill="none" />
              <circle cx="20" cy="40" r="10" fill="rgba(255,60,0,0.08)" />
              <rect x="60" y="140" width="30" height="30" rx="6" stroke="rgba(255,60,0,0.1)" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="service-shape2">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="20" fill="rgba(255,60,0,0.06)" />
              <circle cx="30" cy="30" r="8" fill="rgba(255,60,0,0.12)" />
            </svg>
          </div>
          <div className="service-shape3">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="10" y="10" width="60" height="60" rx="12" stroke="rgba(255,60,0,0.08)" strokeWidth="2" fill="none" />
              <circle cx="40" cy="40" r="15" fill="rgba(255,60,0,0.06)" />
            </svg>
          </div>
        </section>

        {/* ===== Pricing ===== */}
        <section className="pricing-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('pricingPage.title')}</h5>
              <h1 className="section-main-title">
                Choose Your Best <span>Plan</span>
              </h1>
              <p style={{ margin: '15px 0 0', color: '#7a7a7a' }}>{t('pricingPage.subtitle')}</p>
            </div>
            <div className="pricing-grid">
              {/* Card 1: ERP Permanent */}
              <div className="pricing-single-box">
                <span className="pricing-badge">{t('pricingPage.permanentBadge')}</span>
                <div className="pricing-icon" style={{ fontSize: '44px', marginBottom: '10px' }}>🏆</div>
                <h3 className="pricing-title">{t('servicesPage.erpTitle')}</h3>
                <p className="pricing-sub">{t('pricingPage.permanentSub')}</p>
                <div className="pricing-price">{t('pricingPage.permanentPrice')}</div>
                <p className="pricing-extra">{t('pricingPage.permanentExtra')}</p>
                <ul className="pricing-features">
                  {[
                    t('servicesPage.erpFeature1'),
                    t('servicesPage.erpFeature2'),
                    t('servicesPage.erpFeature3'),
                    t('servicesPage.erpFeature5'),
                    t('servicesPage.erpFeature6'),
                  ].map((f, i) => (
                    <li key={i}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="badhon-btn" style={{ width: '100%', textAlign: 'center', padding: '14px 20px', fontSize: '14px' }}>
                  {t('pricingPage.permanentBtn')}
                </Link>
              </div>

              {/* Card 2: ERP Monthly */}
              <div className="pricing-single-box">
                <div className="pricing-icon" style={{ fontSize: '44px', marginBottom: '10px' }}>☁️</div>
                <h3 className="pricing-title">{t('servicesPage.erpTitle')} Monthly</h3>
                <p className="pricing-sub">{t('pricingPage.monthlySub')}</p>
                <div className="pricing-price">{t('pricingPage.monthlyPrice')}</div>
                <p className="pricing-extra">{t('pricingPage.monthlyExtra')}</p>
                <ul className="pricing-features">
                  {[
                    t('pricingPage.monthlyFeature1'),
                    t('pricingPage.monthlyFeature2'),
                    t('pricingPage.monthlyFeature3'),
                    t('pricingPage.monthlyFeature4'),
                    t('pricingPage.monthlyFeature6'),
                  ].map((f, i) => (
                    <li key={i}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="badhon-btn badhon-btn-outline" style={{ width: '100%', textAlign: 'center', padding: '14px 20px', fontSize: '14px' }}>
                  {t('pricingPage.monthlyBtn')}
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ===== Our Clients ===== */}
        <section className="testimonial-area" style={{ background: 'linear-gradient(135deg, #0f1a3a 0%, #1a1530 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title" style={{ background: '#161a2b', border: '2px solid #40465d', color: '#fff' }}>
                {t('clientSection.title')}
              </h5>
              <h1 className="section-main-title" style={{ color: '#fff' }}>
                {t('clientSection.title')}
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
              {[
                'মেসার্স স্বর্ণা অটো রাইস মিলস্, কুষ্টিয়া',
                'মেসার্স মিয়া অটো রাইস মিলস, ঝিনাইদহ',
              ].map((client, i) => (
                <div key={i} style={{ flex: '0 0 450px' }}>
                  <div className="testi-box">
                    <div className="testi-single-box" style={{ textAlign: 'center', padding: '50px 40px' }}>
                      <h3 className="testi-title" style={{ fontSize: '24px', color: '#ff3c00', margin: '0 0 8px' }}>
                        {client.split(',')[0]}
                      </h3>
                      <p style={{ color: '#ff3c00', fontSize: '16px', margin: 0, fontWeight: 500 }}>
                        {client.split(',').slice(1).join(',').trim()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section className="contact-area" style={{ background: '#fafafa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="section-title text-left">
                  <h5 className="section-sub-title">{t('contactPage.title')}</h5>
                  <h1 className="section-main-title">
                    {t('contactPage.subtitle')}
                  </h1>
                </div>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder={t('contactPage.formNamePlaceholder')} required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder={t('contactPage.formEmailPlaceholder')} required />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option value="">{t('contactPage.formSubjectPlaceholder')}</option>
                      {['Erp','Pos','Custom','Support','Other'].map((val) => (
                        <option key={val} value={val.toLowerCase()}>
                          {t(`contactPage.formSubject${val}` as any)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" rows={5} placeholder={t('contactPage.formMessagePlaceholder')} required></textarea>
                  </div>
                  <button type="submit" className="badhon-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    SEND NOW <span>&#8594;</span>
                  </button>
                </form>
              </div>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="contact-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', paddingTop: '60px' }}>
                  <div className="contact-video-icon">
                    <div className="play-btn">
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="contact-video-text">Play</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(255,60,0,0.08) 0%, rgba(255,60,0,0.02) 100%)',
                      border: '2px solid rgba(255,60,0,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      animation: 'rotateme 20s linear infinite',
                    }}>
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="1.5">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <p style={{ fontSize: '16px', color: '#7a7a7a', margin: '25px 0 10px' }}>
                      {t('contactPage.addressLine1')}, {t('contactPage.addressLine2')}
                    </p>
                    <p style={{ fontSize: '16px', color: '#7a7a7a', marginBottom: '10px' }}>
                      <strong>{t('contactPage.phoneLabel')}:</strong> {t('contactPage.phoneValue')}
                    </p>
                    <p style={{ fontSize: '16px', color: '#7a7a7a' }}>
                      <strong>{t('contactPage.emailLabel')}:</strong> {t('contactPage.emailValue')}
                    </p>
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
