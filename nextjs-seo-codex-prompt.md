# 🚀 Claude Codex Master Prompt — React/Vite → Next.js Migration + Turbo SEO

---

## 📋 PROJECT OVERVIEW

Meri website abhi **React + Vite** pe Hostinger Horizon me host hai. Mujhe isse **Next.js 14 (App Router)** me convert karna hai aur **Vercel** pe deploy karna hai. Isme ek **external website ka redirect** laga hua hai jo hatana hai. Goal hai **Google me fast rank karna** — isliye full SEO optimization, E-E-A-T compliance, aur structured data implement karna hai.

---

## 🎯 PRIMARY TASKS (IN ORDER)

### TASK 1 — CODEBASE ANALYSIS
Sabse pehle existing React/Vite codebase scan karo:
- `package.json` padhkar dependencies list karo
- `src/` folder structure map karo (components, pages, routes)
- Existing router (React Router v6/v5) identify karo
- **Koi bhi redirect/rewrite rules** dhundo — `vite.config.js`, `.htaccess`, `_redirects`, `vercel.json`, `nginx.conf`, ya environment variables me — aur **REMOVE karo**
- Image assets, fonts, aur static files inventory karo

---

### TASK 2 — NEXT.JS 14 MIGRATION (App Router)

#### Project Setup
```bash
# DO NOT create new project — convert existing one
# Install Next.js and required packages
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom typescript
```

#### File Structure Create Karo
```
/
├── app/
│   ├── layout.tsx          ← Root layout (replaces index.html)
│   ├── page.tsx            ← Homepage
│   ├── globals.css
│   ├── not-found.tsx       ← Custom 404
│   ├── sitemap.ts          ← Auto-generated sitemap
│   ├── robots.ts           ← robots.txt generator
│   ├── manifest.ts         ← PWA manifest
│   ├── [each-page]/
│   │   ├── page.tsx
│   │   └── layout.tsx (agar alag layout chahiye)
│   └── blog/
│       ├── page.tsx        ← Blog listing
│       └── [slug]/
│           └── page.tsx    ← Individual blog post
├── components/
│   ├── ui/
│   ├── seo/
│   │   ├── JsonLd.tsx
│   │   ├── BreadcrumbJsonLd.tsx
│   │   └── FAQJsonLd.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── TableOfContents.tsx
├── lib/
│   ├── blog.ts             ← Vercel Blob blog storage helper
│   ├── schema.ts           ← Schema.org generators
│   └── seo.ts              ← SEO utility functions
├── public/
│   └── (static assets)
├── next.config.js
├── next-sitemap.config.js
└── tsconfig.json
```

#### next.config.js — CRITICAL
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Koi bhi purana redirect BILKUL mat rakhna
  // redirects() function EMPTY rakhna ya REMOVE karna
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  
  // Core Web Vitals ke liye
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Security headers (SEO ke liye bhi important)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  
  // YAHAN KOI BHI REDIRECT MAT DALNA
  // async redirects() { return [] }  ← EMPTY RAKHNA
}

module.exports = nextConfig
```

---

### TASK 3 — SEO FOUNDATION (EVERY PAGE PE MANDATORY)

#### 3A — Root Layout (`app/layout.tsx`)
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),
  title: {
    default: '[SITE_NAME] — [PRIMARY_KEYWORD]',
    template: '%s | [SITE_NAME]',
  },
  description: '[150-160 chars description with primary keyword in first 10 words]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],  // still useful for some crawlers
  
  openGraph: {
    type: 'website',
    locale: 'hi_IN',  // ya 'en_US' — site ki language ke hisab se
    url: 'https://yoursite.com',
    siteName: '[SITE_NAME]',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://yoursite.com',
  },
  
  verification: {
    google: '[GOOGLE_SEARCH_CONSOLE_CODE]',
  },
}
```

#### 3B — Per-Page Metadata Pattern (EVERY PAGE)
Har page pe yeh pattern use karo:
```typescript
// app/[page]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[PAGE_TITLE with Primary Keyword]',  // 50-60 chars
  description: '[DESCRIPTION — keyword + benefit + CTA — 150-160 chars]',
  alternates: {
    canonical: 'https://yoursite.com/[page-slug]',
  },
  openGraph: {
    title: '[OG_TITLE]',
    description: '[OG_DESCRIPTION]',
    url: 'https://yoursite.com/[page-slug]',
    images: [{ url: '/images/[page]-og.jpg', width: 1200, height: 630, alt: '[IMAGE_ALT with keyword]' }],
  },
}
```

