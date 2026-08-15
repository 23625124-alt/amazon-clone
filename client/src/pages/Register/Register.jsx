import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      alert("Account created successfully!");

      navigate("/login");
    } catch (error) {
      console.error("Register Error:", error);
      setError("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[600px] items-center justify-center bg-[#eaeded]">
      <div className="w-[350px] bg-white p-7 shadow-md">

        <h1 className="mb-6 text-3xl font-semibold">
          Create account
        </h1>

        {error && (
          <div className="mb-4 rounded border border-red-300 bg-red-100 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>

          <label className="font-semibold">
            Your name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 mt-2 w-full border p-3"
          />

          <label className="font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 mt-2 w-full border p-3"
          />

          <label className="font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5 mt-2 w-full border p-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-yellow-400 py-2 font-semibold hover:bg-yellow-500 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

        </form>

        <p className="mt-5 text-sm">
          Already have an account?
        </p>

        <Link
          to="/login"
          className="mt-2 block text-blue-600"
        >
          Sign in
        </Link>

      </div>
    </div>
  );
}

export default Register;