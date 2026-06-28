"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 12, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=2400&q=90"
            alt="Colorful Indian spices"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="gradient-overlay" />
        {/* Extra warm gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center section-container section-padding pt-28 pb-20 lg:pt-32 lg:pb-28">
          <div className="lg:col-span-7 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-4"
            >
              Khandeshi Taste Makers Since 1972
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-4"
            >
              Pure Spices,
              <br />
              Honest Ingredients,
              <br />
              <span className="text-shimmer">Real Flavour</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-white/80 text-lg lg:text-xl max-w-lg mb-8 leading-relaxed"
            >
              We provide awesome Spices & Food Products for cooking delicious
              food. Trusted by families across India since 1972.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#collection" className="btn-primary btn-glow text-base">
                Explore Products
              </Link>
              <Link href="#sourcing" className="btn-outline text-base">
                About Company
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Floating Glassmorphic Badges */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 relative h-[360px] xl:h-[420px] w-full justify-center items-center">
            {/* Floating Badge 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="animate-float glass-panel-dark border border-white/10 p-4 xl:p-5 rounded-2xl flex items-center gap-3 xl:gap-4 absolute top-6 left-2 xl:top-10 xl:left-6 shadow-lg shadow-black/20 w-56 xl:w-64 cursor-default hover:border-accent/35 transition-colors duration-300"
            >
              <span className="text-2xl xl:text-3xl shrink-0">🌿</span>
              <div>
                <h4 className="text-white font-heading font-bold text-xs xl:text-sm">100% Pure Spices</h4>
                <p className="text-white/70 text-[10px] xl:text-[11px] mt-0.5 font-medium">No synthetic additives</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="animate-float-delayed glass-panel-dark border border-white/10 p-4 xl:p-5 rounded-2xl flex items-center gap-3 xl:gap-4 absolute bottom-8 right-2 xl:bottom-12 xl:right-6 shadow-lg shadow-black/20 w-56 xl:w-64 cursor-default hover:border-accent/35 transition-colors duration-300"
            >
              <span className="text-2xl xl:text-3xl shrink-0">🏆</span>
              <div>
                <h4 className="text-white font-heading font-bold text-xs xl:text-sm">ISO 9001:2015</h4>
                <p className="text-white/70 text-[10px] xl:text-[11px] mt-0.5 font-medium">Certified Quality Plant</p>
              </div>
            </motion.div>

            {/* Floating Badge 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="animate-float glass-panel-dark border border-white/10 p-4 xl:p-5 rounded-2xl flex items-center gap-3 xl:gap-4 absolute top-1/2 left-[15%] xl:left-1/3 -translate-y-1/2 shadow-lg shadow-black/20 w-56 xl:w-64 cursor-default hover:border-accent/35 transition-colors duration-300"
            >
              <span className="text-2xl xl:text-3xl shrink-0">🇮🇳</span>
              <div>
                <h4 className="text-white font-heading font-bold text-xs xl:text-sm">Since 1972</h4>
                <p className="text-white/70 text-[10px] xl:text-[11px] mt-0.5 font-medium">Trust of 50+ Years</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
