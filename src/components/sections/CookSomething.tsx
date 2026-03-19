"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const recipes = [
  {
    title: "Classic Butter Chicken",
    time: "45 min",
    difficulty: "Easy",
    image: "/images/recipe-curry.png",
    spices: ["Turmeric", "Red Chili", "Garam Masala"],
  },
  {
    title: "Hyderabadi Biryani",
    time: "60 min",
    difficulty: "Medium",
    image: "/images/recipe-biryani.png",
    spices: ["Cumin", "Cardamom", "Saffron"],
  },
  {
    title: "Masala Chai",
    time: "15 min",
    difficulty: "Easy",
    image: "/images/recipe-masala.png",
    spices: ["Cardamom", "Cinnamon", "Ginger"],
  },
];

export default function CookSomething() {
  return (
    <section
      id="recipes"
      className="py-20 lg:py-28 bg-soft-white section-padding"
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
            Get Inspired
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-4">
            Cook Something Beautiful Today
          </h2>
          <p className="text-warm-gray max-w-xl mx-auto leading-relaxed">
            Discover authentic Indian recipes that bring out the best in our
            spices.
          </p>
        </motion.div>

        {/* Recipe Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex gap-2">
                    <span className="bg-[#E1F5EE] text-[#085041] text-xs font-medium px-3 py-1 rounded-full">
                      {recipe.time}
                    </span>
                    <span className="bg-[#E1F5EE] text-[#085041] text-xs font-medium px-3 py-1 rounded-full">
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 lg:p-6">
                <h3 className="font-heading font-semibold text-charcoal text-lg mb-3 group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.spices.map((spice) => (
                    <span
                      key={spice}
                      className="bg-[#E1F5EE] text-[#085041] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {spice}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
