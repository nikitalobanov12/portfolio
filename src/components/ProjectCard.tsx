"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;
  const hasTechnicalDetails = project.technicalDetails && project.technicalDetails.length > 0;
  const hasDetailPage = !!project.detailPage;

  const displayDescription = project.tagline || project.description || "";

  const handleCardClick = () => {
    if (hasDetailPage) {
      window.location.href = project.detailPage!;
    } else {
      setOpen(true);
    }
  };
  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images!.length) % project.images!.length
      );
    }
  };

  return (
    <>
      {/* Project card */}
      <div
        onClick={handleCardClick}
        className="cursor-pointer group border-l-2 border-border pl-4 py-3 transition-all hover:border-primary hover:bg-card/50"
      >
        <div className="space-y-2">
          {/* Project title */}
          <span className="text-foreground font-medium group-hover:text-primary transition-colors">
            {project.title}
          </span>

          {/* Tagline/Description */}
          <p className="text-sm text-muted-foreground">{displayDescription}</p>

          {/* Tech stack */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-primary hover:underline underline-offset-2 font-medium"
              >
                try it →
              </a>
            )}
            {hasDetailPage && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = project.detailPage!;
                }}
                className="text-primary hover:underline underline-offset-2 cursor-pointer"
              >
                read more
              </span>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-foreground hover:underline underline-offset-2"
            >
              source
            </a>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-border">
          {/* Terminal window header */}
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <div className="flex gap-1.5">
              <button
                onClick={() => setOpen(false)}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group transition-colors"
              >
                <span className="text-red-900 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  ×
                </span>
              </button>
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              {project.title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>

          <DialogHeader>
            <DialogTitle className="text-xl text-foreground">
              {project.title}
            </DialogTitle>

            {/* Tagline */}
            {project.tagline && (
              <p className="text-muted-foreground text-sm">
                {project.tagline}
              </p>
            )}

            {/* Tech stack */}
            {project.techStack && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </DialogHeader>

          {/* Images */}
          {hasImages && (
            <div className="relative mt-2">
              <div className="overflow-hidden border border-border bg-card rounded">
                <img
                  src={project.images![currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="aspect-video w-full object-cover"
                />
              </div>
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 p-1.5 text-foreground border border-border transition-colors hover:bg-card rounded"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 p-1.5 text-foreground border border-border transition-colors hover:bg-card rounded"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images!.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-primary"
                            : "bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <DialogDescription asChild>
            <div className="space-y-6 mt-4">
              {/* Summary */}
              {project.summary && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              )}

              {/* Technical Details */}
              {hasTechnicalDetails && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-foreground border-b border-border pb-2">
                    Technical Details
                  </h3>
                  {project.technicalDetails.map((paragraph, index) => (
                    <p key={index} className="text-sm leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Fallback to description if no summary */}
              {!project.summary && project.description && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}
            </div>
          </DialogDescription>

          {/* Footer with links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 mt-4 border-t border-border text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline font-medium"
              >
                try it →
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              view source
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
