function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-400 mb-6">
          Welcome to Task Manager
        </h1>
        <p className="text-zinc-300 text-lg mb-8">
          Manage your tasks efficiently and stay organized. Register or log in to get started!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-md font-medium transition-colors"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-md text-md font-medium border border-zinc-600 transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
