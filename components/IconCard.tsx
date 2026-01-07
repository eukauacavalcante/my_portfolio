import { cn } from "@/lib/utils";

export function IconCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "group p-6 bg-primary/5 border border-primary/5 rounded-xl hover:border-primary/20 hover:bg-primary/20 transition-all duration-300 flex flex-col items-center gap-3",
      className
    )}>
      {children}
    </div>
  );
}
