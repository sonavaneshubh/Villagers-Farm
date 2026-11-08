import React, { useState, useMemo } from 'react';
import { productsData, getWhatsAppUrl } from '../config/siteConfig';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Sprout, Search, MessageCircle, HelpCircle } from 'lucide-react';

interface ProductsViewProps {
  onViewProductDetails: (product: Product) => void;
  onOpenContactForm: (productName?: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onViewProductDetails,
  onOpenContactForm,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Everyday Essentials',
    'Traditional Cold-Pressed',
    'Specialty Oils',
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.seedType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.hindiName &&
          product.hindiName.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#3F6338] bg-[#3F6338]/10 py-1.5 px-3 rounded-full">
          <Sprout className="w-4 h-4 text-[#3F6338]" />
          <span>Product Catalogue</span>
        </div>
        <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E281E] leading-tight">
          Our Pure Edible Oil Range
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          Nine pure oil varieties pressed in-house from carefully sourced seeds.
          Click any product to view detailed culinary notes and enquire directly
          on WhatsApp for available packaging options.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs p-3.5 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0E281E] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search oils (e.g. Mustard, Groundnut)..."
            className="w-full pl-9 pr-4 py-2.5 bg-[#FBF9F4] border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#D99B26] focus:ring-1 focus:ring-[#D99B26] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Active Count & Transparent Packaging Note */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500 px-1">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of{' '}
          {productsData.length} edible oil products
        </span>
        <div className="flex items-center gap-1.5 text-[#3F6338] font-medium">
          <HelpCircle className="w-3.5 h-3.5 shrink-0" />
          <span>
            Bottle sizes & batch pricing are provided via direct WhatsApp enquiry
          </span>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProductDetails}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center space-y-4">
          <p className="text-stone-600 text-sm">
            No products found matching "<strong>{searchQuery}</strong>".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs font-bold px-5 py-2.5 bg-[#0E281E] text-white rounded-xl hover:bg-[#153a2c] cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bulk & Institutional Enquiry Banner */}
      <div className="bg-[#0E281E] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D99B26]">
            Bulk & Household Catering
          </span>
          <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold">
            Looking for Bulk or Custom Household Supply?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            We supply fresh batch runs for households, community groups, and
            specialty food preparations directly from our facility.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={getWhatsAppUrl('Hello Villagers Farm, I am interested in bulk/custom enquiry for your edible oils.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Bulk WhatsApp Enquiry</span>
          </a>
          <button
            onClick={() => onOpenContactForm('Bulk / Custom Supply')}
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all text-center cursor-pointer"
          >
            Submit Enquiry Form
          </button>
        </div>
      </div>
    </div>
  );
};
