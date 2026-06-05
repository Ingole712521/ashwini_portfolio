import type { SectionContent } from "@/types/portfolio";
import { siteConfig } from "@/config/site";

export const contactContent: SectionContent = {
  label: "Contact",
  title: "Let's connect",
  description:
    "Open to senior full-stack roles, freelance projects, and collaborations. Reach out anytime.",
};

export const contactMethods = [
  {
    label: "Email Me",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: "Send Email",
    accent: "primary" as const,
  },
  {
    label: "Call Me",
    description: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    cta: "Call Now",
    accent: "cyan" as const,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: siteConfig.linkedin,
    cta: "Connect on LinkedIn",
    external: true,
    accent: "purple" as const,
  },
] as const;
