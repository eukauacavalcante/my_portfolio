export function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <article className={`group relative bg-primary/5 text-primary-foreground rounded-2xl overflow-hidden border border-primary/10 hover:border-chart-1/20 shadow-chart-1/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${className}`}>
      {children}
    </article>
  );
}
