import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <Badge variant="surface">{label}</Badge>
      <Text as="h2" className="mt-4 text-foreground">
        {title}
      </Text>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
