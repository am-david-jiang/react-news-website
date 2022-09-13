import SectionList from "./SectionList";
import Filter from "./Filter";

const SideSection = (props) => {
  return (
    <div className="side-section">
      <SectionList articles={props.articles.slice(0, 3)} />
      <Filter />
    </div>
  );
};

export default SideSection;
