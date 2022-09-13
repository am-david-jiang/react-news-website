import ArticleSection from "./ArticleSection";

const LargeSection = (props) => {
  return (
    <div className="large-section">
      <ArticleSection
        article={props.article}
        displayImage={true}
        isDisplayRow={false}
      />
    </div>
  );
};

export default LargeSection;
