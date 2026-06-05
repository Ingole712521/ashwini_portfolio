import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  variant?: "default" | "muted";
  cursorZone?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  variant = "default",
  cursorZone,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-cursor-zone={cursorZone ?? id}
      className={cn(
        "relative z-10 px-6 py-28 sm:py-32",
        variant === "muted" && "bg-muted/50",
        className,
      )}
    >
      <ScrollReveal className="mx-auto max-w-6xl">{children}</ScrollReveal>
    </section>
  );
}
