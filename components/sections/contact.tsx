import { contactContent, contactMethods } from "@/data/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ContactActions } from "@/components/ui/contact-actions";
import { Card } from "@/components/retroui/Card";

export function Contact() {
  return (
    <SectionWrapper id="contact" variant="muted" cursorZone="contact">
      <SectionHeading
        label={contactContent.label}
        title={contactContent.title}
        description={contactContent.description}
        badgeVariant="yellow"
      />

      <div className="flex justify-center">
        <Card
          className="contact-panel relative w-full max-w-4xl overflow-hidden p-5 sm:p-8 lg:p-10"
          data-cursor-hover
          data-cursor-type="contact"
        >
          <div
            className="pointer-events-none absolute -top-24 -right-16 h-48 w-48 rounded-full bg-yellow/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />

          <ContactActions methods={contactMethods} />
        </Card>
      </div>
    </SectionWrapper>
  );
}
