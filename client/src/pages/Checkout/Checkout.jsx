function Checkout() {
  return (
    <div className="min-h-[600px] bg-[#eaeded] p-8">

      <h1 className="mb-6 text-3xl font-bold">
        Checkout
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="bg-white p-6">

          <h2 className="mb-5 text-xl font-bold">
            Delivery Address
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="mb-3 w-full border p-3"
          />

          <input
            type="text"
            placeholder="Address"
            className="mb-3 w-full border p-3"
          />

          <input
            type="text"
            placeholder="City"
            className="mb-3 w-full border p-3"
          />

          <input
            type="text"
            placeholder="Pincode"
            className="w-full border p-3"
          />

        </div>

        <div className="bg-white p-6">

          <h2 className="mb-5 text-xl font-bold">
            Order Summary
          </h2>

          <p className="mb-3">
            Items: ₹0
          </p>

          <p className="mb-5 text-xl font-bold">
            Total: ₹0
          </p>

          <button className="w-full rounded bg-yellow-400 py-3 font-semibold">
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;