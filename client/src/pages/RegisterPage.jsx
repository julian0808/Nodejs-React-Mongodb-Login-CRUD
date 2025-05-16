import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors = [] } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (values) => {
    try {
      await signup(values);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="bg-zinc-800 max-w-md w-full mx-auto p-10 rounded-md shadow-md">
        {/* Show registration errors */}
        {registerErrors.length > 0 && (
          <div className="space-y-2 mb-4">
            {registerErrors.map((error, i) => (
              <div
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                key={i}
              >
                {error}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Register
          </button>
        </form>

        <p className="flex justify-between mt-4 text-sm text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