---

### TASK 4 — HEADING STRUCTURE (H1/H2/H3/H4 RULES)

**STRICT RULES — KABHI VIOLATE MAT KARNA:**

```
H1: Sirf EK per page — primary keyword MUST hona chahiye — 30-60 chars
H2: Main sections — secondary keywords include karo — 5-10 per page
H3: Subsections under H2 — LSI keywords — as needed
H4: Details under H3 — natural language — as needed
```

**H1 Examples:**
```html
<!-- WRONG -->
<h1>Welcome to Our Website</h1>
<h1>Home</h1>

<!-- RIGHT -->
<h1>Best [Service/Product] in [Location] — [Year]</h1>
<h1>[Primary Keyword]: [Unique Value Proposition]</h1>
```

**H2 Pattern (har page pe follow karo):**
```html
<h2>What is [Topic]? — Complete Guide</h2>
<h2>[Topic] ke Fayde: Top 10 Benefits</h2>
<h2>How to [Action] — Step by Step</h2>
<h2>Frequently Asked Questions About [Topic]</h2>
<h2>Expert Tips for [Topic]</h2>
```

**Implementation in Next.js:**
```typescript
// EVERY page component
export default function Page() {
  return (
    <article>
      <h1>[Primary Keyword] — [Page Title]</h1>
      
      {/* Table of Contents — H2 se generate karo */}
      <TableOfContents />
      
      <section id="section-1">
        <h2>[Secondary Keyword Section]</h2>
        <h3>[LSI Keyword Subsection]</h3>
      </section>
      
      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        {/* FAQ Schema bhi add karo */}
      </section>
    </article>
  )
}
```

---

### TASK 5 — TABLE OF CONTENTS (AUTOMATIC)

`components/layout/TableOfContents.tsx` banao:
```typescript
'use client'
import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3'))
    const items = elements.map(el => ({
      id: el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: el.textContent || '',
      level: parseInt(el.tagName[1]),
    }))
    setHeadings(items)
    
    // Auto-assign IDs to headings
    elements.forEach(el => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || ''
      }
    })
    
    // Intersection Observer for active state
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-20% 0px -80% 0px' }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav aria-label="Table of Contents" className="toc">
      <h2 className="toc-title">📋 Table of Contents</h2>
      <ol>
        {headings.map(h => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '1rem' : 0 }}>
            <a 
              href={`#${h.id}`}
              className={active === h.id ? 'active' : ''}
              aria-current={active === h.id ? 'location' : undefined}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

---

### TASK 6 — SCHEMA.ORG STRUCTURED DATA (MANDATORY ON ALL PAGES)

`lib/schema.ts` me yeh functions banao:

```typescript
// Organization Schema — site-wide (layout.tsx me)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '[SITE_NAME]',
  url: 'https://yoursite.com',
  logo: 'https://yoursite.com/logo.png',
  sameAs: [
    'https://www.facebook.com/yourpage',
    'https://twitter.com/yourhandle',
    'https://www.linkedin.com/company/yourcompany',
    'https://www.instagram.com/yourhandle',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-XXXXXXXXXX',
    contactType: 'customer service',
    availableLanguage: ['Hindi', 'English'],
  },
}

// WebSite Schema with SearchAction
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '[SITE_NAME]',
  url: 'https://yoursite.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://yoursite.com/search?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

// Article/Blog Schema
export function articleSchema(post: {
  title: string, description: string, slug: string,
  authorName: string, authorUrl: string, datePublished: string,
  dateModified: string, image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      name: post.authorName,
      url: post.authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: '[SITE_NAME]',
      logo: { '@type': 'ImageObject', url: 'https://yoursite.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://yoursite.com/blog/${post.slug}` },
  }
}

// FAQ Schema — EVERY page pe add karo
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

// Rating/Review Schema
export function ratingSchema(data: {
  itemName: string, ratingValue: number, bestRating: number, ratingCount: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.ratingValue,
      bestRating: data.bestRating,
      ratingCount: data.ratingCount,
    },
  }
}

