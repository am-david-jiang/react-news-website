import ArticleSection from "./ArticleSection";

const SectionList = (props) => {
  return (
    <div className="section-list">
      {props.articles.map((article) => (
        <ArticleSection
          key={article.id}
          article={article}
          displayImage={false}
          isDisplayRow={false}
        />
      ))}
    </div>
  );
};

export default SectionList;
