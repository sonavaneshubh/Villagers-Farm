import React from 'react';
import {
  heroImage,
  farmSeedsImage,
  processingImage,
  showcaseBottlesImage,
  productsData,
  whyChooseFeatures,
  siteConfig,
  getWhatsAppUrl,
} from '../config/siteConfig';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import {
  MessageCircle,
  ArrowRight,
  Sprout,
  Users,
  ShieldCheck,
  Check,
  Package,
  Layers,
  Sparkles,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onViewProductDetails: (product: Product) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onViewProductDetails,
}) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* ========================================================
          HERO SECTION (Modern Asymmetric Luxury Editorial)
          ======================================================== */}
      <section className="relative pt-24 sm:pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0E281E] via-[#123325] to-[#FBF9F4]">
        {/* Subtle geometric grid ambient backdrop */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D99B26_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Brand Message & Primary CTAs */}
            <div className="lg:col-span-7 space-y-7 text-white text-center lg:text-left">
              {/* Unboxed natural kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D99B26] bg-white/5 py-1.5 px-3.5 rounded-full border border-white/10 backdrop-blur-xs">
                <Sprout className="w-4 h-4 text-[#D99B26]" />
                <span>Pure In-House Edible Oil Manufacturing</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05] text-balance">
                From Our Farmers Group to Your Home
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Bringing the goodness of carefully sourced seeds to your home
                through our in-house process, from seed to bottle.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
                <button
                  onClick={() => {
                    onNavigate('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D99B26] to-[#e5a93c] text-[#0E281E] font-bold text-sm hover:from-[#e5a93c] hover:to-[#f0bb57] transition-all duration-200 shadow-lg shadow-[#D99B26]/20 active:scale-98 cursor-pointer"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all cursor-pointer backdrop-blur-xs"
                >
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Modern Trust Highlights Strip */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-sm sm:text-base font-bold text-[#D99B26]">100% Direct</div>
                  <div className="text-[11px] text-stone-300">Farmer Sourcing</div>
                </div>
                <div className="space-y-0.5 border-l border-white/15 pl-3">
                  <div className="text-sm sm:text-base font-bold text-[#D99B26]">In-House</div>
                  <div className="text-[11px] text-stone-300">Mechanical Press</div>
                </div>
                <div className="space-y-0.5 border-l border-white/15 pl-3">
                  <div className="text-sm sm:text-base font-bold text-[#D99B26]">9 Pure Oils</div>
                  <div className="text-[11px] text-stone-300">Seed Varieties</div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Modern Framed Visual with Glow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white">
                  <img
                    src={heroImage}
                    alt="Villagers Farm harvest fields and premium cold-pressed oil bottles"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto aspect-4/3 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5 sm:p-6">
                    <div className="space-y-1">
                      <p className="text-[#D99B26] text-xs font-bold uppercase tracking-wider">
                        Managed In-House
                      </p>
                      <p className="text-white text-sm sm:text-base font-medium">
                        Pure cold extraction from sound seeds to finished bottle
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Floating Badge */}
                <div className="mt-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-stone-200/90 shadow-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0E281E] flex items-center justify-center text-[#D99B26]">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0E281E]">
                        Villagers Farm Group
                      </div>
                      <div className="text-[11px] text-stone-500">
                        Traditional values with modern technology
                      </div>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-xs active:scale-95"
                    aria-label="Direct WhatsApp Enquiry"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          BRAND INTRODUCTION SECTION
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Supporting Agricultural Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-[#FBF9F4]">
                <img
                  src={farmSeedsImage}
                  alt="Farmers carefully inspecting harvested oil seeds"
                  referrerPolicy="no-referrer"
                  className="w-full h-full aspect-4/3 object-cover"
                  loading="lazy"
                />
                <div className="p-3.5 bg-white text-[11px] text-stone-600 border-t border-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3F6338]" />
                  <span>Direct partnership with farmers inspecting harvested oil seeds</span>
                </div>
              </div>
            </div>

            {/* Brand Intro Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
                About Our Core Philosophy
              </div>

              <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E281E] leading-tight">
                Rooted in Farming. Made for Your Home.
              </h2>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                At Villagers Farm, we believe in bringing farmers and customers
                closer. Our journey begins with seeds and continues through our
                in-house processing approach to deliver edible oil products to
                customers.
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                We believe that honest cooking begins with uncompromised seeds.
                By taking full responsibility for the extraction and packaging
                stages within our own monitored facility, we bridge the gap
                between traditional agricultural stewardship and everyday
                kitchen health.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E281E] hover:text-[#3F6338] transition-colors cursor-pointer"
                >
                  <span>Learn more about our farmer connection & story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR PRODUCT CATEGORIES / PREVIEW
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
              Pure Edible Oils
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0E281E]">
              Explore Our Products
            </h2>
            <p className="text-sm text-stone-600 max-w-xl">
              Nine distinctive edible oils prepared through our in-house
              process. Inquire on WhatsApp for current packaging and product
              details.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl border border-[#0E281E] text-[#0E281E] hover:bg-[#0E281E] hover:text-white transition-all cursor-pointer shrink-0"
          >
            <span>View Full 9-Product Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 9 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProductDetails}
            />
          ))}
        </div>
      </section>

      {/* ========================================================
          OUR JOURNEY / PROCESS: FROM SEED TO BOTTLE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
            In-House Method
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0E281E]">
            From Seed to Bottle
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Every step is managed with care to ensure purity, aroma, and natural
            character without shortcuts or unverified additives.
          </p>
        </div>

        <ProcessTimeline
          onLearnMore={() => {
            onNavigate('process');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </section>

      {/* ========================================================
          WHY CHOOSE VILLAGERS FARM?
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
            Core Values
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0E281E]">
            Why Villagers Farm?
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Built on transparency, equitable agricultural relationships, and
            rigorous in-house execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseFeatures.map((feat, idx) => {
            const icons = [Users, ShieldCheck, Layers, Package];
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={feat.title}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:border-[#D99B26]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FBF9F4] text-[#0E281E] flex items-center justify-center border border-stone-100">
                  <IconComponent className="w-6 h-6 stroke-[1.8] text-[#3F6338]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-brand text-xl font-bold text-[#0E281E]">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#3F6338]">
                    {feat.tagline}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          BRAND STORY SECTION: SUPPORTING FARMERS. SERVING FAMILIES.
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#0E281E] text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Story Text */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D99B26]">
                Brand Story
              </span>

              <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Supporting Farmers. Serving Families.
              </h2>

              <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
                Agriculture is the foundation of our country’s food traditions.
                Villagers Farm was formed with a clear belief: that families
                deserve real, wholesome edible oils, and that farmers deserve
                appreciation and direct linkages with the households they
                nourish.
              </p>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                By maintaining in-house mechanical extraction and adhering to
                transparent procedures from the moment seeds arrive from our
                farming collective, we ensure authentic taste, natural aroma,
                and trustworthy standards in every drop.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D99B26] to-[#e5a93c] text-[#0E281E] font-bold text-xs sm:text-sm hover:from-[#e5a93c] hover:to-[#f0bb57] transition-all shadow-md cursor-pointer"
                >
                  Read Our Full Story
                </button>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Connect with Our Team</span>
                </a>
              </div>
            </div>

            {/* Farm Visual Side */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={farmSeedsImage}
                alt="Supporting farmers and families"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0E281E] lg:from-[#0E281E] to-transparent opacity-70 lg:opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CALL-TO-ACTION SECTION
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#D99B26]/12 via-[#D99B26]/20 to-[#3F6338]/12 border border-[#D99B26]/30 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#0E281E] text-[#D99B26] flex items-center justify-center mx-auto shadow-md">
            <Sprout className="w-7 h-7 stroke-[2]" />
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0E281E]">
              Bring Villagers Farm to Your Home
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              Explore our range of edible oil products and connect with our team
              for product details and enquiries.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Contact Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 font-bold text-sm transition-all shadow-xs cursor-pointer"
            >
              Submit Website Enquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
