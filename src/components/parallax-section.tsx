"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
  speed = 120,
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
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-1/4 h-[150%] w-full"
      >
        <Image src={src} alt="" fill priority className="object-cover" />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-background/70" />
      )}
    </div>
  );
}
