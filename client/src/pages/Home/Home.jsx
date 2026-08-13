import categories from "../../utils/categories";
import products from "../../utils/products";

import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "#eaeded",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      {/* CATEGORIES */}

      <section style={{ padding: "30px" }}>
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "25px",
          }}
        >
          Shop by Category
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </section>

      {/* PRODUCTS */}

      <section style={{ padding: "30px" }}>
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "25px",
          }}
        >
          Popular Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;