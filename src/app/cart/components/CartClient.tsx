'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';

export default function CartClient() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const DELIVERY_FEE = subtotal >= 25 ? 0 : 3.99;
  const PROMO_DISCOUNT = promoApplied ? subtotal * 0.1 : 0;
  const TOTAL = subtotal - PROMO_DISCOUNT + DELIVERY_FEE;

  const handlePromo = () => {
    if (promoCode?.trim()?.toUpperCase() === 'SNACK10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try SNACK10 for 10% off.');
      setPromoApplied(false);
    }
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckIcon" size={36} className="text-green-600" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-3">
          Order placed!
        </h1>
        <p className="text-muted-foreground text-base mb-8 max-w-sm mx-auto">
          Your snacks are being packed and will arrive today before 8 PM. Check your email for tracking details.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <button className="btn-primary px-8 py-3.5">Back to Home</button>
          </Link>
          <Link href="/products">
            <button className="btn-outline px-8 py-3.5">Keep Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  if (items?.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
          <Icon name="ShoppingBagIcon" size={36} className="text-muted-foreground" />
        </div>
        <h1 className="font-display text-3xl font-medium text-foreground mb-3">
          Your cart is empty
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          Looks like you haven&apos;t added any items yet.
        </p>
        <Link href="/products">
          <button className="btn-accent px-8 py-3.5">
            Browse items
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="accent-bar" />
          <span className="section-label text-muted-foreground">Review & Checkout</span>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="font-display text-section-title font-medium text-foreground">
            Your Cart
          </h1>
          <span className="text-sm text-muted-foreground">
            {items?.length} item{items?.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
        {/* Cart items */}
        <div className="space-y-3">
          {items?.map((item, index) => (
            <div
              key={item?.id}
              className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex gap-4 items-start cart-item-enter"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-secondary shrink-0">
                <AppImage
                  src={item?.image}
                  alt={`${item?.name} snack product image`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                  {item?.category}
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug line-clamp-2 mb-3">
                  {item?.name}
                </h3>

                {/* Quantity + Price row */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  {/* Quantity stepper */}
                  <div className="flex items-center gap-2">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item?.id, item?.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Icon name="MinusIcon" size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-foreground">
                      {item?.quantity}
                    </span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item?.id, item?.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Icon name="PlusIcon" size={14} />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-foreground">
                      ${(item?.price * item?.quantity)?.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeItem(item?.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"
                      aria-label={`Remove ${item?.name} from cart`}
                    >
                      <Icon name="TrashIcon" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Clear cart */}
          <div className="flex justify-end pt-2">
            <button
              onClick={clearCart}
              className="text-xs text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-1.5 py-2"
            >
              <Icon name="TrashIcon" size={14} />
              Clear all items
            </button>
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-card border border-border rounded-2xl p-6 sticky top-20">
          <h2 className="font-display text-xl font-medium text-foreground mb-6">
            Order Summary
          </h2>

          {/* Line items */}
          <div className="space-y-3 mb-5">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal ({items?.reduce((s, i) => s + i?.quantity, 0)} items)</span>
              <span className="font-medium text-foreground">${subtotal?.toFixed(2)}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-sm">
                <span className="text-green-600 font-medium">Promo (SNACK10)</span>
                <span className="text-green-600 font-medium">-${PROMO_DISCOUNT?.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className={`font-medium ${DELIVERY_FEE === 0 ? 'text-green-600' : 'text-foreground'}`}>
                {DELIVERY_FEE === 0 ? 'Free' : `$${DELIVERY_FEE?.toFixed(2)}`}
              </span>
            </div>
            {DELIVERY_FEE > 0 && (
              <p className="text-[11px] text-muted-foreground bg-secondary rounded-lg px-3 py-2">
                Add ${(25 - subtotal)?.toFixed(2)} more for free delivery
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-4" />

          {/* Total */}
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-foreground">Total</span>
            <span className="font-display text-2xl font-bold text-foreground">${TOTAL?.toFixed(2)}</span>
          </div>

          {/* Promo code */}
          <div className="mb-5">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
              Promo Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={e => { setPromoCode(e?.target?.value); setPromoError(''); }}
                placeholder="e.g. SNACK10"
                disabled={promoApplied}
                className="flex-1 bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handlePromo}
                disabled={promoApplied || !promoCode?.trim()}
                className="px-4 py-2.5 bg-secondary border border-border rounded-xl text-sm font-semibold text-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {promoApplied ? '✓' : 'Apply'}
              </button>
            </div>
            {promoError && <p className="text-xs text-red-500 mt-1.5">{promoError}</p>}
            {promoApplied && <p className="text-xs text-green-600 mt-1.5">10% discount applied!</p>}
          </div>

          {/* Place order CTA */}
          <button
            onClick={handlePlaceOrder}
            className="btn-accent w-full justify-center text-base py-4"
          >
            <Icon name="ShoppingBagIcon" size={18} />
            Place Order · ${TOTAL?.toFixed(2)}
          </button>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <Icon name="LockClosedIcon" size={14} className="text-muted-foreground" />
            <p className="text-xs text-muted-foreground text-center">
              SSL-secured · Apple Pay · Google Pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}