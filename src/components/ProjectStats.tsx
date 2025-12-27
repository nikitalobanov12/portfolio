"use client";

import type { ProjectStats as ProjectStatsType } from "@/lib/data";

interface ProjectStatsProps {
  title: string;
  stats: ProjectStatsType;
}

function formatKey(key: string): string {
  return key.replace(/_/g, "_");
}

function formatValue(value: string | number | string[]): string {
  if (Array.isArray(value)) {
    return `["${value.join('", "')}"]`;
  }
  if (typeof value === "string") {
    return `"${value}"`;
  }
  return String(value);
}

export function ProjectStats({ title, stats }: ProjectStatsProps) {
  const entries = Object.entries(stats);

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/30 border border-border rounded-lg p-4 font-mono text-sm">
      {/* Comment line */}
      <p className="text-muted-foreground">
        // {title} Metrics
      </p>

      {/* Const declaration */}
      <p className="mt-2">
        <span className="text-muted-foreground">const</span>{" "}
        <span className="text-foreground">stats</span>{" "}
        <span className="text-muted-foreground">=</span>{" "}
        <span className="text-muted-foreground">{"{"}</span>
      </p>

      {/* Stats entries */}
      <div className="pl-4 space-y-1">
        {entries.map(([key, value], index) => (
          <p key={key}>
            <span className="text-muted-foreground">{formatKey(key)}</span>
            <span className="text-muted-foreground">: </span>
            <span className="text-primary">{formatValue(value)}</span>
            {index < entries.length - 1 && (
              <span className="text-muted-foreground">,</span>
            )}
          </p>
        ))}
      </div>

      {/* Closing brace */}
      <p className="text-muted-foreground">{"}"}</p>
    </div>
  );
}
