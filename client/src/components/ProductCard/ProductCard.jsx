import { useNavigate } from "react-router-dom";
import { useCart } from "../../cart/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const openProduct = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    addToCart(product, 1);

    alert(`${product.name} added to cart!`);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "250px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        cursor: "pointer",
      }}
      onClick={openProduct}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
        }}
      />

      <h3>{product.name}</h3>

      <p>⭐ {product.rating}</p>

      <p>{product.description}</p>

      <h2>₹{product.price}</h2>

      <button
        onClick={handleAddToCart}
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "20px",
          backgroundColor: "#ffd814",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;