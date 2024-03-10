import { Provider } from "mobx-react";
import store from "./store/PostsStore.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.js";
import { HomePage } from "./pages/HomePage.js";
import { PostDetailsPage } from "./pages/PostDetailsPage/PostDetailsPage.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";

function App() {
  return (
    <Provider {...store}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="post/:id" element={<PostDetailsPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="404" />} />
          </Route>
        </Routes>
      </>
    </Provider>
  );
}

export default App;
