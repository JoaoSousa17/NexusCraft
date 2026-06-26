"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { cn } from "@/lib/utils";

export function ParallaxSection({
  children,
  className,
  speed = 30,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function ParallaxBackground({
  src,
  speed = 160,
  overlay = true,
}: {
  src: string;
  speed?: number;
  overlay?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  const y = useTransform(smooth, [0, 0.5, 1], [-speed, speed * 0.2, speed]);
  const scale = useTransform(smooth, [0, 0.5, 1], [1.25, 1.08, 1.25]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-x-0 -top-1/4 h-[150%] w-full"
      >
        <Image src={src} alt="" fill priority className="object-cover" />
      </motion.div>
      {overlay && <div className="absolute inset-0 bg-background/70" />}
    </div>
  );
}

export function ParallaxAccent({
  className,
  speed = 80,
  rotate = 0,
}: {
  className?: string;
  speed?: number;
  rotate?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const y = useTransform(smooth, [0, 1], [speed, -speed]);
  const r = useTransform(smooth, [0, 1], [0, rotate]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      <motion.div
        style={{ y, rotate: r }}
        className={cn("absolute", className)}
      />
    </div>
  );
}
