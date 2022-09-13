// import LargeSection from "../components/LargeSection";
// import SectionList from "../components/SectionList";
// import FullSectionList from "../components/FullSectionList";
// import LargeSection from "../components/LargeSection";
import DefaultSections from "../components/DefaultSections";
import SideSection from "../components/SideSection";
import useFetch from "../hook/useFetch";

function Home() {
  const { articles, isPending, error } = useFetch(
    "http://localhost:5000/api/articles/list"
  );

  return (
    <div className="home">
      {/* {!articles && <p>No data</p>} */}
      {/* <DefaultSections articles={articles} /> */}
      {/* <SideSection articles={articles} /> */}
      {articles && <DefaultSections articles={articles} />}
      {articles && <SideSection articles={articles} />}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!articles && <div>No Articles!</div>}
    </div>
  );
}

export default Home;
