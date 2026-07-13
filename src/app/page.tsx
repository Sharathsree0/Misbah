import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import CategoryStrip from '@/app/components/CategoryStrip';
import PhotoGallery from '@/app/components/PhotoGallery';
import FeaturedProducts from '@/app/components/FeaturedProducts';
import WhySnackHaven from '@/app/components/WhySnackHaven';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import CTABanner from '@/app/components/CTABanner';

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CategoryStrip />
          <PhotoGallery />
          <FeaturedProducts />
          <WhySnackHaven />
          <TestimonialsSection />
          <CTABanner />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}