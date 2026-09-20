import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function Details() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { toggleBookmark, isBookmarked } = useBookmarks();

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setPost(response.data);
    } catch (err) {
      setError("Unable to load this post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">

          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>

          <p className="mt-5 text-slate-400">
            Loading post...
          </p>

        </div>
      </main>
    );
  }

  /* ================= ERROR ================= */
  if (error || !post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">

        <div className="w-full max-w-xl rounded-3xl border border-red-500/20 bg-red-500/10 p-10 text-center">

          <div className="text-5xl">
            ⚠️
          </div>

          <h1 className="mt-5 text-2xl font-bold">
            Post Not Found
          </h1>

          <p className="mt-3 text-slate-400">
            {error || "The requested post could not be found."}
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <button
              onClick={fetchPost}
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold transition hover:bg-blue-500"
            >
              Try Again
            </button>

            <Link
              to="/explore"
              className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-bold transition hover:border-blue-500"
            >
              Back to Explore
            </Link>

          </div>

        </div>

      </main>
    );
  }

  const bookmarked = isBookmarked(post.id);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HEADER ================= */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            to="/explore"
            className="inline-flex items-center rounded-lg border border-slate-700 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            ← Back to Explore
          </Link>

          <div className="mt-10 max-w-4xl">

            <div className="mb-5 flex flex-wrap items-center gap-3">

              <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                Post #{post.id}
              </span>

              <span className="rounded-lg bg-indigo-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400">
                User {post.userId}
              </span>

            </div>

            <h1 className="text-4xl font-black capitalize leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

          </div>

        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-5xl px-6 py-14">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl shadow-black/20 sm:p-10">

          {/* Content Header */}
          <div className="flex flex-col gap-5 border-b border-slate-800 pb-7 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-slate-500">
                POST INFORMATION
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Published through the WebPulse REST API
              </p>
            </div>

            {/* Bookmark Button */}
            <button
              onClick={() => toggleBookmark(post)}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition ${
                bookmarked
                  ? "border border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20"
                  : "border border-slate-700 bg-slate-800 text-slate-300 hover:border-pink-500/30 hover:text-pink-400"
              }`}
            >
              <span className="text-xl">
                {bookmarked ? "♥" : "♡"}
              </span>

              {bookmarked
                ? "Remove Bookmark"
                : "Add Bookmark"}
            </button>

          </div>


          {/* Post Body */}
          <div className="py-10">

            <p className="text-lg leading-9 text-slate-300">
              {post.body}
            </p>

          </div>


          {/* Post Metadata */}
          <div className="grid gap-4 border-t border-slate-800 pt-7 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Post ID
              </p>

              <p className="mt-2 text-2xl font-black text-blue-400">
                #{post.id}
              </p>
            </div>


            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                User ID
              </p>

              <p className="mt-2 text-2xl font-black text-indigo-400">
                #{post.userId}
              </p>
            </div>

          </div>

        </div>


        {/* ================= ACTIONS ================= */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <Link
            to="/explore"
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 text-center font-bold transition hover:border-blue-500 hover:bg-slate-800"
          >
            ← Back to Explore
          </Link>

          <Link
            to="/bookmarks"
            className="flex-1 rounded-xl bg-blue-600 px-6 py-4 text-center font-bold transition hover:bg-blue-500"
          >
            View Bookmarks →
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-8">

        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          WebPulse REST API Portal
        </div>

      </footer>

    </main>
  );
}

export default Details;