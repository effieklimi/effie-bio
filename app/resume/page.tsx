import type { Metadata } from "next";
import { ArrowIcon } from "components/icons";

export const metadata: Metadata = {
  title: "Resume",
  description: "",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl">
      <section>
        <h1 className="mx-3 font-bold text-3xl font-serif mb-8">Resume</h1>

        <h1 className="mx-3 my-5 font-serif text-2xl font-bold">
          In a nutshell:
        </h1>
        <ul className="mx-3 my-3">
          <li>
            I can design, perfom & analyse -omics projects from start to finish
          </li>
          <div className="h-[12px]"></div>

          <li>WGS, WGBS, ChIP-seq, RNA-seq (bulk, small, single cell)</li>
          <div className="h-[12px]"></div>

          <li>
            Coding, comp bio, pipeline development (Unix/NextFlow, R, Python +
            various libraries)
          </li>
          <div className="h-[12px]"></div>

          <li>Functional genomics (eQTL, GWAS)</li>
          <div className="h-[12px]"></div>

          <li>Culturing of: primaries, ESCs, cell lines, S. pombe</li>
          <div className="h-[12px]"></div>

          <li>
            Wet lab: RNA extraction, PCR, RT-qPCR, IHC, IF, WB, X-gal staining,
            FACS, transfections, nucleofection
          </li>
          <div className="h-[12px]"></div>

          <li>
            Adenoviral vector production, viral transduction of primary cells &
            cell lines
          </li>
          <div className="h-[12px]"></div>

          <li>
            I can also make web apps & visualisations using TS/React/D3.js
          </li>
        </ul>

        {/* <div className="mx-3 my-3">
          <p className=" font-bold">
            ⬇️ My PhD - QMRI, University of Edinburgh, UK
          </p>
          <p className="mx-3 mt-3 text-neutral-800 dark:text-neutral-600 font-bold">
            Project 1: Identification of novel therapeutic miRNAs for vein graft
            failure
          </p>
          <ul className="mx-3">
            <li>
              Assessing the effect of 2000+ miRNAs on proliferation via a
              high-throughput screen
            </li>
            <li>
              Evaluation of top candidates as potential therapeutics in vitro &
              ex vivo
            </li>
            <li>
              Interrogating the mechanism of action of the candidate miRNAs
              through RNA-seq
            </li>
            <li>Testing adenoviral delivery systems in the vasculature </li>
          </ul>
          <p className="mx-3 mt-3 text-neutral-800 dark:text-neutral-600 font-bold">
            Project 2: Studying endogenous miRNA loci that become deregulated in
            response to injurious stimuli in vascular smooth muscle cells
          </p>
          <ul className="mx-3">
            <li>
              Developed transcriptomics & genomics pipelines with R, Python,
              Unix and NextFlow
            </li>
            <li>Analysis of time-series data (ML & non-ML methods)</li>
            <li>
              Analysis of in-house & public RNA-sequencing datasets (bulk, small
              & single cell)
            </li>
            <li>
              Functional genomics-based evaluation of the loci of interest using
              GWAS/eQTL
            </li>
          </ul>
          <p className="mx-3 mt-3 text-neutral-800 dark:text-neutral-600 font-bold">
            Project 3:  Evaluation of all human miRNAs by predicting processing
            efficiency
          </p>
          <ul className="mx-3">
            <li>
              Using sequence and structural determinants associated with Drosha
              recognition and increased mature miRNA expression to identify the
              most optimal miRNAs to study for translational projects
            </li>
          </ul>
          <p className="mx-3 mt-3 text-neutral-800 dark:text-neutral-600 font-bold">
            Also involved in:
          </p>
          <ul className="mx-3">
            <li>
              A project on extracellular vesicles derived from a stem
              cell-derived endothelial cell product with a potent angiogenic
              effect
            </li>
            <li>
              Extracellular vesicle isolation and RNA-sequencing analysis (small
              & bulk).
            </li>
            <li>Teaching new lab members (students and post-doctoral).</li>
          </ul>

          <p className="mt-5 font-bold">
            ⬇️ My BBSRC CASE internship - Batavia Biosciences B.V., Leiden, NL
          </p>
          <p className="mx-6">
            Training on the generation of clinical-grade, Adenovirus 5-based
            vectors
          </p>

          <p className="mt-5 font-bold">
            ⬇️ My Personal Projects & Collaborations
          </p>
          <div className="mx-3">
            <ul>
              <li>
                Created an advanced genome visualisation tool using
                TS/React/D3.js/Visx/jotai
              </li>
              <li>
                Designed multiomics pipelines for the integration of genomic,
                transcriptomic and proteomic datasets in the context of cancer
                presision medicine
              </li>
            </ul>
          </div>

          <p className="mt-5 font-bold">
            ⬇️ My BSc Hons Project - Genome Damage & Stability Centre, Sussex,
            UK
          </p>
          <div className="mx-3">
            <ul>
              <li>Generating Cdc45 mutants by error-prone PCR</li>
              <li>
                S. pombe culture and Cre-lox-mediated insertion of Cdc45 mutants
              </li>
              <li>
                Tertiary protein structure modelling of temperature-sensitive
                Cdc45 mutants (PyMOL)
              </li>
            </ul>
          </div>

          <p className="mt-5 font-bold">
            ⬇️ My Junior RA Project - Evolution, Behaviour and Environment Dept,
            Sussex, UK
          </p>
          <div className="mx-6">
            Used single nucleotide polymorphism data (from the 1000 genomes
            project) and de novo mutation data (from multiple studies) to
            estimate the variation of the effective population size across the
            human genome
          </div>
        </div> */}

        {/* <h1 className="text-xl font-bold">Education</h1>
        <li className="mx-3 my-3 text-neutral-800 dark:text-neutral-600">
          PhD Cardiovascular Science, Queen’s Medical Research Institute,
          University of Edinburgh
        </li>
        <li className="mx-3 my-3 text-neutral-800 dark:text-neutral-600">
          BSc Genetics, School of Life Sciences, University of Sussex
        </li> */}

        {/* <div className="mx-3 text-neutral-800 dark:text-neutral-200">
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-900" />

          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href=" "
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-700 hover:dark:bg-neutral-900 hover:bg-neutral-100 hover:text-neutral-200 transition-all justify-between"
            >
              <div className="flex items-center">
                <div className="ml-3">Add genome browser link here</div>
              </div>
              <ArrowIcon />
            </a>
          </div>
        </div> */}

        <div className="mx-3 w-[103px] my-26">
          <br></br>
          <a
            className="font-serif text-xl font-bold "
            href="http://effie.bio/resume.pdf"
            target="_blank"
          >
            <span
              className="bg-[#deb0d5] hover:bg-[#CE9AC4] transition ease-in-out"
              style={{
                content: " ",
                display: "block",
                width: "100%",

                position: "relative",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                padding: "9px 9px 9px 5px",
              }}
            >
              <span className="highlight"> &nbsp;In detail</span>
            </span>
          </a>
        </div>

        <br></br>
        <br></br>
      </section>
    </div>
  );
}
