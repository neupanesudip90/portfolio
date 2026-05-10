"use client";
import { cn } from "@/src/libs/utils";
import { motion, SpringOptions, useSpring, useTransform } from "motion/react";
import { JSX, useEffect } from "react";

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

// ✅ Move this OUTSIDE the component
const MotionSpan = motion.span;

export function AnimatedNumber({
  value,
  className,
  springOptions,
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <MotionSpan className={cn("tabular-nums", className)}>{display}</MotionSpan>
  );
}
