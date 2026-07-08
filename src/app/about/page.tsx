'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main>
        <section className="about-area" style={{ paddingTop: '180px' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '0 -15px' }}>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
