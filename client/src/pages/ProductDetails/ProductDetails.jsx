import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading product...</h2>;
  }

  if (error) {
    return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  }

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div
      style={{
        backgroundColor: "#e3e6e6",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          backgroundColor: "white",
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
        }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "contain",
            }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>

          <p>⭐ {product.rating}</p>

          <hr />

          <h2>₹{product.price}</h2>

          <p>{product.description}</p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <button
            style={{
              backgroundColor: "#ffd814",
              border: "none",
              padding: "15px 40px",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;