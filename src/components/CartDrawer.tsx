import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Send } from 'lucide-react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenInstagramModalWithOrder: (cartDetailsText: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenInstagramModalWithOrder,
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const buildCartSummaryText = () => {
    const lines = cartItems.map(
      (item) =>
        `• ${item.quantity}x ${item.product.name} (${item.selectedWeight || 'Standard'}) - ₹${
          item.product.price * item.quantity
        }`
    );
    return `Hi @bakkingselite! I want to order:\n${lines.join('\n')}\nTotal: ₹${totalAmount}`;
  };

  const handleInstaCheckout = () => {
    const text = buildCartSummaryText();
    onOpenInstagramModalWithOrder(text);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-blue-100">
          
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-blue-900 to-blue-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-300" />
              <h3 className="font-serif text-lg font-bold">Your Order Cart</h3>
              <span className="bg-blue-800 text-blue-200 text-xs px-2.5 py-0.5 rounded-full font-bold">
                {cartItems.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-blue-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-4 text-slate-400">
                <ShoppingBag className="w-16 h-16 mx-auto stroke-1 text-slate-300" />
                <p className="text-sm font-medium text-slate-600">Your cart is currently empty.</p>
                <button
                  onClick={onClose}
                  className="text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
                >
                  Explore Patisserie Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedWeight}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex gap-4 items-center justify-between"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-xl border border-slate-200"
                  />

                  <div className="flex-1 space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-blue-950 line-clamp-1">
                      {item.product.name}
                    </h4>
                    {item.selectedWeight && (
                      <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md inline-block">
                        {item.selectedWeight}
                      </span>
                    )}
                    <div className="text-xs font-extrabold text-blue-700">
                      ₹{item.product.price * item.quantity}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 text-slate-600 hover:bg-slate-100"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-bold text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 text-slate-600 hover:bg-slate-100"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-400 hover:text-rose-500 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Checkout Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
              <div className="flex items-center justify-between text-base font-bold text-blue-950">
                <span>Subtotal Estimate:</span>
                <span className="font-serif text-2xl text-blue-600">₹{totalAmount.toLocaleString()}</span>
              </div>

              {/* Instagram Order Direct Button */}
              <button
                onClick={handleInstaCheckout}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm shadow-md hover:shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Checkout via Instagram DM (@bakkingselite)</span>
              </button>

              <a
                href="https://swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow"
              >
                <span>Order via Swiggy Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
