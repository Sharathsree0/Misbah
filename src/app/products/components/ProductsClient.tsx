'use client';
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import ProductCard from '@/app/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'name', label: 'Name A–Z' },
];

const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $5', min: 0, max: 5 },
  { label: '$5 – $10', min: 5, max: 10 },
  { label: '$10 – $20', min: 10, max: 20 },
  { label: 'Over $20', min: 20, max: Infinity },
];

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'all';
  const initialQuery = searchParams?.get('q') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceRangeIdx, setPriceRangeIdx] = useState(0);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyBadged, setOnlyBadged] = useState(false);

  const selectedPriceRange = PRICE_RANGES?.[priceRangeIdx];

  const filteredAndSorted = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (activeCategory !== 'all') {
      result = result?.filter(p => p?.category === activeCategory);
    }

    // Search filter
    if (searchQuery?.trim()) {
      const q = searchQuery?.toLowerCase();
      result = result?.filter(
        p =>
          p?.name?.toLowerCase()?.includes(q) ||
          p?.brand?.toLowerCase()?.includes(q) ||
          p?.category?.toLowerCase()?.includes(q) ||
          p?.description?.toLowerCase()?.includes(q)
      );
    }

    // Price range filter
    if (priceRangeIdx !== 0) {
      result = result?.filter(p => p?.price >= selectedPriceRange?.min && p?.price < selectedPriceRange?.max);
    }

    // Badge filter
    if (onlyBadged) {
      result = result?.filter(p => p?.badge);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result?.sort((a, b) => a?.price - b?.price);
        break;
      case 'price-desc':
        result?.sort((a, b) => b?.price - a?.price);
        break;
      case 'rating':
        result?.sort((a, b) => b?.rating - a?.rating);
        break;
      case 'name':
        result?.sort((a, b) => a?.name?.localeCompare(b?.name));
        break;
      default:
        result?.sort((a, b) => (b?.badge ? 1 : 0) - (a?.badge ? 1 : 0));
    }

    return result;
  }, [activeCategory, sortBy, searchQuery, priceRangeIdx, onlyInStock, onlyBadged, selectedPriceRange]);

  const activeCategoryLabel = CATEGORIES?.find(c => c?.id === activeCategory)?.label || 'All Products';

  const activeFiltersCount = (priceRangeIdx !== 0 ? 1 : 0) + (onlyBadged ? 1 : 0);

  const clearAllFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setPriceRangeIdx(0);
    setOnlyInStock(false);
    setOnlyBadged(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="accent-bar" />
          <span className="section-label text-muted-foreground">Product Catalog</span>
        </div>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-display text-section-title font-medium text-foreground">
              {activeCategoryLabel}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {filteredAndSorted?.length} product{filteredAndSorted?.length !== 1 ? 's' : ''} found
            </p>
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-medium transition-colors"
            >
              <Icon name="XMarkIcon" size={14} />
              Clear {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''}
            </button>
          )}
        </div>
      </div>
      {/* Search + Sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        {/* Search */}
        <div className="relative flex-1">
          <Icon
            name="MagnifyingGlassIcon"
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e?.target?.value)}
            placeholder="Search products, brands, categories…"
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-shadow"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <Icon name="XMarkIcon" size={16} />
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={e => setSortBy(e?.target?.value)}
            className="appearance-none bg-card border border-border rounded-xl px-4 py-2.5 pr-9 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 cursor-pointer"
          >
            {SORT_OPTIONS?.map(opt => (
              <option key={opt?.value} value={opt?.value}>{opt?.label}</option>
            ))}
          </select>
          <Icon
            name="ChevronDownIcon"
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="sm:hidden flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-medium text-foreground"
        >
          <Icon name="FunnelIcon" size={16} />
          Filters
          {activeFiltersCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>
      {/* Quick category pills (mobile-friendly horizontal scroll) */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide sm:hidden">
        {CATEGORIES?.map(cat => (
          <button
            key={cat?.id}
            onClick={() => setActiveCategory(cat?.id)}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat?.id
                ? 'bg-accent text-accent-foreground'
                : 'bg-card border border-border text-muted-foreground'
            }`}
          >
            <span>{cat?.emoji}</span>
            <span>{cat?.label}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-6">
        {/* Desktop sidebar */}
        <aside className="hidden sm:block w-56 shrink-0">
          <div className="bg-card border border-border rounded-2xl p-5 sticky top-20 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Categories
              </h3>
              <nav className="flex flex-col gap-1">
                {CATEGORIES?.map(cat => (
                  <button
                    key={cat?.id}
                    onClick={() => setActiveCategory(cat?.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                      activeCategory === cat?.id
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat?.emoji}</span>
                      <span>{cat?.label}</span>
                    </span>
                    <span className="text-xs opacity-60">
                      {cat?.id === 'all'
                        ? PRODUCTS?.length
                        : PRODUCTS?.filter(p => p?.category === cat?.id)?.length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Price Range
              </h3>
              <div className="flex flex-col gap-1">
                {PRICE_RANGES?.map((range, idx) => (
                  <button
                    key={range?.label}
                    onClick={() => setPriceRangeIdx(idx)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-left transition-all ${
                      priceRangeIdx === idx
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      priceRangeIdx === idx ? 'border-accent-foreground' : 'border-muted-foreground'
                    }`}>
                      {priceRangeIdx === idx && <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground" />}
                    </span>
                    {range?.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Filters */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                More Filters
              </h3>
              <label className="flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer hover:bg-secondary transition-colors">
                <input
                  type="checkbox"
                  checked={onlyBadged}
                  onChange={e => setOnlyBadged(e?.target?.checked)}
                  className="w-4 h-4 rounded accent-[var(--color-accent)] cursor-pointer"
                />
                <span className="text-sm font-medium text-muted-foreground">Deals & Featured</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Products grid */}
        <div className="flex-1 min-w-0">
          {filteredAndSorted?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {filteredAndSorted?.map(product => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                <Icon name="MagnifyingGlassIcon" size={28} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Try a different search term, price range, or browse another category.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-4 btn-outline text-sm px-5 py-2.5"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-medium text-foreground">Filters</h3>
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-secondary"
                aria-label="Close filter"
              >
                <Icon name="XMarkIcon" size={18} className="text-foreground" />
              </button>
            </div>

            {/* Category grid */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Categories</h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {CATEGORIES?.map(cat => (
                <button
                  key={cat?.id}
                  onClick={() => { setActiveCategory(cat?.id); setSidebarOpen(false); }}
                  className={`flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                    activeCategory === cat?.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-base">{cat?.emoji}</span>
                  <span className="line-clamp-1">{cat?.label}</span>
                </button>
              ))}
            </div>

            {/* Price range */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Price Range</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {PRICE_RANGES?.map((range, idx) => (
                <button
                  key={range?.label}
                  onClick={() => setPriceRangeIdx(idx)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    priceRangeIdx === idx
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {range?.label}
                </button>
              ))}
            </div>

            {/* Extra filters */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">More Filters</h4>
            <label className="flex items-center gap-3 py-2 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyBadged}
                onChange={e => setOnlyBadged(e?.target?.checked)}
                className="w-4 h-4 rounded cursor-pointer"
              />
              <span className="text-sm font-medium text-foreground">Deals & Featured only</span>
            </label>

            <button
              onClick={() => setSidebarOpen(false)}
              className="mt-6 btn-accent w-full justify-center text-sm py-3"
            >
              Show {filteredAndSorted?.length} result{filteredAndSorted?.length !== 1 ? 's' : ''}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}