import { Badge } from "@/components/retroui/Badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  badgeVariant?: "surface" | "orange" | "cyan" | "purple" | "yellow";
};

export function SectionHeading({
  label,
  title,
  description,
  badgeVariant = "surface",
}: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <Badge variant={badgeVariant}>{label}</Badge>
      <h2
        className={cn(
          "section-chapter-title mt-6 text-3xl text-foreground sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="prose-body mx-auto mt-6 max-w-2xl text-base sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
