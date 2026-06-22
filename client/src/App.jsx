import { BrowserRouter as Router } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <SpeedInsights />
    </Router>
  );
}

export default App;