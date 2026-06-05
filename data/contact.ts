import type { SectionContent, SocialLink } from "@/types/portfolio";
import { siteConfig } from "@/config/site";

export const contactContent: SectionContent = {
  label: "Contact",
  title: "Let's connect",
  description:
    "Open to senior full-stack roles, freelance projects, and collaborations. Reach out anytime.",
};

export const socialLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "Phone", href: `tel:${siteConfig.phone}` },
  { label: "Resume", href: siteConfig.resumePath },
];
