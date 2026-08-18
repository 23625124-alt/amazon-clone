import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-[650px] bg-[#eaeded] px-4 py-8 md:px-10">

      <div className="mx-auto max-w-6xl">

        {/* PAGE TITLE */}
        <h1 className="mb-8 text-3xl font-normal text-gray-900">
          Your Account
        </h1>

        {/* USER INFORMATION */}
        <div className="mb-6 rounded border border-gray-300 bg-white p-6">

          <h2 className="mb-5 text-xl font-medium">
            Account Information
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded border border-gray-300 p-5">
              <p className="mb-2 text-sm font-bold">
                Name
              </p>

              <p className="text-gray-700">
                {user.name}
              </p>
            </div>

            <div className="rounded border border-gray-300 p-5">
              <p className="mb-2 text-sm font-bold">
                Email
              </p>

              <p className="text-gray-700">
                {user.email}
              </p>
            </div>

          </div>

        </div>

        {/* ACCOUNT OPTIONS */}
        <div className="grid gap-5 md:grid-cols-3">

          <div
            onClick={() => navigate("/orders")}
            className="cursor-pointer rounded border border-gray-300 bg-white p-6 transition hover:shadow-md"
          >
            <h2 className="mb-2 text-lg font-medium">
              Your Orders
            </h2>

            <p className="text-sm text-gray-600">
              Track or manage your orders
            </p>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="cursor-pointer rounded border border-gray-300 bg-white p-6 transition hover:shadow-md"
          >
            <h2 className="mb-2 text-lg font-medium">
              Your Cart
            </h2>

            <p className="text-sm text-gray-600">
              View and manage items in your cart
            </p>
          </div>

          <div
            className="cursor-pointer rounded border border-gray-300 bg-white p-6 transition hover:shadow-md"
          >
            <h2 className="mb-2 text-lg font-medium">
              Login & Security
            </h2>

            <p className="text-sm text-gray-600">
              Manage your login information
            </p>
          </div>

        </div>

        {/* LOGOUT */}
        <div className="mt-8 rounded border border-gray-300 bg-white p-6">

          <button
            onClick={handleLogout}
            className="rounded border border-[#a88734] bg-[#ffd814] px-8 py-2 text-sm font-medium hover:bg-[#f7ca00]"
          >
            Sign out
          </button>

        </div>

      </div>

    </div>
  );
}

export default Account;