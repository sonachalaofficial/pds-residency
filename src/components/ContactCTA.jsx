import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import PillButton from "./PillButton";
import { T, BOOKING_URL } from "../data/siteData";

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function ContactCTA() {
  return (
    <section id="contact" style={sectionStyle(90)}>
      <div className="container-xxl">
        <Reveal>
          <div
            style={{
              borderRadius: T.radius,
              padding: "clamp(36px, 6vw, 72px)",
              background: `linear-gradient(135deg, ${T.primary} 0%, ${T.primaryDark} 100%)`,
              color: T.white,
              textAlign: "center",
              boxShadow: T.shadowLg,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -80,
                left: -40,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 12, letterSpacing: 3, marginBottom: 14, opacity: 0.9 }}>
                RESERVE YOUR EXPERIENCE
              </div>
              <h2
                style={{
                  fontFamily: T.serif,
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.4rem)",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Ready for Your Next Stay?
              </h2>
              <p
                style={{
                  marginTop: 14,
                  fontSize: 16,
                  maxWidth: 620,
                  marginInline: "auto",
                  opacity: 0.92,
                }}
              >
                Book directly with PDS Residency for the best rate and a complimentary welcome experience.
              </p>
              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <PillButton variant="dark" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" T={T}>
                  Book Now <ArrowRight size={16} />
                </PillButton>
                <PillButton variant="ghost" href="tel:+919876543210" T={T}>
                  <PhoneCall size={16} /> Call Now
                </PillButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}