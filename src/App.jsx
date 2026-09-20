import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { BookmarkProvider } from "./context/BookmarkContext";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const Details = lazy(() => import("./pages/Details"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <BookmarkProvider>

      <Navbar />

      <Suspense fallback={<Loader />}>

        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/explore" element={<Explore />} />
  <Route path="/details/:id" element={<Details />} />
  <Route path="/bookmarks" element={<Bookmarks />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>

      </Suspense>

    </BookmarkProvider>
  );
}

export default App;