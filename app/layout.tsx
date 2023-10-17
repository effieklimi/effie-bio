import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "../components/sidebar";
import {
  EmailIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
} from "components/icons";

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Effie Klimi",
    template: "%s | Effie Klimi",
  },
  description: "✨",
  openGraph: {
    title: "Effie Klimi",
    description: "✨",
    url: "https://effie.bio",
    siteName: "Effie Klimi",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Effie Klimi",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
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
      className={clsx("text-black bg-white font-sans", kaisei.variable)}
    >
      <body className="antialiased flex flex-1 flex-col min-h-screen max-w-[800px] mb-40 mx-4 lg:mx-auto">
        <div className="flex flex-col h-min">
          <div className="my-8 flex flex-row justify-center md:flex md:flex-row md:justify-center">
            <Sidebar />
          </div>

          <main className="min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 text-lg text-black">
            {children}
          </main>
        </div>

        <div className="flex justify-between items-center flex-row ">
          <div className="flex justify-between items-bottom content-end h-[auto]">
            <a href="mailto:effie@effie.bio">
              <EmailIcon />
            </a>

            <a href="https://github.com/effieklimi" className="mx-1">
              <GitHubIcon />
            </a>

            <a href="https://twitter.com/roboticparts" className="mx-1">
              <TwitterIcon />
            </a>

            <a href="https://www.linkedin.com/in/effie-klimi" className="mx-1">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
