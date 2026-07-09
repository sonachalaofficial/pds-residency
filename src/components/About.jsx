import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { BedDouble, Heart, Wifi, Clock } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { T, STATS_DATA, FEATURES } from "../data/siteData";
import aboutImg from "../assets/images/img11.png";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

const iconMap = { BedDouble, Heart, Wifi, Clock };

function FeatureCard({ icon: Icon, label }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: T.white,
        borderRadius: T.radius,
        padding: 20,
        boxShadow: h ? T.shadowLg : T.shadow,
        display: "flex",
        alignItems: "center",
        gap: 14,
        transform: h ? "translateY(-6px)" : "none",
        transition: "all 0.35s cubic-bezier(.22,1,.36,1)",
        border: "1px solid rgba(108,191,132,0.15)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          display: "grid",
          placeItems: "center",
          background: h
            ? `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`
            : "rgba(108,191,132,0.14)",
          color: h ? T.white : T.primaryDark,
          transition: "all 0.35s ease",
          transform: h ? "rotate(-8deg) scale(1.08)" : "none",
        }}
      >
        <Icon size={22} />
      </div>
      <div style={{ fontWeight: 600, fontSize: 15 }}>{label}</div>
    </div>
  );
}

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function About() {
  return (
    <section id="about" style={sectionStyle(110)}>
      <div className="container-xxl">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <Reveal x={-30} y={0}>
              <div style={{ position: "relative" }}>
                <img
                  src={aboutImg}
                  alt="PDS Residency exterior"
                  loading="lazy"
                  style={{
                    width: "100%",
                    borderRadius: T.radius,
                    boxShadow: T.shadowLg,
                    objectFit: "cover",
                    aspectRatio: "4/5",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{
                    position: "absolute",
                    right: -10,
                    bottom: -20,
                    background: T.white,
                    padding: "18px 22px",
                    borderRadius: T.radius,
                    boxShadow: T.shadowLg,
                    display: "flex",
                    gap: 18,
                  }}
                >
                  {/* {STATS_DATA.map((s) => (
                    <div key={s.l} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontFamily: T.serif,
                          fontWeight: 700,
                          fontSize: 24,
                          color: T.primaryDark,
                        }}
                      >
                        {s.n < 10 ? s.n : <Counter to={s.n} />}
                        {s.s}
                      </div>
                      <div style={{ fontSize: 11, color: T.muted, letterSpacing: 1.5 }}>
                        {s.l.toUpperCase()}
                      </div>
                    </div>
                  ))} */}
                </motion.div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-6">
            <SectionTitle
              eyebrow="ABOUT US"
              title="About PDS Residency"
              subtitle="Welcome to PDS Residency, where comfort, convenience, and warm hospitality come together to create a memorable stay. Conveniently located in a prime area, our hotel offers well-appointed rooms and modern amenities, making it an ideal choice for business travelers, families, tourists, and solo guests.

                        At PDS Residency, every room is thoughtfully designed with comfortable bedding, air conditioning, high-speed Wi-Fi, smart entertainment, and essential amenities to ensure a relaxing and hassle-free experience. Our dedicated team is committed to providing personalized service, ensuring every guest feels at home from check-in to check-out."
              center={false}
              T={T}
            />
            <div className="row g-3">
              {FEATURES.map((f, k) => (
                <div key={f.label} className="col-6">
                  <Reveal delay={0.1 + k * 0.08}>
                    <FeatureCard icon={iconMap[f.icon]} label={f.label} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}