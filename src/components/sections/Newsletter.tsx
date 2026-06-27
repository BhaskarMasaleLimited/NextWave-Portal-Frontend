"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-20 lg:py-28 bg-cream section-padding relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Decorative background patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full border-2 border-accent animate-float" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-2 border-accent animate-float-delayed" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
              Stay Connected
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Looking for Quality Spices?
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
              Become a distributor or get in touch for bulk orders.
              <br className="hidden sm:inline" />
              Contact us at <a href="mailto:sales@bhaskarmasale.com" className="text-accent hover:text-accent-light underline font-medium transition-colors duration-300">sales@bhaskarmasale.com</a> or call <a href="tel:+919579596676" className="text-accent hover:text-accent-light underline font-medium transition-colors duration-300">+91 9579596676</a>.
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
                className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:bg-white/15 focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm"
              />
              <button
                suppressHydrationWarning
                type="submit"
                className="btn-primary btn-glow whitespace-nowrap px-8 py-3.5 text-sm"
              >
                Subscribe
              </button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white/40 text-[11px] mt-4"
            >
              By subscribing, you agree to our Privacy Policy. Unsubscribe
              anytime.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