// BreadcrumbList Schema
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// LocalBusiness Schema (agar local business hai)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '[BUSINESS_NAME]',
  image: 'https://yoursite.com/images/business.jpg',
  url: 'https://yoursite.com',
  telephone: '+91-XXXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[STREET]',
    addressLocality: '[CITY]',
    addressRegion: '[STATE]',
    postalCode: '[PIN]',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.5854,  // Apni city ke coordinates
    longitude: 73.7125,
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  }],
}
```

#### JsonLd Component:
```typescript
// components/seo/JsonLd.tsx
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(Array.isArray(data) ? data : [data]) }}
    />
  )
}
```

---

### TASK 7 — BLOG SYSTEM WITH VERCEL BLOB STORAGE

#### Setup
```bash
npm install @vercel/blob
```

#### `lib/blog.ts` — Blog Storage Helper
```typescript
import { list, put, get, del } from '@vercel/blob'

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string           // HTML ya Markdown
  keywords: string[]
  author: {
    name: string
    bio: string
    avatar: string
    twitter?: string
    linkedin?: string
  }
  datePublished: string     // ISO 8601
  dateModified: string
  category: string
  tags: string[]
  image: string
  readingTime: number       // minutes me
  faqs?: Array<{ question: string; answer: string }>
  rating?: { value: number; count: number }
}

// Blog post fetch karo (Vercel Blob se)
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { blobs } = await list({ prefix: `blog/${slug}` })
    if (!blobs.length) return null
    const response = await fetch(blobs[0].url)
    return response.json()
  } catch {
    return null
  }
}

// Saare posts list karo
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const { blobs } = await list({ prefix: 'blog/' })
  const posts = await Promise.all(
    blobs.map(async blob => {
      const response = await fetch(blob.url)
      return response.json() as Promise<BlogPost>
    })
  )
  return posts.sort((a, b) => 
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )
}

// Blog post save karo (admin use)
export async function saveBlogPost(post: BlogPost) {
  const blob = await put(`blog/${post.slug}.json`, JSON.stringify(post), {
    access: 'public',
    contentType: 'application/json',
  })
  return blob
}

