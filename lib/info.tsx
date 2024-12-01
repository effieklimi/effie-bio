import me from "./../app/SF.png";
import ek from "../app/ek-logo.jpg";

export const name = "Effie Klimi";
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      •{" "}
      <a href="https://drylab-inc.github.io" target="_blank">
        <u>
          <span className="italics">Drylab</span>
        </u>
      </a>{" "}
      <br />•{" "}
      <a href="https://effieklimi.substack.com/welcome" target="_blank">
        <u>
          <span className="italics">Delphic Dialogs</span>
        </u>
      </a>
      <br />• PhD @ University of Edinburgh
    </>
  );
};

export const bio = () => {
  return (
    <>
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
      <br /> • Christian theology and liturgy
      <br /> • Working towards polymathy
      <br />• The planets Saturn and Jupiter
      <br />• Music composition and orchestration
    </>
  );
};
