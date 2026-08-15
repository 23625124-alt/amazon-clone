import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Enter your email and password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* AMAZON STYLE TOP */}
      <div className="flex justify-center pt-8 pb-6">
        <div
          onClick={() => navigate("/login")}
          className="cursor-pointer text-4xl font-bold tracking-tight"
        >
          amazon
        </div>
      </div>

      {/* LOGIN BOX */}
      <div className="mx-auto w-[350px] rounded border border-gray-300 bg-white px-7 py-6">

        <h1 className="mb-5 text-[28px] font-normal">
          Sign in
        </h1>

        {error && (
          <div className="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <label className="mb-2 block text-sm font-bold">
            Email or mobile phone number
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5 h-10 w-full rounded border border-gray-500 px-3 text-sm outline-none focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600]"
            autoComplete="email"
          />

          {/* PASSWORD */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold">
              Password
            </label>

            <span className="cursor-pointer text-sm text-blue-600 hover:underline">
              Forgot your password?
            </span>
          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 mb-5 h-10 w-full rounded border border-gray-500 px-3 text-sm outline-none focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600]"
            autoComplete="current-password"
          />

          {/* SIGN IN */}
          <button
            type="submit"
            disabled={loading}
            className="h-10 w-full rounded border border-[#a88734] bg-[#ffd814] text-sm font-medium hover:bg-[#f7ca00] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </form>

        <p className="mt-5 text-xs leading-5 text-gray-700">
          By continuing, you agree to Amazon Clone's
          <span className="ml-1 text-blue-600 hover:underline">
            Conditions of Use
          </span>{" "}
          and
          <span className="ml-1 text-blue-600 hover:underline">
            Privacy Notice
          </span>.
        </p>

      </div>

      {/* NEW ACCOUNT */}
      <div className="mx-auto mt-7 w-[350px]">

        <div className="mb-3 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="px-3 text-xs text-gray-500">
            New to Amazon Clone?
          </span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <Link
          to="/register"
          className="flex h-10 w-full items-center justify-center rounded border border-gray-400 bg-gray-50 text-sm font-medium hover:bg-gray-100"
        >
          Create your Amazon Clone account
        </Link>

      </div>

      {/* FOOTER */}
      <div className="mt-16 border-t border-gray-300 bg-gray-50 py-8 text-center">

        <div className="flex justify-center gap-6 text-xs text-blue-600">
          <span className="cursor-pointer hover:underline">
            Conditions of Use
          </span>

          <span className="cursor-pointer hover:underline">
            Privacy Notice
          </span>

          <span className="cursor-pointer hover:underline">
            Help
          </span>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          © 2026 Amazon Clone
        </p>

      </div>

    </div>
  );
}

export default Login;