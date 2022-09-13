import { useParams } from "react-router-dom";

import NewsDetail from "../components/NewsDetail";
import MoreNews from "../components/MoreNews";

import useFetch from "../hook/useFetch";

const Detail = () => {
  let { id } = useParams();

  let { articles } = useFetch("http://localhost:5000/api/articles/list");
  let { articles: mainArticle } = useFetch(
    `http://localhost:5000/api/articles/${id}`
  );

  return (
    <div className="detail">
      {mainArticle && <NewsDetail article={mainArticle} />}
      {articles && <MoreNews articles={articles} />}
    </div>
  );
};

export default Detail;
