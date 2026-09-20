import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function Explore() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();

  // Fetch posts from REST API
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    } catch (err) {
      setError("Unable to load posts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Search/filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const text = `${post.title} ${post.body}`.toLowerCase();

      return text.includes(search.toLowerCase());
    });
  }, [posts, search]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HEADER ================= */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              🌐 REST API Explorer
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Explore Data
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Browse posts fetched from a REST API, search through
              the data, and save your favorite posts.
            </p>

          </div>

        </div>
      </section>


      {/* ================= SEARCH ================= */}
      <section className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            {/* Search Box */}
            <div className="relative w-full md:max-w-xl">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-500">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

            </div>


            {/* Result Count */}
            {!loading && !error && (
              <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm text-slate-400">
                Showing{" "}
                <span className="font-bold text-white">
                  {filteredPosts.length}
                </span>{" "}
                posts
              </div>
            )}

          </div>

        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* LOADING */}
        {loading && (
          <div className="flex min-h-[400px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

              <p className="mt-5 text-slate-400">
                Loading posts...
              </p>

            </div>

          </div>
        )}


        {/* ERROR */}
        {!loading && error && (
          <div className="mx-auto max-w-xl rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">

            <div className="text-4xl">
              ⚠️
            </div>

            <h2 className="mt-4 text-xl font-bold text-red-300">
              Something went wrong
            </h2>

            <p className="mt-3 text-slate-400">
              {error}
            </p>

            <button
              onClick={fetchPosts}
              className="mt-6 rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-400"
            >
              Try Again
            </button>

          </div>
        )}


        {/* EMPTY SEARCH RESULT */}
        {!loading &&
          !error &&
          filteredPosts.length === 0 && (
            <div className="flex min-h-[350px] items-center justify-center">

              <div className="max-w-md text-center">

                <div className="text-5xl">
                  🔎
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  No posts found
                </h2>

                <p className="mt-3 text-slate-400">
                  Try searching with a different keyword.
                </p>

                <button
                  onClick={() => setSearch("")}
                  className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold transition hover:bg-blue-500"
                >
                  Clear Search
                </button>

              </div>

            </div>
          )}


        {/* ================= POSTS GRID ================= */}
        {!loading &&
          !error &&
          filteredPosts.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredPosts.map((post) => {

                const bookmarked = isBookmarked(post.id);

                return (
                  <article
                    key={post.id}
                    className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-950/30"
                  >

                    {/* Card Top */}
                    <div className="flex items-center justify-between">

                      <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                        Post #{post.id}
                      </span>

                      {/* Bookmark Button */}
                      <button
                        onClick={() => toggleBookmark(post)}
                        aria-label={
                          bookmarked
                            ? "Remove bookmark"
                            : "Add bookmark"
                        }
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xl transition ${
                          bookmarked
                            ? "border-pink-500/30 bg-pink-500/10 text-pink-400"
                            : "border-slate-700 bg-slate-800 text-slate-400 hover:border-pink-500/30 hover:text-pink-400"
                        }`}
                      >
                        {bookmarked ? "♥" : "♡"}
                      </button>

                    </div>


                    {/* Title */}
                    <h2 className="mt-6 line-clamp-2 text-xl font-bold capitalize leading-7 text-white transition group-hover:text-blue-400">
                      {post.title}
                    </h2>


                    {/* Description */}
                    <p className="mt-4 line-clamp-4 flex-1 text-sm leading-7 text-slate-400">
                      {post.body}
                    </p>


                    {/* Bottom */}
                    <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-5">

                      <span className="text-xs text-slate-500">
                        User {post.userId}
                      </span>

                      <Link
                        to={`/details/${post.id}`}
                        className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-600"
                      >
                        View Details →
                      </Link>

                    </div>

                  </article>
                );
              })}

            </div>
          )}

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-8">

        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          WebPulse REST API Explorer
        </div>

      </footer>

    </main>
  );
}

export default Explore;