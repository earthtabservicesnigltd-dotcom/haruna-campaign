import type { CSSProperties } from "react";

/** Pass to style prop for staggered scroll-reveal delays */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}