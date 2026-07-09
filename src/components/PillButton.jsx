import { useState } from "react";

export default function PillButton({ children, onClick, variant = "primary", block = false, href, T }) {
  const [hover, setHover] = useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "12px 26px",
    borderRadius: 999,
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: 0.4,
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
    width: block ? "100%" : "auto",
    textDecoration: "none",
  };
  const styles = {
    primary: {
      background: hover
        ? `linear-gradient(135deg, ${T.primaryDark}, ${T.primary})`
        : `linear-gradient(135deg, ${T.primary}, ${T.primaryDark})`,
      color: T.white,
      boxShadow: hover
        ? "0 14px 30px rgba(46,125,50,0.45)"
        : "0 8px 20px rgba(46,125,50,0.28)",
      transform: hover ? "translateY(-2px) scale(1.05)" : "none",
    },
    dark: {
      background: T.primaryDark,
      color: T.white,
      boxShadow: hover ? "0 12px 24px rgba(46,125,50,0.45)" : "0 6px 16px rgba(0,0,0,0.15)",
      transform: hover ? "scale(1.05)" : "none",
    },
    ghost: {
      background: hover ? T.white : "rgba(255,255,255,0.15)",
      color: hover ? T.primaryDark : T.white,
      border: "1.5px solid rgba(255,255,255,0.7)",
      backdropFilter: "blur(8px)",
      transform: hover ? "translateY(-2px) scale(1.03)" : "none",
    },
  };
  const Cmp = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...styles[variant] }}
    >
      {children}
    </Cmp>
  );
}