import GlassCard from "../GlassCard";

const learnings = [
  {
    emoji: "✨",
    title: "Создавать контент, который собирает миллионы просмотров",
  },
  {
    emoji: "🔥",
    title: "Прокачивать алгоритмы соцсетей для максимального охвата",
  },
  {
    emoji: "🚀",
    title: "Быстро набирать подписчиков и создавать лояльную аудиторию",
  },
  {
    emoji: "🪙",
    title: "Переливать трафик в Telegram и монетизировать контент",
  },
  {
    emoji: "🐝",
    title: "Монетизировать контент через рекламные интеграции",
  },
];

const WhatYouLearn = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-text bg-clip-text text-transparent">
            Что вы научитесь делать
          </span>
        </h2>

        <div className="space-y-6">
          {learnings.map((item, index) => (
            <GlassCard 
              key={index}
              className="p-6 md:p-8 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center text-3xl">
                  {item.emoji}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
