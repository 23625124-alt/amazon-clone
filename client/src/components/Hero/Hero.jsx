import { useState, useEffect } from "react";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";

function Hero() {
  const banners = [hero1, hero2, hero3];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#e3e6e6",
      }}
    >
      <img
        src={banners[currentBanner]}
        alt="Amazon Banner"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Left button */}
      <button
        onClick={() =>
          setCurrentBanner(
            (currentBanner - 1 + banners.length) % banners.length
          )
        }
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "30px",
          background: "white",
          border: "none",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        ❮
      </button>

      {/* Right button */}
      <button
        onClick={() =>
          setCurrentBanner((currentBanner + 1) % banners.length)
        }
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "30px",
          background: "white",
          border: "none",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        ❯
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentBanner(index)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                currentBanner === index ? "#232f3e" : "white",
              border: "1px solid #232f3e",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;