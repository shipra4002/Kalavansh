import products from "../data/products";
import ProductCard from "./ProductCard";

const FeaturedStories = () => {
  return (
    <div className="section bg-beige text-center">

      {/* Heading */}
      <h2 className="text-4xl text-navy font-heading fade-in">
        Featured Stories
      </h2>

      <p className="mt-3 text-gray-600 max-w-xl mx-auto fade-in">
        Explore the stories behind handcrafted pieces from across India.
      </p>

      {/* Cards */}
      <div className="mt-14 grid md:grid-cols-3 gap-10 container-custom">

        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}

      </div>

    </div>
  );
};

export default FeaturedStories;