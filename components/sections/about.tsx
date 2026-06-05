import {
  aboutContent,
  aboutStory,
  aboutStrengths,
  education,
} from "@/data/about";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label={aboutContent.label}
        title={aboutContent.title}
        description={aboutContent.description}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="w-full p-8">
          <Text as="h3" className="text-card-foreground">
            About Me
          </Text>
          {aboutStory.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </Card>

        <div className="flex flex-col gap-8">
          <Card className="w-full p-8">
            <Text as="h3" className="text-card-foreground">
              Core Strengths
            </Text>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {aboutStrengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-primary" />
                  {strength}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="w-full p-8">
            <Text as="h3" className="text-card-foreground">
              Education
            </Text>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.degree} className="border-l-2 border-primary pl-4">
                  <p className="font-head text-card-foreground">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
