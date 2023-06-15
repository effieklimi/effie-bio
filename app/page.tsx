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
    <section>
      {/* <h1 className="font-bold text-3xl font-serif">{name}</h1> */}
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={200}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 dark:text-neutral-500">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/roboticparts"
            className="flex items-center gap-2 dark:hover:text-neutral-900"
          >
            <TwitterIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/effieklimi"
            className="flex items-center gap-2 dark:hover:text-neutral-900"
          >
            <GitHubIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/effieklimi"
            className="flex items-center gap-2 dark:hover:text-neutral-900"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <p className="my-5 text-neutral-800 dark:text-neutral-600">
        {about()}
      </p>
      <p className="my-5 text-neutral-800 dark:text-neutral-600">
        {bio()}
      </p>
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
