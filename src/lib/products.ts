export interface Product {
  slug: string;
  name: string;
  nameHindi?: string;
  category: string;
  image: string;
  weight: string;
  price: string;
  originalPrice?: string;
  badge?: string | null;
  description: string;
}

export const categories = [
  "All",
  "Basic Spices",
  "Blended Masalas",
  "Chilli Varieties",
  "Gravies & Curries",
  "Specialty",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  // ── Basic Spices ──
  {
    slug: "haldi-powder",
    name: "Haldi Powder",
    nameHindi: "हळदी पावडर",
    category: "Basic Spices",
    image: "/products/HALDI POWDER.jpg",
    weight: "100g / 200g / 500g",
    price: "₹55",
    originalPrice: "₹70",
    badge: "Premium",
    description:
      "Pure turmeric powder sourced from the finest farms. Rich golden colour, strong aroma, and packed with natural curcumin. A staple in every Indian kitchen.",
  },
  {
    slug: "dhana-powder",
    name: "Dhana Powder",
    nameHindi: "धना पावडर",
    category: "Basic Spices",
    image: "/products/DHANA PWD.jpg",
    weight: "100g / 200g / 500g",
    price: "₹45",
    originalPrice: "₹60",
    badge: null,
    description:
      "Freshly ground coriander powder with a warm, citrusy aroma. Essential for curries, dals, and chutneys. Made from handpicked coriander seeds.",
  },

  // ── Chilli Varieties ──
  {
    slug: "premium-chilli",
    name: "Premium Chilli Powder",
    nameHindi: "प्रीमियम मिरची पावडर",
    category: "Chilli Varieties",
    image: "/products/PREMIUM CHILLI .jpg",
    weight: "100g / 200g / 500g",
    price: "₹65",
    originalPrice: "₹85",
    badge: "Best Seller",
    description:
      "Our finest red chilli powder with a vibrant colour and balanced heat. Perfect for everyday cooking. Made from premium quality Guntur chillies.",
  },
  {
    slug: "kashmiri-chilli",
    name: "Kashmiri Chilli Powder",
    nameHindi: "कश्मिरी मिरची पावडर",
    category: "Chilli Varieties",
    image: "/products/KASHMIRI CHILLI .jpg",
    weight: "100g / 200g / 500g",
    price: "₹80",
    originalPrice: "₹100",
    badge: "Popular",
    description:
      "Mildly spiced Kashmiri chilli powder that gives dishes a deep red colour without excessive heat. Perfect for tandoori, curries, and gravies.",
  },
  {
    slug: "chapata-chilli",
    name: "Chapata Chilli Powder",
    nameHindi: "चपाटा मिरची पावडर",
    category: "Chilli Varieties",
    image: "/products/CHAPATA CHHILLI.jpg",
    weight: "100g / 200g / 500g",
    price: "₹70",
    originalPrice: "₹90",
    badge: null,
    description:
      "Authentic Khandeshi chapata chilli powder with a unique smoky flavour and moderate heat. A regional favourite for traditional recipes.",
  },
  {
    slug: "chapata-ras-chilli",
    name: "Chapata + Ras Chilli",
    nameHindi: "चपाटा + रस मिरची",
    category: "Chilli Varieties",
    image: "/products/CHAPATA + RAS CHILLI.jpg",
    weight: "100g / 200g / 500g",
    price: "₹75",
    originalPrice: "₹95",
    badge: null,
    description:
      "A special blend of chapata and ras chilli varieties. Delivers a perfect combination of colour, flavour, and heat for Khandeshi cuisine.",
  },
  {
    slug: "hatkutai-chilli",
    name: "Hatkutai Chilli Powder",
    nameHindi: "हतकुटाई मिरची",
    category: "Chilli Varieties",
    image: "/products/HATKUTAI CHILLI.jpg",
    weight: "100g / 200g / 500g",
    price: "₹60",
    originalPrice: "₹80",
    badge: null,
    description:
      "Traditional stone-ground (hatkutai) chilli powder with a coarse texture and robust flavour. Retains the natural oils and aroma of the chillies.",
  },
  {
    slug: "rasgulla-chilli",
    name: "Rasgulla Chilli Powder",
    nameHindi: "रसगुल्ला मिरची",
    category: "Chilli Varieties",
    image: "/products/RASGULLA CHILLI.jpg",
    weight: "100g / 200g / 500g",
    price: "₹65",
    originalPrice: "₹85",
    badge: null,
    description:
      "Unique rasgulla chilli variety known for its rich colour and medium heat. Adds vibrant colour and flavour to gravies and curries.",
  },
  {
    slug: "teja-chilli",
    name: "Teja Chilli Powder",
    nameHindi: "तेजा मिरची",
    category: "Chilli Varieties",
    image: "/products/TEJA CHILLI.jpg",
    weight: "100g / 200g / 500g",
    price: "₹70",
    originalPrice: "₹90",
    badge: "Hot",
    description:
      "High-heat Teja chilli powder for those who love extra spice. Known for its fiery kick and deep red hue. Use in moderation for best results.",
  },

  // ── Blended Masalas ──
  {
    slug: "garam-masala",
    name: "Garam Masala",
    nameHindi: "गरम मसाला",
    category: "Blended Masalas",
    image: "/products/GARAM MASALA.jpg",
    weight: "50g / 100g / 200g",
    price: "₹75",
    originalPrice: "₹95",
    badge: "Popular",
    description:
      "A premium blend of cinnamon, cardamom, cloves, black pepper, and more. Hand-blended in small batches for maximum freshness and aroma.",
  },
  {
    slug: "kala-masala",
    name: "Kala Masala",
    nameHindi: "काला मसाला",
    category: "Blended Masalas",
    image: "/products/KALA MASALA.jpg",
    weight: "50g / 100g / 200g",
    price: "₹85",
    originalPrice: "₹110",
    badge: "Khandeshi Special",
    description:
      "The signature Khandeshi spice blend. A complex mix of over 15 spices including coconut, sesame, and poppy seeds. Essential for authentic Khandeshi cooking.",
  },
  {
    slug: "chai-masala",
    name: "Chai Masala",
    nameHindi: "चाय मसाला",
    category: "Blended Masalas",
    image: "/products/CHAI MASALA.jpg",
    weight: "50g / 100g",
    price: "₹50",
    originalPrice: "₹65",
    badge: null,
    description:
      "A fragrant blend of ginger, cardamom, cinnamon, cloves, and black pepper for the perfect cup of masala chai. Makes every sip memorable.",
  },
  {
    slug: "kanda-lasoon-masala",
    name: "Kanda Lasoon Masala",
    nameHindi: "कांदा लसून मसाला",
    category: "Blended Masalas",
    image: "/products/KANDA LASOON MASALA.jpg",
    weight: "50g / 100g / 200g",
    price: "₹70",
    originalPrice: "₹90",
    badge: null,
    description:
      "A rich blend of dried onion and garlic with aromatic spices. Perfect base masala for Maharashtrian gravies, bhajis, and sabzis.",
  },
  {
    slug: "sambar-masala",
    name: "Sambar Masala",
    nameHindi: "सांबार मसाला",
    category: "Blended Masalas",
    image: "/products/SAMBAR MASALA.jpg",
    weight: "50g / 100g / 200g",
    price: "₹60",
    originalPrice: "₹75",
    badge: null,
    description:
      "Authentic South Indian sambar masala with a well-balanced blend of lentil spices. Makes delicious, restaurant-quality sambar at home.",
  },
  {
    slug: "pavbhaji-masala",
    name: "Pav Bhaji Masala",
    nameHindi: "पाव भाजी मसाला",
    category: "Blended Masalas",
    image: "/products/PAVBHAJI MASALA .jpg",
    weight: "50g / 100g / 200g",
    price: "₹60",
    originalPrice: "₹75",
    badge: null,
    description:
      "Street-food style pav bhaji masala that gives your bhaji the authentic Mumbai flavour. Rich, tangy, and perfectly spiced.",
  },
  {
    slug: "misal-masala",
    name: "Misal Masala",
    nameHindi: "मिसळ मसाला",
    category: "Blended Masalas",
    image: "/products/MISAL MASALA.jpg",
    weight: "50g / 100g / 200g",
    price: "₹65",
    originalPrice: "₹85",
    badge: null,
    description:
      "Spicy and flavourful misal masala for the beloved Maharashtrian breakfast dish. A perfect blend for making fiery, delicious misal pav.",
  },
  {
    slug: "khichadi-masala",
    name: "Khichadi Masala",
    nameHindi: "खिचडी मसाला",
    category: "Blended Masalas",
    image: "/products/KHICHADI MASALA.jpg",
    weight: "50g / 100g",
    price: "₹45",
    originalPrice: "₹55",
    badge: null,
    description:
      "A mild, comforting spice blend specially made for khichadi. Enhances the simple dal-rice dish with a warm, homely flavour.",
  },
  {
    slug: "shevbhaji-masala",
    name: "Shevbhaji Masala",
    nameHindi: "शेवभाजी मसाला",
    category: "Blended Masalas",
    image: "/products/SHEVBHAJI MASALA.jpg",
    weight: "50g / 100g",
    price: "₹55",
    originalPrice: "₹70",
    badge: null,
    description:
      "A special spice blend for the iconic Khandeshi shevbhaji. Adds the authentic taste and aroma that makes this dish a regional favourite.",
  },
  {
    slug: "tarri-masala",
    name: "Tarri Masala",
    nameHindi: "तर्री मसाला",
    category: "Blended Masalas",
    image: "/products/TARRI MASALA.jpg",
    weight: "50g / 100g / 200g",
    price: "₹70",
    originalPrice: "₹90",
    badge: null,
    description:
      "Jalgaon-famous tarri masala for the iconic tarri poha. A spicy, coconut-based masala that gives this breakfast dish its signature taste.",
  },

  // ── Gravies & Curries ──
  {
    slug: "chicken-masala",
    name: "Chicken Masala",
    nameHindi: "चिकन मसाला",
    category: "Gravies & Curries",
    image: "/products/CHICKEN MASALA.jpg",
    weight: "50g / 100g / 200g",
    price: "₹80",
    originalPrice: "₹100",
    badge: "Popular",
    description:
      "An aromatic spice blend specially crafted for chicken dishes. Makes restaurant-style chicken curry at home with authentic Khandeshi flavours.",
  },
  {
    slug: "chicken-biryani-masala",
    name: "Chicken Biryani Masala",
    nameHindi: "चिकन बिर्याणी मसाला",
    category: "Gravies & Curries",
    image: "/products/CHICKEN BIRYANI MASALA.jpg",
    weight: "50g / 100g",
    price: "₹85",
    originalPrice: "₹110",
    badge: null,
    description:
      "A luxurious spice blend for perfect biryani every time. Includes saffron-infused aromatics for a rich, layered biryani flavour.",
  },
  {
    slug: "chicken-gravy",
    name: "Chicken Gravy Masala",
    nameHindi: "चिकन ग्रेवी मसाला",
    category: "Gravies & Curries",
    image: "/products/CHICKEN GRAVY.jpg",
    weight: "50g / 100g / 200g",
    price: "₹75",
    originalPrice: "₹95",
    badge: null,
    description:
      "A thick, rich gravy masala for chicken curry. Produces a deeply flavoured, restaurant-quality gravy with minimal effort.",
  },
  {
    slug: "mutton-masala",
    name: "Mutton Masala",
    nameHindi: "मटन मसाला",
    category: "Gravies & Curries",
    image: "/products/MUTTON MASALA .jpg",
    weight: "50g / 100g / 200g",
    price: "₹90",
    originalPrice: "₹115",
    badge: "Premium",
    description:
      "A robust, full-bodied spice blend designed for mutton dishes. Tenderizes the meat while infusing deep, warm flavours.",
  },
  {
    slug: "mutton-gravy",
    name: "Mutton Gravy Masala",
    nameHindi: "मटन ग्रेवी मसाला",
    category: "Gravies & Curries",
    image: "/products/MUTTON GRAVY .jpg",
    weight: "50g / 100g / 200g",
    price: "₹85",
    originalPrice: "₹105",
    badge: null,
    description:
      "Specially blended for rich mutton gravy. Creates a thick, aromatic base that complements the richness of mutton perfectly.",
  },
  {
    slug: "paneer-gravy",
    name: "Paneer Gravy Masala",
    nameHindi: "पनीर ग्रेवी मसाला",
    category: "Gravies & Curries",
    image: "/products/PANEER GRAVY.jpg",
    weight: "50g / 100g",
    price: "₹65",
    originalPrice: "₹80",
    badge: null,
    description:
      "A mild, creamy spice blend for paneer gravies. Creates a smooth, restaurant-style gravy for paneer butter masala and more.",
  },
  {
    slug: "shahi-paneer-masala",
    name: "Shahi Paneer Masala",
    nameHindi: "शाही पनीर मसाला",
    category: "Gravies & Curries",
    image: "/products/SHAHI PANEER MASALA.jpg",
    weight: "50g / 100g",
    price: "₹70",
    originalPrice: "₹90",
    badge: null,
    description:
      "A luxurious blend for Shahi Paneer with notes of cardamom, mace, and nutmeg. Creates a creamy, aromatic, royal-style paneer dish.",
  },

  // ── Specialty ──
  {
    slug: "lasoon-chutney",
    name: "Lasoon Chutney",
    nameHindi: "लसून चटणी",
    category: "Specialty",
    image: "/products/LASOON CHUTNEY.jpg",
    weight: "100g / 200g",
    price: "₹50",
    originalPrice: "₹65",
    badge: "Khandeshi Special",
    description:
      "Authentic dry garlic chutney — a Khandeshi staple. Spicy, garlicky, and perfect with bhakri, thecha, or any meal. Ready to eat.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.category === product.category && p.slug !== slug)
    .slice(0, limit);
}
