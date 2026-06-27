"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const categories = [
  {
    name: "Basic Spices",
    image: "/products/HALDI POWDER.jpg",
    count: "Chilli, Turmeric, Coriander",
    filter: "Basic Spices",
  },
  {
    name: "Blended Masalas",
    image: "/products/GARAM MASALA.jpg",
    count: "Garam, Kala, Chai & more",
    filter: "Blended Masalas",
  },
  {
    name: "Chilli Varieties",
    image: "/products/KASHMIRI CHILLI .jpg",
    count: "Premium, Kashmiri, Teja",
    filter: "Chilli Varieties",
  },
  {
    name: "Gravies & Curries",
    image: "/products/CHICKEN MASALA.jpg",
    count: "Chicken, Mutton, Paneer",
    filter: "Gravies & Curries",
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
              className="group"
            >
              <Link
                href={`/products?category=${encodeURIComponent(cat.filter)}`}
                className="block cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 bg-gradient-to-b from-cream-dark to-cream border border-black/5">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-4 pb-20 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Glassmorphic bottom panel */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 pt-6 bg-gradient-to-t from-primary-dark/90 via-primary-dark/80 to-primary-dark/40 backdrop-blur-[6px] border-t border-white/10 transition-all duration-500 group-hover:from-primary-dark group-hover:via-primary-dark/95 group-hover:to-primary-dark/80">
                    <h3 className="font-heading font-semibold text-white text-base lg:text-lg mb-1 flex items-center justify-between">
                      {cat.name}
                      <span className="text-accent group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
                    </h3>
                    <p className="text-white/70 text-xs font-medium truncate">
                      {cat.count}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
