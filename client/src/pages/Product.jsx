import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductHero from "../components/ProductHero";
import logo from "../assets/images/logo1.png";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  // 🔐 Protected CTA handler
  const handleProtectedAction = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/auth", { state: { from: `/product/${product.id}` } });
    } else {
      navigate("/request");
    }
  };

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="bg-beige min-h-screen pt-20 md:pt-24 px-4 md:px-6">

      {/* HERO */}
      <ProductHero product={product} />

      {/* ABOUT (LEFT IMAGE RIGHT TEXT) */}
      <div className="section">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">

          <img
            src={product.mainImage}
            className="w-full rounded-2xl shadow-lg"
            alt={product.name}
          />

          <div>
            <h2 className="text-3xl font-heading text-navy">
              About the Craft
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

        </div>
      </div>

      {/* VIDEO */}
      {product.video && (
        <div className="section bg-white">
          <div className="container-custom text-center">

            <h2 className="text-3xl font-heading text-navy mb-6">
              Watch the Craft Come Alive
            </h2>

            <video
              src={product.video}
              controls
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
            />

          </div>
        </div>
      )}

      {/* ARTISAN */}
      <div className="section text-center">

        <img
          src={product.artisanImage}
          className="w-72 h-72 object-cover rounded-full mx-auto shadow-lg"
          alt="Artisan"
        />

        <h2 className="text-3xl font-heading text-navy mt-6">
          Meet the Artisan
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {product.artisanStory}
        </p>

        {/* QUOTE */}
        {product.quote && (
        <div className="mt-12 text-center fade-in">

          <p className="text-lg md:text-2xl italic text-primary font-heading">
            “{product.quote}”
          </p>

          {/* ✅ SUBQUOTE (ONLY IF EXISTS) */}
          {product.subQuote && (
            <p className="text-lg md:text-2xl italic text-primary font-heading">
               “{product.subQuote}”
            </p>
          )}

        </div>
)}

      </div>

      {/* CTA (PROTECTED) */}
      <div className="section text-center bg-primary text-white">

        <div className="mb-6">
          <img
            src={logo}
            className="h-12 mx-auto mb-2"
            alt="KalaVansh Logo"
          />
          <p className="text-sm text-gold">
            A Kalavansh Experience
          </p>
        </div>

        <h2 className="text-4xl font-heading">
          Experience this craft
        </h2>

        <p className="mt-3 text-gray-200">
          Go beyond the product. Connect with the story.
        </p>

        <div className="mt-8 flex gap-4 justify-center">

          <button
            onClick={handleProtectedAction}
            className="bg-white text-primary py-3 rounded-full hover:bg-gray-100 transition md:py-2 px-6"
          >
            Book Experience
          </button>

          <button
            onClick={handleProtectedAction}
            className="border border-white py-3 rounded-full hover:bg-white hover:text-primary transition md:py-2 px-6"
          >
            Request Custom Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;