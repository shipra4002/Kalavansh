import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import products from "../data/products";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const product = products.find((p) => p.id === id);

  const handleAction = () => {
    if (!user) navigate("/auth");
    else navigate("/request");
  };

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="bg-beige">

      {/* 🌄 HERO */}
      <div className="h-screen relative overflow-hidden">
        <img
          src={product.image}
          className="w-full h-full object-cover scale-105 animate-[zoomIn_8s_ease-in-out_infinite]"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute bottom-16 left-10 text-white max-w-xl fade-in">
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

      {/* ✍️ STORY */}
      <div className="section">
        <div className="container-custom max-w-3xl text-center fade-in">
          <p className="text-xl leading-relaxed text-gray-700">
            {product.description}
          </p>
        </div>
      </div>

      {/* 🎬 PROCESS FLOW */}
      {product.images?.map((img, i) => (
        <div key={i} className="section">
          <div
            className={`container-custom grid md:grid-cols-2 gap-16 items-center ${
              i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <img
              src={img}
              className="rounded-2xl shadow-lg hover:scale-105 transition duration-500 fade-in"
            />

            {/* TEXT */}
            <div className="fade-in">
              <h2 className="text-3xl font-heading text-navy">
                {i === 0 && "Where it begins"}
                {i === 1 && "Craft in progress"}
                {i === 2 && "Attention to detail"}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                This stage reflects the dedication, patience, and artistry involved in creating each piece.
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* 👤 ARTISAN */}
      <div className="section bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">

          <img
            src={product.artisanImage}
            className="rounded-2xl shadow-md hover:scale-105 transition duration-500 fade-in"
          />

          <div className="fade-in">
            <h2 className="text-4xl font-heading text-navy">
              Meet the Artisan
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              {product.artisanStory}
            </p>
          </div>

        </div>
      </div>

      {/* 🔴 CTA */}
      <div className="section text-center fade-in">

        <h2 className="text-4xl font-heading text-navy">
          Experience this craft
        </h2>

        <p className="mt-3 text-gray-600">
          Go beyond the product. Connect with the story.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button onClick={handleAction} className="btn-primary">
            Book Experience
          </button>

          <button onClick={handleAction} className="btn-secondary">
            Request Custom Order
          </button>
        </div>

      </div>

    </div>
  );
};

export default Product;