import me from "../app/avatar.jpg";
import ek from "../app/ek.jpg";

export const name = "Effie Klimi";
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      I'm{" "}
      <span className="highlight-container">
        <span className="highlight">
          <b>Effie.</b>
        </span>
      </span>{" "}
      I do research in biology and build software to accelerate science.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I've worked on basic research, evolutionary genetics, multiomics and my
      PhD in RNA therapeutics & viral vectors @ The University of Edinburgh.
    </>
  );
};

export const coding = () => {
  return (
    <>
      I care about well-designed multiomics pipelines the intersection of
      science and software that works and looks great. If you want to discuss
      (your) biotech startup, data infra and software,&nbsp;
      <a href="mailto:effie@effie.bio">
        <b>
          <span className="highlight-container">
            <span className="highlight">email me!&nbsp;</span>
          </span>
        </b>
      </a>
    </>
  );
};
