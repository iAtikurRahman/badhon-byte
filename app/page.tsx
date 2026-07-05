'use client'

import { useState, useEffect } from 'react'
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
        <section
          className="hero-area d-flex align-items-center"
          style={{
            backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 50%, #1a0a05 100%)',
          }}
        >
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 -15px' }}>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }} className="hero-col">
                <div className="hero-contant">
                  <h5>BADHON BYTE</h5>
                  <h1>
                    {t('hero.title')}{' '}
                    <span style={{ color: '#ff3c00' }}>{t('hero.titleHighlight')}</span>{' '}
                    {t('hero.titleEnd')}
                  </h1>
                  <p>{t('hero.subtitle')}</p>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <Link href="/services" className="badhon-btn">
                      {t('hero.btnServices')}
                    </Link>
                    <Link href="/pricing" className="badhon-btn badhon-btn-outline">
                      {t('hero.btnPricing')}
                    </Link>
                  </div>
                </div>
              </div>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px', textAlign: 'center' }} className="hero-col">
                <div className="hero-thumb">
                  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" style={{ maxWidth: '100%' }}>
                    <rect x="50" y="80" width="300" height="200" rx="20" fill="rgba(255,60,0,0.15)" stroke="#ff3c00" strokeWidth="2" />
                    <rect x="80" y="110" width="120" height="20" rx="4" fill="rgba(255,255,255,0.4)" />
                    <rect x="80" y="145" width="200" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
                    <rect x="80" y="165" width="180" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
                    <rect x="80" y="185" width="160" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
                    <circle cx="90" cy="230" r="15" fill="rgba(255,60,0,0.3)" />
                    <rect x="115" y="220" width="100" height="20" rx="10" fill="#ff3c00" />
                    <rect x="50" y="310" width="130" height="45" rx="22" fill="rgba(255,60,0,0.2)" />
                    <circle cx="210" cy="332" r="8" fill="#ff3c00" />
                    <circle cx="230" cy="332" r="8" fill="rgba(255,60,0,0.5)" />
                    <circle cx="250" cy="332" r="8" fill="rgba(255,60,0,0.3)" />
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
                { icon: '🖥️', title: t('servicesPage.erpTitle'), desc: t('servicesPage.erpFeature1') },
                { icon: '💳', title: t('servicesPage.posTitle'), desc: t('servicesPage.posFeature1') },
                { icon: '🔧', title: t('servicesPage.customTitle'), desc: t('servicesPage.customDesc').slice(0, 60) + '...' },
                { icon: '☁️', title: t('pricingPage.monthlyFeature2'), desc: t('pricingPage.monthlyFeature1') },
              ].map((item, i) => (
                <div key={i} className="feature-sinble-single-box">
                  <div className="feature-icon" style={{ fontSize: '36px' }}>{item.icon}</div>
                  <div className="feature-content">
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== About ===== */}
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
                    <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
                      <circle cx="140" cy="140" r="120" stroke="#ff3c00" strokeWidth="2" strokeDasharray="8 4" fill="rgba(255,60,0,0.05)" />
                      <path d="M140 60 L180 110 L160 110 L160 170 L120 170 L120 110 L100 110 L140 60Z" fill="rgba(255,60,0,0.2)" />
                      <rect x="110" y="180" width="60" height="40" rx="4" fill="rgba(255,60,0,0.15)" />
                      <text x="140" y="205" textAnchor="middle" fill="#ff3c00" fontSize="12" fontWeight="600">BADHON BYTE</text>
                    </svg>
                  </div>
                  <h4 className="about-title">{t('aboutPage.officeTitle')}</h4>
                </div>
              </div>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="section-title text-left">
                  <h5 className="section-sub-title">{t('aboutPage.title')}</h5>
                  <h1 className="section-main-title">
                    {t('aboutPage.storyTitle')}
                  </h1>
                  <p className="section-title-descr">{t('aboutPage.storyP1')}</p>
                </div>
                <div className="about-box">
                  <div className="about-icon">
                    <svg width="45" height="41" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="about-tiltle">
                    <h3>{t('servicesPage.erpTitle')} &amp; {t('servicesPage.posTitle')}</h3>
                  </div>
                </div>
                <div className="about-text">
                  <p style={{ fontSize: '15px', lineHeight: '26px', color: '#7a7a7a', marginBottom: '25px' }}>
                    {t('aboutPage.storyP2')}
                  </p>
                </div>
                <Link href="/about" className="badhon-btn">
                  {t('aboutPage.title')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Services ===== */}
        <section className="sservice-area" style={{ background: '#fafafa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ margin: '0 -15px' }}>
              <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }}>
                <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
                  <h5 className="section-sub-title">{t('servicesPage.title')}</h5>
                  <h1 className="section-main-title">
                    {t('servicesPage.subtitle')}
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
              {[
                {
                  icon: '📊',
                  title: t('servicesPage.erpTitle'),
                  desc: t('servicesPage.erpDesc').slice(0, 100) + '...',
                  link: '/services#erp',
                },
                {
                  icon: '🛒',
                  title: t('servicesPage.posTitle'),
                  desc: t('servicesPage.posDesc').slice(0, 100) + '...',
                  link: '/services#pos',
                },
                {
                  icon: '💻',
                  title: t('servicesPage.customTitle'),
                  desc: t('servicesPage.customDesc').slice(0, 100) + '...',
                  link: '/contact',
                },
                {
                  icon: '📈',
                  title: t('pricingPage.permanentTitle'),
                  desc: t('pricingPage.permanentSub') + '. ' + t('pricingPage.permanentExtra'),
                  link: '/pricing',
                },
              ].map((item, i) => (
                <div key={i} style={{ flex: '0 0 25%', maxWidth: '25%', padding: '0 15px' }}>
                  <div className="service-single-box">
                    <div className="service-icon" style={{ fontSize: '48px' }}>{item.icon}</div>
                    <div className="service-content">
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
        </section>

        {/* ===== Pricing ===== */}
        <section className="pricing-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('pricingPage.title')}</h5>
              <h1 className="section-main-title">
                {t('pricingSection.title')}
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '0 -15px' }}>
              {/* Permanent License */}
              <div style={{ flex: '0 0 50%', maxWidth: '400px', padding: '0 15px' }}>
                <div className="pricing-single-box featured" style={{ marginBottom: '30px' }}>
                  <span className="pricing-badge">{t('pricingPage.permanentBadge')}</span>
                  <div className="pricing-icon" style={{ fontSize: '48px' }}>🏆</div>
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
                    ].map((key, i) => (
                      <li key={i}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {t(key as any)}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="badhon-btn" style={{ width: '100%', textAlign: 'center' }}>
                    {t('pricingPage.permanentBtn')}
                  </Link>
                </div>
              </div>
              {/* Monthly Service */}
              <div style={{ flex: '0 0 50%', maxWidth: '400px', padding: '0 15px' }}>
                <div className="pricing-single-box" style={{ marginBottom: '30px' }}>
                  <div className="pricing-icon" style={{ fontSize: '48px' }}>🔄</div>
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
                    ].map((key, i) => (
                      <li key={i}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {t(key as any)}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="badhon-btn badhon-btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                    {t('pricingPage.monthlyBtn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 -15px' }}>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="section-title text-left">
                  <h5 className="section-sub-title">{t('pricingPage.title')}</h5>
                  <h1 className="section-main-title">{t('pricingPage.faqTitle')}</h1>
                </div>
                <div className="faq-thumb" style={{ marginTop: '20px' }}>
                  <div style={{
                    width: '100%',
                    height: '250px',
                    background: 'linear-gradient(135deg, rgba(255,60,0,0.05) 0%, transparent 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,60,0,0.08)',
                  }}>
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                      <circle cx="100" cy="80" r="40" fill="rgba(255,60,0,0.08)" stroke="#ff3c00" strokeWidth="1.5" />
                      <text x="100" y="88" textAnchor="middle" fill="#ff3c00" fontSize="28" fontWeight="700">?</text>
                      <rect x="50" y="135" width="100" height="8" rx="4" fill="rgba(255,60,0,0.15)" />
                      <rect x="60" y="150" width="80" height="8" rx="4" fill="rgba(255,60,0,0.08)" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <FaqAccordion t={t} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Testimonial ===== */}
        <section
          className="testimonial-area"
          style={{ backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 100%)' }}
        >
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title" style={{ background: 'rgba(255,60,0,0.2)', color: '#ff3c00' }}>
                TESTIMONIALS
              </h5>
              <h1 className="section-main-title" style={{ color: '#fff' }}>
                What Our Client <span style={{ color: '#ff3c00' }}>Says</span>
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
              {[
                {
                  text: 'Badhon Byte\'s ERP solution transformed our business operations. Inventory management and accounting are now seamless.',
                  name: 'Md. Karim',
                  role: 'Business Owner, Rajshahi',
                },
                {
                  text: 'The POS system is incredibly fast and reliable. Our checkout process has improved dramatically.',
                  name: 'Fatima Begum',
                  role: 'Store Manager, Dhaka',
                },
                {
                  text: 'Excellent support team. They customized the software to fit our unique workflow perfectly.',
                  name: 'Shahidul Islam',
                  role: 'CEO, TechSolutions Ltd.',
                },
              ].map((item, i) => (
                <div key={i} style={{ flex: '0 0 300px' }}>
                  <div className="testi-box">
                    <div className="testi-single-box">
                      <div className="testi-icon">
                        <svg width="48" height="36" viewBox="0 0 24 24" fill="#ff3c00" opacity="0.2">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                        </svg>
                      </div>
                      <p className="testi-text">{item.text}</p>
                      <ul className="testi-rating">
                        {[1,2,3,4,5].map((star) => (
                          <li key={star}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffb800">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          </li>
                        ))}
                      </ul>
                      <h3 className="testi-title">
                        {item.name}
                        <span>{item.role}</span>
                      </h3>
                    </div>
                    <div className="testi-author">
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: '4px solid #fff',
                        background: '#ff3c00',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '20px',
                        margin: '0 auto',
                      }}>
                        {item.name[0]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section
          className="contact-area"
          style={{ background: '#fafafa' }}
        >
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
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
                  <button type="submit" className="badhon-btn">
                    {t('contactPage.formBtn')} &#8594;
                  </button>
                </form>
              </div>
              <div style={{ flex: '0 0 100%', maxWidth: '50%', padding: '0 15px' }}>
                <div className="contact-box">
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(255,60,0,0.1) 0%, rgba(255,60,0,0.02) 100%)',
                      border: '2px solid rgba(255,60,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      position: 'relative',
                    }}>
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="1.5">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <div style={{ marginTop: '30px' }}>
                      <p style={{ fontSize: '16px', color: '#7a7a7a', marginBottom: '10px' }}>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

/* ===== FAQ Accordion Component ===== */
function FaqAccordion({ t }: { t: (key: any) => string }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    { q: 'pricingPage.faqQ1' as const, a: 'pricingPage.faqA1' as const },
    { q: 'pricingPage.faqQ2' as const, a: 'pricingPage.faqA2' as const },
    { q: 'pricingPage.faqQ3' as const, a: 'pricingPage.faqA3' as const },
    { q: 'pricingPage.faqQ4' as const, a: 'pricingPage.faqA4' as const },
  ]

  return (
    <div className="feq-content">
      <h3 className="faq-title">{t('pricingPage.faqTitle')}</h3>
      <p className="faq-description">
        {t('pricingPage.subtitle')}
      </p>
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
  )
}
