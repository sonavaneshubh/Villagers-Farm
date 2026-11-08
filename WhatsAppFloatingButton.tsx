import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick message popup card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Card Header */}
          <div className="bg-[#0E281E] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">Villagers Farm</h4>
                <p className="text-[11px] text-stone-300">Direct Farmer & Product Desk</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-white p-1 rounded-md cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-[#FBF9F4] space-y-3">
            <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-xs text-xs text-[#1C221E] space-y-1">
              <p className="font-bold text-[#0E281E]">Namaste! 🙏</p>
              <p className="text-stone-600 leading-relaxed">
                Connect directly with our team on WhatsApp for edible oil varieties, bulk enquiries, or home deliveries.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-stone-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3F6338]" />
              <span>Direct communication with in-house team</span>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-all shadow-md active:scale-98"
            >
              <span>Start WhatsApp Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main floating action button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center bg-[#0E281E] text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            Chat on WhatsApp
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-current stroke-none" />
          )}
        </button>
      </div>
    </div>
  );
};
