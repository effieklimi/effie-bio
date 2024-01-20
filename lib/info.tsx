import me from "../app/pfp-orange.jpg";
import ek from "../app/ek-logo.jpg";

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
      I care about well-designed multiomics pipelines, maximising thinking time
      for scientists by automating tedious research tasks & making humans more
      robust. If you want to discuss any of these,&nbsp;
      <a href="mailto:effie@effie.bio">
        <b>
          <span className="highlight-container">
            <span className="highlight hover:text-slate-600 transition ease-in-out">
              email me!&nbsp;
            </span>
          </span>
        </b>
      </a>
    </>
  );
};
