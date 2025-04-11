import { twMerge } from "tailwind-merge";

interface DottedBackgroundProps {
  dotSize?: number;
  dotSpacing?: number;
  dotColor?: string;
  backgroundColor?: string;
  className?: string;
}

export function DottedBackground({
  dotSize = 4,
  dotSpacing = 24,
  dotColor = "#4B5563",
  backgroundColor,
  className,
}: DottedBackgroundProps) {
  return (
    <div
      className={twMerge("", className)}
      style={{
        backgroundImage: `
          radial-gradient(circle, ${dotColor} ${dotSize / 2}px, transparent ${
          dotSize / 2
        }px)
        `,
        backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
        backgroundColor: backgroundColor,
      }}
    />
  );
}
