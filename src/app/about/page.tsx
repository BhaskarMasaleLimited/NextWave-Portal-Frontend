"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─── Animation helpers ──────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */
const stats = [
  { value: "1972", label: "Year of Establishment" },
  { value: "50+", label: "Years of Heritage" },
  { value: "30+", label: "Premium Products" },
  { value: "ISO", label: "9001 Certified" },
];

const timeline = [
  {
    year: "1972",
    title: "The Beginning",
    description:
      "Mr. Namdeo Mali and Mrs. Dropadabai Mali started a modest red chilli vendor business in Jalgaon, Maharashtra — planting the seeds of Bhaskar Foods.",
  },
  {
    year: "1985",
    title: "First Factory",
    description:
      "Demand grew beyond local markets. The family established their first processing unit in Jalgaon's MIDC industrial zone, modernising production while maintaining artisanal quality.",
  },
  {
    year: "1998",
    title: "State-Wide Distribution",
    description:
      "Bhaskar Foods expanded across Maharashtra, building a trusted dealer network that brought authentic Khandeshi spices to households statewide.",
  },
  {
    year: "2005",
    title: "ISO 9001 Certification",
    description:
      "Achieved ISO 9001 certification — validating globally that every stage from farm-to-pack meets rigorous international quality standards.",
  },
  {
    year: "2015",
    title: "Automated Facilities",
    description:
      "Launched fully automated state-of-the-art production lines, integrating an Internal Quality System (IQS) for precision monitoring at every production stage.",
  },
  {
    year: "Today",
    title: "A Legacy Lives On",
    description:
      "Operating from D-46/1, MIDC, Jalgaon, Bhaskar Foods continues to supply 30+ premium spice products across India — with the same purity and passion since day one.",
  },
];

const values = [
  {
    icon: "🌿",
    title: "100% Natural",
    description:
      "No synthetic colours, no hidden preservatives. Every product is purely vegetarian and completely free from adulterants.",
  },
  {
    icon: "🏆",
    title: "Uncompromising Quality",
    description:
      "ISO 9001 certified processes ensure every batch is rigorously tested before it reaches your kitchen.",
  },
  {
    icon: "🌾",
    title: "Farm-Direct Sourcing",
    description:
      "We source directly from India's finest farms, ensuring freshness, traceability, and fair trade for farmers.",
  },
  {
    icon: "🔬",
    title: "Modern Technology",
    description:
      "Cutting‑edge automated machinery paired with traditional knowledge—the best of both worlds, every time.",
  },
  {
    icon: "🤝",
    title: "Trusted Relationships",
    description:
      "50+ years of trust with our customers, distributors, and farming communities across the country.",
  },
  {
    icon: "♻️",
    title: "Responsible Production",
    description:
      "We continuously invest in eco-conscious packaging and energy-efficient manufacturing to protect the planet.",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">
      {children}
    </span>
  );
}

