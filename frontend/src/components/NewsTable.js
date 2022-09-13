import { Link } from "react-router-dom";

import edit_icon from "../assets/svg/edit.svg";
import delete_icon from "../assets/svg/delete.svg";

const NewsTable = ({ articles }) => {
  return (
    <table className="news-table">
      <thead className="news-table-header">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody className="news-table-header">
        {articles.map((article) => (
          <tr key={article._id}>
            <td>{article.title}</td>
            <td>{article.author}</td>
            <td>{new Date(article.publishedAt).toLocaleDateString()}</td>
            <td>
              <div className="operation">
                <Link
                  to={`/manage/update/${article["_id"]}`}
                  state={{ article }}
                >
                  <img src={edit_icon} alt={"Update the article"} />
                </Link>
                <Link to={`/manage/delete/${article._id}`}>
                  <img src={delete_icon} alt={"Delete the article"} />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsTable;
