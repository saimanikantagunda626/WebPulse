import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { bookmarks } = useBookmarks();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Bookmarks", path: "/bookmarks" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 text-white shadow-xl shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-black shadow-lg shadow-blue-600/20 transition duration-300 group-hover:scale-105">
              W
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight">
                Web<span className="text-blue-400">Pulse</span>
              </h1>

              <p className="hidden text-[10px] uppercase tracking-widest text-slate-500 sm:block">
                REST API Portal
              </p>
            </div>
          </Link>


          {/* Desktop Links */}
          <div className="hidden items-center gap-2 md:flex">

            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                    active
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Bookmark Count */}
                  {link.path === "/bookmarks" &&
                    bookmarks.length > 0 && (
                      <span className="ml-2 rounded-full bg-pink-500/15 px-2 py-0.5 text-xs font-bold text-pink-400">
                        {bookmarks.length}
                      </span>
                    )}

                  {/* Active Indicator */}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-blue-500" />
                  )}
                </Link>
              );
            })}

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-white/5 text-xl text-slate-300 transition hover:border-blue-500 hover:text-white md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="border-t border-slate-800 py-5 md:hidden">

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => {
                const active = isActive(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-semibold transition ${
                      active
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>

                    {link.path === "/bookmarks" &&
                      bookmarks.length > 0 && (
                        <span className="rounded-full bg-pink-500/15 px-2.5 py-1 text-xs font-bold text-pink-400">
                          {bookmarks.length}
                        </span>
                      )}
                  </Link>
                );
              })}

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;