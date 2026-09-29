import React from 'react';
import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/mockData';
import { InstagramIcon } from './InstagramIcon';
import { getAssetUrl } from '../utils/assetUrl';


export const InstagramOrderSection: React.FC = () => {
  return (
    <section id="instagram" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 border border-pink-200 text-purple-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs">
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>Patisserie Gallery</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 tracking-tight">
            Follow Us on <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">Instagram</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Follow <strong className="text-blue-900 font-semibold">@bakkingselite</strong> on Instagram for daily cake designs and behind-the-scenes patisserie videos!
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-blue-100 max-w-3xl mx-auto mb-14 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            {/* Profile Info */}
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-md shrink-0">
                <img
                  src={getAssetUrl('images/hero.png')}
                  alt="Bakkings Elite Instagram Profile"
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />


              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">@bakkingselite</h3>
                <p className="text-xs font-medium text-slate-500">Bakkings Elite Patisserie • Chennai</p>
              </div>
            </div>

            {/* Visit Profile Action */}
            <a
              href="https://www.instagram.com/bakkingselite?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-blue-900 font-semibold text-xs sm:text-sm hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <span>Visit Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Live Instagram Feed Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Post Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Caption Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white space-y-2">
                  <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest">{post.tag}</span>
                  <p className="text-xs line-clamp-3 text-slate-200">{post.caption}</p>
                </div>
              </div>

              {/* Post Footer Metadata */}
              <div className="p-4 flex items-center justify-between text-xs text-slate-600 font-semibold bg-white border-t border-slate-50">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-pink-600">
                    <Heart className="w-4 h-4 fill-pink-600" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-blue-600">
                    <MessageCircle className="w-4 h-4" /> {post.comments}
                  </span>
                </div>
                <span className="text-[11px] text-blue-800 font-bold bg-blue-50 px-2.5 py-1 rounded-full">
                  @bakkingselite
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

