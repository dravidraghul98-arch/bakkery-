import React, { useState } from 'react';
import type { CategoryType } from '../types';
import { MENU_ITEMS } from '../data/mockData';
import { Heart, Search, Star, Sparkles } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [egglessOnly, setEgglessOnly] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [selectedWeights, setSelectedWeights] = useState<{ [key: string]: string }>({});

  const categories: { id: CategoryType; name: string }[] = [
    { id: 'all', name: 'All Bakes' },
    { id: 'bread', name: 'Bread' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'specialty', name: 'Specialty Cakes' },
    { id: 'pastry', name: 'Pastry' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'savory', name: 'Savory' },
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
    const matchesEggless = !egglessOnly || item.isEggless;
    return matchesCategory && matchesSearch && matchesEggless;
  });

  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Patisserie Collection</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 tracking-tight">
            Explore Our <span className="text-blue-600">Patisserie Menu</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light">
            Custom celebration cakes, fresh artisan sourdough paninis, French macarons & slow-baked cookies in Ekkaduthangal.
          </p>
        </div>

        {/* Category Filter Bar & Search Controls */}
        <div className="mb-10 space-y-6">
          {/* Top Control Bar: Search & Diet Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search cakes, paninis, cookies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-blue-100 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
              />
            </div>

            {/* Eggless Filter Toggle */}
            <label className="flex items-center gap-2.5 cursor-pointer bg-white px-4 py-2.5 rounded-xl border border-blue-100 shadow-xs hover:border-emerald-300 transition-colors">
              <input
                type="checkbox"
                checked={egglessOnly}
                onChange={(e) => setEgglessOnly(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
              />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-slate-700">100% Eggless Only</span>
            </label>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 border border-slate-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - Price & Online Order Buttons Removed */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-blue-50/50 rounded-3xl border border-blue-100">
            <p className="text-slate-500 text-base">No bakery items found matching your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setEgglessOnly(false);
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

                    {/* Dietary Tag */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold shadow-xs flex items-center gap-1.5 border border-slate-100">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isEggless ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      />
                      <span className={item.isEggless ? 'text-emerald-800' : 'text-rose-800'}>
                        {item.isEggless ? 'Eggless' : 'Contains Egg'}
                      </span>
                    </div>

                    {/* Bestseller Badge */}
                    {item.isBestseller && (
                      <div className="absolute top-3 left-28 bg-blue-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs">
                        ★ Popular
                      </div>
                    )}

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
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
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Rating & Category */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span className="uppercase tracking-wider font-bold text-[10px] text-blue-600">
                          {item.category}
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

                    {/* Weight Options Selector if available */}
                    {item.weightOptions && (
                      <div className="pt-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Portion Options:
                        </label>
                        <select
                          value={selectedWeights[item.id] || item.weightOptions[0]}
                          onChange={(e) =>
                            setSelectedWeights({ ...selectedWeights, [item.id]: e.target.value })
                          }
                          className="w-full text-xs font-semibold bg-blue-50/60 border border-blue-100 rounded-lg px-2.5 py-1.5 text-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                        >
                          {item.weightOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
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

