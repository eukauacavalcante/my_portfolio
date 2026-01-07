import { cn } from "@/lib/utils";

interface IconStackProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

export function IconStack({ children, className, icon = '' }: IconStackProps) {
  return (
    <>
      <i className={cn(
        "text-3xl text-primary/70 group-hover:scale-110 transition-colors duration-300",
        icon,
        className
      )}></i>
      <span className={cn(
        "text-sm font-medium text-primary",
        className
      )}>{children}</span>
    </>
  );
}
