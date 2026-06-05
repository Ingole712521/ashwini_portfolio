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
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-3">
        {methods.map((method) => {
          const Icon = iconMap[method.label as keyof typeof iconMap];

          return (
            <div
              key={method.label}
              data-cursor-hover
              data-cursor-type="contact"
              data-cursor-magnetic
              className="group flex flex-col items-center border-2 border-black bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-black bg-yellow text-foreground shadow-xs transition-transform duration-300 group-hover:scale-110">
                {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
              </div>
              <p className="font-head text-sm font-semibold text-card-foreground">
                {method.label}
              </p>
              <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                {method.description}
              </p>
              <Button
                size="sm"
                variant="outline"
                className="mt-5 w-full"
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

      <div className="flex flex-col items-center gap-4 border-t-2 border-black pt-8">
        <p className="text-sm text-muted-foreground">Want the full profile?</p>
        <ResumeModalTrigger size="md" variant="secondary">
          View Resume
        </ResumeModalTrigger>
      </div>
    </div>
  );
}
