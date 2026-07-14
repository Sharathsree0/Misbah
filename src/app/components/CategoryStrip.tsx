'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const CATEGORY_CARDS = [
{
  id: 'chips',
  label: 'Chips & Crisps',
  emoji: '🥔',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10408a821-1765079971303.png",
  alt: 'Bright orange chip bag with bold graphics on clean white background',
  count: '48 items',
  bg: 'bg-amber-50'
},
{
  id: 'drinks',
  label: 'Drinks',
  emoji: '🥤',
  image: "https://images.unsplash.com/photo-1710566277931-2d416cd494cc",
  alt: 'Colorful assortment of beverage cans and bottles',
  count: '32 items',
  bg: 'bg-sky-50'
},
{
  id: 'kunafa',
  label: 'Kunafa & Sweets',
  emoji: '🍮',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0313789-1774365101100.png",
  alt: 'Golden kunafa pastry topped with crushed pistachios',
  count: '18 items',
  bg: 'bg-yellow-50'
},
{
  id: 'candy',
  label: 'Candy & Gummies',
  emoji: '🍬',
  image: "https://images.unsplash.com/photo-1695887464157-31541bdbb0cf",
  alt: 'Bright colorful gummy bears and candy',
  count: '41 items',
  bg: 'bg-pink-50'
},
{
  id: 'cookies',
  label: 'Cookies',
  emoji: '🍪',
  image: "https://images.unsplash.com/photo-1706629854874-f7b240f06e26",
  alt: 'Fresh baked chocolate chip cookies',
  count: '36 items',
  bg: 'bg-stone-50'
},
{
  id: 'popcorn',
  label: 'Popcorn',
  emoji: '🍿',
  image: "https://images.unsplash.com/photo-1693620189937-8439b947c3a8",
  alt: 'Overflowing bucket of fluffy popcorn',
  count: '14 items',
  bg: 'bg-yellow-50'
},
{
  id: 'jerky',
  label: 'Jerky & Meat',
  emoji: '🥩',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d274fa30-1775369435024.png",
  alt: 'Strips of dried beef jerky',
  count: '11 items',
  bg: 'bg-red-50'
}];

export default function CategoryStrip() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className="py-0 lg:pt-8 lg:pb-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
  
        {/* MOBILE-ONLY SEARCH BAR & PILLS */}
        <div className="lg:hidden mb-10">
          {/* Search Input */}
          <div className="relative w-full max-w-2xl mx-auto">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search chips, drinks, kunafa…"
              className="w-full bg-card border border-border rounded-xl px-5 py-4 pr-[120px] text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 shadow-sm transition-shadow" 
            />
            
            <Link
              href={`/products${searchValue ? `?q=${encodeURIComponent(searchValue)}` : ''}`}
              className="absolute right-2 top-2 bottom-2"
            >
              <button className="h-full px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Icon name="MagnifyingGlassIcon" size={18} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </Link>
          </div>

          {/* Quick Option Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Chips', 'Drinks', 'Kunafa', 'Candy', 'Nuts'].map((cat) => (
              <Link key={cat} href={`/products?category=${cat.toLowerCase()}`}>
                <span className="category-pill text-xs px-4 py-2 bg-secondary rounded-full inline-block font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer border border-border">
                  {cat}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="accent-bar" />
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-accent hover:underline underline-offset-4 flex items-center gap-1 shrink-0"
          >
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 lg:grid lg:grid-cols-8 lg:overflow-visible lg:pb-0">
          {CATEGORY_CARDS?.map((cat) =>
          <Link
            key={cat?.id}
            href={`/products?category=${cat?.id}`}
            className="shrink-0 w-32 lg:w-auto group">
            
              <div className={`rounded-2xl overflow-hidden border border-border ${cat?.bg} card-hover`}>
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <AppImage
                  src={cat?.image}
                  alt={cat?.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                </div>
                {/* Label */}
                <div className="p-2.5">
                  <p className="text-xs font-semibold text-foreground leading-tight line-clamp-1">
                    {cat?.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{cat?.count}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}