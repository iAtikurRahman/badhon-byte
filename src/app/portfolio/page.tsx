'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function PortfolioPage() {
  const { t } = useTranslation()

  const projects = [
    { title: 'ERP Implementation', cat: 'Enterprise', desc: 'Full ERP deployment for a manufacturing company.' },
    { title: 'POS System', cat: 'Retail', desc: 'Point of sale system for a retail chain.' },
    { title: 'Custom Software', cat: 'Development', desc: 'Bespoke software solution for logistics.' },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="breadcumb-area" style={{ backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="breadcumb-content">
              <h4>{t('nav.portfolio')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.portfolio')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ padding: '100px 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('nav.portfolio')}</h5>
              <h1 className="section-main-title">Our Recent <span>Projects</span></h1>
              <p className="section-title-descr">Browse our latest work and see how we help businesses grow.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
              {projects.map((project, i) => (
                <div key={i} style={{ flex: '0 0 350px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #e8e8e8', background: '#fff' }}>
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, rgba(255,60,0,0.1), rgba(255,60,0,0.02))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                  }}>
                    📁
                  </div>
                  <div style={{ padding: '25px' }}>
                    <span style={{ fontSize: '13px', color: '#ff3c00', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{project.cat}</span>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '8px 0' }}>{project.title}</h3>
                    <p style={{ fontSize: '14px', lineHeight: '24px', color: '#7a7a7a', marginBottom: '15px' }}>{project.desc}</p>
                    <Link href="/contact" className="badhon-btn" style={{ fontSize: '13px', padding: '10px 25px' }}>
                      Learn More &#8594;
                    </Link>
                  </div>
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
