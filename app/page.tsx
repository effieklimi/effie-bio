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
          <div className="m-10">
            <Image
              alt={name}
              className="rounded-full"
              src={avatar}
              // placeholder="blur"
              width={150}
              height={150}
              priority
            />
          </div>

          <div className="flex flex-col justify-center md:justify-center">
            <div className="m-5 md:mt-1 text-neutral-900 dark:text-neutral-900 text-justify">
              {about()}
            </div>
            <div className="m-5 md:mt-1 text-neutral-900 dark:text-neutral-900 text-justify">
              {bio()}
            </div>
            <div className="m-5 md:mt-1 text-neutral-900 dark:text-neutral-900 text-justify">
              {coding()}
            </div>
          </div>

          <div className="flex items-start md:items-center my-4 flex-col md:flex-row space-x-7"></div>
        </div>

        <div className="flex flex-row"></div>
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
