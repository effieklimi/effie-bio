import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "../components/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";

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

// using this for sticky footer - works perfect https://metaphore.vercel.app/stories/css/fixing-the-sticky-footer-issue-with-nextjs-and-tailwindcss

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("text-black bg-[#ffffff] font-sans", kaisei.variable)}
    >
      <body className="antialiased flex flex-1 flex-col min-h-screen max-w-[1000px] mb-40 mx-4 lg:mx-auto relative pb-20">
        <div className="flex flex-col h-min">
          <div className="my-8 flex flex-row justify-center md:flex md:flex-row md:justify-center">
            {/* <Sidebar /> */}
          </div>

          <main className="min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 text-lg text-black">
            {children}
          </main>
        </div>

        <div className="mt-auto">
          <div className=" footer pt-12 bottom-0 w-full flex space-x-4 justify-center justify-items-center flex-row my-4">
            <div className="flex flex-col justify-end h-22">
              <Link
                href="mailto:effie@effie.bio"
                className="mx-1"
                target="_blank"
              >
                {/* <Mail size={22} color="#406390" strokeWidth={1.5} /> */}
                <p className="text-[#406390] hover:underline font-mono">
                  email
                </p>
              </Link>
            </div>

            <div className="flex flex-col justify-end h-22">
              <Link
                href="https://github.com/effieklimi"
                className="mx-1"
                target="_blank"
              >
                {/* <Github size={22} color="#406390" strokeWidth={1.5} /> */}
                <p className="text-[#406390] hover:underline font-mono">
                  github
                </p>
              </Link>
            </div>

            <div className="flex flex-col justify-end h-22">
              <Link
                href="https://www.linkedin.com/in/effie-klimi"
                className="mx-1"
                target="_blank"
              >
                {/* <Linkedin size={22} color="#406390" strokeWidth={1.5} />{" "} */}
                <p className="text-[#406390] hover:underline font-mono">
                  linkedin
                </p>
              </Link>
            </div>

            <div className="flex flex-col justify-end h-22">
              <Link
                href="https://twitter.com/roboticparts"
                className="mx-1"
                target="_blank"
              >
                {/* <Twitter size={22} color="#406390" strokeWidth={1.5} /> */}
                <p className="text-[#406390] hover:underline font-mono">
                  twitter
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* </div> */}
      </body>
    </html>
  );
}
