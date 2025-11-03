import GlassCard from "../GlassCard";
import bannedSocial from "@/assets/banned-social.png";
import fastGrowth from "@/assets/fast-growth.png";
import bannerBlindness from "@/assets/banner-blindness.png";
import newClients from "@/assets/new-clients.png";

const benefits = [
  {
    title: "Запрет на рекламу через соцсети",
    icon: "🚫",
    type: "problem",
    image: bannedSocial
  },
  {
    title: "Баннерная слепота",
    icon: "👁️",
    type: "problem",
    image: bannerBlindness
  },
  {
    title: "Быстрый набор подписчиков",
    icon: "📈",
    type: "solution",
    image: fastGrowth
  },
  {
    title: "Новые клиенты",
    icon: "💰",
    type: "solution",
    image: newClients
  },
];

const BenefitsGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-text bg-clip-text text-transparent">
            Зачем это нужно?
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <GlassCard 
              key={index} 
              className={`relative overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(var(--cyan)/0.2)] transition-all duration-300 ${
                benefit.type === "solution" ? "border-cyan/30" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-card))] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex-1 flex items-center justify-center">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground text-center leading-tight">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
