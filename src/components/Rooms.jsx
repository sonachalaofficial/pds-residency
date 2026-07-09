import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import PillButton from "./PillButton";
import { T, ROOMS_DATA, BOOKING_URL } from "../data/siteData";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function RoomCard({ name, price, img, features }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: T.white,
        borderRadius: T.radius,
        overflow: "hidden",
        boxShadow: h ? T.shadowLg : T.shadow,
        transform: h ? "translateY(-10px)" : "none",
        transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
        border: "1px solid rgba(108,191,132,0.14)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
        <img
          src={img}
          alt={name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: h ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.9s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            fontSize: 12,
            fontWeight: 600,
            color: T.primaryDark,
          }}
        >
          Popular
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 14,
            right: 14,
            padding: "8px 14px",
            borderRadius: 999,
            background: `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`,
            color: T.white,
            fontWeight: 700,
            fontSize: 14,
            boxShadow: "0 8px 20px rgba(46,125,50,0.35)",
          }}
        >
          ₹{price.toLocaleString()}/night
        </div>
      </div>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
          {name}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
          {features.map((f) => (
            <span
              key={f}
              style={{
                fontSize: 12,
                padding: "5px 10px",
                borderRadius: 999,
                background: "rgba(108,191,132,0.12)",
                color: T.primaryDark,
                fontWeight: 500,
              }}
            >
              {f}
            </span>
          ))}
        </div>
        <div style={{ marginTop: "auto" }}>
          <PillButton href={BOOKING_URL} target="_blank" rel="noopener noreferrer" block T={T}>
            Book Now <ArrowRight size={14} />
          </PillButton>
        </div>
      </div>
    </div>
  );
}

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function Rooms() {
  return (
    <section id="rooms" style={sectionStyle(110)}>
      <div className="container-xxl">
        <SectionTitle
          eyebrow="OUR ROOMS"
          title="Elegant Rooms & Signature Suites"
          subtitle="Handpicked interiors, premium linens, and every comfort you'd expect from a 5-star stay."
          T={T}
        />
        <div className="row g-4">
          {ROOMS_DATA.map((r, i) => (
            <div key={r.name} className="col-md-6 col-xl-3">
              <Reveal delay={i * 0.08}>
                <RoomCard {...r} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}