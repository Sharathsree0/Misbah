import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo size={28} />
              <span className="font-display font-semibold text-base text-foreground">Misbah</span>
            </Link>
            <div className="flex items-center gap-5 flex-wrap justify-center">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/cart" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Cart
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            © 2026 Misbah
          </p>
        </div>
      </div>
    </footer>
  );
}