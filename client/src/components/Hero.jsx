import bgImage from "../assets/images/background.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">

      <img src={bgImage} className="absolute w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl fade-in">

        <h1 className="text-5xl md:text-7xl font-heading leading-tight">
          Every product has a story
        </h1>

        <p className="mt-5 text-lg text-gray-200 font-body">
          Discover the people, process, and passion behind handmade creations.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="btn-primary">Explore Stories</button>
          <button className="btn-secondary border-white text-white hover:bg-white hover:text-navy">
            Scan a Product
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;