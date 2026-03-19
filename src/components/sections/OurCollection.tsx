"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const categories = [
  {
    name: "Basic Spices",
    image: "/images/turmeric.png",
    count: "Chilli, Turmeric, Coriander",
  },
  {
    name: "Blended Masalas",
    image: "/images/cumin.png",
    count: "Garam, Mutton, Chicken & more",
  },
  {
    name: "Khada Masala",
    image: "/images/coriander.png",
    count: "Khandeshi Special, Deluxe",
  },
  {
    name: "Seed Spices & Others",
    image: "/images/chili.png",
    count: "Jeera, Sauf, Kasoori Methi",
  },
];

export default function OurCollection() {
  return (
    <section
      id="collection"
      className="py-20 lg:py-28 bg-soft-white section-padding"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14 lg:mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
            Discover
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            Our Product Range
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Over 30 premium spice products — ground and packed in total hygiene
            at our ISO 9001 certified plant in Jalgaon, Maharashtra.
          </p>
        </motion.div>

        {/* Filter and Search */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Basic Spices", "Blended Masalas", "Khada Masala", "Seed Spices"].map((filter, idx) => (
              <button
                key={filter}
                suppressHydrationWarning
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  idx === 0
                    ? "bg-[#CC8800] text-white border border-[#CC8800]"
                    : "bg-transparent text-charcoal border border-black/10 hover:border-accent hover:text-accent"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              suppressHydrationWarning
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-black/10 focus:outline-none focus:border-accent bg-transparent text-sm"
            />
            <svg
              className="w-4 h-4 text-warm-gray absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg shadow-black/5 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-accent/10">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full inline-block text-center w-full">
                    View Range →
                  </span>
                </div>
              </div>
              <h3 className="font-heading font-semibold text-charcoal text-base lg:text-lg text-center group-hover:text-primary transition-colors duration-300">
                {cat.name}
              </h3>
              <p className="text-warm-gray text-sm text-center mt-1 mb-4">
                {cat.count}
              </p>
              <button 
                suppressHydrationWarning
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-[#CC8800] text-white hover:bg-[#B37700] transition-colors duration-300 py-2.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
