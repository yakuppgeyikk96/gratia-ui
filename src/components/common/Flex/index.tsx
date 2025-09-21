import { JSX, ReactNode } from "react";

import styles from "./Flex.module.scss";

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  gap?: string | number;
  gapX?: string | number;
  gapY?: string | number;
  grow?: boolean | number;
  shrink?: boolean | number;
  flex?: "none" | "1" | "auto" | "initial";
  as?: keyof JSX.IntrinsicElements;
}

export default function Flex({
  children,
  className = "",
  direction = "row",
  justify = "start",
  align = "stretch",
  wrap = "nowrap",
  gap,
  gapX,
  gapY,
  grow,
  shrink,
  flex,
  as: Component = "div",
}: FlexProps) {
  const flexClass = [
    styles.flex,
    styles[`direction-${direction}`],
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    styles[`wrap-${wrap}`],
    grow !== undefined &&
      (grow === true ? styles.grow : styles[`grow-${grow}`]),
    shrink !== undefined &&
      (shrink === true ? styles.shrink : styles[`shrink-${shrink}`]),
    flex && styles[`flex-${flex}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    ...(gap && { gap: typeof gap === "number" ? `${gap}px` : gap }),
    ...(gapX && { columnGap: typeof gapX === "number" ? `${gapX}px` : gapX }),
    ...(gapY && { rowGap: typeof gapY === "number" ? `${gapY}px` : gapY }),
  };

  return (
    <Component className={flexClass} style={style}>
      {children}
    </Component>
  );
}
