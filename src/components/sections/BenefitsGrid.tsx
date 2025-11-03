import GlassCard from "../GlassCard";

const benefits = [
  {
    title: "Запрет на рекламу через соцсети",
    icon: "🚫",
    type: "problem"
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
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <GlassCard 
              key={index} 
              className={`p-8 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.2)] transition-shadow duration-300 ${
                benefit.type === "solution" ? "border-cyan/30" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{benefit.icon}</span>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
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
