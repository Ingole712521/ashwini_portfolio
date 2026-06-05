import type { SectionContent, SocialLink } from "@/types/portfolio";
import { siteConfig } from "@/config/site";

export const contactContent: SectionContent = {
  label: "Contact",
  title: "Let's work together",
  description:
    "Have a project in mind or just want to say hello? I'd love to hear from you.",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];
