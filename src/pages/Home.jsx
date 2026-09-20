import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950"></div>

        {/* Decorative Glow */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-4xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              🚀 Modern React REST API Portal
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Explore Data.
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Discover Insights.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              WebPulse is a modern Single Page Application built with
              React.js, REST APIs, routing and global state management.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/explore"
                className="rounded-xl bg-blue-600 px-7 py-4 text-center font-bold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore Data →
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-slate-700 bg-white/5 px-7 py-4 text-center font-bold backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white/10"
              >
                Learn More
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ================= STATS SECTION ================= */}
      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {/* Stat 1 */}
          <div className="border-b border-r border-slate-800 p-8 text-center md:border-b-0">
            <h2 className="text-3xl font-black text-blue-400">
              100+
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              API Posts
            </p>
          </div>

          {/* Stat 2 */}
          <div className="border-b border-slate-800 p-8 text-center md:border-b-0 md:border-r">
            <h2 className="text-3xl font-black text-indigo-400">
              5
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Pages
            </p>
          </div>

          {/* Stat 3 */}
          <div className="border-r border-slate-800 p-8 text-center">
            <h2 className="text-3xl font-black text-cyan-400">
              REST
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              API
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-8 text-center">
            <h2 className="text-3xl font-black text-purple-400">
              React
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Frontend
            </p>
          </div>

        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        {/* Section Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-400">
            Features
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A complete demonstration of modern React development concepts.
          </p>

        </div>


        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-900">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
              🌐
            </div>

            <h3 className="text-xl font-bold">
              REST API Integration
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Fetch real-time data from external REST APIs using Axios
              and React Hooks.
            </p>

          </div>


          {/* Card 2 */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-slate-900">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-3xl">
              🔎
            </div>

            <h3 className="text-xl font-bold">
              Search & Discover
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Quickly find information using responsive search and
              filtering functionality.
            </p>

          </div>


          {/* Card 3 */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50 hover:bg-slate-900">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/10 text-3xl">
              ❤️
            </div>

            <h3 className="text-xl font-bold">
              Global Bookmarks
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Save and manage posts using React Context API global
              state management.
            </p>

          </div>

        </div>
      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 px-8 py-16 text-center shadow-2xl sm:px-16">

          <div className="mx-auto max-w-2xl">

            <div className="mb-5 text-4xl">
              ⚡
            </div>

            <h2 className="text-3xl font-black sm:text-4xl">
              Ready to Explore?
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Browse the latest data available through the WebPulse
              REST API.
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
          © {new Date().getFullYear()} WebPulse. Built with React.js.
        </div>

      </footer>

    </main>
  );
}

export default Home;