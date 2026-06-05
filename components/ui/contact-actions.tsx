"use client";

import type { CSSProperties } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/retroui/Button";
import { ResumeModalTrigger } from "@/components/ui/resume-modal";
import { cn } from "@/lib/utils";

type ContactAccent = "primary" | "cyan" | "purple";

type ContactMethod = {
  label: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
  accent: ContactAccent;
};

const accentHex: Record<ContactAccent, string> = {
  primary: "#ec4899",
  cyan: "#06b6d4",
  purple: "#8b5cf6",
};

const iconMap = {
  "Email Me": Mail,
  "Call Me": Phone,
  LinkedIn: FaLinkedin,
} as const;

const iconModifier: Record<ContactAccent, string> = {
  primary: "retro-contact-icon--mail",
  cyan: "retro-contact-icon--cyan",
  purple: "retro-contact-icon--linkedin",
};

type ContactActionsProps = {
  methods: readonly ContactMethod[];
};

export function ContactActions({ methods }: ContactActionsProps) {
  return (
    <div className="relative space-y-8 sm:space-y-10">
      <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        Prefer a quick conversation? Reach out by email, phone, or LinkedIn —
        I&apos;d love to hear about your project or opportunity.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {methods.map((method) => {
          const Icon = iconMap[method.label as keyof typeof iconMap];
          const accent = accentHex[method.accent];

          return (
            <article
              key={method.label}
              data-cursor-hover
              data-cursor-type="contact"
              data-cursor-magnetic
              className="contact-card group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background/60 p-5 backdrop-blur-sm transition-all duration-300 active:scale-[0.98] sm:p-6 sm:hover:-translate-y-1 sm:hover:shadow-lg"
              style={
                {
                  "--contact-accent": accent,
                } as CSSProperties
              }
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--contact-accent)] to-transparent opacity-60"
                aria-hidden
              />

              <div className="mb-5 flex items-start justify-between gap-3">
                <div
                  className={cn(
                    "retro-contact-icon contact-card__icon h-12 w-12",
                    iconModifier[method.accent],
                  )}
                >
                  {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all duration-300 sm:group-hover:-translate-y-0.5 sm:group-hover:translate-x-0.5 sm:group-hover:text-[var(--contact-accent)]"
                  aria-hidden
                />
              </div>

              <p className="font-head text-base font-semibold text-card-foreground">
                {method.label}
              </p>
              <p
                className={cn(
                  "mt-2 min-h-[2.5rem] text-sm leading-relaxed text-muted-foreground",
                  method.label === "Email Me" && "font-mono text-xs break-all",
                )}
              >
                {method.description}
              </p>

              <Button
                size="md"
                variant="outline"
                className="contact-card__cta mt-5 w-full min-h-11"
                render={
                  <a
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  />
                }
              >
                {method.cta}
              </Button>
            </article>
          );
        })}
      </div>

      <div className="contact-resume-banner relative overflow-hidden rounded-xl border border-border bg-secondary/40 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-purple to-cyan"
          aria-hidden
        />
        <div className="text-center sm:pl-3 sm:text-left">
          <p className="font-head text-sm font-semibold text-foreground sm:text-base">
            Want the full profile?
          </p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Experience, projects, skills, and education — all in one place.
          </p>
        </div>
        <ResumeModalTrigger
          size="md"
          variant="secondary"
          className="mt-4 w-full min-h-11 sm:mt-0 sm:w-auto sm:shrink-0"
        >
          View Resume
        </ResumeModalTrigger>
      </div>
    </div>
  );
}
