export function StackProject({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`text-xs px-3 py-1 bg-primary-foreground rounded-full text-chart-2 border border-chart-2/50 ${className}`}>
        {children}
    </span>
  );
}
