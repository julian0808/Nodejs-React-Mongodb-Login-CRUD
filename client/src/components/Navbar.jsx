import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-800 my-4 mx-auto max-w-7xl flex flex-wrap justify-between items-center py-4 px-6 sm:px-10 rounded-xl shadow-lg">
      <Link to={
        isAuthenticated ? "/tasks" : "/"
      }
        className="text-3xl font-extrabold text-white tracking-wide hover:text-indigo-400 transition duration-200"
      >
        📝 TasksManager
      </Link>

      <ul className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 sm:mt-0 text-white">
        {isAuthenticated ? (
          <>
            <li className="bg-zinc-700 px-4 py-1.5 rounded-full text-sm text-gray-300 shadow-inner">
              <span className="text-indigo-400 font-bold">@{user.username}</span>
            </li>
            <li>
              <Link
                to="/add-task"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md font-semibold transition duration-200"
              >
                + Add Task
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="text-red-400 hover:text-red-500 font-medium transition duration-200"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md font-medium transition duration-200"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md font-medium transition duration-200"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
