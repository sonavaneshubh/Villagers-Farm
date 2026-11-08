import React from 'react';
import {
  farmSeedsImage,
  processingImage,
  showcaseBottlesImage,
  siteConfig,
  getWhatsAppUrl,
} from '../config/siteConfig';
import {
  Sprout,
  Users,
  Compass,
  Target,
  CheckCircle2,
  HeartHandshake,
  Shield,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#3F6338] bg-[#3F6338]/10 py-1.5 px-3 rounded-full">
          <Sprout className="w-4 h-4 text-[#3F6338]" />
          <span>About Villagers Farm</span>
        </div>
        <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E281E] leading-tight text-balance">
          Bridging the Field and the Family Kitchen
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          Villagers Farm was founded on a simple, honest principle: connecting
          farmers directly with homes through quality edible oil products
          crafted with in-house care from seed to bottle.
        </p>
      </div>

      {/* 1. Our Story */}
      <section className="bg-white rounded-3xl border border-stone-200/80 shadow-xs p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
              1. Our Story
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0E281E] leading-tight">
              A Purpose-Driven Initiative Built Around Farming
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Every kitchen in India thrives on the character and aroma of good
              cooking oil. Yet over recent decades, extensive industrial supply
              chains separated families from the agricultural origins of what
              they consume.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Villagers Farm emerged to restore that connection. By establishing
              our own dedicated in-house processing setup and working in
              cooperation with a committed group of farmers, we oversee every
              stage. From the quality of harvested oil seeds to the final
              tamper-proof bottle, we take full responsibility for what enters
              your home.
            </p>
            <div className="p-4 sm:p-5 bg-[#FBF9F4] rounded-2xl border border-stone-200/80 text-xs sm:text-sm text-stone-700 italic font-serif-brand text-lg">
              "When you know the hands that grew the seeds and the press that
              extracted the oil, every meal is grounded in authenticity."
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-[#FBF9F4]">
              <img
                src={farmSeedsImage}
                alt="Villagers Farm farmers inspecting harvested seeds"
                referrerPolicy="no-referrer"
                className="w-full h-full aspect-4/3 object-cover"
              />
              <div className="p-3 bg-white text-[11px] text-stone-500 border-t border-stone-100">
                Working directly with regional growers and farmer collectives
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Vision & Mission Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xs space-y-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0E281E] text-[#D99B26] flex items-center justify-center shadow-xs">
              <Compass className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
                2. Our Vision
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#0E281E] mt-1">
                A Transparent Ecosystem for Edible Oils
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              To be recognized as a benchmark edible oil brand that champions
              direct farmer relationships, transparent food production, and
              unadulterated kitchen staples accessible to discerning households.
            </p>
          </div>
          <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#0E281E]">
            <CheckCircle2 className="w-4 h-4 text-[#3F6338]" />
            <span>Honest, direct farm-to-table food pathways</span>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xs space-y-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D99B26] text-[#0E281E] flex items-center justify-center shadow-xs">
              <Target className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
                3. Our Mission
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#0E281E] mt-1">
                Integrity in Every Extraction & Batch
              </h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              To source sound agricultural seeds, manage extraction in-house
              without reliance on external broker networks, and deliver edible
              oils that honor traditional cooking practices with contemporary
              cleanliness.
            </p>
          </div>
          <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#0E281E]">
            <CheckCircle2 className="w-4 h-4 text-[#3F6338]" />
            <span>Quality seed selection, rigorous mechanical expelling</span>
          </div>
        </div>
      </section>

      {/* 4. Our Connection with Farmers */}
      <section className="bg-[#0E281E] text-white rounded-3xl overflow-hidden shadow-xl">
        <div className="p-8 sm:p-12 lg:p-16 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D99B26]">
              4. Farmer Collaboration
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-white leading-tight">
              Our Connection with Farmers
            </h2>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
              At Villagers Farm, farmers are not merely suppliers in an invoice
              chain; they are our foundational partners. Our business model is
              centered around working closely with agricultural growers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/15">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-2">
              <Users className="w-6 h-6 text-[#D99B26]" />
              <h4 className="font-semibold text-base text-white">Direct Engagement</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                We maintain direct dialogues with farmers regarding seed
                selection, harvest timing, and post-harvest drying practices.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-2">
              <HeartHandshake className="w-6 h-6 text-[#D99B26]" />
              <h4 className="font-semibold text-base text-white">Equitable Recognition</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                By bypassing multi-layer middlemen, we foster mutually respectful
                relationships that incentivize high crop standards.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-2">
              <Shield className="w-6 h-6 text-[#D99B26]" />
              <h4 className="font-semibold text-base text-white">Purity at the Source</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Ensuring clean seed lots before transport to our extraction
                facility means our oil starts pure from the soil up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Seed-to-Bottle Process & 6. Our Commitment */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-white">
            <img
              src={processingImage}
              alt="Villagers Farm in-house oil expeller extraction"
              referrerPolicy="no-referrer"
              className="w-full h-auto aspect-4/3 object-cover"
            />
            <div className="p-3 bg-white text-[11px] text-stone-500 border-t border-stone-100">
              Clean in-house pressing with stainless-steel food contact machinery
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
              5. The In-House Methodology
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0E281E]">
              Our Seed-to-Bottle Process
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Managing our process in-house gives us complete quality control.
              We do not purchase bulk processed oil from unknown third-party
              aggregators. Instead, we receive seeds, clean them, press them
              mechanically, allow natural sedimentation, and package each bottle
              under hygienic guidelines.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
              6. Our Commitment to Customers
            </span>
            <h3 className="font-serif-brand text-2xl font-bold text-[#0E281E]">
              Honesty Over Exaggeration
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              We do not rely on sensational buzzwords or unverified claims. Our
              commitment is simple and steadfast: genuine edible oil from
              specified seeds, extracted with care, packaged securely, and
              supported by responsive customer service.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => {
                onNavigate('process');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E281E] text-white hover:bg-[#153a2c] font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>Explore The Process Timeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] font-semibold text-xs transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
