import { useNavigate } from "react-router-dom";
import { useCart } from "../../cart/CartContext";

function Navbar() {
  const navigate = useNavigate();

  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="flex h-[64px] items-center gap-4 bg-[#131921] px-4 text-white">

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
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
          <option>Books</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="flex-1 px-4 text-sm text-black outline-none"
        />

        <button
          className="w-[55px] bg-[#febd69] text-xl text-black hover:bg-[#f3a847]"
        >
          🔍
        </button>

      </div>

      {/* ACCOUNT */}
      <div
        onClick={() => navigate("/account")}
        className="cursor-pointer whitespace-nowrap px-2 py-1 hover:border hover:border-white"
      >
        <p className="text-xs">
          Hello, {user?.name || "Sign in"}
        </p>

        <p className="text-sm font-bold">
          Account & Lists
        </p>
      </div>

      {/* ORDERS */}
      <div
        onClick={() => navigate("/orders")}
        className="cursor-pointer whitespace-nowrap px-2 py-1 hover:border hover:border-white"
      >
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
        className="relative flex cursor-pointer items-end gap-1 px-2 py-1 hover:border hover:border-white"
      >
        <span className="text-3xl">
          🛒
        </span>

        <span className="text-sm font-bold">
          Cart
        </span>

        {cartCount > 0 && (
          <span className="absolute left-[18px] top-[-5px] flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f08804] px-1 text-xs font-bold">
            {cartCount}
          </span>
        )}
      </div>

    </div>
  );
}

export default Navbar;