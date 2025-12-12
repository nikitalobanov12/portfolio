import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  url: string;
  liveUrl?: string;
  description: string;
  techStack?: string[];
  images?: string[];
  details?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images!.length) % project.images!.length,
      );
    }
  };

  return (
    <>
      {/* Project card */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer group border-l-2 border-border pl-4 py-2 transition-all hover:border-primary hover:bg-card/50"
      >
        <div className="space-y-2">
          {/* Project title */}
          <span className="text-terminal-yellow group-hover:text-primary transition-colors">
            {project.title}
          </span>

          {/* Description */}
          <p className="text-sm text-muted-foreground">{project.description}</p>

          {/* Tech stack */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-xs text-terminal-aqua">
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
                className="text-terminal-green hover:underline"
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
        <DialogContent className="sm:max-w-2xl bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-xl text-foreground">
              {project.title}
            </DialogTitle>
            {project.techStack && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs text-terminal-aqua">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </DialogHeader>

          {hasImages && (
            <div className="relative mt-2">
              <div className="overflow-hidden border border-border bg-card">
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 p-1.5 text-foreground border border-border transition-colors hover:bg-card"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 p-1.5 text-foreground border border-border transition-colors hover:bg-card"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images!.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 w-2 transition-colors ${
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
            <div className="space-y-4">
              {project.details && project.details.length > 0 ? (
                <ul className="space-y-3 text-sm text-muted-foreground border-l-2 border-border pl-4">
                  {project.details.map((detail, index) => (
                    <li key={index} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}
            </div>
          </DialogDescription>

          <div className="flex items-center gap-4 pt-2 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-terminal-green hover:underline"
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
