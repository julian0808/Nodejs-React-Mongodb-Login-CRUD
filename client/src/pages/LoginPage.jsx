import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";


function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated  } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signin(data);
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated])

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-800 rounded-2xl shadow-lg p-8">
        {/* Display auth errors */}
        {signinErrors.length > 0 && (
          <div className="space-y-2 mb-4">
            {signinErrors.map((error, i) => (
              <div
                className="bg-red-500 text-white text-sm px-4 py-2 rounded-md text-center my-2"
                key={i}
              >
                {error}
              </div>
            ))}
          </div>
        )}

        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-white mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-white mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
          >
            Login
          </button>
        </form>
          <br />
        <p className="flx gap-x-2 justify-between">
          Don't have an account? <Link to="/register" className="text-sky-500 hover:underline">Sign up</Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
