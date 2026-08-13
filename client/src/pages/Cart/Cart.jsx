function Cart() {
  return (
    <div className="min-h-[600px] bg-[#eaeded] p-8">

      <h1 className="mb-6 text-3xl font-bold">
        Shopping Cart
      </h1>

      <div className="bg-white p-8">
        <h2 className="text-xl">
          Your Amazon Clone Cart is empty.
        </h2>

        <button className="mt-5 rounded bg-yellow-400 px-6 py-3 font-semibold">
          Continue Shopping
        </button>
      </div>

    </div>
  );
}

export default Cart;