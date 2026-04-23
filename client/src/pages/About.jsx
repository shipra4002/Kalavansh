import logo from "../assets/images/logo1.png";

// YOUR IMAGES
import heroBg from "../assets/images/about/heading.png";
import borderPattern from "../assets/images/about/border.jpg";
import artisanCollage from "../assets/images/about/artisansIndia.png";

// HOW IT WORKS IMAGES
import scanImg from "../assets/images/story/scan.jpg";
import experienceImg from "../assets/images/story/experience.jpg";
import supportImg from "../assets/images/about/support.jpg";

const About = () => {
  return (
    <div className="bg-beige text-navy min-h-screen pt-20 md:pt-24">

      {/* 🌿 HERO */}
      <div className="h-[70vh] md:h-[80vh] relative flex items-center justify-center text-center px-4 md:px-6">

        <img
          src={heroBg}
          className="absolute w-full h-full object-cover"
        />

        <div className="relative z-10 text-white max-w-4xl">

          <img src={logo} className="h-10 md:h-12 mb-6 mx-auto" />

          <h1 className="text-3xl md:text-6xl font-heading leading-tight">
            Preserving stories, not just products
          </h1>

          <p className="mt-4 text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            Kalavansh connects people with the people behind handmade creations —
            the stories that often go unseen.
          </p>

        </div>
      </div>

      {/* ⚠️ WHAT’S HAPPENING */}
      <div className="section relative">

        {/* BORDER (HIDDEN ON MOBILE) */}
        <div
          className="hidden md:block absolute left-0 top-0 h-full w-[200px]"
          style={{
            backgroundImage: `url(${borderPattern})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat-y",
          }}
        />

        {/* CONTENT */}
        <div className="container-custom md:pl-[220px] px-4 md:px-0 max-w-3xl">

          <h2 className="text-2xl md:text-3xl font-heading">
            What’s happening today
          </h2>

          <p className="mt-4 md:mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
            Across India, traditional crafts are slowly fading away.
            Artisans spend years mastering their skills, yet struggle
            to find recognition and sustainable income.
          </p>

        </div>
      </div>

      {/* 🌱 WHAT WE’RE TRYING TO CHANGE */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-start justify-center pt-16 px-4">

        <img
          src={artisanCollage}
          className="absolute w-full h-full object-cover"
        />

        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="relative z-10 text-navy max-w-2xl text-center md:text-left">

          <h2 className="text-2xl md:text-4xl font-heading">
            What we’re trying to change
          </h2>

          <p className="mt-4 md:mt-6 text-gray-700 leading-relaxed text-sm md:text-base">
            Kalavansh brings these stories forward. Instead of just selling
            products, we create experiences — where people connect with artisans
            and become part of the craft.
          </p>

        </div>
      </div>

      {/* 🔄 HOW IT WORKS */}
      <div className="section text-center px-4">

        <h2 className="text-2xl md:text-3xl font-heading">
          How it works
        </h2>

        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-10 container-custom">

          {/* SCAN */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
              src={scanImg}
              className="h-40 md:h-48 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-heading">Scan</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Discover the story behind a handcrafted product.
              </p>
            </div>

          </div>

          {/* EXPERIENCE */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
              src={experienceImg}
              className="h-40 md:h-48 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-heading">Experience</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Connect with the artisan and explore the craft.
              </p>
            </div>

          </div>

          {/* SUPPORT */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

            <img
              src={supportImg}
              className="h-40 md:h-48 w-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-heading">Support</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Help sustain traditions by engaging directly.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* 💬 CLOSING */}
      <div className="section text-center max-w-2xl mx-auto px-4">

        <p className="text-lg md:text-xl italic text-primary font-heading">
          “Every craft carries a story. We’re here to make sure it’s heard.”
        </p>

      </div>

    </div>
  );
};

export default About;