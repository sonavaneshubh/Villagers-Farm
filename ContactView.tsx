import React, { useState } from 'react';
import {
  siteConfig,
  productsData,
  getWhatsAppUrl,
} from '../config/siteConfig';
import {
  Sprout,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

interface ContactViewProps {
  initialProduct?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    productOfInterest: initialProduct || 'General Enquiry / All Products',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid name';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (e.g. 92849 77337)';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your enquiry';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleSendViaWhatsApp = () => {
    if (validate()) {
      const msg = `Hello Villagers Farm,
I submitted an enquiry via your website:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Email: ${formData.email || 'N/A'}
- Product: ${formData.productOfInterest}
- Message: ${formData.message}`;

      window.open(getWhatsAppUrl(msg), '_blank');
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#3F6338] bg-[#3F6338]/10 py-1.5 px-3 rounded-full">
          <Sprout className="w-4 h-4 text-[#3F6338]" />
          <span>Connect With Villagers Farm</span>
        </div>
        <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E281E] leading-tight">
          Contact Us & Product Enquiries
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          Have a question about our edible oil varieties, in-house extraction, or
          household delivery? Reach out to our team directly via WhatsApp or the
          enquiry form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Direct Contact Details & WhatsApp Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick WhatsApp Direct Card */}
          <div className="bg-[#0E281E] text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl border border-[#D99B26]/25">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-wider uppercase text-[#D99B26]">
                Fastest Response
              </span>
              <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-md text-stone-200">
                Direct Desk
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-brand text-2xl font-bold">
                WhatsApp Product Desk
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Connect directly with our customer desk for instantaneous product
                information, current harvest batch details, and delivery options.
              </p>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Details List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-5">
            <h4 className="font-serif-brand text-xl font-bold text-[#0E281E]">
              Direct Contact & Address
            </h4>

            <ul className="space-y-4 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#3F6338] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0E281E]">
                    Facility & Office Address
                  </div>
                  <div className="text-stone-500 text-xs mt-0.5 leading-relaxed">
                    {siteConfig.contact.addressPlaceholder}
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#3F6338] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0E281E]">Phone & WhatsApp Support</div>
                  <div className="text-xs mt-0.5">
                    <a
                      href={`tel:${siteConfig.whatsapp.phoneNumber}`}
                      className="text-stone-700 hover:text-[#0E281E] font-medium hover:underline"
                    >
                      {siteConfig.contact.phonePlaceholder}
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#3F6338] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0E281E]">Email Address</div>
                  <div className="text-stone-500 text-xs mt-0.5">
                    {siteConfig.contact.emailPlaceholder}
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#3F6338] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#0E281E]">Working Hours</div>
                  <div className="text-stone-500 text-xs mt-0.5">
                    {siteConfig.contact.workingHours}
                  </div>
                </div>
              </li>
            </ul>

            <div className="pt-2 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-[#3F6338]" />
              <span>All customer data is kept confidential.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-2xl bg-[#0E281E] text-[#D99B26] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8 stroke-[2.2]" />
                </div>
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#0E281E]">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Your enquiry regarding{' '}
                  <strong className="text-[#0E281E]">
                    {formData.productOfInterest}
                  </strong>{' '}
                  has been recorded. Our team will review your message and
                  respond promptly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        productOfInterest: 'General Enquiry / All Products',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold px-5 py-3 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello Villagers Farm, I just submitted an enquiry for ${formData.productOfInterest}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#0E281E]">
                    Send a Product Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Fill in your contact information and requirement. You can
                    also dispatch this enquiry directly via WhatsApp.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-stone-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-stone-900 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-stone-200 focus:border-[#D99B26]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-stone-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. 92849 77337"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-stone-900 focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-stone-200 focus:border-[#D99B26]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-stone-700">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-stone-900 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-stone-200 focus:border-[#D99B26]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Product of Interest */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-stone-700">
                    Product of Interest
                  </label>
                  <select
                    value={formData.productOfInterest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productOfInterest: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#D99B26] bg-white transition-colors"
                  >
                    <option value="General Enquiry / All Products">
                      General Enquiry / All Products
                    </option>
                    {productsData.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.seedType})
                      </option>
                    ))}
                    <option value="Bulk / Distributor Enquiry">
                      Bulk / Distributor Enquiry
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-stone-700">
                    Message / Quantity Details{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us what packaging sizes or quantities you are interested in, your delivery location, etc."
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-stone-900 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-400 bg-red-50/30'
                        : 'border-stone-200 focus:border-[#D99B26]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Dual Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-4 rounded-xl bg-[#0E281E] hover:bg-[#153a2c] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Google Maps / Location Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-serif-brand text-2xl font-bold text-[#0E281E]">
              Facility & Dispatch Location
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              {siteConfig.contact.addressPlaceholder}
            </p>
          </div>
          <span className="text-[11px] text-stone-500 bg-stone-100 px-3 py-1 rounded-full self-start sm:self-auto">
            Facility Location Map Placeholder
          </span>
        </div>

        {/* Styled Map Container */}
        <div className="relative aspect-16/7 sm:aspect-21/9 rounded-2xl overflow-hidden bg-[#0E281E]/5 border border-stone-200 flex items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#0E281E] text-[#D99B26] flex items-center justify-center mx-auto shadow-xs">
              <MapPin className="w-5 h-5 stroke-[2]" />
            </div>
            <h4 className="font-serif-brand text-lg font-bold text-[#0E281E]">
              Villagers Farm Extraction & Dispatch Center
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Upon confirmation of the official physical manufacturing and registered
              facility address by the business owner, this map frame will be bound to
              the verified Google Maps coordinates.
            </p>
            <div className="pt-1">
              <a
                href={getWhatsAppUrl('Hello Villagers Farm, can you share the exact facility location and dispatch address?')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0E281E] hover:text-[#3F6338] inline-flex items-center gap-1"
              >
                <span>Request location pin on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