// Reading time calculate karo
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
```

#### Blog Page (`app/blog/[slug]/page.tsx`)
```typescript
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { articleSchema, faqSchema, breadcrumbSchema, ratingSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import TableOfContents from '@/components/layout/TableOfContents'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Static generation (SSG) — best for SEO
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map(post => ({ slug: post.slug }))
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    
    alternates: { canonical: `https://yoursite.com/blog/${post.slug}` },
    
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author.name],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.image] },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()
  
  const schemas = [
    articleSchema({ ...post, authorUrl: `https://yoursite.com/author/${post.author.name.toLowerCase().replace(' ', '-')}` }),
    breadcrumbSchema([
      { name: 'Home', url: 'https://yoursite.com' },
      { name: 'Blog', url: 'https://yoursite.com/blog' },
      { name: post.title, url: `https://yoursite.com/blog/${post.slug}` },
    ]),
    ...(post.faqs ? [faqSchema(post.faqs)] : []),
    ...(post.rating ? [ratingSchema({ itemName: post.title, ratingValue: post.rating.value, bestRating: 5, ratingCount: post.rating.count })] : []),
  ]
  
  return (
    <>
      <JsonLd data={schemas} />
      
      <article itemScope itemType="https://schema.org/Article">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>
        
        {/* Hero Section */}
        <header>
          <span className="category-badge">{post.category}</span>
          <h1 itemProp="headline">{post.title}</h1>
          <p className="description">{post.description}</p>
          
          {/* Author + Date + Reading Time — E-E-A-T ke liye */}
          <div className="article-meta">
            <div className="author" itemScope itemType="https://schema.org/Person">
              <img src={post.author.avatar} alt={post.author.name} itemProp="image" />
              <div>
                <span itemProp="name">{post.author.name}</span>
                <span itemProp="description">{post.author.bio}</span>
              </div>
            </div>
            <time dateTime={post.datePublished} itemProp="datePublished">
              {new Date(post.datePublished).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span>Last Updated: <time dateTime={post.dateModified} itemProp="dateModified">
              {new Date(post.dateModified).toLocaleDateString('hi-IN')}
            </time></span>
            <span>⏱ {post.readingTime} min read</span>
          </div>
          
          {/* Rating Widget */}
          {post.rating && (
            <div className="rating-widget" aria-label={`Rating: ${post.rating.value} out of 5`}>
              {'★'.repeat(Math.round(post.rating.value))}{'☆'.repeat(5 - Math.round(post.rating.value))}
              <span>{post.rating.value}/5 ({post.rating.count} reviews)</span>
            </div>
          )}
        </header>
        
        {/* Featured Image */}
        <img src={post.image} alt={post.title} itemProp="image" width={1200} height={630} />
        
        {/* Table of Contents */}
        <TableOfContents />
        
        {/* Main Content */}
        <div 
          className="prose" 
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* FAQ Section */}
        {post.faqs && (
          <section id="faq">
            <h2>Frequently Asked Questions (FAQ)</h2>
            {post.faqs.map((faq, i) => (
              <details key={i}>
                <summary><h3>{faq.question}</h3></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>
        )}
        
        {/* Tags */}
        <div className="tags">
          {post.tags.map(tag => (
            <a key={tag} href={`/blog/tag/${tag}`} rel="tag">#{tag}</a>
          ))}
        </div>
      </article>
    </>
  )
}
```

---

### TASK 8 — KEYWORD PLACEMENT RULES (STRICT)

```
URL/SLUG:     Primary keyword MUST hona chahiye
              /best-web-developer-udaipur  ✅
              /page1                        ❌

TITLE TAG:    Primary keyword pehle 30 chars me
              Length: 50-60 characters

META DESC:    Primary keyword pehle 20 chars me
              Secondary keyword include karo
              CTA include karo
              Length: 150-160 characters

H1:           Primary keyword EXACT ya near-exact
              Sirf EK H1 per page

H2:           Secondary keywords + LSI keywords
              5-10 per page (content length ke hisab se)

H3:           Long-tail keywords
              Subsection specific

CONTENT:      Primary keyword: First 100 words me
              Keyword Density: 1-2% (over-stuffing mat karo)
              LSI Keywords: naturally throughout
              Internal Links: anchor text me keywords

IMAGE ALT:    Descriptive + keyword (when relevant)
              <img alt="best web developer udaipur rajasthan" />

FIRST PARA:   Primary keyword + secondary keyword pehle paragraph me

URL STRUCTURE: /category/primary-keyword-here

INTERNAL LINKS: Keyword-rich anchor text use karo
              <a href="/services/web-development">best web development services</a>
```

---

### TASK 9 — E-E-A-T IMPLEMENTATION (Experience, Expertise, Authoritativeness, Trustworthiness)

#### Author Profile Component (`components/AuthorProfile.tsx`)
```typescript
// Har blog post ke upar/neeche
export default function AuthorProfile({ author }) {
  return (
    <div itemScope itemType="https://schema.org/Person" className="author-box">
      <img src={author.avatar} alt={author.name} itemProp="image" />
      <div>
        <h3 itemProp="name">{author.name}</h3>
        <p itemProp="jobTitle">{author.title}</p>  {/* "Senior Web Developer, 8+ years experience" */}
        <p itemProp="description">{author.bio}</p>   {/* Expertise describe karo */}
        <p>✅ Verified Expert | {author.articlesCount}+ Articles Published</p>
        
        {/* Social proof */}
        <div>
          {author.linkedin && <a href={author.linkedin} rel="noopener noreferrer" itemProp="url">LinkedIn</a>}
          {author.twitter && <a href={author.twitter} rel="noopener noreferrer">Twitter</a>}
        </div>
        
        {/* Credentials */}
        <ul>
          {author.credentials.map(c => <li key={c}>{c}</li>)}
          {/* e.g., "Google Certified Developer", "8+ Years Experience", "200+ Projects" */}
        </ul>
      </div>
    </div>
  )
}
```

#### Trust Signals (Footer + Sidebar me)
```html
<!-- Expert reviews, citations, sources -->
<section class="sources">
  <h2>Sources & References</h2>
  <ul>
    <li><a href="[SOURCE_URL]" rel="noopener noreferrer">[SOURCE_NAME] - [DATE]</a></li>
  </ul>
  <p>Last reviewed by: [EXPERT_NAME] on [DATE]</p>
  <p>Fact-checked: ✅</p>
</section>

<!-- Testimonials with Schema -->
<div itemScope itemType="https://schema.org/Review">
  <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
    <meta itemProp="ratingValue" content="5" />
    <meta itemProp="bestRating" content="5" />
  </span>
  <p itemProp="reviewBody">[TESTIMONIAL_TEXT]</p>
  <span itemProp="author" itemScope itemType="https://schema.org/Person">
    <span itemProp="name">[CLIENT_NAME]</span>
  </span>
</div>
```

#### Content Quality Rules
```
✅ KARNA:
- Har article me real examples, case studies, aur data cite karo
- Author name, photo, credentials VISIBLE rakhna
- "Last Updated" date CLEARLY dikhana
- Sources aur references link karna
- Expert quotes include karna
- Original research ya data include karna (even small surveys)
- About page me full team/founder info
- Contact page me real address/phone

❌ MAT KARNA:
- Anonymous content
- Dates chhupana ya outdated content
- Bina sources ke claims
- Generic "admin" author
- Thin content (< 800 words for informational pages)
```

---

### TASK 10 — INTERNAL LINKING STRATEGY

```typescript
// lib/seo.ts
// Related posts dhundho (categories/tags se)
export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 4) {
  return allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      post,
      score: post.tags.filter(tag => currentPost.tags.includes(tag)).length +
             (post.category === currentPost.category ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post)
}
```

**Internal Linking Rules:**
```
- Homepage → Sabhi main category pages (keyword anchor text)
- Blog posts → 3-5 relevant internal links per post
- Service pages → related blog posts
- About page → founder's articles/expertise pages
- Pillar pages → all cluster pages
- Cluster pages → pillar page (reciprocal)
- Sitemap → sabhi pages include hona chahiye
```

---

### TASK 11 — SITEMAP & ROBOTS

#### `app/sitemap.ts`
```typescript
import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts()
  const baseUrl = 'https://yoursite.com'
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]
  
  const blogPages = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...blogPages]
}
```

#### `app/robots.ts`
```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/', '/_next/'] },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    sitemap: 'https://yoursite.com/sitemap.xml',
    host: 'https://yoursite.com',
  }
}
```

---

### TASK 12 — CORE WEB VITALS OPTIMIZATION

```typescript
// Image optimization — EVERY image
import Image from 'next/image'

