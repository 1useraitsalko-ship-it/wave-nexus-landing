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
    <section className="relative py-20 overflow-hidden">
      {/* Фоновые градиенты для атмосферы */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan/20 via-blue/20 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet/20 via-blue/20 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="flex items-center gap-3 justify-center mb-16 animate-fade-in">
          <span className="text-5xl animate-pulse">⚡</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              ПОЧЕМУ СЕЙЧАС?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                {/* Светящийся эффект при наведении */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan via-blue to-violet rounded-[26px] opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
                
                <GlassCard
                  className="relative p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_60px_hsl(var(--blue)/0.4)]"
                >
                  <div className="flex items-start gap-5">
                    {/* Иконка с градиентом */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan to-blue rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/30 via-blue/30 to-violet/30 flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {reason.emoji}
                      </div>
                    </div>
                    
                    {/* Контент */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:via-amber-300 group-hover:to-yellow-200 transition-all duration-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                        {reason.title}
                      </h3>
                      <p className="text-base leading-relaxed text-muted/90 group-hover:text-muted transition-colors duration-300">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
