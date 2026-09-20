import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">

      <div className="w-full max-w-2xl text-center">

        {/* 404 */}
        <div className="relative">

          <h1 className="text-[120px] font-black leading-none tracking-tight text-slate-800 sm:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-blue-400 backdrop-blur">
              Page Not Found
            </span>
          </div>

        </div>


        {/* Content */}
        <h2 className="mt-8 text-3xl font-black sm:text-4xl">
          Looks like you're lost.
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to WebPulse.
        </p>


        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="rounded-xl bg-blue-600 px-7 py-4 font-bold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            ← Back to Home
          </Link>

          <Link
            to="/explore"
            className="rounded-xl border border-slate-700 bg-white/5 px-7 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white/10"
          >
            Explore Data →
          </Link>

        </div>

      </div>

    </main>
  );
}

export default NotFound;