import { useState } from "react";
import { Wifi, Car, Utensils, BellRing, Zap, Snowflake, Tv, Shirt, Clock, MoveVertical, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { T, AMENITIES_DATA } from "../data/siteData";

const iconMap = { Wifi, Car, Utensils, BellRing, Zap, Snowflake, Tv, Shirt, Clock, MoveVertical, ShieldCheck, Sparkles };

function AmenityCard({ icon: Icon, title, desc }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: T.white,
        borderRadius: T.radius,
        padding: 26,
        border: "1px solid rgba(108,191,132,0.16)",
        boxShadow: h ? "0 20px 40px rgba(46,125,50,0.18)" : T.shadow,
        transform: h ? "translateY(-8px) scale(1.02)" : "none",
        transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top right, rgba(108,191,132,${h ? 0.18 : 0}), transparent 60%)`,
          transition: "all 0.4s ease",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          display: "grid",
          placeItems: "center",
          background: h
            ? `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`
            : "rgba(108,191,132,0.14)",
          color: h ? T.white : T.primaryDark,
          transition: "all 0.4s ease",
          transform: h ? "rotate(-10deg)" : "none",
          marginBottom: 16,
        }}
      >
        <Icon size={26} />
      </div>
      <div style={{ fontFamily: T.serif, fontWeight: 700, fontSize: 19, marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ color: T.muted, fontSize: 14, lineHeight: 1.55 }}>{desc}</div>
    </div>
  );
}

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function Amenities() {
  return (
    <section id="amenities" style={{ ...sectionStyle(110), background: T.white }}>
      <div className="container-xxl">
        <SectionTitle
          eyebrow="AMENITIES"
          title="Everything You Need, Elegantly Delivered"
          subtitle="Thoughtful services and modern facilities designed around your comfort."
          T={T}
        />
        <div className="row g-4">
          {AMENITIES_DATA.map((a, i) => (
            <div key={a.title} className="col-6 col-md-4 col-lg-3">
              <Reveal delay={(i % 4) * 0.06}>
                <AmenityCard icon={iconMap[a.icon]} title={a.title} desc={a.desc} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}