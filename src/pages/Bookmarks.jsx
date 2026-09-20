import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

function Bookmarks() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const [search, setSearch] = useState("");

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter((post) => {
      const text = `${post.title} ${post.body}`.toLowerCase();

      return text.includes(search.toLowerCase());
    });
  }, [bookmarks, search]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HEADER ================= */}
      <section className="border-b border-slate-800 bg-gradient-to-br from-pink-950 via-slate-950 to-indigo-950">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-300">
              ❤️ Your Saved Posts
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Bookmarks
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Keep your favorite posts in one place and access them
              whenever you need them.
            </p>

          </div>

        </div>
      </section>


      {/* ================= SEARCH & COUNT ================= */}
      <section className="border-b border-slate-800 bg-slate-950/90">
        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            {/* Search */}
            <div className="relative w-full md:max-w-xl">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-500">
                🔎
              </span>

              <input
                type="text"
                placeholder="Search your bookmarks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3.5 pl-12 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
              />

            </div>


            {/* Count */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm text-slate-400">

              Saved{" "}

              <span className="font-bold text-pink-400">
                {bookmarks.length}
              </span>

              {" "}posts

            </div>

          </div>

        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* EMPTY BOOKMARKS */}
        {bookmarks.length === 0 && (
          <div className="flex min-h-[450px] items-center justify-center">

            <div className="max-w-md text-center">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-pink-500/20 bg-pink-500/10 text-5xl">
                ♡
              </div>

              <h2 className="mt-7 text-3xl font-black">
                No Bookmarks Yet
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                You haven't saved any posts yet. Explore the API
                and bookmark posts you want to keep.
              </p>

              <Link
                to="/explore"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore Posts →
              </Link>

            </div>

          </div>
        )}


        {/* NO SEARCH RESULTS */}
        {bookmarks.length > 0 &&
          filteredBookmarks.length === 0 && (
            <div className="flex min-h-[350px] items-center justify-center">

              <div className="max-w-md text-center">

                <div className="text-5xl">
                  🔎
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                  No Matching Bookmarks
                </h2>

                <p className="mt-3 text-slate-400">
                  Try searching with a different keyword.
                </p>

                <button
                  onClick={() => setSearch("")}
                  className="mt-6 rounded-xl bg-pink-600 px-6 py-3 font-bold transition hover:bg-pink-500"
                >
                  Clear Search
                </button>

              </div>

            </div>
          )}


        {/* ================= BOOKMARK GRID ================= */}
        {filteredBookmarks.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredBookmarks.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-pink-950/20"
              >

                {/* Card Top */}
                <div className="flex items-center justify-between">

                  <span className="rounded-lg bg-pink-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-pink-400">
                    Saved #{post.id}
                  </span>

                  <button
                    onClick={() => toggleBookmark(post)}
                    aria-label="Remove bookmark"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-xl text-pink-400 transition hover:bg-pink-500/20"
                  >
                    ♥
                  </button>

                </div>


                {/* Title */}
                <h2 className="mt-6 line-clamp-2 text-xl font-bold capitalize leading-7 text-white transition group-hover:text-pink-400">
                  {post.title}
                </h2>


                {/* Body */}
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
                    className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-pink-600"
                  >
                    View Details →
                  </Link>

                </div>

              </article>
            ))}

          </div>
        )}

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-8">

        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          WebPulse Bookmarks
        </div>

      </footer>

    </main>
  );
}

export default Bookmarks;