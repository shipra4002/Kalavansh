import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-full flex justify-between items-center px-6 md:px-8 py-4 fixed top-0 z-50 bg-black/30 backdrop-blur-md">

      {/* 🌿 LOGO → HOME */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} className="h-9 md:h-10 w-auto" alt="KalaVansh Logo" />
        <span className="text-white text-lg md:text-xl font-heading tracking-wide">
          KalaVansh
        </span>
      </div>

      {/* 🔗 NAV LINKS (DESKTOP ONLY) */}
      <div className="hidden md:flex space-x-8 text-white font-body">

        <button
          onClick={() => navigate("/explore")}
          className="hover:text-gold transition"
        >
          KalaKathas
        </button>

        <button
          onClick={() => navigate("/about")}
          className="hover:text-gold transition"
        >
          About
        </button>

      </div>

      {/* 🔐 AUTH BUTTON */}
      {user ? (
        <button
          onClick={handleLogout}
          className="border border-white px-4 md:px-5 py-2 rounded-full text-white hover:bg-white hover:text-primary transition text-sm md:text-base"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/auth")}
          className="border border-white px-4 md:px-5 py-2 rounded-full text-white hover:bg-white hover:text-primary transition text-sm md:text-base"
        >
          Login
        </button>
      )}

    </div>
  );
};

export default Navbar;