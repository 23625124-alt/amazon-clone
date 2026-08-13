import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home/Home";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* SHOPPING */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* USER */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;