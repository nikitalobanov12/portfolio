"use client";

import { useState, useRef, useEffect } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;
  const hasTechnicalDetails = project.technicalDetails && project.technicalDetails.length > 0;
  const hasDetailPage = !!project.detailPage;

  const displayDescription = project.tagline || project.description || "";

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
        ref={cardRef}
        onClick={handleCardClick}
        className="cursor-pointer group card-interactive card-glow border-l border-border pl-5 py-5 rounded-r-lg"
      >
        <div className="space-y-3">
          {/* Project title */}
          <h3 className="text-lg text-foreground font-medium group-hover:text-primary transition-colors duration-150">
            {project.title}
          </h3>

          {/* Tagline/Description */}
          <p className="text-muted-foreground leading-relaxed">
            {displayDescription}
          </p>

          {/* Tech stack - inline text */}
          {project.techStack && (
            <p className="text-sm text-muted-foreground/70 pt-1">
              {project.techStack.join(' · ')}
            </p>
          )}

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="link-slide text-primary hover:text-foreground transition-colors duration-150 font-medium"
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
                className="link-slide text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer"
              >
                read more
              </span>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="link-slide text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              source
            </a>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border shadow-2xl">
          {/* Clean header with close button */}
          <div className="flex items-start justify-between pb-4 border-b border-border">
            <div className="space-y-1">
              <DialogTitle className="text-2xl text-foreground font-semibold">
                {project.title}
              </DialogTitle>
              {project.tagline && (
                <p className="text-muted-foreground">
                  {project.tagline}
                </p>
              )}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-150"
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
              <div className="overflow-hidden border border-border bg-card rounded-lg shadow-lg">
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur p-2 text-foreground border border-border transition-all hover:bg-card hover:scale-105 rounded-lg shadow-lg"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur p-2 text-foreground border border-border transition-all hover:bg-card hover:scale-105 rounded-lg shadow-lg"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {project.images!.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-primary scale-125"
                            : "bg-muted-foreground/50 hover:bg-muted-foreground"
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
                <p className="leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              )}

              {/* Technical Details */}
              {hasTechnicalDetails && (
                <div className="space-y-4">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Technical Details
                  </h3>
                  <div className="space-y-3">
                    {project.technicalDetails.map((paragraph, index) => (
                      <p key={index} className="leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Fallback to description if no summary */}
              {!project.summary && project.description && (
                <p className="leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}
            </div>
          </DialogDescription>

          {/* Footer with links */}
          <div className="flex flex-wrap items-center gap-5 pt-6 mt-6 border-t border-border">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="link-slide text-primary hover:text-foreground transition-colors duration-150 font-medium"
              >
                try it &rarr;
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="link-slide text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              view source
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
