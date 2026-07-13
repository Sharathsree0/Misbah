'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { PRODUCTS } from '@/data/products';

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'chips', label: 'Chips' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'kunafa', label: 'Kunafa' },
  { id: 'candy', label: 'Candy' },
  { id: 'nuts', label: 'Nuts' },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? PRODUCTS?.filter(p => p?.badge)?.slice(0, 8)
    : PRODUCTS?.filter(p => p?.category === activeTab)?.slice(0, 8);

  return (
    <section className="py-14 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="accent-bar" />
              <span className="section-label text-muted-foreground">Handpicked for you</span>
            </div>
            <h2 className="font-display text-section-title font-medium text-foreground">
              Featured Snacks
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-accent hover:underline underline-offset-4 flex items-center gap-1 shrink-0"
          >
            Browse all products →
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-8">
          {TABS?.map(tab => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`category-pill shrink-0 ${activeTab === tab?.id ? 'active' : ''}`}
            >
              {tab?.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered?.length > 0 ? (
            filtered?.map(product => (
              <ProductCard key={product?.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <p className="text-base font-medium">No featured products in this category.</p>
              <Link href="/products" className="text-sm text-accent underline mt-2 inline-block">
                Browse all products
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}