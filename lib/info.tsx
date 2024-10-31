import me from "./../app/cartoon1.jpg";
import ek from "../app/ek-logo.jpg";

export const name = "Effie Klimi";
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      • PhD @ University of Edinburgh <br />• Drylab Inc <br />• Delphic Dialogs
    </>
  );
};

export const bio = () => {
  return (
    <>
      • Improvement in late-life quality of life <br />
      • Gene delivery <br />
      • Climate optimism <br />
      • Economic growth + prosperity <br />•{" "}
      <a
        href="https://chooser.crossref.org/?doi=10.2307%2Fj.ctt3fgz1q"
        target="_blank"
      >
        <u>
          <span className="italics">Historio/socioeconomics</span>
        </u>
      </a>
    </>
  );
};
export const mainInterests = () => {
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
        • abundance + economic prosperity {/*(read&nbsp; */}
        {/* <a
          href="https://chooser.crossref.org/?doi=10.2307%2Fj.ctt3fgz1q"
          target="_blank"
        >
          <u>
            <span className="italics">this</span>
          </u>
        </a> */}
        ) <br />
        • polymathy + lifelong learning <br />
        • heavily personalising my working interface & tools <br />
        • words & language <br />
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
    </>
  );
};
