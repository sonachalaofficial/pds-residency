import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, subtitle, center = true, light = false, T }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 48 }}>
      {eyebrow && (
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: light ? "rgba(255,255,255,0.15)" : "rgba(108,191,132,0.14)",
              color: light ? T.white : T.primaryDark,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 2,
              marginBottom: 14,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 999, background: light ? T.white : T.primaryDark }} />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          style={{
            fontFamily: T.serif,
            fontWeight: 700,
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            lineHeight: 1.15,
            margin: 0,
            color: light ? T.white : T.text,
            letterSpacing: -0.5,
          }}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            style={{
              marginTop: 14,
              color: light ? "rgba(255,255,255,0.85)" : T.muted,
              maxWidth: 640,
              marginInline: center ? "auto" : 0,
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}