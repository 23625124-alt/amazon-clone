import "./MenuBar.css";
import { FaBars } from "react-icons/fa";

function MenuBar() {
  return (
    <div className="menuBar">

      <div className="menuItem">
        <FaBars />
        <span>All</span>
      </div>

      <div className="menuItem">Fresh</div>

      <div className="menuItem">MX Player</div>

      <div className="menuItem">Sell</div>

      <div className="menuItem">Best Sellers</div>

      <div className="menuItem">Mobiles</div>

      <div className="menuItem">Today's Deals</div>

      <div className="menuItem">Prime</div>

      <div className="menuItem">Customer Service</div>

      <div className="menuItem">Fashion</div>

    </div>
  );
}

export default MenuBar;