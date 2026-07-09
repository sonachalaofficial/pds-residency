import { MapPin, Phone, Mail, Clock, ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import PillButton from "./PillButton";
import { T } from "../data/siteData";

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid rgba(31,41,55,0.06)" }}>
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "rgba(108,191,132,0.14)",
          color: T.primaryDark,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={20} />
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: 1.5, color: T.muted, marginBottom: 2 }}>
          {label.toUpperCase()}
        </div>
        <div style={{ fontWeight: 600, fontSize: 15 }}>{value}</div>
      </div>
    </div>
  );
}

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

export default function Location() {
  return (
    <section id="location" style={{ ...sectionStyle(110), background: T.white }}>
      <div className="container-xxl">
        <SectionTitle
          eyebrow="FIND US"
          title="Located Where Comfort Meets Convenience"
          subtitle="Easy to reach, wonderfully placed. Drop by or plan your route from anywhere."
          T={T}
        />
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <Reveal x={-30} y={0}>
              <div
                style={{
                  borderRadius: T.radius,
                  overflow: "hidden",
                  boxShadow: T.shadowLg,
                  height: "100%",
                  minHeight: 420,
                  border: "1px solid rgba(108,191,132,0.18)",
                }}
              >
                <iframe
                  title="PDS Residency Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.2308500227546!2d79.0291751!3d12.2326426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacbf4772b0ea01%3A0x4e820c84ce085a39!2sPDS%20RESIDENCY!5e0!3m2!1sen!2sin!4v1783602312982!5m2!1sen!2sin"
    width="100%"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: 420 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
          <div className="col-lg-5">
            <Reveal x={30} y={0}>
              <div
                style={{
                  background: T.white,
                  borderRadius: T.radius,
                  padding: 28,
                  boxShadow: T.shadow,
                  border: "1px solid rgba(108,191,132,0.18)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ContactRow icon={MapPin} label="Address" value="21, Nandhi Nagar, Athiyandal, Tiruvannamalai, Tamil Nadu 606603" />
                <ContactRow icon={Phone} label="Phone" value="9448334117" />
                <ContactRow icon={Mail} label="Email" value="pdsresidencytvmalai@gmail.com" />
                <ContactRow icon={Clock} label="Reception" value="Open 24 hours, all days" />
                <div style={{ display: "flex", gap: 10, marginTop: "auto", flexWrap: "wrap" }}>
                  <PillButton href="https://maps.google.com" T={T}>
                    Get Directions <ArrowRight size={14} />
                  </PillButton>
                  <PillButton variant="dark" href="tel:+919876543210" T={T}>
                    <PhoneCall size={14} /> Call Now
                  </PillButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}