// WRONG
<img src="/hero.jpg" alt="hero" />

// RIGHT — LCP improve karta hai
<Image
  src="/hero.jpg"
  alt="[KEYWORD-RICH ALT TEXT]"
  width={1200}
  height={630}
  priority={true}           // Above-the-fold images ke liye
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Font optimization — CLS prevent karta hai
import { Inter, Noto_Sans_Devanagari } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',          // FOUT prevent karta hai
  preload: true,
})

const devanagari = Noto_Sans_Devanagari({ 
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['400', '500', '700'],
})

// Dynamic imports for better FID/INP
import dynamic from 'next/dynamic'
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,  // Client-only components ke liye
})

// Link prefetching
import Link from 'next/link'
<Link href="/blog" prefetch={true}>Blog</Link>
```

---

### TASK 13 — VERCEL DEPLOYMENT SETUP

#### `vercel.json`
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "regions": ["bom1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

**IMPORTANT — NO REDIRECTS IN vercel.json:**
```json
// ❌ BILKUL MAT DALNA — purani site ka redirect
// "redirects": [{ "source": "/(.*)", "destination": "https://other-site.com/$1" }]
```

#### Environment Variables (`.env.local`)
```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_xxxxxxxx  # Vercel Blob ke liye
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX             # Google Analytics
```

---

### TASK 14 — GITHUB SETUP & PUSH

```bash
# 1. Git initialize (agar nahi hai)
git init
git add .gitignore

# 2. .gitignore update karo
cat >> .gitignore << 'EOF'
.env.local
.env.production
.next/
node_modules/
.vercel/
EOF

# 3. Build test karo
npm run build

# 4. Agar build pass ho
git add .
git commit -m "feat: migrate from React/Vite to Next.js 14 with full SEO optimization

- Migrated to Next.js 14 App Router
- Removed external site redirect
- Added JSON-LD schemas (Article, FAQ, BreadcrumbList, Rating, Organization)
- Implemented E-E-A-T optimized author profiles
- Added Vercel Blob blog storage
- Auto-generated sitemap.xml and robots.txt
- Core Web Vitals optimization (LCP, CLS, FID)
- Table of Contents component with IntersectionObserver
- Keyword-optimized heading structure (H1/H2/H3)
- Full OpenGraph and Twitter Card meta tags"

# 5. GitHub remote add karo (agar nahi hai)
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main

