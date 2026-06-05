import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  variant?: "default" | "muted";
  cursorZone?: string;
  className?: string;
  reveal?: boolean;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  variant = "default",
  cursorZone,
  className = "",
  reveal = true,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-cursor-zone={cursorZone ?? id}
      className={cn(
        "section-anchor relative z-10 px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:pb-32",
        variant === "muted" && "bg-muted/50",
        className,
      )}
    >
      {reveal ? (
        <ScrollReveal className="mx-auto max-w-6xl">{children}</ScrollReveal>
      ) : (
        <div className="mx-auto max-w-6xl">{children}</div>
      )}
    </section>
  );
}
