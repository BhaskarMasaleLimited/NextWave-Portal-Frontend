"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

interface Recipe {
  title: string;
  time: string;
  difficulty: string;
  image: string;
  spices: string[];
  description: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    title: "Khandeshi Shev Bhaji",
    time: "35 min",
    difficulty: "Medium",
    image: "/images/recipe-curry.png",
    spices: ["Shevbhaji Masala", "Kala Masala", "Chapata + Ras Chilli"],
    description: "A fiery, deeply flavourful curry from the heart of Khandesh, topped with crispy spiced chickpea flour noodles (shev).",
    servings: 4,
    prepTime: "15 min",
    cookTime: "20 min",
    ingredients: [
      "1.5 tbsp Bhaskar Shevbhaji Masala",
      "1 tsp Bhaskar Kala Masala",
      "1 tbsp Bhaskar Chapata + Ras Chilli Powder (for signature red tarri)",
      "1/2 tsp Bhaskar Haldi Powder",
      "1 cup thick spicy shev (gathiya)",
      "2 large onions (finely sliced)",
      "1 cup dry grated coconut",
      "1 tbsp ginger-garlic paste",
      "3 tbsp oil",
      "Salt to taste",
      "Fresh coriander leaves (chopped)"
    ],
    instructions: [
      "Roast the sliced onions and grated dry coconut on a griddle until dark golden brown.",
      "Grind the roasted onions, coconut, ginger, and garlic into a very smooth, fine paste (Vatana).",
      "Heat 3 tablespoons of oil in a deep pan. Add the paste and sauté on medium heat until oil starts separating from the sides.",
      "Add Bhaskar Haldi Powder, Bhaskar Chapata + Ras Chilli Powder, Bhaskar Kala Masala, and Bhaskar Shevbhaji Masala. Stir and sauté on low heat for 2 minutes to cook the spices.",
      "Pour in 3 cups of hot water and add salt. Bring the curry (rassa) to a boil, then simmer on low heat for 10-12 minutes until a thick, shiny red layer of oil (tarri) forms on top.",
      "To serve, place a handful of thick shev in a bowl, pour the piping hot curry over it, garnish with fresh coriander, and enjoy immediately with hot bhakri or chapati."
    ]
  },
  {
    title: "Authentic Khandeshi Misal Pav",
    time: "45 min",
    difficulty: "Medium",
    image: "/images/recipe-curry.png",
    spices: ["Misal Masala", "Kala Masala", "Teja Chilli"],
    description: "A legendary Maharashtrian breakfast dish of sprouted moth beans in a fiery, spiced broth, served with farsan and bread.",
    servings: 4,
    prepTime: "20 min",
    cookTime: "25 min",
    ingredients: [
      "2 tbsp Bhaskar Misal Masala",
      "1 tsp Bhaskar Kala Masala",
      "1 tsp Bhaskar Teja Chilli Powder (for a hot kick)",
      "1/2 tsp Bhaskar Haldi Powder",
      "2 cups sprouted moth beans (matki)",
      "1 large onion (chopped)",
      "1 large tomato (chopped)",
      "1 tbsp ginger-garlic paste",
      "4 tbsp oil",
      "1 tsp mustard seeds",
      "6-8 curry leaves",
      "2 cups mixed farsan (savory mix)",
      "Chopped onions, fresh coriander, and lemon wedges (for garnish)",
      "Ladi pav (soft bread rolls) to serve"
    ],
    instructions: [
      "Pressure cook the sprouted moth beans (matki) with 2 cups of water, a pinch of Bhaskar Haldi Powder, and salt for 1 whistle until tender but not mushy.",
      "Heat oil in a large pot. Add mustard seeds and curry leaves. Once they splutter, add the chopped onions and ginger-garlic paste. Sauté until golden brown.",
      "Add the chopped tomatoes and cook until they soften and mash easily.",
      "Reduce heat and add Bhaskar Misal Masala, Bhaskar Kala Masala, and Bhaskar Teja Chilli Powder. Sauté for a minute.",
      "Add the cooked matki along with its cooking water. Pour in an additional 3 cups of warm water to create a thin gravy. Adjust salt to taste.",
      "Simmer the broth on low heat for 15 minutes until a beautiful layer of spicy red oil (kat) floats on top.",
      "Assemble by placing a ladle of sprouts in a shallow plate, topping with farsan, and pouring the hot red broth (kat) over it. Garnish with chopped onions, coriander, and lemon. Serve hot with pav."
    ]
  },
  {
    title: "Khandeshi Chicken Curry (Kala Rassa)",
    time: "50 min",
    difficulty: "Hard",
    image: "/images/recipe-biryani.png",
    spices: ["Chicken Masala", "Kala Masala", "Hatkutai Chilli"],
    description: "A rustic, highly aromatic black chicken curry made with a unique dry-roasted coconut and onion paste.",
    servings: 4,
    prepTime: "15 min",
    cookTime: "35 min",
    ingredients: [
      "2 tbsp Bhaskar Chicken Masala",
      "1.5 tbsp Bhaskar Kala Masala",
      "1 tbsp Bhaskar Hatkutai Chilli Powder (for coarse stone-ground texture)",
      "1/2 tsp Bhaskar Haldi Powder",
      "500g chicken (cleaned and cut into pieces)",
      "2 medium onions (cut into thick slices)",
      "1/2 cup dry coconut slices",
      "1.5 tbsp ginger-garlic paste",
      "3 tbsp oil",
      "Salt to taste",
      "Fresh coriander leaves"
    ],
    instructions: [
      "Marinate the chicken with ginger-garlic paste, Bhaskar Haldi Powder, and salt. Set aside for 20 minutes.",
      "Dry roast the onion slices and dry coconut on a griddle until they are deeply charred and dark brown (almost black). Grind them with fresh coriander into a fine paste (Kala Vatana) using very little water.",
      "Heat oil in a heavy-bottomed pot. Add the dark ground paste and fry on medium heat until oil separates and it turns aromatic.",
      "Add Bhaskar Chicken Masala, Bhaskar Kala Masala, and Bhaskar Hatkutai Chilli Powder. Sauté for 1 minute.",
      "Add the marinated chicken and roast in the masala for 5 minutes until the chicken changes colour and is well coated.",
      "Pour in 3 cups of hot water, stir well, and cover. Simmer on low heat for 25 minutes until chicken is tender and a dark, rich oil layer floats on top. Serve hot with bajra bhakri."
    ]
  },
  {
    title: "Khandeshi Masala Chai",
    time: "15 min",
    difficulty: "Easy",
    image: "/images/recipe-masala.png",
    spices: ["Chai Masala"],
    description: "A comforting, spicy milk tea infused with dry ginger, green cardamom, and warming spices.",
    servings: 2,
    prepTime: "5 min",
    cookTime: "10 min",
    ingredients: [
      "1/2 tsp Bhaskar Chai Masala",
      "1.5 cups water",
      "1 cup milk",
      "2 tsp black tea leaves",
      "2 tsp sugar (or to taste)",
      "1/2 inch fresh ginger (crushed)"
    ],
    instructions: [
      "In a saucepan, bring water to a boil. Add the crushed fresh ginger and black tea leaves.",
      "Simmer on medium heat for 3 minutes to allow the tea leaves and ginger to brew fully.",
      "Add the sugar and milk, then bring the tea to a rolling boil.",
      "Just as the tea starts to rise, add the Bhaskar Chai Masala and stir well.",
      "Reduce heat to low and simmer for another 2 minutes to let the aromatic spices infuse.",
      "Strain into cups and serve hot with biscuits or khari."
    ]
  }
];

