import { useState } from "react";
import { cn } from "@/lib/utils";

const audiences = [
  { emoji: "🎓", label: "Эксперт" },
  { emoji: "🏢", label: "Бренд" },
  { emoji: "📱", label: "SMM" },
  { emoji: "📹", label: "Блогер" },
  { emoji: "💼", label: "Предприниматель" },
];

const AudienceChips = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {audiences.map((audience, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300",
                "flex items-center gap-2 text-lg font-medium",
                active === index
                  ? "border-cyan bg-cyan/10 shadow-[0_0_30px_hsl(var(--cyan)/0.4)] scale-105"
                  : "border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))] hover:border-cyan/50"
              )}
            >
              <span>{audience.emoji}</span>
              <span>{audience.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceChips;
