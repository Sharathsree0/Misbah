//  

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
        id: 3,
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
    const [searchValue, setSearchValue] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // 2. Automatically change the image every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-16 overflow-hidden bg-background">
            {/* Decorative background grid lines */}
            <div className="hidden lg:block absolute inset-0 grid-bg-lines pointer-events-none" />
            {/* Ambient blob */}
            <div
                className="absolute top-24 right-1/4 w-96 h-96 blob-accent pointer-events-none"
                aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 lg:py-20">

                    {/* LEFT COLUMN — Hero Text & Search */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        {/* Section label */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="accent-bar" />
                            <span className="section-label text-muted-foreground">Fresh Arrivals · July 2026</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground mb-6">
                            Your daily<br />
                            snack<br />
                            <span className="text-accent italic">market</span>
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                            Chips, drinks, kunafa, candy, and 200+ more — organized by category, delivered to your door in hours.
                        </p>

                        {/* 3. WRAPPER TO HIDE ON DESKTOP, KEEP ON MOBILE */}
                        <div className="lg:hidden">
                            {/* Search bar */}
                            <div className="relative w-full max-w-xl mb-6">
                                <input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e?.target?.value)}
                                    placeholder="Search chips, drinks, kunafa…"
                                    className="w-full bg-card border border-border rounded-xl px-5 py-4 pr-[120px] text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 shadow-sm transition-shadow" />

                                <Link
                                    href={`/products${searchValue ? `?q=${encodeURIComponent(searchValue)}` : ''}`}
                                    className="absolute right-2 top-2 bottom-2">

                                    <button className="h-full px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                                        <Icon name="MagnifyingGlassIcon" size={18} />
                                        <span className="hidden sm:inline">Search</span>
                                    </button>
                                </Link>
                            </div>

                            {/* Quick category pills */}
                            <div className="flex flex-wrap gap-2">
                                {['Chips', 'Drinks', 'Kunafa', 'Candy', 'Nuts'].map((cat) =>
                                    <Link key={cat} href={`/products?category=${cat.toLowerCase()}`}>
                                        <span className="category-pill text-xs">{cat}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                        {/* END HIDDEN DESKTOP WRAPPER */}

                    </div>

                    {/* RIGHT COLUMN — Hero Image + Floating Cards */}
                    <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                        {/* Decorative dot grid */}
                        {/* Decorative dot grid */}
                        <div className="absolute -left-8 -bottom-8 opacity-20 hidden lg:grid grid-cols-5 gap-2">
                            {Array.from({ length: 25 }).map((_, i) =>
                                <div key={i} className="w-1.5 h-1.5 bg-foreground rounded-full" />
                            )}
                        </div>

                        {/* 4. CAROUSEL IMAGE CONTAINER */}
                        <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-card">
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
                                        priority={idx === 0} // Only prioritize loading the first image
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-20 pointer-events-none" />
                        </div>

                        {/* Floating stat card — Top Right */}
                        <div className="absolute -top-4 -right-2 lg:-right-6 bg-accent text-accent-foreground p-5 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-default z-30">
                            <p className="text-3xl font-display font-bold">200+</p>
                            <p className="text-sm font-semibold leading-tight mt-1 opacity-90">
                                snack<br />categories
                            </p>
                        </div>

                        {/* Floating delivery card — Bottom Left */}
                        <div className="absolute -bottom-4 -left-2 lg:-left-8 bg-card border border-border p-4 rounded-2xl shadow-xl flex items-center gap-4 z-30">
                            <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                                <Icon name="TruckIcon" size={24} className="text-accent" />
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