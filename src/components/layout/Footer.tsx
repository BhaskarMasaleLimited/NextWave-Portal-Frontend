"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "#hero" },
    { label: "Our Products", href: "#products" },
    { label: "Collection", href: "#collection" },
    { label: "Our Contact Details", href: "#location" },
  ],
  Company: [
    { label: "About Company", href: "#sourcing" },
    { label: "Why Us", href: "#why-different" },
    { label: "Our Contact Details", href: "#location" },
    { label: "Become Distributor", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Our Contact Details", href: "#location" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialIcons = [
  {
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    href: "https://www.facebook.com/share/1AzJDtaZD1/",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    href: "https://www.instagram.com/bhaskarmasale.jalgaon?igsh=MWRmN2MyNnV5MW5zNg==",
  },
  {
    label: "WhatsApp",
    path: "M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.757.457 3.472 1.328 4.982L2 22l5.168-1.356c1.464.798 3.11 1.218 4.84 1.218 5.506 0 9.988-4.482 9.988-9.988C22 6.482 17.518 2 12.012 2zm5.534 14.336c-.244.686-1.228 1.246-1.704 1.28-.42.032-.968.184-2.796-.574-2.34-.97-3.844-3.344-3.96-3.502-.116-.156-.884-1.176-.884-2.244 0-1.068.56-1.594.756-1.806.196-.21.436-.264.58-.264.144 0 .288.002.414.008.136.006.318-.052.496.39.18.45.624 1.52.68 1.634.056.114.092.246.016.39-.076.15-.16.246-.254.36-.094.114-.198.238-.284.326-.096.096-.194.202-.084.39.11.19.486.8.104 1.3.72.64 1.326.84 1.514.936.188.096.298.082.41-.014.11-.096.472-.55.6-.736.126-.186.254-.156.428-.09.174.066 1.106.522 1.298.618.192.096.318.142.364.224.046.082.046.474-.198 1.16z",
    href: "https://wa.me/919579596676",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/5 text-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="section-container section-padding py-16 lg:py-20"
      >
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 py-2 group">
              <div className="relative w-44 h-14 sm:w-56 sm:h-18 lg:w-64 lg:h-20 bg-white/95 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src="/logo/logo-hindi.svg"
                  alt="Bhaskar Masale Logo"
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-103 origin-center"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-2">
              Bringing the authentic Khandeshi taste to kitchens since 1972.
              Pure spices, honest ingredients, and real flavour — that&apos;s
              the Bhaskar promise.
            </p>
            <p className="text-white/50 text-xs leading-relaxed max-w-sm mb-6">
              D-46/1, MIDC, Jalgaon, Maharashtra (India) - 425001
              <br />
              📞 +91 9579596676 &nbsp;|&nbsp; ✉ sales@bhaskarmasale.com
              <br />
              Mon-Fri, 9 am – 6 pm
            </p>
            <div className="flex gap-3">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110"
                >
                  <svg
                    className="w-4.5 h-4.5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div key={title} variants={staggerItem}>
              <h4 className="font-heading text-lg font-semibold mb-5 text-accent">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Bhaskar Masale. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
