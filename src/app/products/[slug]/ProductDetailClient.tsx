"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import type { Product } from "@/lib/products";

interface Props {
  product: Product | null;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 section-padding min-h-screen bg-soft-white">
          <div className="section-container text-center py-20">
            <h1 className="text-3xl font-heading font-bold text-charcoal mb-4">
              Product Not Found
            </h1>
            <p className="text-warm-gray mb-8">
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/products" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 lg:pt-28 lg:pb-28 bg-soft-white">
        {/* Breadcrumb */}
        <div className="section-container section-padding mb-8">
          <nav className="flex items-center gap-2 text-sm text-warm-gray">
            <Link
              href="/"
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-cream-dark to-cream shadow-xl shadow-black/5"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 lg:p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <span className="absolute top-5 left-5 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  {product.badge}
                </span>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                {product.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-2">
                {product.name}
              </h1>

              {product.nameHindi && (
                <p className="text-warm-gray text-lg mb-6">{product.nameHindi}</p>
              )}

              <div className="flex items-center gap-4 mb-6">
                <span className="text-primary font-bold text-3xl">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-warm-gray text-xl line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Save{" "}
                    {Math.round(
                      ((parseInt(product.originalPrice.replace("₹", "")) -
                        parseInt(product.price.replace("₹", ""))) /
                        parseInt(product.originalPrice.replace("₹", ""))) *
                        100
                    )}
                    %
                  </span>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-charcoal font-semibold text-sm uppercase tracking-wider mb-2">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.weight.split(" / ").map((w) => (
                    <span
                      key={w}
                      className="px-4 py-2 border border-primary/20 rounded-full text-sm text-charcoal hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-charcoal font-semibold text-sm uppercase tracking-wider mb-3">
                  About This Product
                </h3>
                <p className="text-warm-gray leading-relaxed text-base">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🌿", label: "100% Natural" },
                  { icon: "🏭", label: "ISO 9001 Certified" },
                  { icon: "📦", label: "Hygienic Packing" },
                  { icon: "⭐", label: "Premium Quality" },
                ].map((feat) => (
                  <div
                    key={feat.label}
                    className="flex items-center gap-3 p-3 bg-cream rounded-xl"
                  >
                    <span className="text-xl">{feat.icon}</span>
                    <span className="text-charcoal text-sm font-medium">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="btn-outline !border-primary !text-primary hover:!bg-primary hover:!text-white"
                >
                  ← Back to Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="section-container section-padding mt-20">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal">
                Related Products
              </h2>
              <p className="text-warm-gray mt-2">
                More from {product.category}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
            >
              {related.map((rp) => (
                <motion.div
                  key={rp.slug}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <Link
                    href={`/products/${rp.slug}`}
                    className="block bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-cream-dark to-cream">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {rp.badge && (
                        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {rp.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-charcoal text-sm lg:text-base mb-1 group-hover:text-primary transition-colors">
                        {rp.name}
                      </h3>
                      <p className="text-warm-gray text-xs mb-2">
                        {rp.weight}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-bold text-base">
                          {rp.price}
                        </span>
                        {rp.originalPrice && (
                          <span className="text-warm-gray text-xs line-through">
                            {rp.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
