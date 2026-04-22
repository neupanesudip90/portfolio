// Combines multiple class names into a single string.
// Handles conditional classes, arrays, and objects — falsy values are ignored.
// Use this instead of manually joining class names with template literals.
//
// Example:
//   cn("text-sm", isActive && "text-blue-500", undefined)
//   → "text-sm text-blue-500"   (undefined is ignored)

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
