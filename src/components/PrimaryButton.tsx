import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, href, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-full h-14 px-7 font-semibold text-white relative overflow-hidden group",
      "bg-gradient-to-r from-[#1e3a8a] via-[#0c4a6e] to-[#134e4a]",
      "shadow-[0_10px_40px_hsl(var(--cyan)/0.3),0_0_20px_hsl(var(--blue)/0.2),inset_0_0_60px_rgba(0,0,0,0.5)]",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1e40af] before:via-[#0369a1] before:to-[#0f766e] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
      "after:absolute after:inset-0 after:bg-[length:200%_100%] after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-700",
      "hover:scale-105 hover:shadow-[0_15px_50px_hsl(var(--cyan)/0.5),0_0_40px_hsl(var(--blue)/0.4),inset_0_0_60px_rgba(0,0,0,0.4)]",
      "active:scale-[0.98]",
      "transition-all duration-300 ease-out",
      className
    );

    if (href) {
      return (
        <a href={href} className={buttonClasses}>
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
