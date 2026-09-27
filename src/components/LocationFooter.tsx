import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';

export const LocationFooter: React.FC = () => {
  return (
    <footer id="location" className="bg-slate-950 text-white pt-16 pb-12 border-t border-blue-900/40 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-blue-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                B
              </div>
              <div>
                <span className="font-script text-3xl text-white block -mb-2">Bakkings</span>
                <span className="font-serif text-[10px] tracking-[0.3em] text-blue-400 font-bold uppercase">ELITE</span>
              </div>
            </a>

            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Chennai’s flagship royal blue & pure white bakery studio. Custom tier celebration cakes, moist gateaus, French macarons & artisan sourdough paninis crafted daily in Ekkaduthangal.
            </p>
          </div>

          {/* Column 2: Location & Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-b border-slate-800 pb-2">
              Flagship Store Location
            </h4>

            <div className="space-y-3 text-sm text-slate-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block">Store Address:</strong>
                  <span>15/3, Poonamallee Road, Ekkaduthangal, Chennai, Tamil Nadu 600032</span>
                  <span className="text-xs text-blue-400 block mt-1 font-medium">
                    📍 (Near Ekkaduthangal Metro Corridor)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block">Operational Hours:</strong>
                  <span>Open Daily: 9:00 AM - 10:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <strong className="text-white font-semibold inline mr-2">Contact:</strong>
                  <a href="tel:+919444015168" className="text-blue-300 hover:text-white font-bold underline">
                    +91 94440 15168
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Interactive Geolocation Vector Card */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white border-b border-slate-800 pb-2">
              Navigation & Map
            </h4>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 relative overflow-hidden group">
              <div className="h-32 bg-slate-950 rounded-xl relative overflow-hidden flex items-center justify-center text-center p-4">
                {/* Visual Map Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                <div className="relative z-10 space-y-1">
                  <Navigation className="w-6 h-6 text-blue-400 mx-auto animate-bounce" />
                  <span className="text-xs font-bold text-white block">Ekkaduthangal Flagship</span>
                  <span className="text-[10px] text-slate-400 block">Poonamallee Road Alignment</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=15/3+Poonamallee+Road+Ekkaduthangal+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>
            © {new Date().getFullYear()} Bakkings Elite Chennai. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-slate-300 transition-colors">Menu Catalog</a>
            <a href="#consultation" className="hover:text-slate-300 transition-colors">Custom Cake Inquiry</a>
            <a
              href="https://www.instagram.com/bakkingselite?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram (@bakkingselite)
            </a>
            <a href="#location" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