# 6. Vercel se GitHub connect karo
# vercel.com → Import Project → GitHub se import karo
# Environment variables set karo Vercel dashboard me
```

---

### TASK 15 — ADDITIONAL SEO FEATURES

#### Page Speed / Performance
```typescript
// app/layout.tsx me add karo
export default function RootLayout({ children }) {
  return (
    <html lang="hi">  {/* Sahi language code — hi for Hindi, en for English */}
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile */}
        <meta name="theme-color" content="#[YOUR_BRAND_COLOR]" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

#### Social Proof / Rating Display Component
```typescript
// components/RatingWidget.tsx
export default function RatingWidget({ rating, count, productName }) {
  const stars = Math.round(rating)
  return (
    <div 
      className="rating-widget"
      itemScope 
      itemType="https://schema.org/AggregateRating"
      aria-label={`${productName}: ${rating} out of 5 stars, ${count} reviews`}
    >
      <meta itemProp="itemReviewed" content={productName} />
      <span itemProp="ratingValue">{rating}</span>/
      <meta itemProp="bestRating" content="5" />
      <span itemProp="ratingCount">{count}</span> reviews
      <span aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => i < stars ? '★' : '☆').join('')}
      </span>
    </div>
  )
}
```

#### Breadcrumb Component
```typescript
// components/Breadcrumb.tsx
export default function Breadcrumb({ items }: { items: Array<{ name: string; href: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li 
            key={item.href}
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            {index < items.length - 1 ? (
              <a itemProp="item" href={item.href}>
                <span itemProp="name">{item.name}</span>
              </a>
            ) : (
              <span itemProp="name" aria-current="page">{item.name}</span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

---

## ✅ SEO CHECKLIST — BUILD SE PEHLE VERIFY KARO

### Technical
- [ ] Koi bhi purana redirect REMOVE ho gaya
- [ ] Canonical URLs set hain sabhi pages pe
- [ ] sitemap.xml auto-generate ho raha hai
- [ ] robots.txt correct hai
- [ ] 404 page custom hai
- [ ] HTTPS enforce ho raha hai
- [ ] Mobile responsive hai (responsive meta viewport)
- [ ] Page speed > 90 on PageSpeed Insights

### On-Page SEO
- [ ] Har page pe UNIQUE H1 hai (primary keyword ke sath)
- [ ] H2/H3 structure proper hai
- [ ] Title tags 50-60 chars
- [ ] Meta descriptions 150-160 chars
- [ ] Alt text sabhi images pe
- [ ] Internal linking proper hai
- [ ] Table of Contents long pages pe
- [ ] Keywords first 100 words me

### Structured Data
- [ ] Organization schema (global)
- [ ] WebSite schema with SearchAction (global)
- [ ] Article schema (blog posts)
- [ ] FAQ schema (relevant pages)
- [ ] BreadcrumbList (all pages except homepage)
- [ ] Rating schema (where applicable)
- [ ] LocalBusiness schema (agar local business)

### E-E-A-T
- [ ] Author profiles with credentials
- [ ] "Last Updated" dates visible
- [ ] Sources/references linked
- [ ] About page comprehensive
- [ ] Contact page with real info
- [ ] Social media profiles linked

### Content
- [ ] No duplicate content
- [ ] No thin content (< 800 words informational)
- [ ] All images have descriptive alt text
- [ ] All external links have rel="noopener noreferrer"
- [ ] Blog posts have FAQs section

---

## 🔧 QUICK FIX COMMANDS

```bash
# Build aur test
npm run build && npm run start

# Lighthouse audit (Chrome DevTools ya)
npx lighthouse https://yoursite.com --output html --output-path ./lighthouse-report.html

# Check for broken links
npx broken-link-checker https://yoursite.com -ro

# Schema validation
# Google Rich Results Test: https://search.google.com/test/rich-results
# Schema.org Validator: https://validator.schema.org/

# Submit to Google Search Console
# 1. sitemap submit: https://yoursite.com/sitemap.xml
# 2. URL inspection tool se main pages inspect karo
# 3. Request indexing

# After deploying to Vercel
vercel env pull .env.local  # Vercel se env vars download karo
```

---

## 📊 POST-LAUNCH MONITORING

```
Week 1-2:   Google Search Console me sitemap submit karo
             Core Web Vitals monitor karo
             Coverage report check karo (crawl errors)

Week 3-4:   Keyword rankings track karo
             Click-through rate (CTR) check karo
             Bounce rate monitor karo

Month 2+:   Content calendar follow karo (weekly blog posts)
             Internal linking strengthen karo
             Backlink building shuru karo
             
Tools:
- Google Search Console (FREE — mandatory)
- Google Analytics 4 (FREE — mandatory)  
- Ahrefs ya Semrush (paid — optional but helpful)
- PageSpeed Insights (FREE)
- Schema Markup Validator (FREE)
```

---

*Prompt Version: 2.0 | Optimized for Next.js 14 App Router + Vercel Blob + E-E-A-T SEO*
*Last Updated: June 2026*
