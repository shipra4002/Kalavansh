import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${item.id}`)}
      className="cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300"
    >
      <img
        src={item.image}
        className="h-64 w-full object-cover hover:scale-105 transition duration-300"
      />

      <div className="p-5">
        <h3 className="font-heading text-lg text-navy">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500">
          {item.location}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;