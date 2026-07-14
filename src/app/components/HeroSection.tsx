'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

// 1. Array of objects for the rotating banner images
const HERO_IMAGES = [
    {
        id: 1,
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_10408a821-1765079971303.png",
        alt: "Assorted snack bags and chips arranged on a bright, clean white surface"
    },
    {
        id: 2, 
        src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0313789-1774365101100.png",
        alt: 'Golden kunafa dessert topped with crushed pistachios on a round plate',
        label: 'Kunafa & Sweets',
        caption: 'Authentic Middle Eastern sweets and pastries'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1628210473497-92b600c4007b',
        alt: 'Assorted cold drinks and beverages'
    }
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatically change the image every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        /* INCREASED TOP PADDING: Changed pt-20 to pt-28 to push the text down below the header */
        <section className="relative overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-32">
            {/* Decorative background grid lines */}
            <div className="hidden lg:block absolute inset-0 grid-bg-lines pointer-events-none" />
            {/* Ambient blob */}
            <div
                className="absolute top-24 right-1/4 w-96 h-96 blob-accent pointer-events-none"
                aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-10 pb-4 lg:pb-0">

                    {/* LEFT COLUMN — Hero Text */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left pt-4 lg:pt-0">
                        {/* Section label */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
                            <span className="accent-bar" />
                            <span className="section-label text-muted-foreground">Fresh Arrivals · July 2026</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-4 sm:mb-5 leading-tight lg:leading-[1.1] lg:tracking-tight">
                            Your daily<br />
                            snack<br />
                            <span className="text-accent italic">market</span>
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                            Chips, drinks, kunafa, candy, and 200+ more — organized by category, delivered to your door in hours.
                        </p>

                        {/* BUTTON FOR DESKTOP */}
                        {/* FIXED: Applied button classes directly to Link component */}
                        <div className="hidden lg:block mb-8">
                            <Link href="/products" className="btn-accent inline-flex items-center px-8 py-4 text-base shadow-lg hover:shadow-xl transition-all w-fit rounded-lg font-semibold">
                                Shop All Snacks <span aria-hidden="true" className="ml-2">→</span>
                            </Link>
                        </div>

                        {/* BUTTON FOR MOBILE */}
                        {/* FIXED: Applied button classes directly to Link component */}
                        <div className="lg:hidden mt-2">
                             <Link href="/products" className="btn-accent flex w-full items-center justify-center px-8 py-4 text-base shadow-lg hover:shadow-xl transition-all rounded-lg font-semibold">
                                Shop All Snacks <span aria-hidden="true" className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — Hero Image + Floating Cards */}
                    <div className="w-full lg:w-1/2 relative mt-4 sm:mt-6 lg:mt-0 mb-6 lg:mb-8">
                        {/* Decorative dot grid */}
                        <div className="absolute -left-8 -bottom-8 opacity-20 hidden lg:grid grid-cols-5 gap-2">
                            {Array.from({ length: 25 }).map((_, i) =>
                                <div key={i} className="w-1.5 h-1.5 bg-foreground rounded-full" />
                            )}
                        </div>

                        {/* CAROUSEL IMAGE CONTAINER */}
                        <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-square rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl bg-card">
                            {HERO_IMAGES.map((img, idx) => (
                                <div
                                    key={img.id}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <AppImage
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover object-center"
                                        priority={idx === 0} 
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-20 pointer-events-none" />
                        </div>

                        {/* Floating stat card — Top Right */}
                        <div className="absolute -top-3 right-2 sm:-top-4 sm:-right-2 lg:-right-6 bg-accent text-accent-foreground p-4 sm:p-5 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-default z-30">
                            <p className="text-2xl sm:text-3xl font-display font-bold">200+</p>
                            <p className="text-xs sm:text-sm font-semibold leading-tight mt-1 opacity-90">
                                snack<br />categories
                            </p>
                        </div>

                        {/* Floating delivery card — Bottom Left */}
                        <div className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-2 lg:-left-8 bg-card border border-border p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 z-30">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                                <Icon name="TruckIcon" size={20} className="text-accent sm:w-6 sm:h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-foreground">Same-day delivery</p>
                                <p className="text-xs text-muted-foreground mt-0.5">Orders before 3 PM</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}