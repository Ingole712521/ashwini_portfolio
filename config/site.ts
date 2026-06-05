import type { Metadata } from "next";

export const siteConfig = {
  name: "Ashwini",
  title: "Ashwini | Portfolio",
  description: "Personal portfolio of Ashwini — creative developer and designer.",
  url: "https://ashwini.dev",
  email: "ashwini@example.com",
} as const;

export const siteMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};
