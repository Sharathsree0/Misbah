import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const CATEGORY_CARDS = [
{
  id: 'chips',
  label: 'Chips & Crisps',
  emoji: '🥔',
  image: "https://images.unsplash.com/photo-1697250273205-fc80380ddaad",
  alt: 'Bright orange chip bag with bold graphics on clean white background, well-lit product shot',
  count: '48 items',
  bg: 'bg-amber-50'
},
{
  id: 'drinks',
  label: 'Drinks',
  emoji: '🥤',
  image: "https://images.unsplash.com/photo-1710566277931-2d416cd494cc",
  alt: 'Colorful assortment of beverage cans and bottles on a bright surface, airy daylight setting',
  count: '32 items',
  bg: 'bg-sky-50'
},
{
  id: 'kunafa',
  label: 'Kunafa & Sweets',
  emoji: '🍮',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0313789-1774365101100.png",
  alt: 'Golden kunafa pastry topped with crushed pistachios on a bright white plate, natural daylight',
  count: '18 items',
  bg: 'bg-yellow-50'
},
{
  id: 'candy',
  label: 'Candy & Gummies',
  emoji: '🍬',
  image: "https://images.unsplash.com/photo-1695887464157-31541bdbb0cf",
  alt: 'Bright colorful gummy bears and candy scattered on a clean white surface, bright studio lighting',
  count: '41 items',
  bg: 'bg-pink-50'
},
{
  id: 'nuts',
  label: 'Nuts & Seeds',
  emoji: '🥜',
  image: "https://images.unsplash.com/photo-1662749409694-d4aca3e30ba7",
  alt: 'Mixed assortment of roasted nuts and seeds in small white bowls on a bright airy surface',
  count: '27 items',
  bg: 'bg-orange-50'
},
{
  id: 'cookies',
  label: 'Cookies',
  emoji: '🍪',
  image: "https://images.unsplash.com/photo-1706629854874-f7b240f06e26",
  alt: 'Fresh baked chocolate chip cookies on a bright clean white parchment, warm natural light',
  count: '36 items',
  bg: 'bg-stone-50'
},
{
  id: 'popcorn',
  label: 'Popcorn',
  emoji: '🍿',
  image: "https://images.unsplash.com/photo-1693620189937-8439b947c3a8",
  alt: 'Overflowing bucket of fluffy popcorn on a bright white background, clean product photography',
  count: '14 items',
  bg: 'bg-yellow-50'
},
{
  id: 'jerky',
  label: 'Jerky & Meat',
  emoji: '🥩',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d274fa30-1775369435024.png",
  alt: 'Strips of dried beef jerky on a bright clean wooden board, well-lit daylight food photography',
  count: '11 items',
  bg: 'bg-red-50'
}];


export default function CategoryStrip() {
  return (
    <section className="py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="accent-bar" />
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-foreground">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-accent hover:underline underline-offset-4 flex items-center gap-1 shrink-0">
            
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 lg:grid lg:grid-cols-8 lg:overflow-visible lg:pb-0">
          {CATEGORY_CARDS?.map((cat) =>
          <Link
            key={cat?.id}
            href={`/products?category=${cat?.id}`}
            className="shrink-0 w-32 lg:w-auto group">
            
              <div className={`rounded-2xl overflow-hidden border border-border ${cat?.bg} card-hover`}>
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <AppImage
                  src={cat?.image}
                  alt={cat?.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                </div>
                {/* Label */}
                <div className="p-2.5">
                  <p className="text-xs font-semibold text-foreground leading-tight line-clamp-1">
                    {cat?.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{cat?.count}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}