import { cn } from "@/utils/cn";

interface DecorativeBorderProps {
  className?: string;
  type?: "top" | "bottom" | "full";
}

export default function DecorativeBorder({ className, type = "full" }: DecorativeBorderProps) {
  // A simplistic Madhubani-inspired repeating pattern using SVG
  return (
    <div className={cn("w-full overflow-hidden flex", className)}>
      <svg
        className="w-full h-8 text-foreground"
        preserveAspectRatio="none"
        viewBox="0 0 100 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="madhubani-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          {/* Outer Border */}
          <rect x="0" y="2" width="20" height="16" stroke="currentColor" strokeWidth="1" fill="none" />
          
          {/* Inner Triangles (classic Madhubani edge detail) */}
          <path
            d="M 0 18 L 10 2 L 20 18"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="10" cy="12" r="2" fill="currentColor" />
        </pattern>
        <rect width="100%" height="20" fill="url(#madhubani-pattern)" />
      </svg>
    </div>
  );
}
