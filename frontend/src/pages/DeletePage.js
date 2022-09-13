import { useNavigate, useParams } from "react-router-dom";

const DeletePage = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/articles/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Delete Succeed");
        } else {
          console.log("Failed to Delete");
        }
      })
      .catch((err) => console.log(err));
    navigate("/manage", { replace: true });
  };

  return (
    <div className="delete-page">
      <h1>Delete Article</h1>
      <p>Are you sure to delete this article?</p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Yes</button>
        <button onClick={() => navigate("/manage", { replace: true })}>
          No
        </button>
      </form>
    </div>
  );
};

export default DeletePage;
