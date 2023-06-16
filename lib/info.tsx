import me from '../app/avatar.jpg';
import ek from '../app/ek.jpg';

export const name = 'Effie Klimi';
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      I'm <span className="highlight-container"><span className="highlight"><b>Effie.</b></span></span> I do research in biology and build software to accelerate science.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I've worked all around biology, including: basic research in eukaryotic DNA replication, mathematical 
      modeling in evolutionary genetics, structural omics and my PhD in RNA biology and viral vectors <b>@ The University of Edinburgh</b>.
    </>
    
  );
};

export const coding = () => {
  return (
    <>
      I care about the intersection of science and software that works and looks great<b>. 
      I build the software I wish I had during my PhD</b> and streamline omics pipelines +
      big-data infra for researchers and biotech. 
      <br/><br/>
      
      If you want to discuss (your) biotech startup, data and software,&nbsp; 
      <a href="mailto:effie@effie.bio">
        <b>
          <span className="highlight-container">
            <span className="highlight">
                contact me!&nbsp;
            </span>
          </span>
        </b>

      </a>

      
    </>
    
  );
};
