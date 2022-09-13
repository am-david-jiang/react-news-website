import LargeSection from "./LargeSection";
import FullSectionList from "./FullSectionList";

const DefaultSections = ({ articles }) => {
  return (
    <div className="default-sections">
      <LargeSection article={articles[0]} />
      <LargeSection article={articles[1]} />
      <FullSectionList articles={articles} />
    </div>
  );
};

export default DefaultSections;
