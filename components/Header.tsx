'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslation } from './LanguageProvider'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = [
  { href: '/', key: 'nav.home' as const },
  { href: '/services', key: 'nav.services' as const },
  { href: '/contact', key: 'nav.contact' as const },
]

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false)
  const [isSticky, setIsSticky] = useState('')
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      if (currentScrollPos > prevScrollPos && currentScrollPos > 80) {
        setIsSticky('cs-gescout_sticky')
      } else if (currentScrollPos > 80) {
        setIsSticky('cs-gescout_show cs-gescout_sticky')
      } else {
        setIsSticky('')
      }
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  useEffect(() => {
    if (mobileToggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileToggle])

  return (
    <header
      className={`cs_site_header cs_style_1 ${isSticky} ${mobileToggle ? 'cs_mobile_toggle_active' : ''}`}
    >
      <div className="cs_main_header">
        <div className="cs_main_header_in">
          <div className="cs_main_header_left">
            <Link href="/" className="cs_site_branding" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                background: '#ff3c00',
                WebkitMask: 'url(/assets/images/logo.png) center/contain no-repeat',
                mask: 'url(/assets/images/logo.png) center/contain no-repeat',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--heading-font)',
                fontSize: '24px',
                fontWeight: 700,
                color: '#ff3c00',
              }}>
                BadhonByte
              </span>
            </Link>
          </div>
          <div className="cs_main_header_center">
            <div className="cs_nav">
              <span
                className={`cs-munu_toggle ${mobileToggle ? 'cs_teggle_active' : ''}`}
                onClick={() => setMobileToggle(!mobileToggle)}
              >
                <span></span>
              </span>
              <ul className="cs_nav_list">
                {navLinks.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} onClick={() => setMobileToggle(false)}>
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cs_main_header_right">
            <LanguageSwitcher />
            <div className="header-btn">
              <Link href="/contact">
                {t('hero.btnServices')} &#8594;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
