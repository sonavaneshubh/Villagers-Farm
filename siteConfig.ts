import { Product, ProcessStep, FeatureCard, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brandName: 'Villagers Farm',
  tagline: 'From Our Farmers Group to Your Home',
  brandConcept:
    'Villagers Farm focuses on connecting farmers and customers through quality edible oil products. The company manages its process in-house, from seeds to the final bottle.',
  whatsapp: {
    phoneNumber: '919284977337',
    displayPhone: '+91 92849 77337',
    defaultMessage: 'Hello Villagers Farm, I visited your website and would like to know more about your products.',
  },
  contact: {
    phonePlaceholder: '+91 92849 77337',
    emailPlaceholder: 'contact@villagersfarm.example [To be provided by owner]',
    addressPlaceholder: 'Manufacturing Facility & Office Address [To be provided by owner, Maharashtra / India]',
    workingHours: 'Monday – Saturday, 9:00 AM – 6:00 PM IST',
    socialLinks: {
      instagram: '#',
      facebook: '#',
      youtube: '#',
      linkedin: '#',
    },
  },
  palette: {
    forestGreen: '#0E281E',
    oliveGreen: '#3F6338',
    warmCream: '#FBF9F4',
    goldenYellow: '#D99B26',
    white: '#FFFFFF',
    darkText: '#1C221E',
  },
};

export const heroImage = '/src/assets/images/hero_villagers_farm_1794112040204.jpg';
export const farmSeedsImage = '/src/assets/images/farm_farmers_seeds_1794112041082.jpg';
export const processingImage = '/src/assets/images/oil_processing_press_1794112041408.jpg';
export const showcaseBottlesImage = '/src/assets/images/product_showcase_bottles_1794112041421.jpg';

