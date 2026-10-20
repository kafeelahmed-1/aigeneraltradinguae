import { cn } from "@/lib/utils";

export function SectionLabel({ children, className, index }: { children: React.ReactNode; className?: string; index?: string }) {
  return (
    <p className={cn("label-mono flex items-center gap-3 text-primary", className)}>
      <span aria-hidden className="h-px w-8 bg-primary" />
      {index && <span className="opacity-70">{index}</span>}
      <span>{children}</span>
    </p>
  );
}
