import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-[600px] items-center justify-center bg-[#eaeded]">
      <div className="w-[350px] bg-white p-7 shadow-md">

        <h1 className="mb-6 text-3xl font-semibold">
          Sign in
        </h1>

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
          placeholder="Enter your password"
          className="mb-5 mt-2 w-full border p-3"
        />

        <button className="w-full rounded bg-yellow-400 py-2 font-semibold hover:bg-yellow-500">
          Sign in
        </button>

        <p className="mt-5 text-sm">
          New to Amazon Clone?
        </p>

        <Link
          to="/register"
          className="mt-2 block w-full border py-2 text-center"
        >
          Create your Amazon Clone account
        </Link>

      </div>
    </div>
  );
}

export default Login;