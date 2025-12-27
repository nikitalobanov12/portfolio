"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TechDocsHighlight } from "@/lib/data";

interface TechDocsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  highlights: TechDocsHighlight[];
}

export function TechDocsModal({
  open,
  onOpenChange,
  title,
  highlights,
}: TechDocsModalProps) {
  if (!highlights || highlights.length === 0) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-background border-border">
        {/* Terminal window header */}
        <div className="flex items-center gap-2 pb-4 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-muted-foreground ml-2 font-mono">
            man {title.toLowerCase()}
          </span>
        </div>

        <DialogHeader>
          <DialogTitle className="text-xl text-foreground font-mono">
            {title.toUpperCase()}(7) - Technical Achievements
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            XYZ Format: "Accomplished [X] as measured by [Y], by doing [Z]"
          </p>
        </DialogHeader>

        {/* Highlights by category */}
        <div className="space-y-6 mt-4">
          {highlights.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              {/* Category header */}
              <h3 className="text-primary font-medium border-b border-border pb-2">
                {category.category}
              </h3>

              {/* Table-like display */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-muted-foreground/60 border-b border-border">
                      <th className="pb-2 pr-4 font-normal">Achievement</th>
                      <th className="pb-2 pr-4 font-normal">Metric</th>
                      <th className="pb-2 font-normal">Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="align-top">
                        <td className="py-2 pr-4 text-foreground">
                          {item.achievement}
                        </td>
                        <td className="py-2 pr-4 text-primary font-medium">
                          {item.metric}
                        </td>
                        <td className="py-2 text-muted-foreground">
                          {item.method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-border">
          <p className="text-xs text-muted-foreground/60 font-mono">
            See full documentation in project-docs/{title.toLowerCase()}
            -technical-achievements.md
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
