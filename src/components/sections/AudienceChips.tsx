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
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-text bg-clip-text text-transparent">
            Кому нужно делать вирусные ролики?
          </span>
        </h2>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {audiences.map((audience, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "px-10 py-6 rounded-[24px] border backdrop-blur-sm transition-all duration-300",
                "flex items-center gap-4 text-xl md:text-2xl font-bold",
                "hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.3)]",
                active === index
                  ? "border-cyan bg-gradient-to-br from-cyan/20 to-cyan/5 shadow-[0_0_40px_hsl(var(--cyan)/0.5)] scale-105"
                  : "border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))] hover:border-cyan/50"
              )}
            >
              <span className="text-3xl">{audience.emoji}</span>
              <span className={cn(
                active === index && "bg-gradient-text bg-clip-text text-transparent"
              )}>{audience.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceChips;
