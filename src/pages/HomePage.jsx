import { useEffect } from "react";
import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingCard from "../components/BookingCard";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Rooms from "../components/Rooms";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Nearby from "../components/Nearby";
import Location from "../components/Location";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import { T } from "../data/siteData";

export default function HomePage() {
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: T.sans,
        color: T.text,
        background: T.bg,
        overflowX: "hidden",
      }}
    >
      <ScrollProgress T={T} />
      <Navbar />
      <Hero />
      <BookingCard />
      <About />
      <Amenities />
      <Rooms />
      <Gallery />
      <Reviews />
      <Nearby />
      <Location />
      <ContactCTA />
      <Footer />
      <FloatingActions />
    </div>
  );
}