export const productsData: Product[] = [
  {
    id: 'groundnut-oil',
    name: 'Groundnut Oil',
    hindiName: 'Mungfali Tel / Shengdana Tel',
    seedType: 'Selectively Harvested Groundnut Seeds',
    category: 'Everyday Essentials',
    shortDescription:
      'Carefully pressed from quality whole groundnut seeds. A staple culinary cooking oil with a natural nutty aroma and balanced smoke point.',
    detailedDescription:
      'Our groundnut oil is extracted in-house from whole groundnut seeds directly sourced from our farmer network. Retains its authentic golden hue, gentle nutty character, and culinary versatility for everyday Indian cooking and deep sauteing.',
    culinaryUsage: ['Daily Indian curries & sabzis', 'Traditional tadka & tempering', 'Deep frying & shallow roasting'],
    seedAttributes: ['Selected whole groundnut kernels', 'In-house expeller cold-pressing', 'Natural unfiltered clarity sediment settled naturally'],
    packagingOptionsPlaceholder: ['500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)', '5 Litre Can (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'sunflower-oil',
    name: 'Sunflower Oil',
    hindiName: 'Surajmukhi Tel',
    seedType: 'Sun-dried Sunflower Seeds',
    category: 'Everyday Essentials',
    shortDescription:
      'Light golden edible oil extracted from cleaned sunflower seeds. Features a light texture and mild flavor suited for all-purpose home cooking.',
    detailedDescription:
      'Extracted through our managed in-house pressing procedure to preserve the seed’s inherent lightness. Ideal for families desiring an unflavored, neutral cooking medium that lets raw ingredients shine.',
    culinaryUsage: ['Light baking & continental dishes', 'Everyday home cooking & stir-fries', 'Salad dressings and dips'],
    seedAttributes: ['Cleaned sunflower seeds', 'Non-chemically bleached', 'Natural light golden hue'],
    packagingOptionsPlaceholder: ['500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)', '5 Litre Can (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'black-sesame-oil',
    name: 'Black Sesame Oil',
    hindiName: 'Kala Til Tel',
    seedType: 'Rich Indigenous Black Sesame Seeds',
    category: 'Traditional Cold-Pressed',
    shortDescription:
      'Traditional cold-pressed black sesame oil known for its deep aromatic intensity, dark golden tones, and heritage culinary significance.',
    detailedDescription:
      'Pressed in small batches from indigenous black sesame seeds sourced from local growers. Cherished across Indian households for traditional culinary preparations, seasoning, and heritage home recipes.',
    culinaryUsage: ['South Indian idli/dosa podi mixing', 'Traditional pickles & chutneys', 'Aromatic finishing drizzle on warm rice'],
    seedAttributes: ['Premium sun-cured black sesame', 'Traditional slow-speed pressing', 'Dense earthy aroma'],
    packagingOptionsPlaceholder: ['250 ml Bottle (Available on enquiry)', '500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'mustard-oil',
    name: 'Mustard Oil',
    hindiName: 'Sarson Ka Tel',
    seedType: 'Whole Yellow & Brown Mustard Seeds',
    category: 'Traditional Cold-Pressed',
    shortDescription:
      'Pungent, authentic, and golden-amber mustard oil pressed directly from high-pungency mustard seeds. The heartbeat of North & East Indian cuisines.',
    detailedDescription:
      'Prepared through mechanical seed cleaning and controlled cold expeller extraction to retain its naturally robust sharpness and pungent aroma. A time-tested staple for authentic pickles, fish curries, and vegetable preparations.',
    culinaryUsage: ['Traditional pickling (Achaar)', 'Authentic mustard fish curries', 'Smoky tempering for lentils and greens'],
    seedAttributes: ['Selected brown and yellow mustard seeds', 'Traditional cold expeller extraction', 'Natural sharp pungency retained'],
    packagingOptionsPlaceholder: ['500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)', '5 Litre Tin/Can (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'safflower-oil',
    name: 'Safflower Oil',
    hindiName: 'Kardi Tel',
    seedType: 'Naturally Dried Safflower Seeds',
    category: 'Everyday Essentials',
    shortDescription:
      'Traditional golden edible oil from safflower seeds (Kardi). Renowned for its subtle delicacy and exceptional heat tolerance.',
    detailedDescription:
      'Safflower oil is extracted in-house from carefully cleaned safflower seeds. Known in Western and Central India as Kardi oil, it provides a clean mouthfeel and versatile performance across various cooking styles.',
    culinaryUsage: ['Everyday sautéing and cooking', 'Crispy roasting & frying', 'Delicate batters and curries'],
    seedAttributes: ['Graded safflower seeds', 'Gentle mechanical pressing', 'Delicate mild aroma'],
    packagingOptionsPlaceholder: ['500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)', '5 Litre Can (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'niger-seed-oil',
    name: 'Niger Seed Oil',
    hindiName: 'Khursani / Karale Tel',
    seedType: 'Indigenous Niger Seeds (Karale)',
    category: 'Traditional Cold-Pressed',
    shortDescription:
      'A distinctive regional specialty oil pressed from tiny, oil-rich niger seeds. Highly prized in Maharashtra and regional Indian kitchens.',
    detailedDescription:
      'Extracted directly from farmer-cultivated niger seeds (Karale/Khursani). It possesses a nutty, roasted fragrance and is celebrated in regional gastronomy for signature dry chutneys and rustic curries.',
    culinaryUsage: ['Maharashtrian dry chutney preparations', 'Rustic village curries (Rassa)', 'Spiced grain accompaniments'],
    seedAttributes: ['Hand-sorted indigenous niger seeds', 'In-house small batch extraction', 'Signature regional nutty note'],
    packagingOptionsPlaceholder: ['250 ml Bottle (Available on enquiry)', '500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    hindiName: 'Nariyal Tel',
    seedType: 'Sun-dried Mature Copra (Coconut Kernels)',
    category: 'Everyday Essentials',
    shortDescription:
      'Fragrant, clear, and rich edible oil extracted from mature sun-dried copra. Imparts authentic tropical warmth to cooking.',
    detailedDescription:
      'Extracted from select mature dried coconuts through in-house pressing. Delivers a clean, authentic coconut fragrance and pure clarity. Excellent for coastal delicacies, traditional curries, and confectionery.',
    culinaryUsage: ['Coastal coastal curries & seafood', 'South Indian vegetable avial & poriyal', 'Traditional homemade sweets & snacks'],
    seedAttributes: ['Naturally cured mature coconut copra', 'Pure mechanical expression', 'Fresh sweet coconut aroma'],
    packagingOptionsPlaceholder: ['250 ml Jar/Bottle (Available on enquiry)', '500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'white-sesame-oil',
    name: 'White Sesame Oil',
    hindiName: 'Safed Til Tel',
    seedType: 'Cleaned White Sesame Seeds',
    category: 'Traditional Cold-Pressed',
    shortDescription:
      'Subtle and pleasantly sweet cold-pressed oil from premium white sesame seeds. A gentle, elegant cooking and dressing oil.',
    detailedDescription:
      'Meticulously pressed from white sesame seeds to yield an oil that is milder in color and flavor compared to black sesame. A versatile addition for both everyday seasoning and festive cooking.',
    culinaryUsage: ['Festive delicacies and snacks', 'Subtle dressings and light marinades', 'Traditional savory flatbreads & rotis'],
    seedAttributes: ['Graded white sesame seeds', 'Slow in-house cold pressing', 'Mellow golden clarity'],
    packagingOptionsPlaceholder: ['250 ml Bottle (Available on enquiry)', '500 ml Bottle (Available on enquiry)', '1 Litre Bottle (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
  {
    id: 'almond-oil',
    name: 'Almond Oil',
    hindiName: 'Badam Tel',
    seedType: 'Selected Whole Sweet Almond Kernels',
    category: 'Specialty Oils',
    shortDescription:
      'Exquisite, pale golden edible oil pressed from whole sweet almonds. A luxurious, delicately flavored specialty oil.',
    detailedDescription:
      'Carefully pressed from high-quality sweet almonds using gentle mechanical pressing to capture the natural essence of the kernel. Prized for gourmet culinary finishes, warm milk drinks, and premium household use.',
    culinaryUsage: ['Gourmet finishing for desserts & halwas', 'Warm milk infusions & traditional preparations', 'Delicate bakery and confection craft'],
    seedAttributes: ['Select sweet almond kernels', 'Micro-batch gentle pressing', 'Light golden purity and subtle nutty taste'],
    packagingOptionsPlaceholder: ['100 ml Bottle (Available on enquiry)', '250 ml Bottle (Available on enquiry)', '500 ml Bottle (Available on enquiry)'],
    priceNote: 'Pricing & packaging options provided upon enquiry directly from brand',
    image: showcaseBottlesImage,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Seed Sourcing',
    headline: 'Agricultural Seeds directly connected with Growers',
    description:
      'Our journey begins right on the agricultural farm. We work directly with our farmers group to identify clean, mature, and sound oil seeds—ensuring natural seed quality from the very first step.',
    details: [
      'Grown and harvested in partnership with regional farming communities',
      'Careful manual & mechanical seed cleaning to eliminate field chaff and foreign debris',
      'No reliance on anonymous bulk commodity broker chains',
    ],
    image: farmSeedsImage,
  },
  {
    number: '02',
    title: 'Processing',
    headline: 'Controlled In-House Mechanical Pressing',
    description:
      'Instead of outsourcing production to third-party mills, Villagers Farm manages its extraction in-house. We use gentle mechanical pressing that respects the seed structure and yields genuine oil.',
    details: [
      'Managed under controlled in-house parameters without chemical solvents',
      'Preserves natural seed aroma, true color, and characteristic taste',
      'Transparent production environment designed for food-grade cleanliness',
    ],
    image: processingImage,
  },
  {
    number: '03',
    title: 'Quality & Packaging',
    headline: 'Hygienic Bottling & Secure Packaging',
    description:
      'The extracted oil undergoes natural sedimentation and clean food-grade micro-filtration before being filled into airtight containers to safeguard freshness on its way to your kitchen.',
    details: [
      'Natural sedimentation settling rather than harsh chemical clarifying',
      'Food-safe bottle filling in clean, monitored conditions',
      'Tamper-evident seals preserving flavor integrity',
    ],
    image: showcaseBottlesImage,
  },
  {
    number: '04',
    title: 'Ready for Your Home',
    headline: 'Direct From Our Facility to Your Kitchen',
    description:
      'The finished bottle arrives directly at your home. By connecting our farmers group directly with consumers, we bring complete honesty and fresh batch reliability to everyday meals.',
    details: [
      'Direct enquiry & ordering channel through WhatsApp and customer support',
      'Freshly prepared batches with transparent origin information',
      'Support for both household kitchens and bulk culinary enquiries',
    ],
    image: heroImage,
  },
];

export const whyChooseFeatures: FeatureCard[] = [
  {
    title: 'Farmer Connection',
    tagline: 'Bridging growers and consumers',
    description:
      'A business concept built around farmers and customers, fostering equitable relationships and genuine farm-origin transparency.',
  },
  {
    title: 'In-House Process',
    tagline: 'Full control from seed to bottle',
    description:
      'The company manages its operations directly in-house—from selecting whole seeds to pressing and bottling—without mysterious intermediary middlemen.',
  },
  {
    title: 'Product Variety',
    tagline: 'Nine diverse edible oil options',
    description:
      'A comprehensive range covering Groundnut, Sunflower, Mustard, Sesame, Safflower, Niger Seed, Coconut, and Almond oils for all Indian culinary styles.',
  },
  {
    title: 'Customer Focus',
    tagline: 'Accessible information & enquiry',
    description:
      'Direct, human-centered communication via WhatsApp and direct enquiry channels so you always speak with knowledgeable representatives.',
  },
];

// Helper to generate the exact WhatsApp link
export function getWhatsAppUrl(customMessage?: string, phoneNumberOverride?: string): string {
  const number = phoneNumberOverride || siteConfig.whatsapp.phoneNumber;
  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppUrl(productName: string, phoneNumberOverride?: string): string {
  const message = `Hello Villagers Farm, I am interested in your ${productName}. Please share the product details and available packaging options.`;
  return getWhatsAppUrl(message, phoneNumberOverride);
}