function AnimatedCounter({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center px-6"
    >
      <p className="text-4xl md:text-5xl font-heading font-bold text-white">
        {value}
      </p>
      <p className="text-white/60 text-sm mt-1 tracking-wide">{label}</p>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-soft-white overflow-x-hidden">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="relative h-[90vh] min-h-[580px] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=2400&q=90"
            alt="Bhaskar Foods spice heritage"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          {/* Decorative blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-accent/40 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5"
            >
              Crafting Flavour Since 1972
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
            >
              Our Legacy of{" "}
              <span className="relative inline-block">
                <span className="text-shimmer">Pure Flavour</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              From a small chilli stall in Jalgaon to a nationally recognised ISO-certified spice brand — this is the story of Bhaskar Foods.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/products"
                className="btn-primary px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 group btn-glow"
              >
                Explore Products
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href="#story"
                className="btn-outline px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
              >
                Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </section>

        {/* ── Stats bar ───────────────────────────────────────────────── */}
        <section className="bg-primary relative z-10">
          <div className="section-container section-padding py-1">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((s) => (
                <AnimatedCounter key={s.value} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Story ─────────────────────────────────────────────── */}
        <section id="story" className="py-24 lg:py-32 section-padding section-container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-5">
                Five Decades of Spice Mastery
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed">
                What started as a family passion for authentic Khandeshi flavours has grown into one of Maharashtra's most trusted spice brands. Here's how the journey unfolded.
              </p>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary/40 to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => {
                const isRight = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content card */}
                    <div className="flex-1 md:max-w-[44%]">
                      <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                        <span className="text-accent font-heading font-bold text-lg">{item.year}</span>
                        <h3 className="text-xl font-heading font-bold text-charcoal mt-1 mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-warm-gray leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>

                    {/* Central dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-soft-white shadow-md z-10" />

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Quality & Certifications ─────────────────────────────── */}
        <section className="bg-primary relative overflow-hidden py-24 lg:py-28">
          {/* Decorative circles */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/10 rounded-full" />

          <div className="section-container section-padding relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/sourcing.png"
                    alt="Bhaskar Foods quality sourcing"
                    fill
                    className="object-cover"
                  />
                  {/* ISO badge */}
                  <div className="absolute top-5 right-5 bg-accent text-white text-xs font-bold rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm">
                    ISO 9001 Certified
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <p className="text-3xl font-heading font-bold text-primary">100%</p>
                  <p className="text-warm-gray text-sm mt-1">Pure &amp; Natural</p>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="text-white"
              >
                <motion.div variants={fadeUp}>
                  <SectionLabel>Quality You Can Taste</SectionLabel>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 leading-snug">
                    Certified. Tested. Trusted.
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    As an <strong className="text-accent">ISO 9001 certified</strong> manufacturer, our state-of-the-art automated facilities enforce an Internal Quality System (IQS) covering every step — raw material intake, processing, blending, and final packaging.
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed mb-10">
                    Our commitment is absolute: <strong className="text-white">zero synthetic colours, zero hidden preservatives</strong>. Every product that leaves our factory is 100% pure vegetarian — just honest, authentic spice.
                  </p>
                </motion.div>

                {/* Quality pillars */}
                <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "✅", text: "ISO 9001:2015 Certified" },
                    { icon: "🌿", text: "No Synthetic Additives" },
                    { icon: "🔬", text: "Lab-Tested Every Batch" },
                    { icon: "📦", text: "Hygienic Sealed Packaging" },
                    { icon: "🏭", text: "Automated MIDC Facility" },
                    { icon: "🌾", text: "Farm-Direct Ingredients" },
                  ].map((p) => (
                    <motion.div
                      key={p.text}
                      variants={fadeUp}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:bg-white/15 transition-all"
                    >
                      <span className="text-xl">{p.icon}</span>
                      <span className="text-white/85 text-sm font-medium">{p.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Core Values ──────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 section-padding section-container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>What We Stand For</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Our Core Values
              </h2>
              <p className="text-warm-gray text-lg max-w-2xl mx-auto">
                These principles guide every decision we make — from how we source ingredients to how we serve our customers.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-accent/20 transition-colors">
                  {v.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Mission & Vision ─────────────────────────────────────── */}
        <section className="py-20 section-padding section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative bg-cream-dark rounded-3xl p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full" />
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Our Mission</h3>
              <p className="text-warm-gray leading-relaxed">
                To deliver the finest, most authentic Indian spices by combining generational knowledge with modern quality systems — making every meal a celebration of real flavour, every day.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative bg-primary rounded-3xl p-10 overflow-hidden text-white"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
              <span className="text-4xl mb-4 block">🌟</span>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/75 leading-relaxed italic font-serif text-lg">
                &ldquo;To be the heart of every kitchen across India — inspiring culinary perfection through spices crafted with tradition, innovation, and uncompromising purity.&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Founders ─────────────────────────────────────────────── */}
        <section className="py-24 section-padding section-container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>The Founders</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                Where It All Began
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Image */}
              <div className="md:col-span-2 relative h-64 md:h-auto bg-gradient-to-br from-primary to-primary-dark">
                <Image
                  src="/images/hero-spices.png"
                  alt="Bhaskar Foods founders"
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/60" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-accent font-heading font-bold text-5xl">1972</span>
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3 p-10">
                <SectionLabel>Founded by</SectionLabel>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                  Mr. Namdeo Mali &amp;<br />Mrs. Dropadabai Mali
                </h3>
                <div className="w-12 h-1 bg-accent rounded-full my-4" />
                <p className="text-warm-gray leading-relaxed mb-4">
                  With unwavering passion and deep knowledge of Khandeshi cuisine, this duo built more than a business — they built a legacy that now reaches kitchens across India.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Their belief: that every family deserves the purest, most flavourful spices at their table — a belief that remains the cornerstone of Bhaskar Foods today.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
                    </svg>
                  </div>
                  <span className="text-primary text-sm font-semibold">Jalgaon, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 section-padding section-container">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative bg-gradient-to-br from-charcoal to-primary-dark rounded-3xl overflow-hidden text-center px-8 py-16 md:py-20"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <SectionLabel>Experience the Difference</SectionLabel>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 mt-2">
                Taste 50 Years of Tradition
              </h2>
              <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Explore our full range of pure, authentic Khandeshi spice blends — crafted with love, sealed with science.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/products"
                  className="btn-primary px-10 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2 group btn-glow"
                >
                  Shop Our Products
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="mailto:sales@bhaskarmasale.com"
                  className="btn-outline px-10 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2"
                >
                  Contact Us
                </a>
              </div>

              {/* Contact info strip */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 justify-center text-white/50 text-sm">
                <span>📍 D-46/1, MIDC, Jalgaon — 425001</span>
                <span>📞 +91 9579596676</span>
                <span>✉ sales@bhaskarmasale.com</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
