'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { TESTIMONIALS } from '@/data/products';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <Icon
          key={star}
          name="StarIcon"
          variant={star <= rating ? 'solid' : 'outline'}
          size={14}
          className={star <= rating ? 'star-filled' : 'star-empty'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
  }, []);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  return (
    <section className="py-16 bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="accent-bar" />
            <span className="section-label text-muted-foreground">Testimonials</span>
            <span className="accent-bar" />
          </div>
          <h2 className="font-display text-section-title font-medium text-foreground">
            What snack lovers say
          </h2>
          <div className="flex justify-center items-center gap-2 mt-3">
            <div className="w-8 h-px bg-border" />
            <span className="section-label text-muted-foreground">Trusted by 50,000+ customers</span>
            <div className="w-8 h-px bg-border" />
          </div>
        </div>

        {/* Testimonials slider */}
        <div
          className="relative"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.slice(0, 3).map((t, i) => {
              const isActive = i === activeIndex % 3;
              return (
                <div
                  key={t.id}
                  className={`bg-card border rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-500 ${
                    isActive
                      ? 'border-accent/30 shadow-lg scale-[1.02]'
                      : 'border-border opacity-70 scale-[0.98]'
                  }`}
                >
                  {/* Rating */}
                  <StarRating rating={t.rating} />
                  {/* Quote */}
                  <p className="text-sm text-foreground leading-relaxed mt-4 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <AppImage
                        src={t.avatar}
                        alt={`${t.name}, ${t.role} from ${t.location}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
                    </div>
                  </div>
                  {/* Active indicator bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-t-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Pagination dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.slice(0, 3).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex % 3
                      ? 'w-8 h-2 bg-accent' :'w-2 h-2 bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-primary-foreground hover:border-foreground transition-all"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeftIcon" size={18} />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="w-10 h-10 rounded-full border border-accent text-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRightIcon" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}