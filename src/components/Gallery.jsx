import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, X } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { T, GALLERY_IMAGES } from "../data/siteData";

function GalleryItem({ src, idx, onOpen }) {
  const [h, setH] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (idx % 4) * 0.05 }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={() => onOpen(idx)}
      style={{
        borderRadius: T.radius,
        overflow: "hidden",
        boxShadow: T.shadow,
        cursor: "pointer",
        position: "relative",
        aspectRatio: "4/3",
      }}
    >
      <img
        src={src}
        alt={`Gallery ${idx + 1}`}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: h ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.8s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55))",
          opacity: h ? 1 : 0,
          transition: "opacity 0.35s ease",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 999,
            background: "rgba(255,255,255,0.9)",
            display: "grid",
            placeItems: "center",
            transform: h ? "scale(1)" : "scale(0.7)",
            transition: "transform 0.35s ease",
          }}
        >
          <Eye color={T.primaryDark} />
        </div>
      </div>
    </motion.div>
  );
}

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function Gallery() {
  const [open, setOpen] = useState(null);
  return (
    <section id="gallery" style={{ ...sectionStyle(110), background: T.white }}>
      <div className="container-xxl">
        <SectionTitle
          eyebrow="GALLERY"
          title="A Glimpse Inside PDS Residency"
          subtitle="Interiors, dining, spa and moments captured across the property."
          T={T}
        />
        <div className="row g-3 g-md-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={src} className="col-12 col-sm-6 col-lg-4">
              <GalleryItem src={src} idx={i} onOpen={setOpen} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10,20,15,0.85)",
              backdropFilter: "blur(14px)",
              zIndex: 3000,
              display: "grid",
              placeItems: "center",
              padding: 20,
            }}
          >
            <motion.img
              key={open}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              src={GALLERY_IMAGES[open]}
              alt="Gallery preview"
              style={{
                maxWidth: "min(1100px, 96vw)",
                maxHeight: "88vh",
                borderRadius: T.radius,
                boxShadow: T.shadowLg,
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: T.white,
                border: "none",
                borderRadius: 999,
                width: 44,
                height: 44,
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
            >
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}