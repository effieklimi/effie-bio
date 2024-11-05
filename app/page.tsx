import Image from "next/image";
import {
  ArrowIcon,
  // GitHubIcon,
  // TwitterIcon,
  // LinkedInIcon,
} from "components/icons";
import { name, about, bio, avatar, coding } from "lib/info";
import "./global.css";
// import clsx from 'clsx';
import localFont from "next/font/local";

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const revalidate = 60;

export default async function HomePage() {
  return (
    <div>
      <section>
        <div className="flex items-start md:items-center place-self-center flex-col md:flex-row space-x-7"></div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col w-full md:justify-center space-y-10">
            <div className="flex flex-row space-x-6">
              <p className="font-mono w-1/6 text-right"></p>
              <div className="pt-12 flex flex-col">
                <Image
                  alt={name}
                  className="rounded-lg"
                  src={avatar}
                  // placeholder="blur"
                  width={120}
                  height={120}
                  priority
                />
                <h3 className="font-bold pt-10 font-mono text-3xl">
                  Effie Klimi
                </h3>
              </div>
            </div>

            <div className="flex flex-row space-x-6">
              <p className="font-mono w-1/6 text-right">about</p>
              <p>
                I am a molecular biologist, bioinformatician and software
                developer based in London. <br />
                <a href="mailto:hi@effie.bio" target="_blank">
                  <u>
                    <span className="italics">Email me</span>
                  </u>
                </a>{" "}
                if you want to talk about any of my projects/interests.
              </p>
            </div>

            <div className="flex flex-row space-x-6">
              <p className="font-mono w-1/6 text-right">my projects</p>
              <p>{about()}</p>
            </div>

            <div className="flex flex-row space-x-6">
              <p className="font-mono w-1/6 text-right">interests</p>
              <p>{bio()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className='wrapper'>
      <div className="push"></div>
    </div>
    <div className="footer">
      <FooterCentered />
    </div> */}
    </div>
  );
}

// <ul className="flex flex-col md:flex-row mt-8 ml-4 mr-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
// <li>
//   <a
//     className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-400 dark:text-neutral-900 transition-all"
//     rel="noopener noreferrer"
//     target="_blank"
//     href="https://twitter.com/roboticparts"
//   >
//     <TwitterIcon />
//     {/* <p className="h-7 font-bold"></p> */}
//   </a>
// </li>
// </ul>

// <ul className="flex flex-col md:flex-row mt-8 ml-4 mr-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
// <li>
//   <a
//     className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-400 dark:text-neutral-900 transition-all"
//     rel="noopener noreferrer"
//     target="_blank"
//     href="https://github.com/effieklimi"
//   >
//     <GitHubIcon />
//     {/* <p className="h-7 font-bold"></p> */}
//   </a>
// </li>
// </ul>

// <ul className="flex flex-col md:flex-row mt-8 ml-4 mr-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
// <li>
//   <a
//     className="flex items-center hover:text-neutral-900 dark:hover:text-neutral-400 dark:text-neutral-900 transition-all"
//     rel="noopener noreferrer"
//     target="_blank"
//     href="https://linkedin.com/effieklimi"
//   >
//     <LinkedInIcon />
//     {/* <p className="h-7 font-bold"></p> */}
//   </a>
// </li>
// </ul>
