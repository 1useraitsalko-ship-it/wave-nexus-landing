import GlassCard from "../GlassCard";

const reasons = [
  {
    emoji: "🚫",
    title: "Обход запрета рекламы",
    description: "Платежеспособная аудитория смотрит Reels. С помощью вирального видео делаем большой охват и переливаем аудиторию в Telegram для дальнейшей коммуникации",
  },
  {
    emoji: "🔥",
    title: "Органический трафик",
    description: "В 2026 году из-за кризиса сокращение маркетинговых расходов и будет на 90% работать только органический трафик. Качество платного трафика значительно хуже",
  },
  {
    emoji: "📈",
    title: "Быстрый набор подписчиков",
    description: "Качественный контент собирает аудиторию за дни",
  },
  {
    emoji: "💰",
    title: "Тренд осени",
    description: "На этом проще всего раскачать свой аккаунт. А ты в очередь раз упускаешь возможность",
  },
];

const WhyNowSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex items-center gap-3 justify-center mb-16">
          <span className="text-4xl">⚡</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              ПОЧЕМУ СЕЙЧАС?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <GlassCard
              key={index}
              className="p-8 hover:shadow-[0_0_50px_hsl(var(--blue)/0.3)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue/30 to-violet/30 flex items-center justify-center text-3xl">
                  {reason.emoji}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted">{reason.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
