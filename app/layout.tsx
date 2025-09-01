import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simran Kumari - Full Stack Developer Portfolio',
  description: 'Passionate full-stack developer creating exceptional digital experiences. Explore my projects, skills, and get in touch for collaboration opportunities.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Simran Kumari' }],
  creator: 'Simran Kumari',
  publisher: 'Simran Kumari',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourportfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Simran Kumari - Full Stack Developer Portfolio',
    description: 'Passionate full-stack developer creating exceptional digital experiences. Explore my projects, skills, and get in touch for collaboration opportunities.',
    url: 'https://yourportfolio.vercel.app',
    siteName: 'Simran Kumari Portfolio',
    images: [
      {
        url: '/simran-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Simran Kumari - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simran Kumari - Full Stack Developer Portfolio',
    description: 'Passionate full-stack developer creating exceptional digital experiences.',
    images: ['/simran-image.jpg'],
    creator: '@simrankumari02184',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
