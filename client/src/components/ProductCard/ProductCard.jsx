function ProductCard({ product }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "180px",
          height: "180px",
          objectFit: "contain",
        }}
      />

      <h3
        style={{
          fontSize: "17px",
          margin: "15px 0",
        }}
      >
        {product.name}
      </h3>

      <p style={{ margin: "8px 0" }}>
        ⭐⭐⭐⭐⭐
      </p>

      <p
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          margin: "10px",
        }}
      >
        ₹{product.price.toLocaleString("en-IN")}
      </p>

      <button
        style={{
          backgroundColor: "#ffd814",
          border: "1px solid #fcd200",
          padding: "10px 25px",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;