'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function TeamPage() {
  const { t } = useTranslation()

  const team = [
    { name: 'Team Member 1', role: 'CEO & Founder', initial: 'T' },
    { name: 'Team Member 2', role: 'CTO', initial: 'T' },
    { name: 'Team Member 3', role: 'Lead Developer', initial: 'T' },
    { name: 'Team Member 4', role: 'Project Manager', initial: 'T' },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="breadcumb-area" style={{ backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="breadcumb-content">
              <h4>{t('nav.team')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.team')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ padding: '100px 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('nav.team')}</h5>
              <h1 className="section-main-title">Meet Our <span>Team</span></h1>
              <p className="section-title-descr">Our talented team members are working hard to deliver the best solutions.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
              {team.map((member, i) => (
                <div key={i} className="team-single-box" style={{ flex: '0 0 250px' }}>
                  <div className="team-img">
                    <div style={{
                      width: '100%',
                      height: '280px',
                      background: 'linear-gradient(135deg, rgba(255,60,0,0.08), rgba(255,60,0,0.02))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '80px',
                      color: '#ff3c00',
                      fontWeight: 700,
                    }}>
                      {member.initial}
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
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
