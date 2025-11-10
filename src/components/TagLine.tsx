"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/animation/gsap.config";
import { textReveal } from "@/animation/effects";
gsap.registerEffect(textReveal);

export default function TagLine({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      let tl = gsap.timeline();

      tl.textReveal(".first")
        .textReveal(".second")
        .textReveal(".third")
        .textReveal(".fourth");
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  );
}
