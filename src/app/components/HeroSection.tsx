'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <section className="relative pt-16 overflow-hidden bg-background">
      {/* Decorative background grid lines */}
      <div className="hidden lg:block absolute inset-0 grid-bg-lines pointer-events-none" />
      {/* Ambient blob */}
      <div
        className="absolute top-24 right-1/4 w-96 h-96 blob-accent pointer-events-none"
        aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-8 gap-0 min-h-[calc(100vh-4rem)]">

          {/* Left column — hero text */}
          <div className="lg:col-start-1 lg:col-span-4 flex flex-col justify-center pt-12 pb-8 lg:py-20">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-bar" />
              <span className="section-label text-muted-foreground">Fresh Arrivals · July 2026</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-hero font-medium text-foreground mb-6">
              Your daily<br />
              snack<br />
              <span className="text-accent italic">market</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Chips, drinks, kunafa, candy, and 200+ more — organized by category, delivered to your door in hours.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mb-6">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e?.target?.value)}
                placeholder="Search chips, drinks, kunafa…"
                className="w-full bg-card border border-border rounded-xl px-5 py-3.5 pr-36 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow" />
              
              <Link
                href={`/products${searchValue ? `?q=${encodeURIComponent(searchValue)}` : ''}`}
                className="absolute right-2 top-1.5 bottom-1.5">
                
                <button className="h-full px-4 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-1.5">
                  <Icon name="MagnifyingGlassIcon" size={16} />
                  Search
                </button>
              </Link>
            </div>

            {/* Quick category pills */}
            <div className="flex flex-wrap gap-2">
              {['Chips', 'Drinks', 'Kunafa', 'Candy', 'Nuts']?.map((cat) =>
              <Link key={cat} href={`/products?category=${cat?.toLowerCase()}`}>
                  <span className="category-pill text-xs">{cat}</span>
                </Link>
              )}
            </div>
          </div>

          {/* Right column — hero image + floating cards */}
          <div className="lg:col-start-5 lg:col-span-4 relative flex items-end pb-0 pt-8 lg:pt-12">
            {/* Decorative dot grid */}
            <div className="absolute left-4 bottom-40 opacity-20 hidden lg:grid grid-cols-5 gap-2">
              {Array.from({ length: 25 })?.map((_, i) =>
              <div key={i} className="w-1 h-1 bg-foreground rounded-full" />
              )}
            </div>

            {/* Hero image */}
            <div className="relative w-full img-grayscale-reveal rounded-2xl overflow-hidden" style={{ height: 'clamp(320px, 55vh, 580px)' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_10408a821-1765079971303.png"
                alt="Assorted snack bags and chips arranged on a bright, clean white surface"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat card — top right */}
            <div className="absolute top-16 right-4 lg:-right-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-default">
              <p className="text-2xl font-display font-bold">200+</p>
              <p className="text-xs font-semibold leading-tight mt-0.5 opacity-80">
                snack<br />categories
              </p>
            </div>

            {/* Floating delivery card — bottom left */}
            <div className="absolute bottom-8 left-4 lg:-left-6 bg-card border border-border p-4 rounded-2xl shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Icon name="TruckIcon" size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Same-day delivery</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Orders before 3 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}