function Navbar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#131921",
          color: "white",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h2>amazon</h2>

        <input
          type="text"
          placeholder="Search Amazon"
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
          }}
        />

        <span>Hello, sign in</span>
        <span>Returns & Orders</span>
        <span>🛒 Cart</span>
      </nav>

      <div
        style={{
          backgroundColor: "#232f3e",
          color: "white",
          padding: "12px",
        }}
      >
        ☰ All &nbsp;&nbsp; Today's Deals &nbsp;&nbsp; Customer Service
        &nbsp;&nbsp; Gift Cards &nbsp;&nbsp; Sell
      </div>
    </>
  );
}

export default Navbar;