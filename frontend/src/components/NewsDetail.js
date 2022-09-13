const NewsDetail = ({ article }) => {
  return (
    <div className="news">
      <img src={article.urlToImage} alt="News Content" />
      <h3>{article.title}</h3>
      <h5>{article.author}</h5>
      <h6>Publish At {article.publishedAt}</h6>
      {article.content &&
        article.content
          .split(`\n`)
          .map((para, index) => <p key={index}>{para}</p>)}
    </div>
  );
};

export default NewsDetail;
