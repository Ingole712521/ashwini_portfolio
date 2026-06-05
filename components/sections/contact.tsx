import { contactContent, socialLinks } from "@/data/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";

const inputClassName =
  "w-full border-2 border-black bg-input px-4 py-3 text-foreground shadow-xs outline-none transition-all placeholder:text-muted-foreground/60 focus:shadow-sm";

export function Contact() {
  return (
    <SectionWrapper id="contact" variant="muted">
      <SectionHeading
        label={contactContent.label}
        title={contactContent.title}
        description={contactContent.description}
      />

      <Card className="mx-auto w-full max-w-2xl p-8 sm:p-10">
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-head text-sm font-medium text-card-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className={inputClassName}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-head text-sm font-medium text-card-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className={inputClassName}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-head text-sm font-medium text-card-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className={`${inputClassName} resize-none`}
            />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>

        <div className="mt-10 border-t-2 border-black pt-8">
          <p className="mb-4 text-center text-sm text-muted-foreground">
            Or find me on social media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="sm"
                render={
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
