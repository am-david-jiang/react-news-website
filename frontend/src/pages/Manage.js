import { Link } from "react-router-dom";
import { useEffect } from "react";

import NewsTable from "../components/NewsTable";

import useFetch from "../hook/useFetch";

const Manage = () => {
  const { articles, updateArticle } = useFetch(
    "http://localhost:5000/api/articles/list"
  );

  useEffect(() => {
    console.log("Mount Component");

    updateArticle();

    return () => console.log("Unmount Component");
  }, []);

  return (
    <div className="manage">
      <div className="manage-container">
        <h1>Manage Your Articles</h1>
        <Link to="/manage/create" className="btn btn-primary">
          Add New Article
        </Link>
        {articles && <NewsTable articles={articles} />}
      </div>
    </div>
  );
};

export default Manage;
