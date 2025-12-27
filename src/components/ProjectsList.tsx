"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { TechDocsModal } from "@/components/TechDocsModal";
import type { Project } from "@/lib/data";

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [docsModalOpen, setDocsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDocs = (project: Project) => {
    setSelectedProject(project);
    setDocsModalOpen(true);
  };

  return (
    <>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpenDocs={
              project.techDocsHighlights &&
              project.techDocsHighlights.length > 0
                ? () => handleOpenDocs(project)
                : undefined
            }
          />
        ))}
      </div>

      {/* Tech Docs Modal */}
      {selectedProject && selectedProject.techDocsHighlights && (
        <TechDocsModal
          open={docsModalOpen}
          onOpenChange={setDocsModalOpen}
          title={selectedProject.title}
          highlights={selectedProject.techDocsHighlights}
        />
      )}
    </>
  );
}
