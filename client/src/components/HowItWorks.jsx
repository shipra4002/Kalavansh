import React from "react";
import scan from "../assets/images/story/scan.jpg";
import discover from "../assets/images/story/discover.jpg";
import experience from "../assets/images/story/experience.jpg";

const steps = [
  {
    title: "Scan",
    highlight: "Scan",
    image: scan,
    description:
      "Scan the QR code on any handcrafted product to begin its journey.",
  },
  {
    title: "Discover",
    highlight: "Discover",
    image: discover,
    description:
      "Uncover the story, process, and artisan behind the creation.",
  },
  {
    title: "Experience",
    highlight: "Experience",
    image: experience,
    description:
      "Book immersive visits, workshops, or request custom creations.",
  },
];

const HowItWorks = () => {
  return (
    <div className="section bg-white text-center">

      <h2 className="text-4xl md:text-5xl text-navy font-heading fade-in">
        How Kalavansh{" "}
        <span className="handwriting text-primary text-5xl md:text-6xl">
          Works
        </span>
      </h2>

      <div className="mt-16 grid md:grid-cols-3 gap-12 container-custom">

        {steps.map((step, i) => (
          <div
            key={i}
            className="space-y-5 fade-in group cursor-pointer"
          >
            
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={step.image}
                className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="mt-3 font-heading text-navy">
              <span className="handwriting text-primary text-4xl md:text-4xl font-semibold tracking-wide">
                {step.highlight}
              </span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default HowItWorks;