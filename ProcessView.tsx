import React from 'react';
import {
  farmSeedsImage,
  processingImage,
  showcaseBottlesImage,
  heroImage,
  getWhatsAppUrl,
} from '../config/siteConfig';
import {
  Sprout,
  CheckCircle2,
  ShieldCheck,
  Package,
  Droplets,
  Truck,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

interface ProcessViewProps {
  onNavigate: (page: string) => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#3F6338] bg-[#3F6338]/10 py-1.5 px-3 rounded-full">
          <Sprout className="w-4 h-4 text-[#3F6338]" />
          <span>Transparent In-House Production</span>
        </div>
        <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E281E] leading-tight">
          From Seed to Bottle
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          Explore our four-step journey. We oversee every single stage within
          our direct ecosystem—ensuring that from the moment seeds leave the
          soil to the time the bottle reaches your kitchen, nothing is left to
          chance.
        </p>
      </div>

      {/* 4 In-Depth Process Sections */}
      <div className="space-y-16">
        {/* Step 1: Seed Sourcing */}
        <section className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-[#FBF9F4]">
                <img
                  src={farmSeedsImage}
                  alt="Seed sourcing with farmers"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-4/3 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#D99B26] bg-[#0E281E] px-3 py-1 rounded-lg">
                  Step 01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
                  Agricultural Direct Sourcing
                </span>
              </div>

              <h2 className="font-serif-brand text-3xl font-bold text-[#0E281E]">
                Seed Sourcing & Farmer Connection
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Great edible oil begins on agricultural land with healthy,
                properly matured seeds. We collaborate directly with our farmers
                group to source whole, undamaged oil seeds including groundnut,
                sunflower, mustard, sesame, safflower, niger seed, coconut, and
                almonds.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct grower procurement:</strong> Seeds are selected
                    in close contact with farming families without anonymous
                    broker pools.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Seed cleaning & grading:</strong> Thorough removal of
                    sticks, stones, dust, and immature kernels before any pressing
                    begins.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Optimal moisture control:</strong> Natural sun-drying
                    to prevent moisture spoilage and safeguard oil aroma.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Processing */}
        <section className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#D99B26] bg-[#0E281E] px-3 py-1 rounded-lg">
                  Step 02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
                  In-House Extraction
                </span>
              </div>

              <h2 className="font-serif-brand text-3xl font-bold text-[#0E281E]">
                Controlled Mechanical In-House Pressing
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Rather than sending raw seeds to contract mills where batch
                purity cannot be monitored, Villagers Farm conducts all oil
                extraction within our own managed production facility.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <Droplets className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Mechanical expeller extraction:</strong> Gentle
                    crushing and pressing of seeds to naturally express the oil.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <ShieldCheck className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Hygienic equipment:</strong> Food-grade stainless
                    steel contact points that preserve the seed’s natural flavor
                    and aroma.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Natural extraction integrity:</strong> We rely solely
                    on physical pressing principles to deliver authentic taste.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-[#FBF9F4]">
                <img
                  src={processingImage}
                  alt="In-house pressing facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-4/3 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Quality & Packaging */}
        <section className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-[#FBF9F4]">
                <img
                  src={showcaseBottlesImage}
                  alt="Packaging and quality check"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-4/3 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#D99B26] bg-[#0E281E] px-3 py-1 rounded-lg">
                  Step 03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
                  Sedimentation & Bottling
                </span>
              </div>

              <h2 className="font-serif-brand text-3xl font-bold text-[#0E281E]">
                Sedimentation, Filtration & Clean Bottling
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Freshly pressed oil contains natural micro-particles from the
                seed kernel. We allow the oil to rest in settling tanks,
                enabling natural gravitational sedimentation before fine cloth or
                mesh filtration.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <Package className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Food-grade bottling containers:</strong> Airtight
                    sealing protects each batch against oxidation, dust, and
                    humidity.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Batch traceability:</strong> Clear packaging records
                    so customers know when and where the oil was prepared.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <ShieldCheck className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tamper-evident sealing:</strong> Secure closures to
                    ensure what was bottled at our facility is what arrives in
                    your hands.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Ready for Your Home */}
        <section className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#D99B26] bg-[#0E281E] px-3 py-1 rounded-lg">
                  Step 04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3F6338]">
                  Home Delivery & Dispatch
                </span>
              </div>

              <h2 className="font-serif-brand text-3xl font-bold text-[#0E281E]">
                Ready for Your Home
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                The journey completes in your kitchen. By facilitating direct
                enquiries on WhatsApp and providing swift customer service,
                Villagers Farm brings pure edible oil into everyday family meals
                without the ambiguity of lengthy commercial warehouse storage.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <Truck className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct packaging to door:</strong> Fresh stock
                    dispatched with secure protective packaging.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#3F6338] shrink-0 mt-0.5" />
                  <span>
                    <strong>Accessible customer care:</strong> Immediate enquiry
                    support on WhatsApp for questions, feedback, or re-orders.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-[#FBF9F4]">
                <img
                  src={heroImage}
                  alt="Bottles ready for home delivery"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-4/3 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-[#D99B26]/15 via-[#D99B26]/25 to-[#3F6338]/15 border border-[#D99B26]/30 rounded-3xl p-8 sm:p-14 text-center space-y-6">
        <h3 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#0E281E]">
          Experience Pure In-House Extraction
        </h3>
        <p className="text-sm sm:text-base text-stone-700 max-w-xl mx-auto leading-relaxed">
          Talk to our team on WhatsApp to learn more about our current batches
          and place an enquiry for your household.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl('Hello Villagers Farm, I read about your in-house process and would like to enquire about your edible oil products.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enquire on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => {
              onNavigate('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-stone-300 text-[#0E281E] font-bold text-xs sm:text-sm hover:bg-stone-50 cursor-pointer"
          >
            Browse Products Range
          </button>
        </div>
      </div>
    </div>
  );
};
