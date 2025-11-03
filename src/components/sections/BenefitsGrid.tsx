import GlassCard from "../GlassCard";
import bannedSocial from "@/assets/banned-social.png";

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
    type: "problem"
  },
  {
    title: "Быстрый набор подписчиков",
    icon: "📈",
    type: "solution"
  },
  {
    title: "Новые клиенты",
    icon: "💰",
    type: "solution"
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
              className={`aspect-square hover:shadow-[0_0_40px_hsl(var(--cyan)/0.2)] transition-shadow duration-300 ${
                benefit.type === "solution" ? "border-cyan/30" : ""
              }`}
            >
              <div className="h-full flex flex-col items-center justify-center p-8 gap-6">
                {benefit.image ? (
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-auto max-h-[200px] object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-5xl">{benefit.icon}</span>
                )}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center">
                  {benefit.title}
                </h3>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
