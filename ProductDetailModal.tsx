import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sprout, Check, ArrowRight, Info } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../config/siteConfig';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenContactForm: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenContactForm,
}) => {
  const whatsappUrl = product ? getProductWhatsAppUrl(product.name) : '';

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[92vh] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#0E281E] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-[#D99B26]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D99B26]">
              Villagers Farm · Product Specification
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close product modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content (Scrollable) */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Product Image */}
            <div className="md:col-span-5 flex flex-col">
              <div className="aspect-4/3 md:aspect-square bg-[#FBF9F4] rounded-xl overflow-hidden border border-stone-200">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 p-3 bg-[#FBF9F4] rounded-xl text-xs text-stone-600 space-y-1 border border-stone-200/80">
                <div className="font-semibold text-[#0E281E]">Seed Source</div>
                <div className="text-[11px] leading-relaxed">{product.seedType}</div>
              </div>
            </div>

            {/* Product Narrative */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs text-[#3F6338] font-bold tracking-wider uppercase">
                  {product.category}
                </span>
                <h2 className="font-serif-brand text-3xl font-bold text-[#0E281E] leading-tight">
                  {product.name}
                </h2>
                {product.hindiName && (
                  <p className="text-sm text-stone-500 mt-0.5 font-medium">
                    Traditional Name: {product.hindiName}
                  </p>
                )}
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {product.detailedDescription}
              </p>

              {/* Culinary Usages */}
              <div>
                <h4 className="text-xs font-bold text-[#0E281E] uppercase tracking-wider mb-2">
                  Recommended Culinary Uses
                </h4>
                <ul className="space-y-1.5">
                  {product.culinaryUsage.map((use, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D99B26] mt-1.5 shrink-0" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Seed & Process Attributes */}
              <div>
                <h4 className="text-xs font-bold text-[#0E281E] uppercase tracking-wider mb-2">
                  In-House Process Highlights
                </h4>
                <ul className="space-y-1.5">
                  {product.seedAttributes.map((attr, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#3F6338] shrink-0" />
                      <span>{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Packaging & Pricing Notice Banner */}
          <div className="p-4 bg-stone-50/90 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-[#0E281E]">
                Packaging Options & Batch Pricing
              </p>
              <p className="text-[11px] leading-relaxed text-stone-500">
                Packaging sizes (e.g. 500ml, 1 Litre, 5 Litres) and latest batch pricing are confirmed directly via enquiry to reflect seasonal seed availability and harvest batches.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-stone-700">
                {product.packagingOptionsPlaceholder.map((opt, i) => (
                  <span key={i} className="bg-white px-2 py-0.5 rounded border border-stone-200">
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenContactForm(product.name);
            }}
            className="w-full sm:w-auto text-xs font-semibold py-2.5 px-4 rounded-xl text-stone-700 hover:text-[#173D2B] hover:bg-stone-200/60 transition-colors"
          >
            Submit Website Enquiry Form
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-all shadow-sm active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enquire about {product.name} on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
};
