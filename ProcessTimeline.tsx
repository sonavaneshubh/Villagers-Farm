import React from 'react';
import { processSteps } from '../config/siteConfig';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessTimelineProps {
  onLearnMore?: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onLearnMore }) => {
  return (
    <div className="space-y-12">
      {/* Desktop Horizontal Process Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-6 relative">
        {/* Connecting Line behind numbers */}
        <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#D99B26]/20 via-[#D99B26]/50 to-[#3F6338]/40 -translate-y-28 z-0" />

        {processSteps.map((step) => (
          <div
            key={step.number}
            className="relative z-10 flex flex-col bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 group"
          >
            {/* Step Image */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-[#FBF9F4]">
              <img
                src={step.image}
                alt={step.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#0E281E] text-[#D99B26] text-xs font-bold py-1 px-2.5 rounded-lg shadow-sm border border-white/10">
                {step.number}
              </div>
            </div>

            {/* Step Content */}
            <div className="space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-brand text-xl font-bold text-[#0E281E] leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#3F6338] mt-0.5">
                  {step.headline}
                </p>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-3 border-t border-stone-100 mt-3 space-y-1.5">
                {step.details.slice(0, 2).map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6338] shrink-0 mt-0.5" />
                    <span className="leading-tight">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Vertical Timeline */}
      <div className="lg:hidden space-y-6 relative pl-6 before:absolute before:left-2 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#D99B26]/40">
        {processSteps.map((step) => (
          <div key={step.number} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-[#0E281E] border-2 border-[#D99B26] flex items-center justify-center shadow-xs" />

            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#D99B26] bg-[#0E281E] px-2.5 py-1 rounded-lg">
                  Step {step.number}
                </span>
                <span className="text-xs font-bold text-[#3F6338]">
                  In-House Managed
                </span>
              </div>

              <div className="aspect-16/9 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src={step.image}
                  alt={step.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="font-serif-brand text-2xl font-bold text-[#0E281E]">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#3F6338] mt-0.5">
                  {step.headline}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 space-y-1.5">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6338] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {onLearnMore && (
        <div className="text-center pt-2">
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0E281E] hover:text-[#3F6338] transition-colors cursor-pointer"
          >
            <span>Read complete in-depth processing methodology</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
