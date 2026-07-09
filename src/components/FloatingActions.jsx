import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, PhoneCall } from "lucide-react";
import { T } from "../data/siteData";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onS = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);
  const btn = (bg, glow) => ({
    width: 54,
    height: 54,
    borderRadius: 999,
    background: bg,
    color: T.white,
    border: "none",
    display: "grid",
    placeItems: "center",
    boxShadow: `0 10px 24px ${glow}`,
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
  });
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 1500,
      }}
    >
      <a
        href="https://wa.me/919876543210"
        aria-label="WhatsApp"
        style={btn("#25D366", "rgba(37,211,102,0.5)")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(-8deg)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call"
        style={btn(T.primaryDark, "rgba(46,125,50,0.5)")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(8deg)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
      >
        <PhoneCall size={20} />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={btn(T.white, "rgba(0,0,0,0.18)")}
          >
            <ArrowUp size={20} color={T.primaryDark} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}