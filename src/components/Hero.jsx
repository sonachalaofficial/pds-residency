import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import PillButton from "./PillButton";
import { HERO_IMAGES, T, BOOKING_URL } from "../data/siteData";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(t);
  }, []);
  const prev = () => setI((v) => (v - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  const next = () => setI((v) => (v + 1) % HERO_IMAGES.length);

  return (
    <section
      id="home"
      style={{ position: "relative", height: "100vh", minHeight: 620, overflow: "hidden" }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_IMAGES[i]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.55) 60%, rgba(15,23,42,0.75) 100%)",
        }}
      />

      <div
        className="container-xxl"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
        }}
      >
        <div style={{ maxWidth: 780, color: T.white }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: 13,
              letterSpacing: 2,
              marginBottom: 22,
            }}
          >
            <Sparkles size={14} /> WELCOME TO PDS RESIDENCY
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontFamily: T.serif,
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: -0.5,
            }}
          >
            Luxury Stay
            <br />
            <span style={{ color: T.primary }}>Comfort Beyond Expectations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{
              marginTop: 20,
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              maxWidth: 620,
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
            }}
          >
            Experience elegant rooms, premium hospitality, and a peaceful stay at PDS Residency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            style={{ marginTop: 30, display: "flex", flexWrap: "wrap", gap: 14 }}
          >
            <PillButton onClick={() => scrollTo("rooms")} T={T}>
              Explore Rooms <ArrowRight size={16} />
            </PillButton>
            <PillButton variant="ghost" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" T={T}>
              Book Now
            </PillButton>
          </motion.div>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        style={arrowStyle("left")}
        onMouseEnter={(e) => (e.currentTarget.style.background = T.primary)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        style={arrowStyle("right")}
        onMouseEnter={(e) => (e.currentTarget.style.background = T.primary)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
      >
        <ChevronRight />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: 130,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 3,
        }}
      >
        {HERO_IMAGES.map((_, k) => (
          <button
            key={k}
            aria-label={`Slide ${k + 1}`}
            onClick={() => setI(k)}
            style={{
              width: k === i ? 30 : 10,
              height: 10,
              borderRadius: 999,
              background: k === i ? T.primary : "rgba(255,255,255,0.6)",
              border: "none",
              transition: "all 0.35s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function arrowStyle(side) {
  return {
    position: "absolute",
    top: "45%",
    [side]: 20,
    zIndex: 3,
    width: 52,
    height: 52,
    borderRadius: 999,
    background: "rgba(255,255,255,0.15)",
    color: T.white,
    border: "1px solid rgba(255,255,255,0.3)",
    backdropFilter: "blur(8px)",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };
}