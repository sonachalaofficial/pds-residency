import { useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { T, FAQ_DATA } from "../data/siteData";
import { ChevronDown, ChevronUp } from "lucide-react";

function sectionStyle(py = 100) {
  return { padding: `${py}px 0`, position: "relative" };
}

function FAQItem({ question, answer, isOpen, onClick, index }) {
  return (
    <div
      style={{
        background: T.white,
        borderRadius: T.radius,
        border: "1px solid rgba(108,191,132,0.16)",
        boxShadow: isOpen ? T.shadowLg : T.shadow,
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: T.sans,
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`,
              color: T.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            {index + 1}
          </div>
          <span
            style={{
              fontFamily: T.serif,
              fontWeight: 600,
              fontSize: 17,
              color: isOpen ? T.primaryDark : T.text,
              lineHeight: 1.4,
            }}
          >
            {question}
          </span>
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isOpen ? `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})` : "rgba(108,191,132,0.14)",
            color: isOpen ? T.white : T.primaryDark,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginLeft: 12,
            transition: "all 0.3s ease",
          }}
        >
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div
          style={{
            padding: "0 24px 20px 72px",
            color: T.muted,
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ ...sectionStyle(110), background: T.bg }}>
      <div className="container-xxl">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your stay at JP Guest House."
          T={T}
        />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {FAQ_DATA.map((faq, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div style={{ marginBottom: 16 }}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onClick={() => handleToggle(i)}
                  index={i}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}