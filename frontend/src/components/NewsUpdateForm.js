import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NewsUpdateForm = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state.article;

  const [title, setTitle] = useState(article.title);
  const [author, setAuthor] = useState(article.author);
  const [description, setDescription] = useState(article.description);
  const [urlToImage, setUrlToImage] = useState(article.urlToImage);
  const [publishedAt, setPublishedAt] = useState(
    article.publishedAt.slice(0, -1)
  );
  const [content, setContent] = useState(article.content);

  useEffect(() => {
    const fetchContent = async () => {
      await fetch(
        `http://localhost:5000/api/articles/content/${article["_id"]}`
      )
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => setContent(() => data.content));
    };

    fetchContent();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let requirePart = { title, author, description, content };
    let optionalPart = {};
    if (urlToImage) optionalPart = { urlToImage, ...optionalPart };
    if (publishedAt) optionalPart = { publishedAt, ...optionalPart };
    const formData = { ...requirePart, ...optionalPart };
    const formJSONDate = JSON.stringify(formData);
    console.log(formJSONDate);
    fetch(`http://localhost:5000/api/articles/${article["_id"]}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: formJSONDate,
    })
      .then((res) => {
        if (res.ok) {
          console.log("Operation Succeed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(-1, { replace: true });
  };

  return (
    <div className="form-page">
      <h1>Create New Article</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            rows={10}
            cols={20}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="urlToImage">Url to Image</label>
          <input
            type="text"
            id="urlToImage"
            value={urlToImage}
            onChange={(e) => setUrlToImage(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="publishedAt">Publish Date</label>
          <input
            type="datetime-local"
            id="publishedAt"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="content">Content</label>
          <textarea
            rows={20}
            cols={40}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewsUpdateForm;
