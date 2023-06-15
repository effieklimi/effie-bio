import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';

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
        'text-black bg-white',
        kaisei.variable
      )}
    >
      <body className="antialiased flex flex-1 flex-col min-h-screen max-w-4xl mb-40 mx-4 lg:mx-auto">
       
        <div className="md:mt-20 text-white">
              .
        </div>

        <div className="flex flex-row h-5/6">
            <div>
              <Sidebar />
            </div>
            
            <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 text-m">
              {children}
            </main>
          </div>

          <div className="text-center	">
            <p> 📍: 🇬🇧🇪🇸🇳🇱🇬🇷 </p>
          </div>

      </body>
    </html>
  );
}
