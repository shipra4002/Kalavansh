import React from 'react';
import process from '../assets/images/process.png';
import detail from '../assets/images/detail.jpg';
import artisan from '../assets/images/artisan.jpg';

const StorySection = () => {
  return (
    <div className="section bg-beige">

      <div className="container-custom space-y-32">

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center fade-in">
          
          <img src={process} className="rounded-2xl shadow-md" />

          <div>
            <h2 className="text-4xl md:text-5xl text-navy font-heading leading-snug">
              It starts with{" "}
              <span className="handwriting text-primary text-5xl md:text-6xl">
                Effort
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
              Every product begins with raw materials and countless hours of dedication, 
              shaped patiently by skilled hands.
            </p>
          </div>

        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center fade-in">
          
          <div>
            <h2 className="text-4xl md:text-5xl text-navy font-heading leading-snug">
              Crafted with{" "}
              <span className="handwriting text-primary text-5xl md:text-6xl">
                Precision
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
              Each detail reflects generations of craftsmanship, where every 
              stitch and stroke carries heritage and mastery.
            </p>
          </div>

          <img src={detail} className="rounded-2xl shadow-md" />

        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-16 items-center fade-in">
          
          <img src={artisan} className="rounded-2xl shadow-md" />

          <div>
            <h2 className="text-4xl md:text-5xl text-navy font-heading leading-snug">
              Behind every product, a{" "}
              <span className="handwriting text-primary text-5xl md:text-6xl">
                Person
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
              We bring forward the stories of artisans whose voices often go unheard, 
              connecting you directly to their journey.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StorySection;