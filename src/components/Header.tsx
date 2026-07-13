'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <AppLogo size={125} />
            <span className="font-display font-semibold text-xl tracking-tight text-foreground hidden sm:block">
              Misbah
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-xl hover:bg-secondary transition-colors"
              aria-label="Shopping cart"
            >
              <Icon name="ShoppingBagIcon" size={22} className="text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="Bars3Icon" size={22} className="text-foreground" />
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-border">
            <div className="flex items-center gap-2">
              <AppLogo size={36} />
              <span className="font-display font-semibold text-xl text-foreground">Misbah</span>
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <Icon name="XMarkIcon" size={22} className="text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-10 gap-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/products', label: 'Products' },
              { href: '/cart', label: 'Cart' },
            ]?.map(link => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-2xl font-display font-medium text-foreground hover:text-accent transition-colors border-b border-border last:border-0"
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-10">
            <Link href="/products" onClick={() => setMobileOpen(false)}>
              <button className="btn-accent w-full justify-center text-base py-4">
                Shop All Products
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}