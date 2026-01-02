"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/data";

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
