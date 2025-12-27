"use client";

import { useState } from "react";
import type { Experience } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group block w-full text-left border-l-2 border-border pl-4 py-3 transition-all hover:border-primary hover:bg-card/50">
          <div className="space-y-2">
            {/* Title and Company */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-foreground font-medium">
                {experience.title}
              </span>
              <span className="text-muted-foreground">@</span>
              <span className="text-foreground">{experience.company}</span>
              <span className="text-muted-foreground text-sm">
                ({experience.duration})
              </span>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5">
              {experience.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-1.5 py-0.5 bg-muted text-muted-foreground rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Preview of first highlight */}
            {experience.highlights.length > 0 && (
              <p className="text-sm text-muted-foreground line-clamp-1">
                <span className="text-primary font-medium">
                  {experience.highlights[0].title}:
                </span>{" "}
                {experience.highlights[0].metric}
              </p>
            )}
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-border">
        {/* Terminal window header */}
        <div className="flex items-center gap-2 pb-4 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="text-sm text-muted-foreground ml-2">
            {experience.company.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>

        <DialogHeader>
          <DialogTitle className="text-xl">
            <span className="text-foreground">{experience.title}</span>
            <span className="text-muted-foreground"> @ </span>
            <a
              href={experience.url}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {experience.company}
            </a>
          </DialogTitle>
          <p className="text-sm text-muted-foreground">{experience.duration}</p>
        </DialogHeader>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 py-4">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm px-2 py-1 bg-muted text-muted-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          <div className="space-y-3">
            {experience.highlights.map((highlight, index) => (
              <div
                key={index}
                className="border-l-2 border-border pl-4 py-2"
              >
                <div className="flex items-start gap-2 flex-wrap">
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded font-medium">
                    {highlight.title}
                  </span>
                  <span className="text-foreground font-medium">
                    {highlight.metric}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Link to company */}
        <div className="pt-4 border-t border-border mt-4">
          <a
            href={experience.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Visit {experience.company} &rarr;
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
