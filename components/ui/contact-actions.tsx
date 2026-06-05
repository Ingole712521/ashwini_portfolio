"use client";

import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/retroui/Button";
import { ResumeModalTrigger } from "@/components/ui/resume-modal";

type ContactMethod = {
  label: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
};

const iconMap = {
  "Email Me": Mail,
  "Call Me": Phone,
  LinkedIn: FaLinkedin,
} as const;

type ContactActionsProps = {
  methods: readonly ContactMethod[];
};

export function ContactActions({ methods }: ContactActionsProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {methods.map((method) => {
          const Icon = iconMap[method.label as keyof typeof iconMap];

          return (
            <div
              key={method.label}
              className="flex flex-col items-center border-2 border-black bg-background p-5 text-center shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center border-2 border-black bg-primary text-primary-foreground shadow-xs">
                {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
              </div>
              <p className="font-head text-sm text-card-foreground">
                {method.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {method.description}
              </p>
              <Button
                size="sm"
                variant="outline"
                className="mt-4 w-full"
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
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-3 border-t-2 border-black pt-6">
        <p className="text-sm text-muted-foreground">
          Want the full profile?
        </p>
        <ResumeModalTrigger size="md" variant="secondary">
          View Resume
        </ResumeModalTrigger>
      </div>
    </div>
  );
}
