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
import { ProjectStats } from "@/components/ProjectStats";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onOpenDocs?: () => void;
}

export function ProjectCard({ project, onOpenDocs }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;
  const hasStats = project.stats && Object.keys(project.stats).length > 0;
  const hasBullets = project.bullets && project.bullets.length > 0;
  const hasTechDocs =
    project.techDocsHighlights && project.techDocsHighlights.length > 0;

  const displayDescription = project.tagline || project.description || "";

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
        onClick={() => setOpen(true)}
        className="cursor-pointer group border-l-2 border-border pl-4 py-3 transition-all hover:border-primary hover:bg-card/50"
      >
        <div className="space-y-2">
          {/* Project title with role badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
              {project.title}
            </span>
            {project.role && (
              <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                {project.role}
              </span>
            )}
          </div>

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
          <div className="flex items-center gap-4 text-sm pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-primary hover:underline"
              >
                live
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              github
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
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              {project.title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>

          <DialogHeader>
            <DialogTitle className="text-xl text-foreground flex flex-wrap items-center gap-2">
              {project.title}
              {project.role && (
                <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded">
                  {project.role}
                </span>
              )}
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

          {/* Stats Code Block */}
          {hasStats && (
            <div className="mt-4">
              <ProjectStats title={project.title} stats={project.stats} />
            </div>
          )}

          <DialogDescription asChild>
            <div className="space-y-4 mt-4">
              {/* Technical Bullets (new format) */}
              {hasBullets && (
                <div className="space-y-3">
                  <div className="space-y-3 border-l-2 border-border pl-4">
                    {project.bullets.map((bullet, index) => (
                      <div key={index} className="space-y-1">
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded font-medium">
                          {bullet.category}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {bullet.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legacy details (for backward compatibility) */}
              {!hasBullets &&
                project.details &&
                project.details.length > 0 && (
                  <ul className="space-y-3 text-sm text-muted-foreground border-l-2 border-border pl-4">
                    {project.details.map((detail, index) => (
                      <li key={index} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

              {/* Fallback to description if no details or bullets */}
              {!hasBullets &&
                (!project.details || project.details.length === 0) &&
                project.description && (
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
                className="text-primary hover:underline"
              >
                {project.liveUrl.replace("https://", "")}
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground hover:underline"
            >
              github
            </a>

            {/* Man page link */}
            {hasTechDocs && onOpenDocs && (
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenDocs();
                }}
                className="text-muted-foreground hover:text-primary hover:underline font-mono"
              >
                [docs]
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
