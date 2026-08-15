import { useNavigate } from "react-router-dom";
import { useCart } from "../../cart/CartContext";

function Navbar() {
  const navigate = useNavigate();

  const { getCartCount } = useCart();

  const cartCount = getCartCount();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <div className="flex h-[64px] items-center gap-5 bg-[#131921] px-4 text-white">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer px-2 text-[30px] font-bold tracking-tight"
        >
          amazon
        </div>

        {/* SEARCH */}
        <div className="flex h-[42px] flex-1 overflow-hidden rounded-md">

          <select className="w-[55px] bg-gray-100 px-2 text-sm text-gray-700 outline-none">
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-1 px-4 text-sm text-black outline-none"
          />

          <button className="w-[55px] bg-[#febd69] text-xl text-black hover:bg-[#f3a847]">
            🔍
          </button>

        </div>

        {/* ACCOUNT */}
        <div className="group relative cursor-pointer whitespace-nowrap px-2">

          <p className="text-xs">
            Hello, {user?.name || "User"}
          </p>

          <p className="text-sm font-bold">
            Account & Lists
          </p>

          {/* DROPDOWN */}
          <div className="absolute right-0 top-[52px] z-50 hidden w-[180px] rounded bg-white p-3 text-black shadow-lg group-hover:block">

            <button
              onClick={() => navigate("/")}
              className="mb-2 w-full rounded p-2 text-left text-sm hover:bg-gray-100"
            >
              Your Account
            </button>

            <button
              onClick={logout}
              className="w-full rounded p-2 text-left text-sm hover:bg-gray-100"
            >
              Sign Out
            </button>

          </div>

        </div>

        {/* ORDERS */}
        <div className="cursor-pointer whitespace-nowrap px-2">
          <p className="text-xs">
            Returns
          </p>

          <p className="text-sm font-bold">
            & Orders
          </p>
        </div>

        {/* CART */}
        <div
          onClick={() => navigate("/cart")}
          className="relative flex cursor-pointer items-end gap-1 px-2"
        >

          <span className="text-3xl">
            🛒
          </span>

          <span className="text-sm font-bold">
            Cart
          </span>

          {cartCount > 0 && (
            <span className="absolute left-[18px] top-[-8px] flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f08804] px-1 text-xs font-bold">
              {cartCount}
            </span>
          )}

        </div>

      </div>
    </>
  );
}

export default Navbar;