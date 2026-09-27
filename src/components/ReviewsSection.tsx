import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquarePlus, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Community Trust Architecture</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 tracking-tight">
            Loved by the <span className="text-blue-600">Chennai Community</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light">
            Verified customer testimonials from Google Reviews and local dessert connoisseurs across Chennai.
          </p>

          {/* Rating Summary Bar */}
          <div className="pt-2 flex items-center justify-center gap-4 text-slate-800 font-semibold text-sm">
            <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-900">4.9 / 5.0</span>
            </div>
            <span>Based on <strong>450+ Verified Google Reviews</strong></span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-gradient-to-br from-blue-50/40 via-white to-slate-50 p-6 sm:p-8 rounded-3xl border border-blue-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-blue-200/60 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed font-light">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-blue-100 flex items-center gap-4">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-600 shadow"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif font-bold text-blue-950 text-base">{rev.author}</h4>
                    {rev.verified && (
                      <span title="Verified Customer">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{rev.location} • {rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Leave Review */}
        <div className="text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-blue-900 font-bold text-xs sm:text-sm hover:bg-blue-100 transition-colors border border-blue-200"
          >
            <MessageSquarePlus className="w-4 h-4 text-blue-600" />
            <span>Have you ordered from Bakkings Elite? Leave a Google Review</span>
          </a>
        </div>

      </div>
    </section>
  );
};
