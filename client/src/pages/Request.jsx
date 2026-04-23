import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Request = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("visit");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center px-6 pt-20 md:pt-24 md:px-6">

      <div className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-lg">

        {/* 🌿 LOGO */}
        <div className="text-center mb-6">
          <img src={logo} className="h-12 mx-auto mb-2" alt="logo" />
          <p className="text-sm text-gray-500">
            A Kalavansh Experience
          </p>
        </div>

        {/* 🧭 HEADING */}
        <h2 className="text-3xl font-heading text-navy text-center">
          Book Your Experience
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Connect directly with the artisan and be part of the craft.
        </p>

        {/* ✅ SUCCESS STATE */}
        {submitted ? (
          <div className="text-center mt-12 fade-in">

            <h3 className="text-2xl font-heading text-primary">
              Request Submitted 🌿
            </h3>

            <p className="text-gray-600 mt-3">
              The artisan will connect with you soon.
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Redirecting to home...
            </p>

          </div>
        ) : (
          <>
            {/* 🎯 EXPERIENCE TYPE */}
            <div className="mt-8 flex justify-center gap-4">

              <button
                onClick={() => setType("visit")}
                className={`px-4 py-2 rounded-full border transition ${
                  type === "visit"
                    ? "bg-primary text-white"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                Visit
              </button>

              <button
                onClick={() => setType("workshop")}
                className={`px-4 py-2 rounded-full border transition ${
                  type === "workshop"
                    ? "bg-primary text-white"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                Workshop
              </button>

              <button
                onClick={() => setType("custom")}
                className={`px-4 py-2 rounded-full border transition ${
                  type === "custom"
                    ? "bg-primary text-white"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                Custom Order
              </button>

            </div>

            {/* 📝 FORM */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="date"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
              />

              <textarea
                placeholder="Tell us what you're looking for..."
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              {/* 🚀 CTA */}
              <button className="w-full btn-primary mt-4">
                Submit Request
              </button>

            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default Request;