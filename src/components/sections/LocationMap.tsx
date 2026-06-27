"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function LocationMap() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white section-padding">
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
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            Our Contact Details & Locations
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto leading-relaxed">
            Find our primary shop and factory locations below. We look forward to seeing you.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Factory 1 Location */}
          <div className="bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="p-6 pb-5 flex items-start justify-between">
              <div>
                <h3 className="font-heading font-semibold text-charcoal text-xl mb-1">
                  Factory 1
                </h3>
                <p className="text-warm-gray text-sm">
                  Bhaskar Masale Unit 1
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/place/Bhaskar+Foods/@20.910708,75.6435201,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd90b004372d86f:0x8acb2b6bc5ccf113!8m2!3d20.910708!4d75.646095!16s%2Fg%2F11lz5kkwr1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-accent bg-primary text-xs font-bold flex items-center gap-1.5 transition-all duration-300 px-4 py-2.5 rounded-full shadow-md shadow-primary/10 hover:shadow-accent/20 hover:scale-105 active:scale-95 group"
                title="Open in Google Maps"
              >
                Directions
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=20.910708,75.646095&z=15&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Factory 2 Location */}
          <div className="bg-white border border-black/5 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="p-6 pb-5 flex items-start justify-between">
              <div>
                <h3 className="font-heading font-semibold text-charcoal text-xl mb-1">
                  Factory 2
                </h3>
                <p className="text-warm-gray text-sm">
                  Bhaskar Masale Unit 2
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/place/Bhaskar+Foods/@20.986484,75.5774291,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd90f3fbc82ee4f:0x4fe6ba5005c7cd35!8m2!3d20.986484!4d75.580004!16s%2Fg%2F11ft3bmp0l"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-accent bg-primary text-xs font-bold flex items-center gap-1.5 transition-all duration-300 px-4 py-2.5 rounded-full shadow-md shadow-primary/10 hover:shadow-accent/20 hover:scale-105 active:scale-95 group"
                title="Open in Google Maps"
              >
                Directions
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=20.986484,75.580004&z=15&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
