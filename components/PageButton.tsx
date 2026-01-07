import { Button } from "./ui/button";

interface PageButtonProps {
    children: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
    ariaLabel?: string;
    title?: string;
}

export default function PageButton({
    children,
    href,
    target = "_blank",
    rel = "noopener noreferrer",
    ariaLabel,
    title,
}: PageButtonProps) {
    return (
        <Button className="bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-300" asChild >
            <a href={href} target={target} rel={rel} aria-label={ariaLabel} title={title}>
                {children}
            </a>
        </Button>
    )
}
