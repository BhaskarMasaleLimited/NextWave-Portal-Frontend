"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products, categories } from "@/lib/products";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section className="pt-28 pb-20 lg:pt-32 lg:pb-28 section-padding min-h-screen bg-soft-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
            Our Range
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            All Products
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Explore our complete range of premium spices and masalas — crafted
            with care at our ISO 9001 certified facility in Jalgaon.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-charcoal border border-black/10 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-black/10 focus:outline-none focus:border-primary bg-white text-sm transition-colors"
            />
            <svg
              className="w-4 h-4 text-warm-gray absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-warm-gray text-sm mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && (
            <> in <span className="text-primary font-medium">{activeCategory}</span></>
          )}
        </p>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {filtered.map((product) => (
            <motion.div
              key={product.slug}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link
                href={`/products/${product.slug}`}
                className="block bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-cream-dark to-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-accent text-[11px] font-semibold tracking-wider uppercase mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-heading font-semibold text-charcoal text-sm lg:text-base mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-warm-gray text-xs mb-2">{product.weight}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-base">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-warm-gray text-xs line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-warm-gray text-lg">
              No products found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="pt-32 text-center text-warm-gray">Loading products...</div>}>
          <ProductsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
