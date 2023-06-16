import Image from 'next/image';
import {
  ArrowIcon,
  // GitHubIcon,
  // TwitterIcon,
  // LinkedInIcon,
} from 'components/icons';
import { name, about, bio, avatar, coding } from 'lib/info';
import './global.css';
// import clsx from 'clsx';
import localFont from 'next/font/local';



const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const revalidate = 60;

export default async function HomePage() {

  return (
    <div>
    <section >
      {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
      <h1 className="text-3xl font-serif font-bold md:text-left text-center mx-3">Effie Klimi</h1>
      <h1 className="text-lg md:visible invisible mb-5 mx-3">ABOUT</h1>

      <div className="flex items-start md:items-center place-self-center my-8 flex-col md:flex-row space-x-7">

      </div>

      <div className="flex flex-col md:flex-row ms-5">
        <Image
          alt={name}
          className="h-70 w-70 rounded-full mr-7 mx-auto"
          src={avatar}
          placeholder="blur"
          width={300}
          priority
        />


        <div className="flex flex-col md:w-2/3 justify-center md:justify-center">
          <p className="m-5 md:mt-1 text-neutral-900 dark:text-neutral-900 text-center md:text-justify">
            {about()}
          </p>
          <p className="m-5 md:mt-1 text-neutral-900 dark:text-neutral-900 text-center md:text-justify">
            {bio()}
          </p>
          <p className="m-5 md:mt-1 text-neutral-900 dark:text-neutral-900 text-center md:text-justify">
            {coding()}
          </p>
        </div>

        <div className="flex items-start md:items-center my-4 flex-col md:flex-row space-x-7">

               

        </div>
      </div>


      <div className="flex flex-row">

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
        </ul>
        

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