import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Cake, Phone, User, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CustomCakeEngine: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guestCount: 30,
    cakeType: 'Wedding Anniversary',
    tiers: '2',
    flavor: 'Royal Blue Vanilla Velvet',
    eggless: true,
    preferredContact: 'WhatsApp',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, guestCount: parseInt(e.target.value, 10) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.date) newErrors.date = 'Please select your event date';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setFormSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#60a5fa', '#93c5fd', '#ffffff']
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  };

  return (
    <section id="consultation" className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/50 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Elite Custom Designer Studio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 tracking-tight">
            Design Your Custom <span className="text-blue-600">Elite Celebration Cake</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Planning a wedding, milestone birthday, or grand anniversary in Chennai? Input your tier choices and guest count below for a consultation.
          </p>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Value Propositions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-blue-800 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs uppercase tracking-widest text-blue-300 font-bold block">
                Bakkings Elite Standard
              </span>

              <h3 className="font-serif text-2xl font-bold text-white leading-snug">
                Crafted by Master Confectioners
              </h3>

              <ul className="space-y-4 text-sm text-blue-100 font-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>100% Premium Food Grade Elements:</strong> Imported Belgian chocolates, French cream & edible sugar lace.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Eggless Formulation Experts:</strong> Fluffy moist sponge texture guaranteed for eggless preferences.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Refrigerated Transport Delivery:</strong> Safe temperature-controlled van delivery across Chennai.</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Personalized Design Support:</strong> Consult directly with our head pastry chef.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-100 relative">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-blue-950">
                  Consultation Query Received!
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. The Bakkings Elite Ekkaduthangal design desk will reach out to <strong>{formData.phone}</strong> via {formData.preferredContact} with layout sketches!
                </p>

                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-full transition-colors"
                >
                  Submit Another Design Query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-blue-950">Event Specification Form</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Consultation
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. Ananya Sundaram"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 focus:ring-blue-500'
                        }`}
                      />
                    </div>
                    {errors.name && <span className="text-[11px] text-rose-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 focus:ring-blue-500'
                        }`}
                      />
                    </div>
                    {errors.phone && <span className="text-[11px] text-rose-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Event Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 ${
                          errors.date ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 focus:ring-blue-500'
                        }`}
                      />
                    </div>
                    {errors.date && <span className="text-[11px] text-rose-500 mt-1 block">{errors.date}</span>}
                  </div>

                  {/* Cake Type */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Occasion Category
                    </label>
                    <div className="relative">
                      <Cake className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <select
                        value={formData.cakeType}
                        onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Wedding Anniversary">Wedding Anniversary</option>
                        <option value="Grand Marriage Ceremony">Grand Marriage Ceremony</option>
                        <option value="Corporate Milestones">Corporate Milestones</option>
                        <option value="Baby Shower / Engagement">Baby Shower / Engagement</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Guest Count Slider */}
                <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-950">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-600" /> Expected Guest Count:
                    </span>
                    <span className="text-sm font-extrabold text-blue-600 bg-white px-3 py-1 rounded-lg border border-blue-200">
                      {formData.guestCount} Guests
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="5"
                    value={formData.guestCount}
                    onChange={handleSliderChange}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                    <span>10 Guests</span>
                    <span>150 Guests</span>
                    <span>300+ Guests</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Tiers dropdown */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Number of Tiers
                    </label>
                    <select
                      value={formData.tiers}
                      onChange={(e) => setFormData({ ...formData, tiers: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1">1 Tier (Single Layer)</option>
                      <option value="2">2 Tiers (Grand Celebration)</option>
                      <option value="3">3 Tiers (Luxury Royal)</option>
                      <option value="4">4 Tiers (Imperial Wedding)</option>
                    </select>
                  </div>

                  {/* Flavor Selection */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                      Signature Flavor
                    </label>
                    <select
                      value={formData.flavor}
                      onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Royal Blue Vanilla Velvet">Royal Blue Vanilla Velvet</option>
                      <option value="Fresh Blueberry Chantilly">Fresh Blueberry Chantilly</option>
                      <option value="Belgian Dark Chocolate Truffle">Belgian Dark Chocolate Truffle</option>
                      <option value="Iranian Pista Buttercream">Iranian Pista Buttercream</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Mode */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    How should our head chef contact you?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['WhatsApp', 'Phone Call'].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredContact: mode })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all ${
                          formData.preferredContact === mode
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                        }`}
                      >
                        {mode === 'WhatsApp' && <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />}
                        {mode === 'Phone Call' && <Phone className="w-3.5 h-3.5 text-blue-400" />}
                        <span>{mode}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Design Concept Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

