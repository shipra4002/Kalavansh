import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectPath = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      // LOGIN
      localStorage.setItem("user", JSON.stringify(existingUser));
    } else {
      // SIGNUP
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(newUser));
    }

    navigate(redirectPath);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige pt-20 md:pt-24 px-4 md:px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-heading text-navy text-center">
          Continue to KalaVansh
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2">
          Login or create an account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full btn-primary py-3 md:py-2 px-6">
            Continue
          </button>

        </form>
      </div>
    </div>
  );
};

export default Auth;