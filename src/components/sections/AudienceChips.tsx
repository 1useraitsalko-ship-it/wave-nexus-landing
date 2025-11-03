import { cn } from "@/lib/utils";
import GlassCard from "../GlassCard";

const audiences = [
  { emoji: "🎓", label: "Эксперт" },
  { emoji: "🏢", label: "Бренд" },
  { emoji: "📱", label: "SMM" },
  { emoji: "📹", label: "Блогер" },
  { emoji: "💼", label: "Предприниматель" },
];

const AudienceChips = () => {

  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-text bg-clip-text text-transparent">
            Кому нужно делать вирусные ролики?
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <GlassCard
              key={index}
              className="aspect-square hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.3)] transition-all duration-300"
            >
              <div className="h-full flex flex-col items-center justify-center gap-4 p-4">
                <span className="text-4xl md:text-5xl">{audience.emoji}</span>
                <span className="text-base md:text-lg font-bold text-center bg-gradient-text bg-clip-text text-transparent">
                  {audience.label}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceChips;
