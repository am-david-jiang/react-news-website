import { Link } from "react-router-dom";
import RecommendedNews from "./RecommendedNews";

const MoreNews = ({ articles }) => {
  return (
    <div className="more-news">
      <h5 className="more-news-title">More News</h5>
      <ul className="more-news-list">
        {articles.map((article) => (
          <li key={article.id} style={{ width: "100%" }}>
            <Link to={`/article/${article._id}`}>
              <RecommendedNews
                title={article.title}
                date={article.publishedAt}
                img={article.urlToImage}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreNews;
