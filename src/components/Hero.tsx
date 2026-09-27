import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#EBF3FA] py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Banner Container matching reference image framing */}
        <div className="relative w-full overflow-hidden shadow-sm">
          
          {/* Main Showcase Banner Image */}
          <div className="relative w-full h-[320px] sm:h-[460px] md:h-[560px] lg:h-[620px] bg-white">
            <img
              src={getAssetUrl('images/hero.png')}
              alt="Bakkings Elite Luxury Blue and White Bakery Display"
              className="w-full h-full object-cover object-center"
            />



            {/* Bottom-left Pill Button Overlay - Exactly matching reference image */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
              <a
                href="#menu"
                className="inline-block bg-white text-[#1C3659] border border-[#1C3659] hover:bg-slate-50 font-medium px-7 py-3 rounded-full shadow-md text-sm sm:text-base transition-colors"
              >
                Explore Menu
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

