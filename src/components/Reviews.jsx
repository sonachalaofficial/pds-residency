import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { T, REVIEWS_DATA } from "../data/siteData";

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS_DATA.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section
      id="reviews"
      style={{
        ...sectionStyle(120),
        background: `linear-gradient(135deg, ${T.primary} 0%, ${T.primaryDark} 100%)`,
        color: T.white,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -60,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
        }}
      />
      <div className="container-xxl" style={{ position: "relative" }}>
        <SectionTitle
          eyebrow="GUEST REVIEWS"
          title="Loved by Guests Around the World"
          subtitle="Real stories from real stays at PDS Residency."
          light
          T={T}
        />
        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", minHeight: 320 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.28)",
                backdropFilter: "blur(18px)",
                borderRadius: T.radius,
                padding: 34,
                boxShadow: T.shadowLg,
                textAlign: "center",
              }}
            >
              <img
                src={REVIEWS_DATA[i].photo}
                alt={REVIEWS_DATA[i].name}
                loading="lazy"
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid rgba(255,255,255,0.7)",
                  marginBottom: 16,
                }}
              />
              <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 12 }}>
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={18} color="#FFD65A" fill="#FFD65A" />
                ))}
              </div>
              <p
                style={{
                  fontFamily: T.serif,
                  fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
                  lineHeight: 1.6,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{REVIEWS_DATA[i].text}&rdquo;
              </p>
              <div style={{ marginTop: 18, fontWeight: 700 }}>{REVIEWS_DATA[i].name}</div>
              <div style={{ fontSize: 13, opacity: 0.85 }}>{REVIEWS_DATA[i].location}</div>
            </motion.div>
          </AnimatePresence>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 24 }}>
            {REVIEWS_DATA.map((_, k) => (
              <button
                key={k}
                aria-label={`Review ${k + 1}`}
                onClick={() => setI(k)}
                style={{
                  width: k === i ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: "none",
                  background: k === i ? T.white : "rgba(255,255,255,0.4)",
                  transition: "all 0.35s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}