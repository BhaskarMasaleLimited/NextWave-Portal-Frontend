"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

const sourcingPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "ISO 9001 Certified",
    desc: "Fully automated certified production plant",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Quality Tested",
    desc: "Internal Quality System (IQS) monitoring",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "100% Pure Veg",
    desc: "No synthetic colours or preservatives",
  },
];

export default function Sourcing() {
  return (
    <section
      id="sourcing"
      className="py-20 lg:py-28 bg-soft-white section-padding"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Dotted patterns */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(var(--color-accent)_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(var(--color-primary)_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30 -z-10" />

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/images/sourcing.png"
                alt="Spice sourcing from Indian farms"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-103"
              />
              {/* Tag overlay */}
              <div className="absolute bottom-6 left-6 bg-primary/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-white/10 text-white">
                <p className="text-accent font-heading font-bold text-lg leading-none mb-1 tracking-wider">
                  SOURCING
                </p>
                <p className="text-white/80 text-xs font-medium">
                  Direct from Indian farms
                </p>
              </div>
            </div>
            {/* Floating ISO Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-lg border border-white/10 rotate-6 animate-float cursor-default select-none">
              🏆 ISO 9001:2015
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
              About Company
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-charcoal mb-6 leading-tight">
              Khandeshi Taste Makers
              <br />
              <span className="text-primary">Since 1972</span>
            </h2>
            <p className="text-warm-gray text-base lg:text-lg leading-relaxed mb-8">
              Founded in 1972 by Mr. Namdeo Mali and Mrs. Dropadabai Mali,
              Bhaskar Masale started as a local red chilli vendor and grew into
              a fully automated, ISO 9001 certified company in Jalgaon,
              Maharashtra. With over 30 products, the name &apos;Bhaskar
              Masale&apos; is synonymous with uncompromising quality and
              flavour.
            </p>

            {/* Points */}
            <div className="space-y-5">
              {sourcingPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal text-base mb-1">
                      {point.title}
                    </h4>
                    <p className="text-warm-gray text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/about" className="btn-primary inline-flex items-center gap-2 group px-8 py-3.5 rounded-full font-medium transition-transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30">
                Explore More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
