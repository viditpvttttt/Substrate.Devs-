import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

export interface StickyCardItem {
  key: string;
  content: ReactNode;
}

/**
 * Cards that pin below the header and stack over one another as you
 * scroll, earlier cards easing back in scale.
 */
export function StickyCards({ items }: { items: StickyCardItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <StickyCard key={item.key} index={i} total={items.length}>
          {item.content}
        </StickyCard>
      ))}
    </div>
  );
}

function StickyCard({
  children,
  index,
  total,
}: {
  children: ReactNode;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.92]);

  return (
    <div ref={ref} className="h-[86svh]">
      <div className="sticky" style={{ top: `calc(5.5rem + ${index * 1.25}rem)` }}>
        <motion.div style={{ scale }} className="origin-top will-change-transform">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
