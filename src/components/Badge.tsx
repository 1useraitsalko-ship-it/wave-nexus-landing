import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "orange";
}

const Badge = ({ children, className, variant = "default" }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-xs font-medium backdrop-blur-sm",
        variant === "default" && "border border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))]",
        variant === "orange" && "bg-orange/20 border border-orange text-orange",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
