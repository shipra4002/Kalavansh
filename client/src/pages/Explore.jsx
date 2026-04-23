import products from "../data/products";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-beige min-h-screen pt-20 md:pt-24 px-4 md:px-6">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-heading text-navy">
          Explore KalaKathas
        </h1>

        <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base">
          Discover the people, process, and purpose behind every creation.
        </p>

      </div>

      {/* STORIES */}
      <div className="mt-12 md:mt-16 container-custom">

        {/* 🔥 FEATURED STORY */}
        {products[0] && (
          <div
            onClick={() => navigate(`/product/${products[0].id}`)}
            className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden cursor-pointer group"
          >

            <img
              src={products[0].mainImage}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              alt={products[0].name}
            />

            {/* lighter overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white max-w-md">

              <h2 className="text-2xl md:text-4xl font-heading leading-tight">
                {products[0].name}
              </h2>

              <p className="text-gray-200 mt-2 text-sm md:text-base">
                {products[0].location}
              </p>

            </div>

          </div>
        )}

        {/* 🧱 OTHER STORIES */}
        <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-6 md:gap-8">

          {products.slice(1, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
            >

              <img
                src={item.mainImage}
                className="h-48 md:h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                alt={item.name}
              />

              <div className="p-5 md:p-6">

                <h3 className="text-lg md:text-xl font-heading text-navy">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-1 text-sm md:text-base">
                  {item.location}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* ✨ COMING SOON */}
        <p className="text-center text-gray-400 mt-12 md:mt-16 text-sm italic">
          More stories coming soon...
        </p>

      </div>

    </div>
  );
};

export default Explore;