import React, { useState } from 'react';
import type { CategoryType } from '../types';
import { MENU_ITEMS } from '../data/mockData';
import { Heart, Search, Star, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categories: { id: CategoryType; name: string }[] = [
    { id: 'all', name: 'All Cakes' },
    { id: 'fresh-cream', name: 'Fresh Cream' },
    { id: 'choco-treats', name: 'Choco Treats' },
    { id: 'fresh-cream-premium', name: 'Fresh Cream Premium' },
    { id: 'mousse', name: 'Mousse' },
    { id: 'special-gateaux', name: 'Special Gateaux' },
    { id: 'fusion-special', name: 'Fusion Special' },
    { id: 'cheesecake', name: 'Cheesecake' },
    { id: 'special-flavours', name: 'Special Flavours' },
  ];

  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50/50 via-white to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Exclusive Patisserie Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 tracking-tight">
            Our Custom <span className="text-blue-600">Cake Menu</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Handcrafted celebration cakes, cheesecakes, mousse & special gateaux in Ekkaduthangal, Chennai.
          </p>
        </div>

        {/* Global Notice Banner */}
        <div className="mb-10 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-indigo-50/60 to-emerald-50 border border-blue-200/80 rounded-2xl p-4 sm:p-5 shadow-xs text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
              🎂
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-blue-950 flex items-center gap-2">
                Freshly Baked Daily
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Both <strong>Egg & Eggless</strong> options are available for <strong>ALL flavors!</strong> *(Cheesecakes require 1 day advance order)*.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Both Egg & Eggless Available
            </span>
          </div>
        </div>

        {/* Category Filter Bar & Search Controls */}
        <div className="mb-10 space-y-6">
          {/* Top Control Bar: Search Input */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-blue-100 shadow-xs">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search cake flavors (e.g. Rasamalai, Truffle, Blueberry Cheesecake...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 rounded-xl border border-blue-100 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-900 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-blue-50/50 rounded-3xl border border-blue-100">
            <p className="text-slate-500 text-base">No cake items found matching your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-blue-600 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const isWishlisted = wishlist.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-blue-100 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Image Area */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dietary Indicator */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold shadow-xs flex items-center gap-1.5 border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-emerald-950 font-bold">Egg & Eggless</span>
                    </div>

                    {/* Advance Order Badge (Only for Cheesecake / items requiring advance order) */}
                    {item.requiresAdvanceOrder && (
                      <div className="absolute bottom-3 left-3 bg-amber-500/90 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white" /> Order 1 day in advance
                      </div>
                    )}

                    {/* Bestseller Badge */}
                    {item.isBestseller && (
                      <div className="absolute top-3 right-14 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs">
                        ★ Popular
                      </div>
                    )}

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isWishlisted
                          ? 'bg-rose-50 text-rose-500 shadow-md scale-110'
                          : 'bg-white/80 backdrop-blur-xs text-slate-400 hover:text-rose-500 hover:bg-white shadow-xs'
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Rating & Category */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                        <span className="uppercase tracking-wider font-bold text-[10px] text-blue-600">
                          {item.category.replace('-', ' ')}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{item.rating}</span>
                          <span className="text-slate-400 text-[10px]">({item.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-serif text-lg font-bold text-blue-950 group-hover:text-blue-600 transition-colors leading-snug">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Pricing Grid (½kg & 1kg) */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between bg-blue-50/60 p-2.5 rounded-2xl border border-blue-100">
                        <div className="text-center flex-1 border-r border-blue-200/60 pr-2">
                          <span className="text-[10px] text-slate-500 uppercase font-bold block">½ kg</span>
                          <span className="text-sm font-extrabold text-blue-950">₹{item.priceHalfKg}</span>
                        </div>
                        <div className="text-center flex-1 pl-2">
                          <span className="text-[10px] text-slate-500 uppercase font-bold block">1 kg</span>
                          <span className="text-sm font-extrabold text-blue-600">₹{item.priceOneKg}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
