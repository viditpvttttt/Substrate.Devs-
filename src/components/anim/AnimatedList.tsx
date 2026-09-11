import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Rows that slide up and de-blur one after another when scrolled into view.
 */
export function AnimatedList({
  children,
  className = "",
  stagger = 0.09,
}: {
  children: ReactNode[];
  className?: string;
  stagger?: number;
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 18, filter: "blur(5px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
