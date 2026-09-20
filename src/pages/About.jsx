import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950"></div>

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              ⚡ About WebPulse
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              A Modern
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                React REST API Portal
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              WebPulse is a Single Page Application designed to demonstrate
              modern React development concepts including REST API integration,
              routing, global state management, search, bookmarks and
              responsive UI design.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/explore"
                className="rounded-xl bg-blue-600 px-7 py-4 text-center font-bold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore API →
              </Link>

              <Link
                to="/bookmarks"
                className="rounded-xl border border-slate-700 bg-white/5 px-7 py-4 text-center font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white/10"
              >
                View Bookmarks
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Built for Modern Web Development
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              WebPulse provides an interactive interface for consuming and
              exploring REST API data. Users can search posts, view individual
              details and save interesting posts as bookmarks.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              The application uses React components, React Hooks, React Router,
              Context API and Axios to create a responsive Single Page
              Application.
            </p>

          </div>


          {/* Project Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm text-slate-500">
                  Frontend
                </p>

                <p className="mt-2 text-xl font-black text-blue-400">
                  React.js
                </p>
              </div>


              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm text-slate-500">
                  Styling
                </p>

                <p className="mt-2 text-xl font-black text-cyan-400">
                  Tailwind
                </p>
              </div>


              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm text-slate-500">
                  API Client
                </p>

                <p className="mt-2 text-xl font-black text-indigo-400">
                  Axios
                </p>
              </div>


              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm text-slate-500">
                  Routing
                </p>

                <p className="mt-2 text-xl font-black text-purple-400">
                  React Router
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-14 text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Technology Stack
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Technologies Used
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              The project combines modern frontend technologies to create a
              fast and responsive web application.
            </p>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* React */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
                ⚛️
              </div>

              <h3 className="mt-6 text-xl font-bold">
                React.js
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Used to build reusable components and create the Single Page
                Application.
              </p>

            </div>


            {/* Tailwind */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/50">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-3xl">
                🎨
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Tailwind CSS
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Provides responsive layouts, modern components and utility
                based styling.
              </p>

            </div>


            {/* Axios */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/50">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-3xl">
                🌐
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Axios
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Handles HTTP requests and retrieves data from the REST API.
              </p>

            </div>


            {/* Router */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-3xl">
                🧭
              </div>

              <h3 className="mt-6 text-xl font-bold">
                React Router
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Provides navigation between pages without reloading the
                application.
              </p>

            </div>


            {/* Context */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/10 text-3xl">
                🔗
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Context API
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Manages bookmark state globally across different pages.
              </p>

            </div>


            {/* LocalStorage */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-green-500/50">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-3xl">
                💾
              </div>

              <h3 className="mt-6 text-xl font-bold">
                LocalStorage
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Keeps bookmarked posts available even after refreshing the
                browser.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
            What WebPulse Demonstrates
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Core React Concepts
          </h2>

        </div>


        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="text-3xl">
              🧩
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Component Architecture
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              The application is divided into reusable components and
              independent pages for better organization and maintainability.
            </p>

          </div>


          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="text-3xl">
              🔄
            </div>

            <h3 className="mt-5 text-xl font-bold">
              API & Async Operations
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              API requests are handled asynchronously with loading and error
              states for a better user experience.
            </p>

          </div>


          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="text-3xl">
              🛣️
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Client-Side Routing
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              React Router provides navigation between Home, Explore,
              Details, Bookmarks and About pages.
            </p>

          </div>


          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="text-3xl">
              ❤️
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Global State
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Bookmark information is shared between pages using React
              Context API.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 px-8 py-16 text-center shadow-2xl sm:px-16">

          <div className="mx-auto max-w-2xl">

            <div className="text-4xl">
              🚀
            </div>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Explore WebPulse
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Start exploring REST API data and experience the features of
              this React application.
            </p>

            <Link
              to="/explore"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-blue-100"
            >
              Start Exploring →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 py-8">

        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
          WebPulse • React REST API Portal
        </div>

      </footer>

    </main>
  );
}

export default About;