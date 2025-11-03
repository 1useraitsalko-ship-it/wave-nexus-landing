import GlassCard from "../GlassCard";

const stats = [
  { value: "1000+", label: "Учеников прошли обучение" },
  { value: "5 лет", label: "Опыта в создании контента" },
  { value: "6 лет", label: "В digital-маркетинге" },
  { value: "800+", label: "Успешных проектов" },
];

const AuthorSection = () => {
  return (
    <section className="py-20 bg-gradient-wave">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - статистика */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-muted">{stat.label}</div>
              </GlassCard>
            ))}
          </div>

          {/* Правая колонка - фото */}
          <GlassCard glow className="overflow-hidden aspect-square">
            <div className="w-full h-full bg-gradient-to-br from-blue/20 via-cyan/20 to-violet/20 flex items-center justify-center">
              <div className="text-8xl">👨‍💼</div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
