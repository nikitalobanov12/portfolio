"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
        className="cursor-pointer group border-l border-border pl-4 py-4 transition-all duration-150 hover:border-primary"
      >
        <div className="space-y-2">
          {/* Project title */}
          <h3 className="text-foreground font-medium group-hover:text-primary transition-colors duration-150">
            {project.title}
          </h3>

          {/* Tagline/Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {displayDescription}
          </p>

          {/* Tech stack - inline text */}
          {project.techStack && (
            <p className="text-xs text-muted-foreground pt-1">
              {project.techStack.join(' · ')}
            </p>
          )}

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-primary hover:text-foreground transition-colors duration-150"
              >
                try it &rarr;
              </a>
            )}
            {hasDetailPage && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = project.detailPage!;
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
              >
                read more
              </span>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              source
            </a>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-background border-border">
          {/* Clean header with close button */}
          <div className="flex items-start justify-between pb-4 border-b border-border">
            <div className="space-y-1">
              <DialogTitle className="text-xl text-foreground">
                {project.title}
              </DialogTitle>
              {project.tagline && (
                <p className="text-sm text-muted-foreground">
                  {project.tagline}
                </p>
              )}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              <X size={18} />
            </button>
          </div>

          <DialogHeader className="sr-only">
            <DialogDescription>Project details for {project.title}</DialogDescription>
          </DialogHeader>

          {/* Tech stack */}
          {project.techStack && (
            <p className="text-sm text-muted-foreground pt-2">
              {project.techStack.join(' · ')}
            </p>
          )}

          {/* Images */}
          {hasImages && (
            <div className="relative mt-4">
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
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 p-1.5 text-foreground border border-border transition-colors hover:bg-card rounded"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images!.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
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
            <div className="space-y-6 mt-6">
              {/* Summary */}
              {project.summary && (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              )}

              {/* Technical Details */}
              {hasTechnicalDetails && (
                <div className="space-y-4">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
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
          <div className="flex flex-wrap items-center gap-4 pt-6 mt-6 border-t border-border text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-foreground transition-colors duration-150"
              >
                try it &rarr;
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              view source
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
