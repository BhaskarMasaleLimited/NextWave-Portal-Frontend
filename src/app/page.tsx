import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OurCollection from "@/components/sections/OurCollection";
import MostLoved from "@/components/sections/MostLoved";
import Sourcing from "@/components/sections/Sourcing";
import WhyDifferent from "@/components/sections/WhyDifferent";
import CookSomething from "@/components/sections/CookSomething";
import JourneyCart from "@/components/sections/JourneyCart";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import LocationMap from "@/components/sections/LocationMap";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurCollection />
        <MostLoved />
        <Sourcing />
        <WhyDifferent />
        <CookSomething />
        <JourneyCart />
        <Testimonials />
        <LocationMap />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
