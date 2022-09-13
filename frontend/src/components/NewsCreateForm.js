import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsCreateForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [urlToImage, setUrlToImage] = useState("");
  const [publishedAt, setPublishedAt] = useState(new Date());
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let requirePart = { title, author, description, content };
    let optionalPart = {};
    if (urlToImage) optionalPart = { urlToImage, ...optionalPart };
    if (publishedAt) optionalPart = { publishedAt, ...optionalPart };
    const formData = { ...requirePart, ...optionalPart };
    const formJSONDate = JSON.stringify(formData);
    console.log(formJSONDate);
    fetch("http://localhost:5000/api/articles", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
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

export default NewsCreateForm;
