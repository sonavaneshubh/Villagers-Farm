import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, MessageCircle, Sprout, ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Framer Motion useScroll hook for the slim top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Products' },
    { id: 'process', label: 'Our Process' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E281E]/92 backdrop-blur-md shadow-lg shadow-black/10 py-3 text-white border-b border-[#D99B26]/20'
          : 'bg-[#0E281E] py-4 text-white border-b border-white/10'
      }`}
    >
      {/* Slim Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D99B26] via-[#F3C168] to-[#4E7A49] origin-left z-50 shadow-[0_0_10px_rgba(217,155,38,0.5)]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            aria-label="Villagers Farm Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D99B26] to-[#b87e1a] flex items-center justify-center text-[#0E281E] shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Sprout className="w-5 h-5 stroke-[2.4]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-brand text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                {siteConfig.brandName}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#D99B26] font-semibold mt-0.5 whitespace-nowrap">
                Pure Edible Oils
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap cursor-pointer text-xs uppercase tracking-wider ${
                    isActive
                      ? 'text-[#D99B26] font-bold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D99B26] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button (Zone 3) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D99B26] to-[#e5a93c] text-[#0E281E] hover:from-[#e5a93c] hover:to-[#f0bb57] transition-all duration-200 shadow-md shadow-[#D99B26]/20 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#D99B26] text-[#0E281E] sm:hidden shadow-xs"
              aria-label="WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E281E]/98 backdrop-blur-xl border-t border-white/10 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-[#D99B26] font-semibold'
                      : 'text-stone-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D99B26] text-[#0E281E] font-semibold text-xs hover:bg-[#e5a93c]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 text-white font-medium text-xs hover:bg-white/15"
              >
                Direct Web Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
