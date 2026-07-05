'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useTranslation } from '@/components/LanguageProvider'

export default function BlogPage() {
  const { t } = useTranslation()

  const posts = [
    { title: 'Blog Post Title 1', desc: 'Short description of the blog post goes here. Content coming soon.', date: 'Jan 15, 2026' },
    { title: 'Blog Post Title 2', desc: 'Short description of the blog post goes here. Content coming soon.', date: 'Feb 20, 2026' },
    { title: 'Blog Post Title 3', desc: 'Short description of the blog post goes here. Content coming soon.', date: 'Mar 10, 2026' },
  ]

  return (
    <>
      <Header />
      <main>
        <section className="breadcumb-area" style={{ backgroundImage: 'linear-gradient(135deg, #050a1e 0%, #0f1a3a 100%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="breadcumb-content">
              <h4>{t('nav.blog')}</h4>
              <ul className="breadcumb-list">
                <li><Link href="/" style={{ color: '#ff3c00' }}>{t('nav.home')}</Link></li>
                <li className="list-arrow">&lt;</li>
                <li>{t('nav.blog')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="blog-area">
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="section-title text-center" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h5 className="section-sub-title">{t('nav.blog')}</h5>
              <h1 className="section-main-title">Latest <span>Articles</span></h1>
              <p className="section-title-descr">Stay updated with our latest news and insights.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
              {posts.map((post, i) => (
                <div key={i} className="blog-single-box" style={{ flex: '0 0 350px' }}>
                  <div className="blog-img">
                    <div style={{
                      width: '100%',
                      height: '220px',
                      background: 'linear-gradient(135deg, rgba(255,60,0,0.08), rgba(255,60,0,0.02))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px',
                    }}>
                      📝
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff3c00" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> {post.date}</span>
                    </div>
                    <h3><Link href="#">{post.title}</Link></h3>
                    <p>{post.desc}</p>
                    <div className="blog-btn">
                      <Link href="#">Read More &#8594;</Link>
                    </div>
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
