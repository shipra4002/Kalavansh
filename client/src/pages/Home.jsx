import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import HowItWorks from "../components/HowItWorks";
import FeaturedStories from "../components/FeaturedStories";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="bg-[#F5F1EB]">
      <Navbar />
      <Hero />
      <StorySection />
      <HowItWorks />
      <FeaturedStories />
      <CTA />
    </div>
  );
};

export default Home;