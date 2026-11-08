import React from 'react';
import { Sprout, MessageCircle, MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { siteConfig, productsData, getWhatsAppUrl } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenProductDetail: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProductDetail }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E281E] text-stone-200 border-t border-[#D99B26]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D99B26] to-[#b87e1a] flex items-center justify-center text-[#0E281E] shrink-0 shadow-sm">
                <Sprout className="w-5 h-5 stroke-[2.4]" />
              </div>
              <span className="font-serif-brand text-2xl font-bold tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </div>
            <p className="text-sm italic text-[#D99B26] font-serif-brand text-lg">
              "{siteConfig.tagline}"
            </p>
            <p className="text-xs text-stone-300 leading-relaxed pr-4">
              {siteConfig.brandConcept}
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D99B26] to-[#e5a93c] text-[#0E281E] hover:from-[#e5a93c] hover:to-[#f0bb57] transition-all shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quick WhatsApp Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D99B26]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('process')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Product Range (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D99B26]">
              Edible Oil Range
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-stone-300">
              {productsData.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => {
                    handleNav('products');
                    onOpenProductDetail(prod.id);
                  }}
                  className="text-left hover:text-[#D99B26] transition-colors py-0.5 truncate cursor-pointer"
                >
                  {prod.name}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-stone-400 pt-1">
              Pure seed extraction managed in-house from seed to bottle.
            </p>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D99B26]">
              Enquiry & Facility
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {siteConfig.contact.addressPlaceholder}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D99B26] shrink-0" />
                <a
                  href={`tel:${siteConfig.whatsapp.phoneNumber}`}
                  className="hover:text-[#D99B26] font-medium transition-colors"
                >
                  {siteConfig.contact.phonePlaceholder}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D99B26] shrink-0" />
                <span>{siteConfig.contact.emailPlaceholder}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D99B26] shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-stone-400">Pure Edible Oil Manufacturing</span>
            <span>·</span>
            <span className="text-stone-400">Direct Farm-to-Home Connection</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
