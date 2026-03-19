"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-20 lg:py-28 bg-primary section-padding relative overflow-hidden"
    >
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full border-2 border-white animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full border-2 border-white animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full border border-white animate-float-delayed" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
            Stay Connected
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Looking for quality spices?
          </h2>
          <p className="text-white/70 text-base lg:text-lg mb-8 leading-relaxed">
            Become a distributor or get in touch for bulk orders.
            Contact us at sales@bhaskarmasale.com or call +91 9579596676.
          </p>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:bg-white/15 transition-all duration-300"
            />
            <button
              suppressHydrationWarning
              type="submit"
              className="btn-primary btn-glow whitespace-nowrap px-8 py-3.5"
            >
              Subscribe
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-white/40 text-xs mt-4"
          >
            By subscribing, you agree to our Privacy Policy. Unsubscribe
            anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