function renderIngredient(ingredient: string) {
  const productMappings = [
    { name: "Bhaskar Shevbhaji Masala", slug: "shevbhaji-masala" },
    { name: "Bhaskar Kala Masala", slug: "kala-masala" },
    { name: "Bhaskar Chapata + Ras Chilli Powder", slug: "chapata-ras-chilli" },
    { name: "Bhaskar Haldi Powder", slug: "haldi-powder" },
    { name: "Bhaskar Misal Masala", slug: "misal-masala" },
    { name: "Bhaskar Teja Chilli Powder", slug: "teja-chilli" },
    { name: "Bhaskar Chicken Masala", slug: "chicken-masala" },
    { name: "Bhaskar Hatkutai Chilli Powder", slug: "hatkutai-chilli" },
    { name: "Bhaskar Chai Masala", slug: "chai-masala" }
  ];

  for (const pm of productMappings) {
    if (ingredient.includes(pm.name)) {
      const parts = ingredient.split(pm.name);
      return (
        <span>
          {parts[0]}
          <Link
            href={`/products/${pm.slug}`}
            className="text-accent hover:text-primary font-semibold hover:underline transition-colors duration-200"
          >
            {pm.name}
          </Link>
          {parts[1]}
        </span>
      );
    }
  }
  return <span>{ingredient}</span>;
}

