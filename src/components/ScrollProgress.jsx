import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress({ T }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0% 50%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${T.primary}, ${T.primaryDark})`,
        zIndex: 2000,
      }}
    />
  );
}