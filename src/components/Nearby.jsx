import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { T, NEARBY_DATA } from "../data/siteData";

function NearbyCard({ name, dist, img, desc }) {
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
        transform: h ? "translateY(-8px) scale(1.02)" : "none",
        transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16/11", overflow: "hidden" }}>
        <img
          src={img}
          alt={name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: h ? "scale(1.12)" : "scale(1)",
            transition: "transform 0.9s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(6px)",
            color: T.primaryDark,
            fontWeight: 600,
            fontSize: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <MapPin size={12} /> {dist}
        </div>
      </div>
      <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 19, marginBottom: 6 }}>
          {name}
        </div>
        <div style={{ color: T.muted, fontSize: 14, lineHeight: 1.55, marginBottom: 14 }}>
          {desc}
        </div>
        <a
          href="#location"
          style={{
            marginTop: "auto",
            color: T.primaryDark,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            transition: "gap 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
          onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
        >
          Learn More <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function Nearby() {
  return (
    <section id="nearby" style={sectionStyle(110)}>
      <div className="container-xxl">
        <SectionTitle
          eyebrow="NEARBY ATTRACTIONS"
          title="Discover the Neighbourhood"
          subtitle="Culture, cuisine and natural beauty — all within reach of PDS Residency."
          T={T}
        />
        <div className="row g-4">
          {NEARBY_DATA.map((p, i) => (
            <div key={p.name} className="col-md-6 col-xl-3">
              <Reveal delay={i * 0.08}>
                <NearbyCard {...p} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}