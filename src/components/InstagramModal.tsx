import React, { useState, useEffect } from 'react';
import { X, Check, Send, Sparkles, ExternalLink } from 'lucide-react';

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export const InstagramModal: React.FC<InstagramModalProps> = ({
  isOpen,
  onClose,
  initialMessage = '',
}) => {
  const [messageText, setMessageText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setMessageText(initialMessage);
    } else {
      setMessageText(
        "Hi @bakkingselite! I want to place an order for custom bakes in Ekkaduthangal, Chennai. Please send menu details & availability for today!"
      );
    }
  }, [initialMessage, isOpen]);

  if (!isOpen) return null;

  const handleCopyAndLaunch = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    // Open Instagram app or web profile
    window.open('https://instagram.com', '_blank');
  };

  const templates = [
    {
      label: '🎂 Custom Cake Query',
      text: 'Hi @bakkingselite! I want a custom 2-tier blue and white cake for an upcoming birthday event in Chennai. Please share theme options & price quotes.'
    },
    {
      label: '🫐 Blueberry Gateau',
      text: 'Hi @bakkingselite! Is the 500g Sapphire Blueberry Chantilly Cake available for pickup/delivery today at Ekkaduthangal?'
    },
    {
      label: '📦 Macaron Party Box',
      text: 'Hi @bakkingselite! I would like to order a 12 Pcs Royal Blue & White Macaron Tower for a party box.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-blue-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full p-0.5 bg-white shadow-md shrink-0">
              <img
                src="/images/hero.png"
                alt="Bakkings Elite Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold">@bakkingselite</h3>
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Official DM
                </span>
              </div>
              <p className="text-xs text-pink-100">Direct Instagram Order Dispatch • Chennai</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Select Quick Order Template:
            </label>
            <div className="flex flex-wrap gap-2">
              {templates.map((tpl, i) => (
                <button
                  key={i}
                  onClick={() => setMessageText(tpl.text)}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 border border-slate-200 text-xs font-semibold transition-colors"
                >
                  {tpl.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
              Your Pre-Formatted Instagram DM Message:
            </label>
            <textarea
              rows={4}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="w-full p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="p-3 bg-pink-50 rounded-xl border border-pink-100 flex items-center gap-2 text-xs text-purple-900 font-medium">
            <Sparkles className="w-4 h-4 text-pink-600 shrink-0" />
            <span>
              Clicking below will copy your message text and launch Instagram DM to @bakkingselite instantly!
            </span>
          </div>

          {/* Action Button */}
          <button
            onClick={handleCopyAndLaunch}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>Message Copied! Opening Instagram...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Copy DM Message & Launch Instagram</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
