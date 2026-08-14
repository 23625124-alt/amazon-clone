import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    window.dispatchEvent(
      new CustomEvent("productSearch", {
        detail: search,
      })
    );
  };

  return (
    <>
      {/* TOP NAVBAR */}

      <div
        style={{
          height: "70px",
          backgroundColor: "#131921",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "0 25px",
          gap: "25px",
        }}
      >
        {/* AMAZON LOGO */}

        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            minWidth: "100px",
          }}
        >
          amazon
        </div>

        {/* SEARCH */}

        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            flex: 1,
            maxWidth: "700px",
            height: "40px",
          }}
        >
          <input
            type="text"
            placeholder="Search Amazon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: "0 15px",
              fontSize: "16px",
              border: "none",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "50px",
              border: "none",
              backgroundColor: "#febd69",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            <FaSearch />
          </button>
        </form>

        {/* SIGN IN */}

        <div
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Hello, sign in
        </div>

        {/* ORDERS */}

        <div
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Returns & Orders
        </div>

        {/* CART */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <FaShoppingCart size={22} />
          <span>Cart</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;