export default function CookSomething() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (selectedRecipe) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedRecipe]);

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
            spices. Click on any recipe to view the full details.
          </p>
        </motion.div>

        {/* Recipe Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedRecipe(recipe)}
              className="group bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
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
                      <span className="bg-[#E1F5EE] text-[#085041] text-[11px] font-medium px-2.5 py-1 rounded-full">
                        {recipe.time}
                      </span>
                      <span className="bg-[#E1F5EE] text-[#085041] text-[11px] font-medium px-2.5 py-1 rounded-full">
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-charcoal text-lg mb-2 group-hover:text-primary transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-warm-gray text-xs mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {recipe.spices.map((spice) => (
                    <span
                      key={spice}
                      className="bg-[#F8F5F0] text-accent text-[10px] font-semibold px-2 py-0.5 rounded border border-accent/10"
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

      {/* Recipe Detail Modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRecipe(null)}
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header Banner */}
              <div className="relative h-48 sm:h-64 shrink-0">
                <Image
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-heading text-2xl sm:text-4xl font-bold mb-2">
                    {selectedRecipe.title}
                  </h3>
                  <p className="text-white/85 text-sm max-w-xl hidden sm:block">
                    {selectedRecipe.description}
                  </p>
                </div>
              </div>

              {/* Scrollable details */}
              <div className="overflow-y-auto p-6 sm:p-8 flex-1">
                {/* Meta details */}
                <div className="grid grid-cols-3 gap-4 border-b border-black/5 pb-6 mb-6">
                  <div className="text-center bg-cream/50 p-3 rounded-2xl">
                    <span className="text-warm-gray text-xs block mb-0.5">Prep Time</span>
                    <span className="text-charcoal font-bold text-sm sm:text-base">{selectedRecipe.prepTime}</span>
                  </div>
                  <div className="text-center bg-cream/50 p-3 rounded-2xl">
                    <span className="text-warm-gray text-xs block mb-0.5">Cook Time</span>
                    <span className="text-charcoal font-bold text-sm sm:text-base">{selectedRecipe.cookTime}</span>
                  </div>
                  <div className="text-center bg-cream/50 p-3 rounded-2xl">
                    <span className="text-warm-gray text-xs block mb-0.5">Servings</span>
                    <span className="text-charcoal font-bold text-sm sm:text-base">{selectedRecipe.servings} People</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {/* Ingredients */}
                  <div className="md:col-span-2">
                    <h4 className="font-heading font-bold text-charcoal text-lg mb-4 flex items-center gap-2">
                      <span className="text-accent">🌶️</span> Ingredients
                    </h4>
                    <ul className="space-y-3">
                      {selectedRecipe.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal/90 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="flex-1">{renderIngredient(ing)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div className="md:col-span-3">
                    <h4 className="font-heading font-bold text-charcoal text-lg mb-4 flex items-center gap-2">
                      <span className="text-primary">🍳</span> Step-by-Step Method
                    </h4>
                    <ol className="space-y-5">
                      {selectedRecipe.instructions.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-warm-gray leading-relaxed flex-1">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-cream/35 border-t border-black/5 p-4 shrink-0 text-center text-xs text-warm-gray">
                Made with love using authentic <span className="font-semibold text-primary">Bhaskar Masale</span>.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
