import type { Metadata } from 'next';
import { ArrowIcon } from 'components/icons';

export const metadata: Metadata = {
  title: 'Consulting',
  description: '',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="mx-3 font-bold text-3xl font-serif">Substacks/pubs</h1>
      <p className="mx-3 my-5 max-w-[600px] text-neutral-800 dark:text-neutral-700">
         Books - publication bibliographies - substacks
      </p>
      <div className="mx-3 prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        
        <hr />
        
        
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://substack.com/@effieklimi"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-700 hover:dark:bg-neutral-900 hover:bg-neutral-100 hover:text-neutral-200 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">My substack</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
