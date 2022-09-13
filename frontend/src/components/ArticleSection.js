import { Link } from "react-router-dom";
import SectionDetail from "./SectionDetail";

const ArticleSection = (props) => {
  return (
    <section>
      <div>
        <Link to={`/article/${props.article._id}`}>
          <div className="article">
            {props.displayImage && (
              <img
                className="article-img"
                src={props.article.urlToImage}
                alt="Article"
              />
            )}
            <SectionDetail
              isDisplayRow={props.isDisplayRow}
              article={props.article}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ArticleSection;
