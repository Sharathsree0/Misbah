'use client';
import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const GALLERY_SLIDES = [
{
  id: 1,
  src: 'https://img.rocket.new/generatedImages/rocket_gen_img_10408a821-1765079971303.png',
  alt: 'Assorted colorful snack bags and chips arranged on a bright white surface',
  label: 'Chips & Crisps',
  caption: 'Over 80 varieties of chips from around the world'
},
{
  id: 2,
  src: "https://images.unsplash.com/photo-1628210473497-92b600c4007b",
  alt: 'Assorted cold drinks and beverages in glass bottles on ice',
  label: 'Drinks & Beverages',
  caption: 'Refreshing drinks, juices, and sodas for every taste'
},
{
  id: 3,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0313789-1774365101100.png",
  alt: 'Golden kunafa dessert topped with crushed pistachios on a round plate',
  label: 'Kunafa & Sweets',
  caption: 'Authentic Middle Eastern sweets and pastries'
},

{
  id: 5,
  src: "https://images.unsplash.com/photo-1687152754495-ffa39fa83ba0",
  alt: 'Colorful assorted candy and gummy sweets in glass jars',
  label: 'Candy & Gummies',
  caption: 'Sweet treats and gummies for all ages'
}];


export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => {
    goTo((current - 1 + GALLERY_SLIDES.length) % GALLERY_SLIDES.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % GALLERY_SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="accent-bar" />
              <span className="section-label text-muted-foreground">Our Collection</span>
            </div>
            <h2 className="font-display text-section-title font-medium text-foreground">
              Explore our gallery
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-border bg-card hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Previous slide">
              
              <Icon name="ChevronLeftIcon" size={18} className="text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-border bg-card hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Next slide">
              
              <Icon name="ChevronRightIcon" size={18} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Gallery layout: large main + thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main slide */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-card" style={{ height: 'clamp(280px, 45vh, 500px)' }}>
            {GALLERY_SLIDES.map((slide, idx) =>
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              
                <AppImage
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 66vw" />
              
                {/* Overlay label */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {slide.label}
                  </span>
                  <p className="text-white text-sm font-medium">{slide.caption}</p>
                </div>
              </div>
            )}

            {/* Mobile arrows */}
            <button
              onClick={prev}
              className="sm:hidden absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center"
              aria-label="Previous">
              
              <Icon name="ChevronLeftIcon" size={16} className="text-foreground" />
            </button>
            <button
              onClick={next}
              className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center"
              aria-label="Next">
              
              <Icon name="ChevronRightIcon" size={16} className="text-foreground" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px] pb-1 lg:pb-0">
            {GALLERY_SLIDES.map((slide, idx) =>
            <button
              key={slide.id}
              onClick={() => goTo(idx)}
              className={`relative shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
              idx === current ?
              'ring-2 ring-accent scale-[1.02]' :
              'opacity-60 hover:opacity-90'}`
              }
              style={{ width: 'clamp(100px, 28vw, 160px)', height: '90px' }}
              aria-label={`View ${slide.label}`}>
              
                <AppImage
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="160px" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-white text-[10px] font-semibold leading-tight line-clamp-1">
                  {slide.label}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {GALLERY_SLIDES.map((_, idx) =>
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${
            idx === current ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-border hover:bg-muted-foreground'}`
            }
            aria-label={`Go to slide ${idx + 1}`} />

          )}
        </div>
      </div>
    </section>);

}