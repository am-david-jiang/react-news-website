import user from "../assets/svg/user.svg";
import calender from "../assets/svg/calender.svg";

const SectionDetail = (props) => {
  return (
    <div className={props.isDisplayRow ? "article-row-display" : ""}>
      <div className="article-detail">
        <h3 className="article-title">{props.article.title}</h3>
        <p className="article-abstract">{props.article.description}</p>
        <div className="article-info">
          <div className="article-author">
            <img className="article-icon" src={user} alt="User" />
            <p>{props.article.author || "Unknown"}</p>
          </div>
          <div className="article-date">
            <img className="article-icon" src={calender} alt="Calender" />
            <p>{props.article.publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDetail;
