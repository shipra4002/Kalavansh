import products from "../data/products";
import ProductCard from "./ProductCard";

const FeaturedStories = () => {
  return (
    <div className="section bg-beige text-center">

      <h2 className="text-4xl text-navy font-heading">
        Featured KalaKathas
      </h2>

      <div className="mt-14 grid md:grid-cols-3 gap-10 container-custom">

        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}

      </div>

    </div>
  );
};

export default FeaturedStories;