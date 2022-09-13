import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Manage from "./pages/Manage";
import DeletePage from "./pages/DeletePage";
import NewsCreateForm from "./components/NewsCreateForm";
import NewsUpdateForm from "./components/NewsUpdateForm";

import "./sass/style.scss";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="article/:id" element={<Detail />} />
        </Route>
        <Route path="manage" element={<SharedLayout />}>
          <Route index element={<Manage />} />
          <Route path="delete/:id" element={<DeletePage />} />
          <Route path="update/:id" element={<NewsUpdateForm />} />
          <Route path="create" element={<NewsCreateForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
