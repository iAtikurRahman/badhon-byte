'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function TestimonialPage() {
  const { t } = useTranslation()

  const testimonials = [
    { text: "BadhonByte's ERP solution transformed our business operations.", name: 'Client One', role: 'CEO, Company A' },
    { text: "The POS system is incredibly fast and reliable.", name: 'Client Two', role: 'Manager, Company B' },
    { text: "Excellent support team. Highly recommended!", name: 'Client Three', role: 'Owner, Company C' },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="breadcumb-area" style={{ backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="breadcumb-content">
              <h4>Testimonials</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ padding: '100px 0', background: '#fafafa' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">TESTIMONIALS</h5>
              <h1 className="section-main-title">What Our Clients <span>Say</span></h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
              {testimonials.map((item, i) => (
                <div key={i} style={{ flex: '0 0 350px', background: '#fff', borderRadius: '12px', padding: '35px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #e8e8e8' }}>
                  <div style={{ fontSize: '36px', marginBottom: '15px', opacity: 0.3 }}>❝</div>
                  <p style={{ fontSize: '15px', lineHeight: '26px', color: '#7a7a7a', fontStyle: 'italic', marginBottom: '15px' }}>{item.text}</p>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ff3c00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '18px', margin: '0 auto 10px' }}>
                    {item.name[0]}
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '2px' }}>{item.name}</h4>
                  <span style={{ fontSize: '13px', color: '#ff3c00' }}>{item.role}</span>
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
