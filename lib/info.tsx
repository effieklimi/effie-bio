import me from "./../app/SF.png";
import ek from "../app/newEK.png";

export const name = "Effie Klimi";
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      •{" "}
      <a href="https://drylab.bio" target="_blank">
        <u>
          <span className="italics">Drylab</span>
        </u>
      </a>{" "}
      <br />•{" "}
      <a href="https://effieklimi.substack.com/welcome" target="_blank">
        <u>
          <span className="italics">My writing</span>,
        </u>
      </a>
      <br />•
      <a href="https://ncbi-data.effie.bio/" target="_blank">
        <u>
          <span className="italics">
            NCBIapi: API and interface for NCBI's bio datasets
          </span>
          ,
        </u>
      </a>
      <br />
      <a href="https://hebrew.effie.bio" target="_blank">
        <u>
          <span className="italics">Hebrew learning buddy</span>,
        </u>
      </a>
      <br />
      <a href="https://orcid.org/0000-0002-1847-7910" target="_blank">
        <u>
          <span className="italics">My academic work</span>,
        </u>
      </a>
      <br />
    </>
  );
};

export const bio = () => {
  return (
    <>
      • Meta-science and scientific institutions <br />
      • Improving productive output per hour of work for researchers <br />
      • Scientific software modernisation <br />
      • Improvement in late-life QoL <br />• Gene delivery <br />
      • Anti-frailty/ageing <br />
      • Bio/technological progress <br />
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
      <br /> • Culture shifts and how they happen
      <br />• Mythology, symbolism and fiction
      <br /> • Judeo/christian theology and liturgy
      <br /> • Ancient languages (greek and hebrew)
      <br />• The planets Saturn and Jupiter
      <br />• Music composition and orchestration
    </>
  );
};
