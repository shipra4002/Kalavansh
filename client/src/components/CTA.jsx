import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/logo.png";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className="section text-center bg-beige">

      {/* Logo */}
      <div className="mb-6">
        <img src={logo1} className="h-12 mx-auto mb-2" />
        <p className="text-sm text-gray-500">
          Make The Invisible, Visible.
        </p>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-heading text-navy">
        Experience Handmade Like Never Before
      </h2>

      <p className="mt-3 text-gray-600 max-w-xl mx-auto">
        Book immersive visits, connect with artisans, or request custom creations.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 justify-center">

        <button
          onClick={() => navigate("/explore")}
          className="btn-primary py-3 md:py-2 px-6"
        >
          Explore KalaKathas
        </button>

        <button
          onClick={() => navigate("/about")}
          className="btn-primary py-3 md:py-2 px-6"
        >
          About
        </button>

      </div>

    </div>
  );
};

export default CTA;