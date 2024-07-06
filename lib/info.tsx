import me from "./../app/cartoon3.jpg";
import ek from "../app/ek-logo.jpg";

export const name = "Effie Klimi";
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      I've done research in vascular biology, viral vectors and nucleic acid
      therapeutics in academia (@ the University of Edinburgh) and in biotech.
      I've also worked in RNA biology, evolutionary genetics, omics and genome
      stability.
    </>
  );
};
export const bio = () => {
  return (
    <>
      <b>
        I care a lot about increasing the biological robustness of both young
        and old people.&nbsp;
      </b>
      I am especially interested in alleviating the deterioration and suffering
      that worsens with the passage of time (ageing).
      <br />
      <br />
      Other things I care about: <br />
      <br />
      <div className="px-4 mx-4">
        • polymathy and being knowledgeable across disciplines <br />
        • paper replication in biology <br />
        • heavily personalising my working interface & tools <br />
        • words & language <br />• the West (read&nbsp;
        <a
          href="https://chooser.crossref.org/?doi=10.2307%2Fj.ctt3fgz1q"
          target="_blank"
        >
          <u>
            <span className="italics">this</span>
          </u>
        </a>
        ) <br />
      </div>
      <br />
    </>
  );
};

export const coding = () => {
  return (
    <>
      If you also find any of the above interesting,&nbsp;
      <a href="mailto:effie@effie.bio">
        <b>
          <span className="highlight-container">
            <span className="highlight hover:text-slate-600 transition ease-in-out">
              email me.&nbsp;
            </span>
          </span>
        </b>
      </a>
      I'm based in the UK.
    </>
  );
};
