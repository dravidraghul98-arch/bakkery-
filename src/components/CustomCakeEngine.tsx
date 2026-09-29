import React from 'react';
import { MessageSquare, Instagram, Phone, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export const CustomCakeEngine: React.FC = () => {
  const whatsappUrl = "https://wa.me/919444015168?text=Hello%20Bakkings%20Elite%2C%20I%20would%20like%20to%20order%20a%20cake!";
  const instagramUrl = "https://www.instagram.com/bakkingselite?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";
  const phoneNumber = "+91 94440 15168";

  return (
    <section id="consultation" className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Direct Cake Orders & Consultation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 tracking-tight">
            Contact Us on <span className="text-emerald-600">WhatsApp</span> or <span className="text-pink-600">Instagram</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Order your favorite fresh cakes or request custom celebration designs directly with Bakkings Elite Ekkaduthangal.
          </p>
        </div>

        {/* Contact Action Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: WhatsApp Direct Order */}
          <div className="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-emerald-800 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-inner">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Fastest Response
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Order via WhatsApp
                </h3>
                <p className="text-emerald-100/80 text-sm font-light leading-relaxed">
                  Send your cake choice, weight preference (½kg or 1kg), egg/eggless option, or custom design photo for instant booking.
                </p>
              </div>

              <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-800/60 space-y-1">
                <span className="text-[11px] text-emerald-400 uppercase font-bold tracking-wider block">
                  Official WhatsApp Number
                </span>
                <span className="text-xl font-extrabold text-white tracking-wide block">
                  {phoneNumber}
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-800/60 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-base shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 text-emerald-500" />
                <span>Chat & Order on WhatsApp</span>
              </a>

              <a
                href={`tel:+919444015168`}
                className="w-full py-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Phone Call ({phoneNumber})</span>
              </a>
            </div>
          </div>

          {/* Card 2: Instagram DM Order */}
          <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950 text-white rounded-3xl p-8 shadow-xl border border-pink-800/60 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-400 shadow-inner">
                  <Instagram className="w-7 h-7" />
                </div>
                <span className="bg-pink-500/20 text-pink-300 border border-pink-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Official Instagram
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Order via Instagram
                </h3>
                <p className="text-pink-100/80 text-sm font-light leading-relaxed">
                  Browse our real cake gallery on Instagram and DM us directly to confirm your order details and delivery time.
                </p>
              </div>

              <div className="bg-pink-950/60 p-4 rounded-2xl border border-pink-800/60 space-y-1">
                <span className="text-[11px] text-pink-400 uppercase font-bold tracking-wider block">
                  Instagram Handle
                </span>
                <span className="text-xl font-extrabold text-white tracking-wide block">
                  @bakkingselite
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-pink-800/60">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-extrabold text-base shadow-lg hover:shadow-pink-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Order on Instagram DM</span>
              </a>
            </div>
          </div>

        </div>

        {/* Global Assurance Footer Strip */}
        <div className="mt-12 max-w-4xl mx-auto bg-white p-5 rounded-2xl border border-blue-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-700">
          <div className="flex items-center gap-2 text-emerald-800 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Both Egg & Eggless Available for ALL Flavors</span>
          </div>

          <div className="flex items-center gap-2 text-blue-900 font-bold">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Store Open Daily: 9:00 AM - 10:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
};
