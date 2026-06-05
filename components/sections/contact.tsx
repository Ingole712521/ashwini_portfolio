import { contactContent, contactMethods } from "@/data/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { ContactActions } from "@/components/ui/contact-actions";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function Contact() {
  return (
    <SectionWrapper id="contact" variant="muted">
      <SectionHeading
        label={contactContent.label}
        title={contactContent.title}
        description={contactContent.description}
      />

      <div className="flex justify-center">
        <Card className="w-full max-w-3xl p-8 sm:p-10">
          <div className="mb-8 text-center">
            <Text as="h3" className="text-card-foreground">
              Get in touch
            </Text>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Prefer a quick conversation? Reach out by email, phone, or LinkedIn
              — I&apos;d love to hear about your project or opportunity.
            </p>
          </div>

          <ContactActions methods={contactMethods} />
        </Card>
      </div>
    </SectionWrapper>
  );
}
