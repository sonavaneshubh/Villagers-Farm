import React from 'react';
import { MessageCircle, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../config/siteConfig';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const whatsappUrl = getProductWhatsAppUrl(product.name);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#D99B26]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Product Image Area */}
      <div className="relative aspect-4/3 bg-[#FBF9F4] overflow-hidden flex items-center justify-center p-3 sm:p-4">
        <img
          src={product.image}
          alt={`Villagers Farm ${product.name}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle category tag */}
        <div className="absolute top-3 left-3 bg-[#0E281E]/90 backdrop-blur-md text-white text-[11px] font-medium py-1 px-2.5 rounded-lg border border-white/10 shadow-xs">
          {product.category}
        </div>

        {/* Quick View overlay button */}
        <button
          onClick={() => onViewDetails(product)}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white/95 text-[#0E281E] p-2 rounded-xl shadow-md hover:bg-white text-xs font-medium flex items-center gap-1.5 cursor-pointer hover:scale-105"
          aria-label={`View details of ${product.name}`}
        >
          <Eye className="w-4 h-4 text-[#D99B26]" />
          <span className="hidden sm:inline font-semibold">Details</span>
        </button>
      </div>

      {/* Product Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Seed Type Header */}
          <div className="text-xs font-semibold text-[#3F6338] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#3F6338]" />
            <span className="truncate">{product.seedType}</span>
          </div>

          {/* Title */}
          <div>
            <h3 className="font-serif-brand text-2xl font-bold text-[#0E281E] group-hover:text-[#3F6338] transition-colors leading-tight">
              {product.name}
            </h3>
            {product.hindiName && (
              <p className="text-xs text-stone-500 mt-0.5 font-medium">
                {product.hindiName}
              </p>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Footer Area: Pricing/Packaging Note + Action CTA */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-stone-500">
            <span>Packaging & pricing</span>
            <span className="font-semibold text-[#0E281E]">Available on enquiry</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="py-2.5 px-3 rounded-xl border border-stone-200/90 text-stone-700 hover:text-[#0E281E] hover:bg-stone-50 hover:border-stone-300 text-xs font-semibold text-center transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>View Details</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
