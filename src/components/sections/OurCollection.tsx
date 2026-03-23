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
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg shadow-black/5 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-accent/10 bg-gradient-to-b from-cream-dark to-cream">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
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
                <p className="text-warm-gray text-sm text-center mt-1">
                  {cat.count}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
