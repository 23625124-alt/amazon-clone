function CategoryCard({ category }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        minHeight: "250px",
      }}
    >
      <img
        src={category.image}
        alt={category.name}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          margin: "15px 0",
        }}
      >
        {category.name}
      </h3>

      <button
        style={{
          backgroundColor: "#ffd814",
          border: "1px solid #fcd200",
          padding: "10px 20px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        Shop now
      </button>
    </div>
  );
}

export default CategoryCard;