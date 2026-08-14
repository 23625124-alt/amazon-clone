import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductCard from "../../components/ProductCard/ProductCard";
import categories from "../../utils/categories";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  // FETCH PRODUCTS
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Product fetch error:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // LISTEN TO SEARCH FROM NAVBAR
  useEffect(() => {
    const handleSearch = (event) => {
      setSearchTerm(event.detail);
      setSelectedCategory("All");
    };

    window.addEventListener("productSearch", handleSearch);

    return () => {
      window.removeEventListener("productSearch", handleSearch);
    };
  }, []);

  // FILTER PRODUCTS
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      search === "" ||
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading products...
      </h2>
    );
  }

  if (error) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        {error}
      </h2>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#e3e6e6",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* CATEGORY BUTTONS */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "25px",
        }}
      >
        <button
          onClick={() => {
            setSelectedCategory("All");
            setSearchTerm("");
          }}
          style={{
            padding: "10px 18px",
            borderRadius: "20px",
            border: "none",
            backgroundColor:
              selectedCategory === "All"
                ? "#ff9900"
                : "#ffffff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setSearchTerm("");
            }}
            style={{
              padding: "10px 18px",
              borderRadius: "20px",
              border: "none",
              backgroundColor:
                selectedCategory === category
                  ? "#ff9900"
                  : "#ffffff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* SEARCH RESULT */}

      {searchTerm && (
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Search results for "{searchTerm}"
        </h2>
      )}

      {/* TITLE */}

      {!searchTerm && (
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Our Products
        </h1>
      )}

      {/* PRODUCTS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <h2
            style={{
              textAlign: "center",
              gridColumn: "1 / -1",
            }}
          >
            No products found
          </h2>
        )}
      </div>
    </div>
  );
}

export default Home;