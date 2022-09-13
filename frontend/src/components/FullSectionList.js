import LargeSection from "./LargeSection";

const FullSectionList = (props) => {
  return (
    <div className="full-list">
      <h5>All Articles</h5>
      {props.articles.map((article) => (
        <LargeSection
          key={article.id}
          article={article}
          displayImage={true}
          isDisplayRow={true}
        />
      ))}
    </div>
  );
};

export default FullSectionList;
