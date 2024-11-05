import me from "./../app/cartoon1.jpg";
import ek from "../app/ek-logo.jpg";

export const name = "Effie Klimi";
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      •{" "}
      <a href="https://drylab-inc.girhub.io" target="_blank">
        <u>
          <span className="italics">Drylab</span>
        </u>
      </a>{" "}
      <br />•{" "}
      <a href="https://effieklimi.substack.com" target="_blank">
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
      • <b> Improvement in late-life quality of life & anti-frailty </b> <br />•{" "}
      <b> Gene delivery </b> <br />• <b> Bio/technological progress </b> <br />
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
      <br /> • <b>Culture shifts and how they happen</b>
      <br />• Mythology, symbolism and fiction
      <br /> • <b>Christian theology and liturgy</b>
      <br /> • <b>Working towards polymathy</b>
      <br />• The planets Saturn and Jupiter
      <br />• Music composition and orchestration
    </>
  );
};
