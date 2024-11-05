import Image from "next/image";
import {
  ArrowIcon,
  // GitHubIcon,
  // TwitterIcon,
  // LinkedInIcon,
} from "components/icons";
import { name, about, bio, avatar } from "lib/info";
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
          <div className="flex flex-col w-full lg:justify-center space-y-10">
            <div className="flex flex-row lg:space-x-8 md:justify-start justify-center">
              <p className="font-mono w-1/6 lg:text-right justify-start hidden lg:inline-block"></p>
              <div className="pt-12 flex flex-col">
                <div className="flex justify-center md:justify-start">
                  <Image
                    alt={name}
                    className="rounded-lg border-4 border-[#87d4b9]"
                    src={avatar}
                    // placeholder="blur"
                    width={120}
                    height={120}
                    priority
                  />
                </div>

                <h3 className="font-bold pt-10 font-mono text-3xl">
                  Effie Klimi
                </h3>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row text-md lg:text-lg lg:space-x-12">
              <p className="font-mono w-1/6 lg:text-right text-left text-[#67ad95]">
                /about
              </p>
              <p className="w-ful">
                I am a molecular biologist, bioinformatician and software
                developer based in London. Email me at{" "}
                <a href="mailto:hi@effie.bio" target="_blank">
                  <u>
                    <span className="italics">hi@effie.bio</span>
                  </u>
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col lg:flex-row text-md lg:text-lg lg:space-x-12">
              <p className="font-mono w-1/6 lg:text-right text-left text-[#67ad95]">
                {" "}
                /projects
              </p>
              <p className="w-5/6">{about()}</p>
            </div>

            <div className="flex flex-col lg:flex-row text-md lg:text-lg lg:space-x-12">
              <p className="font-mono w-1/6 lg:text-right text-left text-[#67ad95]">
                /interests
              </p>
              <p className="w-5/6">{bio()}</p>
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
