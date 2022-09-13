import { useState, useEffect } from "react";

function useFetch(url) {
  const [articles, setArticles] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const updateArticle = async () => {
    await fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("could not fetch the data for that resource");
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setArticles(data);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) throw Error("could not fetch the data for that resource");
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setIsPending(false);
    //     setArticles(data);
    //     setError(null);
    //   })
    //   .catch((err) => {
    //     setIsPending(false);
    //     setError(err.message);
    //   });
    updateArticle();
  }, [url]);

  return { articles, isPending, error, updateArticle };
}

export default useFetch;
