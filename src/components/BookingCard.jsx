import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PillButton from "./PillButton";
import { T, BOOKING_URL } from "../data/siteData";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(31,41,55,0.12)",
  background: T.white,
  fontSize: 14,
  color: T.text,
  outline: "none",
  fontFamily: T.sans,
};

export default function BookingCard() {
  return (
    <div
      className="container-xxl"
      style={{ position: "relative", zIndex: 5, marginTop: -80, paddingInline: 16 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        whileHover={{ y: -4 }}
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.6)",
          borderRadius: T.radius,
          boxShadow: T.shadowLg,
          padding: 22,
        }}
      >
        <div className="row g-3 align-items-end">
          {[
            { label: "Check In", type: "date" },
            { label: "Check Out", type: "date" },
            { label: "Guests", type: "select", options: ["1 Guest", "2 Guests", "3 Guests", "4 Guests"] },
            { label: "Rooms", type: "select", options: ["1 Room", "2 Rooms", "3 Rooms"] },
          ].map((f) => (
            <div key={f.label} className="col-6 col-md-3">
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  color: T.muted,
                  marginBottom: 6,
                }}
              >
                {f.label.toUpperCase()}
              </label>
              {f.type === "select" ? (
                <select style={inputStyle}>
                  {f.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input type="date" style={inputStyle} />
              )}
            </div>
          ))}
          <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-end">
            <PillButton href={BOOKING_URL} target="_blank" rel="noopener noreferrer" T={T}>
              Book Now <ArrowRight size={16} />
            </PillButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
}