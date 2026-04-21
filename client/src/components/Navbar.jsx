import logo from "../assets/images/logo1.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-5 absolute top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} className="h-12 w-auto" />
        <span className="text-white text-xl font-heading tracking-wide">
          KalaVansh
        </span>
      </div>

      {/* Links */}
      <div className="space-x-8 hidden md:flex text-white font-body">
        <a className="hover:text-gold transition">Explore</a>
        <a className="hover:text-gold transition">Stories</a>
        <a className="hover:text-gold transition">About</a>
      </div>

      {/* Button */}
      <button className="border border-white text-white px-5 py-1 rounded-full transition-all duration-300 hover:bg-white hover:text-navy">
        Login
      </button>

    </div>
  );
};

export default Navbar;