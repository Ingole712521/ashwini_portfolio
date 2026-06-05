"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/retroui/Button";
import { ResumeModalTrigger } from "@/components/ui/resume-modal";

const directLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "Phone", href: `tel:${siteConfig.phone}` },
] as const;

export function ContactSocialLinks() {
  return (
    <div className="mt-10 border-t-2 border-black pt-8">
      <p className="mb-4 text-center text-sm text-muted-foreground">
        Or find me on social media
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {directLinks.map((link) => (
          <Button
            key={link.label}
            variant="outline"
            size="sm"
            render={<a href={link.href} />}
          >
            {link.label}
          </Button>
        ))}
        <ResumeModalTrigger size="sm" variant="outline">
          Resume
        </ResumeModalTrigger>
      </div>
    </div>
  );
}
