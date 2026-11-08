import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProductsView } from './views/ProductsView';
import { ProcessView } from './views/ProcessView';
import { ContactView } from './views/ContactView';
import { Product } from './types';
import { productsData } from './config/siteConfig';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [contactProductPreFill, setContactProductPreFill] = useState<string>('');

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOpenProductDetailById = (productId: string) => {
    const found = productsData.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const handleOpenContactWithProduct = (productName?: string) => {
    setContactProductPreFill(productName || '');
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F4] text-[#1C221E] font-sans">
      {/* Top Sticky Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenContactWithProduct}
      />

      {/* Main Page Content with Framer Motion Page Transitions */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {activePage === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onViewProductDetails={handleViewProductDetails}
              />
            )}

            {activePage === 'about' && (
              <AboutView onNavigate={handleNavigate} />
            )}

            {activePage === 'products' && (
              <ProductsView
                onViewProductDetails={handleViewProductDetails}
                onOpenContactForm={handleOpenContactWithProduct}
              />
            )}

            {activePage === 'process' && (
              <ProcessView onNavigate={handleNavigate} />
            )}

            {activePage === 'contact' && (
              <ContactView initialProduct={contactProductPreFill} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenContactForm={(prodName) => {
          setSelectedProduct(null);
          handleOpenContactWithProduct(prodName);
        }}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProductDetail={handleOpenProductDetailById}
      />
    </div>
  );
}
