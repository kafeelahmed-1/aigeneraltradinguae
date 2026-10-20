import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setInView(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e?.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  as: Tag = "div", delay = 0, className, children,
}: { as?: ElementType; delay?: number; className?: string; children: ReactNode }) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag ref={ref} data-in={inView} className={cn("reveal", className)} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
