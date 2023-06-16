'use client';

import clsx from 'clsx';
import { logo } from 'lib/info';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGroup, motion } from 'framer-motion';
import { name } from 'lib/info';


const navItems = {
  '/': {
    name: 'About',
  },
  // '/projects': {
  //   name: 'Projects',
  // },
  // '/consulting': {
  //   name: 'Consulting',
  // },
  '/reading': {
    name: "Reading",
  },
  '/Resume': {
    name: "Resume",
  },
};

function Logo() {
  return (
    <Link aria-label="Effie" href="/">
      <Image
        alt={name}
        className="object-left-top"
        src={logo}
        placeholder="blur"
        width={150}
        priority
      />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <header className="flex flex-row items-center md:flex md:flex-row  md:items-center justify-between  md:w-full md:flex-shrink-0 px-0 font-serif space-x-4 md:space-x-0">
        <Link href="https://effie.bio">
          <Image className="h-16 w-16 hidden md:block" src={logo} alt="logo"/>
        </Link>   
        {/* <div className="md:font-bold font-serif md:text-4xl md:py-2">
            Effie Klimi
        </div> */}




      <nav
        className="flex md:flex flex-row md:flex-row items-center md:items-center relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative space-x-4 md:space-x-0"
        id="nav"
      >
        <div className="flex items-center flex-row mx-auto text-xl md:flex md:items-center ">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all mx-auto hover:text-black flex align-middle',
                  {
                    'text-neutral-700': !isActive,
                    'font-bold': isActive,
                  }
                )}
              >
                <span className="relative py-[5px] px-[10px]">
                  {name}
                  {path === pathname ? (
                    <motion.div
                      className="absolute inset-0 md:dark:bg-[#DEB0D5] bg-[#DEB0D5] rounded-full z-[-1]"
                      layoutId="sidebar"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
