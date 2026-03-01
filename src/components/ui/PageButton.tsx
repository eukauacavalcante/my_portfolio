import { Button } from "./Button";
import { cn } from "lib/utils";

interface PageButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  title?: string;
}

export default function PageButton({
  children,
  className = "",
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  ariaLabel,
  title,
}: PageButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      title={title}
    >
      <Button
        className={cn(
          "bg-primary text-primary-foreground font-semibold hover:bg-primary/60 transition-colors duration-300 cursor-pointer",
          className,
        )}
      >
        {children}
      </Button>
    </a>
  );
}
