import React from 'react';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-primary rounded-3xl px-8 sm:px-12 py-10 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-primary-foreground mb-3">
              What are you craving?
            </h2>
            <p className="text-primary-foreground/70 text-sm sm:text-base max-w-md">
              Browse 500+ snacks across every category. New arrivals added every day.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/products">
              <button className="btn-accent text-base px-8 py-3.5">
                Shop All Snacks
              </button>
            </Link>
            <Link href="/products?category=kunafa">
              <button className="border border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all">
                Explore Kunafa
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}