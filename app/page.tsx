import Image from 'next/image';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';
import './global.css';


export const revalidate = 60;

export default async function HomePage() {

  return (
    <div>
    <section >
    {/* <hr/> */}
    
      <h1 className="text-xl font-serif">ABOUT</h1>
      <h1 className="text-3xl font-bold font-serif">Effie Klimi</h1>

      <div className="flex items-start md:items-center place-self-center my-8 flex-col md:flex-row space-x-7">

      </div>

      <div className="flex flex-col md:flex-row ms-8 md:items-center my-4 ">
        <Image
          alt={name}
          className="h-80 w-80 md:items-center rounded-full mr-7"
          src={avatar}
          placeholder="blur"
          width={200}
          priority
        />


        <div className="flex flex-col md:w-2/3">
          <p className="my-5 text-neutral-800 dark:text-neutral-600 text-justify">
            {about()}
          </p>
          <p className="my-5 text-neutral-800 dark:text-neutral-600 text-justify">
            {bio()}
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