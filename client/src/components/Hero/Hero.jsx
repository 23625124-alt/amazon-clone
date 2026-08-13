import { useEffect, useState } from "react";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";

function Hero() {
  const images = [hero1, hero2, hero3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src={images[current]}
          alt="Amazon Banner"
          className="h-full w-full object-cover"
        />

        <button
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white px-4 py-8 text-3xl"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrent((current + 1) % images.length)}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white px-4 py-8 text-3xl"
        >
          ›
        </button>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-orange-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;