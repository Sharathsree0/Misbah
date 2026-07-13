'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <Icon
          key={star}
          name="StarIcon"
          variant={star <= Math.round(rating) ? 'solid' : 'outline'}
          size={12}
          className={star <= Math.round(rating) ? 'star-filled' : 'star-empty'}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover group flex flex-col">
      {/* Image */}
      <div className="product-card-img relative aspect-[4/3]">
        <AppImage
          src={product.image}
          alt={`${product.name} — ${product.brand} snack product on clean background`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 badge-accent">
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-2.5 right-2.5 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-[10px] text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-base font-bold text-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through ml-1.5">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              added
                ? 'bg-green-500 text-white scale-95' :'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Icon name="CheckIcon" size={14} />
                Added
              </>
            ) : (
              <>
                <Icon name="PlusIcon" size={14} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}