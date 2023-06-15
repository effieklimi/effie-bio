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
        <div className="md:hidden flex items-start my-8 flex-row">
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={200}
            priority
          />
          <div className="ml-2 space-y-2 flex flex-col dark:text-neutral-500">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/roboticparts"
              className="items-center gap-2 dark:hover:text-neutral-900"
            >
              <TwitterIcon />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/effieklimi"
              className="items-center gap-2 dark:hover:text-neutral-900"
            >
              <GitHubIcon />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/effieklimi"
              className="items-center gap-2 dark:hover:text-neutral-900"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="mt-5">
            <p className="text-neutral-800 dark:text-neutral-600">
              {bio()}
            </p>
            <p className="mt-5 text-neutral-800 dark:text-neutral-600">
              {about()}
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-start my-8 flex-col justify-end">
          <div className="flex flex-row items-center space-x-8">
            <Image
              alt={name}
              className="rounded-full"
              src={avatar}
              placeholder="blur"
              width={200}
              priority
            />
            <div className="space-y-2 flex flex-col dark:text-neutral-500">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/roboticparts"
                className="items-center gap-2 dark:hover:text-neutral-900"
              >
                <TwitterIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/effieklimi"
                className="items-center gap-2 dark:hover:text-neutral-900"
              >
                <GitHubIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/effieklimi"
                className="items-center gap-2 dark:hover:text-neutral-900"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="mt-5 text-left">
            <p className="text-neutral-800 dark:text-neutral-600">
              {bio()}
            </p>
            <p className="mt-5 text-neutral-800 dark:text-neutral-600">
              {about()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}