import type { Metadata } from "next";
import { ArrowIcon } from "components/icons";

export const metadata: Metadata = {
  title: "Consulting",
  description: "",
};

export default function ConsultingPage() {
  return (
    <div className="max-w-5xl">
      <section>
        <h1 className="mx-3 font-bold text-3xl font-serif">Consulting</h1>
        <p className="mx-3 my-5 text-neutral-800 dark:text-neutral-700">Soon</p>
        <div className="mx-3  text-neutral-800 dark:text-neutral-200">
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900" />

          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://drylab.works"
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-700 hover:dark:bg-neutral-900 hover:bg-neutral-100 hover:text-neutral-200 transition-all justify-between"
            >
              <div className="flex items-center">
                <div className="ml-3">DryLab Works</div>
              </div>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
