import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import {
  ArrowIcon,
  // GitHubIcon,
  // TwitterIcon,
  // LinkedInIcon,
} from 'components/icons';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Effie Klimi',
    template: '%s | Effie Klimi',
  },
  description: '✨',
  openGraph: {
    title: 'Effie Klimi',
    description: '✨',
    url: 'https://effie.bio',
    siteName: 'Effie Klimi',
    locale: 'en-US',
    type: 'website',
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
  twitter: {
    title: 'Effie Klimi',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white font-sans',
        kaisei.variable
      )}
    >
      <body className="antialiased flex flex-1 flex-col min-h-screen max-w-5xl mb-40 mx-4 lg:mx-auto">

        <div className="flex flex-col h-min">
            <div className="my-8 flex flex-row justify-center md:flex md:flex-row md:justify-center">
              <Sidebar />
            </div>

            
            <main className="min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 text-lg text-black">
              {children}
            </main>
        </div>

        <div className="flex justify-center items-center">
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a
              className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-400 dark:text-neutral-900 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:effie@effie.bio"
            >
              <ArrowIcon />
              <p className="h-7 font-bold">Email me</p>
            </a>
          </li>
          <p className="h-7 font-bold"> 📍: 🇬🇧🇬🇷🇪🇸🇳🇱</p>
        </ul>
        </div>

      </body>
    </html>
  );
}
