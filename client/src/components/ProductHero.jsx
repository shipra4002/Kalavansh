import { useEffect, useState } from "react";
import logo from "../assets/images/logo1.png";

const ProductHero = ({ product }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="h-screen relative overflow-hidden">

      {product.images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col justify-end px-10 pb-16 text-white">

        <div className="absolute top-6 left-6 flex items-center gap-2">
          <img src={logo} className="h-10" />
          <span className="font-heading text-xl">KalaVansh</span>
        </div>

        <p className="text-sm opacity-80">
          You scanned a handcrafted product
        </p>

        <h1 className="text-5xl md:text-6xl font-heading mt-2">
          {product.name}
        </h1>

        <p className="mt-2 text-gray-200">
          {product.location}
        </p>
        
      </div>

    </div>
  );
};

export default ProductHero;