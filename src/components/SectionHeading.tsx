import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col gap-2 mb-12", alignments[align], className)}>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl font-medium max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
