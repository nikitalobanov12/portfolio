"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import type { Experience } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ExperienceCardProps {
  experience: Experience;
}

// Parse description to extract link if present
function parseDescription(description: string) {
  const linkRegex = /<a\s+href=['"]([^'"]+)['"][^>]*>([^<]+)<\/a>/;
  const match = description.match(linkRegex);

  if (match) {
    const [fullMatch, href, text] = match;
    const beforeText = description.slice(0, description.indexOf(fullMatch));
    const afterText = description.slice(description.indexOf(fullMatch) + fullMatch.length);
    return { beforeText, href, text, afterText };
  }

  return { beforeText: description, href: null, text: null, afterText: null };
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);

  // Track mouse position for glow effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Experience card trigger */}
      <button
        ref={cardRef}
        onClick={() => setOpen(true)}
        className="group block w-full text-left card-interactive card-glow border-l border-border pl-5 py-5 rounded-r-lg"
      >
        <div className="space-y-3">
          {/* Title and Duration row */}
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg text-foreground font-medium group-hover:text-primary transition-colors duration-150">
              {experience.title}
            </h3>
            <span className="text-sm text-muted-foreground">
              {experience.duration}
            </span>
          </div>

          {/* Company */}
          <p className="text-muted-foreground">
            {experience.company}
          </p>

          {/* Description */}
          {(() => {
            const { beforeText, href, text, afterText } = parseDescription(experience.description);
            return (
              <p className="text-muted-foreground leading-relaxed line-clamp-2">
                {beforeText}
                {href && (
                  <>
                    <span className="underline">{text}</span>
                    {afterText}
                  </>
                )}
              </p>
            );
          })()}

          {/* Tech Stack - inline text */}
          <p className="text-sm text-muted-foreground/70 pt-1">
            {experience.techStack.join(' · ')}
          </p>
        </div>
      </button>

      {/* Dialog */}
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border shadow-2xl">
        {/* Clean header with close button */}
        <div className="flex items-start justify-between pb-4 border-b border-border">
          <div className="space-y-1">
            <DialogTitle className="text-2xl text-foreground font-semibold">
              {experience.title}
            </DialogTitle>
            <p className="text-muted-foreground">
              <a
                href={experience.url}
                target="_blank"
                rel="noreferrer"
                className="link-slide hover:text-primary transition-colors duration-150"
              >
                {experience.company}
              </a>
              <span className="mx-2 text-border">·</span>
              {experience.duration}
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-150"
          >
            <X size={18} />
          </button>
        </div>

        <DialogHeader className="sr-only">
          <DialogDescription>Experience details for {experience.title} at {experience.company}</DialogDescription>
        </DialogHeader>

        {/* Description */}
        {(() => {
          const { beforeText, href, text, afterText } = parseDescription(experience.description);
          return (
            <p className="text-muted-foreground leading-relaxed pt-4 text-lg">
              {beforeText}
              {href && (
                <>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-primary transition-colors"
                  >
                    {text}
                  </a>
                  {afterText}
                </>
              )}
            </p>
          );
        })()}

        {/* Tech Stack */}
        <p className="text-sm text-muted-foreground py-4">
          {experience.techStack.join(' · ')}
        </p>

        {/* Highlights */}
        <div className="space-y-5">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            Key Achievements
          </h3>
          <div className="space-y-4">
            {experience.highlights.map((highlight, index) => (
              <div
                key={index}
                className="border-l-2 border-primary/30 hover:border-primary pl-4 py-3 transition-colors duration-200"
              >
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-sm text-primary font-medium">
                    {highlight.title}
                  </span>
                  <span className="text-foreground font-semibold">
                    {highlight.metric}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Link to company */}
        <div className="pt-6 border-t border-border mt-6">
          <a
            href={experience.url}
            target="_blank"
            rel="noreferrer"
            className="link-slide text-muted-foreground hover:text-primary transition-colors duration-150"
          >
            Visit {experience.company} &rarr;
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
