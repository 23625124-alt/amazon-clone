import { FaBars } from "react-icons/fa";

function MenuBar() {
  return (
    <div
      style={{
        backgroundColor: "#232f3e",
        color: "white",
        height: "60px",
        display: "flex",
        alignItems: "center",
        padding: "0 25px",
        gap: "30px",
        fontSize: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          cursor: "pointer",
        }}
      >
        <FaBars />
        <span>All</span>
      </div>

      <span style={{ cursor: "pointer" }}>Today's Deals</span>

      <span style={{ cursor: "pointer" }}>Customer Service</span>

      <span style={{ cursor: "pointer" }}>Gift Cards</span>

      <span style={{ cursor: "pointer" }}>Sell</span>
    </div>
  );
}

export default MenuBar;