import React from 'react';
import { getAssetUrl } from '../utils/assetUrl';

export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#EBF3FA] py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Banner Container matching reference image framing */}
        <div className="relative w-full overflow-hidden shadow-sm bg-white">
          
          {/* Main Showcase Banner Image preserving exact 814/301 aspect ratio */}
          <div className="relative w-full aspect-[814/301]">
            <img
              src={getAssetUrl('images/hero.png')}
              alt="Bakkings Elite Luxury Blue and White Bakery Display"
              className="w-full h-full object-cover object-center"
            />

            {/* Clickable overlay link over bottom-left 'Explore Menu' button */}
            <a
              href="#menu"
              className="absolute bottom-[6%] left-[2.5%] w-[21%] h-[26%] rounded-full cursor-pointer z-10 transition-transform active:scale-95"
              aria-label="Explore Menu"
              title="Explore Menu"
            >
              <span className="sr-only">Explore Menu</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};


