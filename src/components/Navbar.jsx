import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import PillButton from "./PillButton";
import { NAV_LINKS, T, BOOKING_URL } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + 120;
      let current = "home";
      NAV_LINKS.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y) current = l.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "10px 0" : "18px 0",
        background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: scrolled ? T.shadow : "none",
        transition: "all 0.35s ease",
        borderBottom: scrolled ? "1px solid rgba(108,191,132,0.15)" : "1px solid transparent",
      }}
    >
      <div
        className="container-xxl"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
      >
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: T.text,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`,
              display: "grid",
              placeItems: "center",
              color: T.white,
              fontFamily: T.serif,
              fontWeight: 700,
              fontSize: 20,
              boxShadow: "0 8px 20px rgba(46,125,50,0.35)",
            }}
          >
            P
          </div>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 20 }}>PDS Residency</div>
            <div style={{ fontSize: 11, color: T.muted, letterSpacing: 2, marginTop: 3 }}>
              LUXURY STAY
            </div>
          </div>
        </a>

        <ul
          className="d-none d-xl-flex"
          style={{ listStyle: "none", margin: 0, padding: 0, gap: 4, alignItems: "center" }}
        >
          {NAV_LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    padding: "8px 12px",
                    color: isActive ? T.primaryDark : T.text,
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 14,
                    textDecoration: "none",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = T.primaryDark)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? T.primaryDark : T.text)
                  }
                >
                  {l.label}
                  <span
                    style={{
                      position: "absolute",
                      left: 12,
                      right: 12,
                      bottom: 4,
                      height: 2,
                      background: T.primaryDark,
                      borderRadius: 2,
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <PillButton href={BOOKING_URL} target="_blank" rel="noopener noreferrer" T={T}>BOOK NOW</PillButton>
          <button
            className="d-xl-none"
            aria-label="Menu"
            onClick={() => setOpen(true)}
            style={{
              background: T.white,
              border: "1px solid rgba(0,0,0,0.06)",
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "grid",
              placeItems: "center",
              boxShadow: T.shadow,
            }}
          >
            <Menu size={20} color={T.text} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(15,23,42,0.5)",
              backdropFilter: "blur(6px)",
              zIndex: 1200,
            }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(320px, 85vw)",
                background: T.white,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  style={{
                    background: T.bg,
                    border: "none",
                    borderRadius: 12,
                    width: 40,
                    height: 40,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <X size={20} />
                </button>
              </div>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 12,
                    textDecoration: "none",
                    color: T.text,
                    fontWeight: 500,
                    background: active === l.id ? "rgba(108,191,132,0.14)" : "transparent",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <div style={{ marginTop: 12 }}>
                <PillButton href={BOOKING_URL} target="_blank" rel="noopener noreferrer" block T={T}>
                  BOOK NOW
                </PillButton>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}