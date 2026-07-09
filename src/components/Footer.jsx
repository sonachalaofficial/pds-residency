import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { T, NAV_LINKS, BOOKING_URL } from "../data/siteData";
import PillButton from "./PillButton";

function FooterTitle({ children }) {
  return (
    <div
      style={{
        fontFamily: T.serif,
        color: T.white,
        fontSize: 17,
        fontWeight: 700,
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

function FooterLink({ href, children }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "block",
        padding: "6px 0",
        color: h ? T.primary : "rgba(255,255,255,0.7)",
        textDecoration: "none",
        fontSize: 14,
        paddingLeft: h ? 8 : 0,
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </a>
  );
}

function SocialIcon({ Ic }) {
  const [h, setH] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        display: "grid",
        placeItems: "center",
        background: h ? T.primary : "rgba(255,255,255,0.08)",
        color: T.white,
        transition: "all 0.3s ease",
        transform: h ? "translateY(-4px)" : "none",
      }}
    >
      <Ic size={18} color={T.white} />
    </a>
  );
}

export default function Footer() {
  const socialIcons = [Facebook, Instagram, Twitter, Youtube];
  return (
    <footer style={{ background: "#0F1B14", color: "rgba(255,255,255,0.85)", paddingTop: 70, paddingBottom: 26 }}>
      <div className="container-xxl">
        <div className="row g-4">
          <div className="col-lg-4">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
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
                }}
              >
                P
              </div>
              <div>
                <div style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 700, color: T.white }}>
                  PDS Residency
                </div>
                <div style={{ fontSize: 11, letterSpacing: 2, color: "rgba(255,255,255,0.55)" }}>
                  LUXURY STAY
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: 380 }}>
              A boutique escape crafted for those who value elegant details,
              genuine hospitality, and unmistakable comfort.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <div style={{ marginTop: 12 }}>
                <PillButton href={BOOKING_URL} target="_blank" rel="noopener noreferrer" T={T}>BOOK NOW</PillButton>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <FooterTitle>Quick Links</FooterTitle>
            {NAV_LINKS.slice(0, 5).map((l) => (
              <FooterLink key={l.id} href={`#${l.id}`}>
                {l.label}
              </FooterLink>
            ))}
          </div>
          <div className="col-6 col-lg-2">
            <FooterTitle>Explore</FooterTitle>
            {NAV_LINKS.slice(5).map((l) => (
              <FooterLink key={l.id} href={`#${l.id}`}>
                {l.label}
              </FooterLink>
            ))}
          </div>
          <div className="col-lg-4">
            <FooterTitle>Contact</FooterTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <MapPin size={18} color={T.primary} />
                21, Nandhi Nagar, Athiyandal, Tiruvannamalai, Tamil Nadu 606603
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Phone size={18} color={T.primary} />
                9448334117
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Mail size={18} color={T.primary} />
                pdsresidencytvmalai@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 46,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div>© {new Date().getFullYear()} PDS Residency. All rights reserved.</div>
          <div>Designed By Sonachala</div>
        </div>
      </div>
    </footer>
  );
}