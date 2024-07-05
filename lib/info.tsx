import me from "./../app/cartoon3.jpg";
import ek from "../app/ek-logo.jpg";

export const name = "Effie Klimi";
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      I've done research in vascular biology, viral vectors and nucleic acid
      therapeutics in academia and in biotech. I've also worked in evolutionary
      genetics, omics and genome stability.
    </>
  );
};
export const bio = () => {
  return (
    <>
      <b>
        I care a lot about increasing the robustness of both young and old
        humans.&nbsp;
      </b>
      I am especially interested in aleviating the suffering that worsens with
      the passage of time (ageing).
      <br />
      <br />
      Other things I care about/like: <br />
      <br />
      <div className="px-4 mx-4">
        • the wet lab <br />
        • multimodality in biology <br />
        • paper replication in biology <br />
        • heavily personalising my working interface & tools <br />
        • learning <br />
        • words & language <br />
        • the West <br />
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
      Happy to chat. I'm based in the UK.
    </>
  );
};
