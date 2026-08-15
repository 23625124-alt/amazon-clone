import { useCart } from "../../cart/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-[600px] bg-[#eaeded] p-8">
      
      <h1 className="mb-6 text-3xl font-bold">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white p-8">
          <h2 className="text-xl">
            Your Amazon Clone Cart is empty.
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Cart Products */}
          <div className="lg:col-span-2">

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="mb-4 flex gap-6 bg-white p-6"
              >

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-40 object-contain"
                />

                {/* Product Details */}
                <div className="flex-1">

                  <h2 className="text-xl font-semibold">
                    {item.name}
                  </h2>

                  <p className="mt-2">
                    ⭐ {item.rating}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">
                    ₹{item.price}
                  </h3>

                  {/* Quantity */}
                  <div className="mt-4 flex items-center gap-3">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity === 1}
                      className="rounded border px-3 py-1"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.quantity + 1
                        )
                      }
                      className="rounded border px-3 py-1"
                    >
                      +
                    </button>

                  </div>

                  {/* Delete */}
                  <button
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                    className="mt-4 text-sm text-[#007185]"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="h-fit bg-white p-6">

            <h2 className="text-xl font-bold">
              Cart Summary
            </h2>

            <hr className="my-4" />

            <p>
              Total Items:{" "}
              <strong>{totalItems}</strong>
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Total: ₹{getCartTotal()}
            </h2>

            <button className="mt-6 w-full rounded-full bg-yellow-400 px-6 py-3 font-semibold">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;