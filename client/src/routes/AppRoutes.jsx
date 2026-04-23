import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Product from "../pages/Product";
import About from "../pages/About";
import Request from "../pages/Request";
import Auth from "../pages/Auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/request" element={<Request />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AppRoutes;