import React, { Suspense } from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsClient from './components/ProductsClient';

export const metadata = {
  title: 'All products — SnackHaven',
  description: 'Browse 500+ snacks: chips, drinks, kunafa, candy, nuts, cookies, jerky, and popcorn. Filter by category and add to cart.',
};

export default function ProductsPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <ProductsClient />
          </Suspense>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}