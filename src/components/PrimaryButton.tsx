import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, href, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-full h-14 px-7 font-semibold text-white bg-gradient-cta shadow-[0_10px_30px_hsl(var(--cyan)/0.25)] hover:scale-[1.02] transition-transform duration-200",
      className
    );

    if (href) {
      return (
        <a href={href} className={buttonClasses}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
