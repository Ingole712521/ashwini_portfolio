type SectionWrapperProps = {
  id: string;
  variant?: "default" | "muted";
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  variant = "default",
  className = "",
  children,
}: SectionWrapperProps) {
  const variantClass = variant === "muted" ? "bg-muted/50" : "";

  return (
    <section id={id} className={`px-6 py-24 ${variantClass} ${className}`.trim()}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
