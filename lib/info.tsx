import me from '../app/avatar.jpg';
import ek from '../app/ek.jpg';

export const name = 'Effie Klimi';
export const avatar = me;
export const logo = ek;
export const about = () => {
  return (
    <>
      I'm <b>Effie</b>. I do research in biology and build software to accelerate science.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I've worked all around biology, from basic research in eukaryotic DNA replication to 
      mathematical modeling in evolutionary genetics. Currently, I'm wrapping up my PhD on RNA therapeutics 
      and viral vector delivery <b>@ Uni of Edinburgh</b>.
    </>
    
  );
};

export const coding = () => {
  return (
    <>
      I code for science - I build the software I wish I had during my PhD, and streamline omics pipelines +
      big-data infra for researchers and biotech. If you want to discuss (your) biotech startup, data and software, <b>contact me</b>!
    </>
    
  );
};
