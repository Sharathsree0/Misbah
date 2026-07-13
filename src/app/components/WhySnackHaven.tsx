import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function WhySnackHaven() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="accent-bar" />
            <span className="section-label text-muted-foreground">Why choose us</span>
            <span className="accent-bar" />
          </div>
          <h2 className="font-display text-section-title font-medium text-foreground">
            The Misbah<br className="hidden sm:block" /> difference
          </h2>
        </div>

        {/* BENTO GRID AUDIT:
              Array has 6 cards: [FastDelivery, FreshDaily, 500Plus, FreeReturns, SecurePayment, MobileApp]
              8-column grid, 2 rows
               Row 1: [col 1-3: FastDelivery cs-3] [col 4-5: FreshDaily cs-2] [col 6-8: 500Plus cs-3]
              Row 2: [col 1-2: FreeReturns cs-2] [col 3-5: SecurePayment cs-3] [col 6-8: MobileApp cs-3]
               Placed 6/6 cards ✓
           */

        }

        {/* Desktop: 8-col bento grid */}
        <div className="hidden lg:grid lg:grid-cols-8 gap-4 auto-rows-[220px]">

          {/* Card 1: FastDelivery — col 1-3 */}
          <div className="lg:col-span-3 bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 blob-accent opacity-20 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
              <Icon name="TruckIcon" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-display font-medium mb-1">Same-day delivery</h3>
              <p className="text-sm text-primary-foreground/70">Order before 3 PM and your snacks arrive today. Free on orders over $25.</p>
            </div>
          </div>

          {/* Card 2: FreshDaily — col 4-5 */}
          <div className="lg:col-span-2 bg-accent text-accent-foreground rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
            <span className="section-label opacity-60">Freshness</span>
            <div>
              <p className="text-xs text-accent-foreground/70 mb-1">Restocked</p>
              <p className="text-3xl font-display font-bold">Daily</p>
            </div>
          </div>

          {/* Card 3: 500Plus — col 6-8 */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden relative group border border-border">
            <AppImage
              src="https://images.unsplash.com/photo-1573015471666-5fa9d8c772de"
              alt="Well-organized snack store shelves filled with colorful product packages, bright retail lighting"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-primary-foreground">
              <h3 className="text-2xl font-display font-medium leading-tight">500+<br />Products</h3>
            </div>
          </div>

          {/* Card 4: FreeReturns — col 1-2, row 2 */}
          <div className="lg:col-span-2 bg-secondary border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-accent/40 transition-colors">
            <span className="section-label text-muted-foreground">Hassle-free</span>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Satisfaction</p>
              <p className="text-2xl font-display font-bold text-foreground">Guaranteed</p>
            </div>
          </div>

          {/* Card 5: SecurePayment — col 3-5, row 2 */}
          <div className="lg:col-span-3 bg-secondary/60 border border-border rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden hover:border-accent/40 transition-colors group">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full border-[16px] border-accent/10 -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
            <span className="section-label text-muted-foreground">Payments</span>
            <div>
              <h3 className="text-xl font-display font-medium text-foreground mb-1">Secure checkout</h3>
              <p className="text-sm text-muted-foreground">SSL-encrypted. Apple Pay, Google Pay, and all major cards accepted.</p>
            </div>
          </div>

          {/* Card 6: MobileApp — col 6-8, row 2 */}
          <div className="lg:col-span-3 bg-primary/5 border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-accent/40 transition-colors">
            <span className="section-label text-muted-foreground">Shop anywhere</span>
            <div>
              <h3 className="text-xl font-display font-medium text-foreground mb-2">Mobile-first experience</h3>
              <p className="text-sm text-muted-foreground">Optimized for every device. Browse and order from your phone in seconds.</p>
            </div>
          </div>
        </div>

        {/* Mobile: simple vertical stack */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
          { icon: 'TruckIcon', title: 'Same-day delivery', desc: 'Order before 3 PM, arrive today. Free on orders over $25.', accent: true },
          { icon: 'SparklesIcon', title: 'Restocked daily', desc: 'Fresh products added every morning across all categories.', accent: false },
          { icon: 'ShoppingBagIcon', title: '500+ products', desc: 'Chips, drinks, kunafa, candy, nuts — all in one market.', accent: false },
          { icon: 'ShieldCheckIcon', title: 'Secure checkout', desc: 'SSL-encrypted payments. Apple Pay, Google Pay, cards.', accent: false },
          { icon: 'ArrowPathIcon', title: 'Easy returns', desc: 'Not happy? We make returns and refunds simple.', accent: false },
          { icon: 'DevicePhoneMobileIcon', title: 'Mobile-first', desc: 'Browse and order from any device — fast and smooth.', accent: false }].
          map((item, i) =>
          <div
            key={i}
            className={`rounded-2xl p-6 flex gap-4 items-start ${
            item.accent ? 'bg-primary text-primary-foreground' : 'bg-secondary border border-border'}`
            }>
            
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.accent ? 'bg-primary-foreground/10' : 'bg-accent/10'}`}>
                <Icon name={item.icon as never} size={20} className={item.accent ? 'text-accent' : 'text-accent'} />
              </div>
              <div>
                <h3 className={`text-sm font-semibold mb-1 ${item.accent ? 'text-primary-foreground' : 'text-foreground'}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${item.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{item.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}