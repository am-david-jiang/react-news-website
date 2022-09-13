const RecommendedNews = ({ title, date, img }) => {
  return (
    <div className="recommended-news">
      <div className="recommended-news-info">
        <h5 className="recommended-news-title">{title}</h5>
        <h6 className="recommended-news-date">{date}</h6>
      </div>
      <img
        className="recommended-news-img"
        src={img}
        alt={`Recommended News-${title}`}
      />
    </div>
  );
};

export default RecommendedNews;
