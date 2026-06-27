"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import { products } from "@/lib/products";

const featured = products.filter((p) => p.badge).slice(0, 4);

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
            The spices every Khandeshi home swears by — from Bhaskar Masale,
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
          {featured.map((product, idx) => (
            <motion.div
              key={product.slug}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/10 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-cream-dark to-cream border-b border-black/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={idx < 4}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md shadow-sm border border-white/5">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 lg:p-5">
                  <h3 className="font-heading font-semibold text-charcoal text-sm lg:text-base mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-warm-gray text-xs mb-3">{product.weight}</p>
                  {product.category === "Chilli Varieties" && product.spiceLevel && (
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-xs font-semibold text-warm-gray">Spice:</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        product.spiceLevel === "Low"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : product.spiceLevel === "Medium"
                          ? "bg-amber-100 text-amber-700 border border-amber-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                      }`}>
                        {product.spiceLevel === "High" ? "🌶️🌶️🌶️ High" : product.spiceLevel === "Medium" ? "🌶️🌶️ Med" : "🌶️ Low"}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
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
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
