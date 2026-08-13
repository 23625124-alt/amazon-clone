import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-[600px] items-center justify-center bg-[#eaeded]">
      <div className="w-[350px] bg-white p-7 shadow-md">

        <h1 className="mb-6 text-3xl font-semibold">
          Create account
        </h1>

        <label className="font-semibold">
          Your name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="mb-4 mt-2 w-full border p-3"
        />

        <label className="font-semibold">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 mt-2 w-full border p-3"
        />

        <label className="font-semibold">
          Password
        </label>

        <input
          type="password"
          placeholder="At least 6 characters"
          className="mb-5 mt-2 w-full border p-3"
        />

        <button className="w-full rounded bg-yellow-400 py-2 font-semibold hover:bg-yellow-500">
          Create account
        </button>

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