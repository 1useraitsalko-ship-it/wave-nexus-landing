import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

const GlassCard = ({ children, className, glow = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))] backdrop-blur-sm",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
        glow && "shadow-[0_0_40px_hsl(var(--cyan)/0.15),inset_0_1px_0_0_rgba(255,255,255,0.05)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
