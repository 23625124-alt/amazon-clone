import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MenuBar from "./components/MenuBar/MenuBar";
import Hero from "./components/Hero/Hero";

import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* PROTECTED AMAZON APPLICATION */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>

              <div className="min-h-screen bg-[#eaeded]">

                <Navbar />

                <MenuBar />

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

                  {/* ACCOUNT */}
                  <Route
                    path="/account"
                    element={<Account />}
                  />

                  {/* PRODUCT DETAILS */}
                  <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                  />

                  {/* CART */}
                  <Route
                    path="/cart"
                    element={<Cart />}
                  />

                  {/* ORDERS - temporary */}
                  <Route
                    path="/orders"
                    element={
                      <div className="min-h-[600px] bg-[#eaeded] p-10">
                        <h1 className="text-3xl font-bold">
                          Your Orders
                        </h1>

                        <p className="mt-4 text-gray-600">
                          Your orders will appear here.
                        </p>
                      </div>
                    }
                  />

                  {/* UNKNOWN PAGE */}
                  <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                  />

                </Routes>

              </div>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;