'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function ContactPage() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const subjects = [
    { value: 'erp', key: 'contactPage.formSubjectErp' as const },
    { value: 'pos', key: 'contactPage.formSubjectPos' as const },
    { value: 'custom', key: 'contactPage.formSubjectCustom' as const },
    { value: 'support', key: 'contactPage.formSubjectSupport' as const },
    { value: 'other', key: 'contactPage.formSubjectOther' as const },
  ]

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})

    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const subject = (form.elements.namedItem('subject') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    const newErrors: typeof errors = {}
    if (!name) newErrors.name = 'Please enter your name'
    if (!email) newErrors.email = 'Please enter your email'
    if (!message) newErrors.message = 'Please enter your message'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
    }
  }

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
              <h4>{t('contactPage.title')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.contact')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section style={{ padding: '100px 0' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px', gap: '40px' }}>
              {/* Form */}
              <div style={{ flex: '1 1 500px', padding: '0 15px' }}>
                <div className="section-title text-left">
                  <h5 className="section-sub-title">{t('contactPage.formTitle')}</h5>
                  <h1 className="section-main-title">{t('contactPage.formTitle')}</h1>
                  <p className="section-title-descr">{t('contactPage.formDesc')}</p>
                </div>
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div className="form-group" style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 500, color: '#050a1e' }}>
                        {t('contactPage.formName')}
                      </label>
                      <input type="text" name="name" className="form-control" placeholder={t('contactPage.formNamePlaceholder')} />
                      {errors.name && <span style={{ color: '#ff3c00', fontSize: '13px' }}>{errors.name}</span>}
                    </div>
                    <div className="form-group" style={{ flex: '1 1 200px' }}>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 500, color: '#050a1e' }}>
                        {t('contactPage.formEmail')}
                      </label>
                      <input type="email" name="email" className="form-control" placeholder={t('contactPage.formEmailPlaceholder')} />
                      {errors.email && <span style={{ color: '#ff3c00', fontSize: '13px' }}>{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 500, color: '#050a1e' }}>
                      {t('contactPage.formSubject')}
                    </label>
                    <select name="subject" className="form-control">
                      <option value="">{t('contactPage.formSubjectPlaceholder')}</option>
                      {subjects.map((s) => (
                        <option key={s.value} value={s.value}>{t(s.key)}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 500, color: '#050a1e' }}>
                      {t('contactPage.formMessage')}
                    </label>
                    <textarea name="message" className="form-control" rows={5} placeholder={t('contactPage.formMessagePlaceholder')}></textarea>
                    {errors.message && <span style={{ color: '#ff3c00', fontSize: '13px' }}>{errors.message}</span>}
                  </div>
                  <button type="submit" className="badhon-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? t('contactPage.formBtnSending') : t('contactPage.formBtn')} &#8594;
                  </button>
                  {status === 'success' && (
                    <div style={{
                      marginTop: '15px',
                      padding: '16px 20px',
                      background: '#d4edda',
                      border: '1px solid #c3e6cb',
                      borderRadius: '8px',
                      color: '#155724',
                      fontSize: '15px',
                      fontWeight: 500,
                    }}>
                      ✓ Email sent successfully! We will contact you within 24 hours.
                    </div>
                  )}
                  {status === 'error' && Object.keys(errors).length === 0 && (
                    <div style={{
                      marginTop: '15px',
                      padding: '16px 20px',
                      background: '#f8d7da',
                      border: '1px solid #f5c6cb',
                      borderRadius: '8px',
                      color: '#721c24',
                      fontSize: '15px',
                      fontWeight: 500,
                    }}>
                      ✕ Failed to send email. Please try again.
                    </div>
                  )}
                </form>
              </div>

              {/* Office Info */}
              <div style={{ flex: '1 1 350px', padding: '0 15px' }}>
                <div className="section-title text-left" style={{ marginBottom: '30px' }}>
                  <h5 className="section-sub-title">{t('contactPage.officeTitle')}</h5>
                  <h1 className="section-main-title">{t('contactPage.officeTitle')}</h1>
                  <p className="section-title-descr">{t('contactPage.officeDesc')}</p>
                </div>

                {[
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: t('contactPage.addressLabel'),
                    value: <>{t('contactPage.addressLine1')}<br />{t('contactPage.addressLine2')}</>,
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: t('contactPage.emailLabel'),
                    value: t('contactPage.emailValue'),
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    label: t('contactPage.phoneLabel'),
                    value: t('contactPage.phoneValue'),
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '25px', padding: '20px', background: '#fafafa', borderRadius: '10px', border: '1px solid #e8e8e8' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(255,60,0,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: '#050a1e' }}>{item.label}</h4>
                      <p style={{ fontSize: '15px', color: '#7a7a7a', marginBottom: 0 }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
