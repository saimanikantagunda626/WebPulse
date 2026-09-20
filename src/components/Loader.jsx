function Loader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-950 text-white">
      <div className="text-center">

        {/* Spinner */}
        <div className="relative mx-auto h-16 w-16">

          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-500 border-r-indigo-500"></div>

        </div>

        {/* Logo */}
        <h2 className="mt-7 text-2xl font-black">
          Web<span className="text-blue-400">Pulse</span>
        </h2>

        {/* Message */}
        <p className="mt-2 text-sm text-slate-500">
          Loading content...
        </p>

      </div>
    </div>
  );
}

export default Loader;