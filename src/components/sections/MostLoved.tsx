"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const products = [
  {
    name: "Chilli Powder Deluxe",
    weight: "100g / 200g / 500g",
    price: "₹65",
    originalPrice: "₹85",
    image: "/images/chili.png",
    badge: "Best Seller",
  },
  {
    name: "Turmeric Powder Premium",
    weight: "100g / 200g / 500g",
    price: "₹55",
    originalPrice: "₹70",
    image: "/images/turmeric.png",
    badge: "Premium",
  },
  {
    name: "Garam Masala",
    weight: "50g / 100g / 200g",
    price: "₹75",
    originalPrice: "₹95",
    image: "/images/cumin.png",
    badge: "Popular",
  },
  {
    name: "Coriander Powder Deluxe",
    weight: "100g / 200g / 500g",
    price: "₹45",
    originalPrice: "₹60",
    image: "/images/coriander.png",
    badge: null,
  },
];

export default function MostLoved() {
  return (
    <section
      id="products"
      className="py-20 lg:py-28 bg-cream section-padding"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
            Favourites
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            Most Loved in Indian Kitchens
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto leading-relaxed">
            The spices every Khandeshi home swears by — from Bhaskar Foods,
            with uncompromising quality and flavour since 1972.
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                {/* Quick add button */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button 
                    suppressHydrationWarning
                    className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent-light transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 lg:p-5">
                <h3 className="font-heading font-semibold text-charcoal text-sm lg:text-base mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-warm-gray text-xs mb-3">{product.weight}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-bold text-lg">
                    {product.price}
                  </span>
                  <span className="text-warm-gray text-sm line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <button 
                  suppressHydrationWarning
                  className="w-full bg-[#CC8800] text-white hover:bg-[#B37700] transition-colors duration-300 py-2.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button suppressHydrationWarning className="btn-primary">View All Products</button>
        </motion.div>
      </div>
    </section>
  );
}
