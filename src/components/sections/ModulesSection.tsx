import GlassCard from "../GlassCard";

const modules = [
  {
    number: "0",
    emoji: "🎬",
    title: "Добавление в закрытый чат. Вводный урок",
    subtitle: "Что можно делать с виральным контентом и как на нем зарабатывать?",
    items: [],
  },
  {
    number: "1",
    emoji: "🔥",
    title: "Структура виральных видео. Прокачка алгоритмов соцсетей",
    subtitle: "",
    items: ["Из чего состоят виральные видео", "Как строятся алгоритмы", "Какую тему выбрать?"],
  },
  {
    number: "2",
    emoji: "✍️",
    title: "Виральные сценарии. Как их составлять. Возможность автоматизации написания сценариев",
    subtitle: "",
    items: ["Как писать правильные сценарии", "Как автоматизировать написание контента"],
  },
  {
    number: "3",
    emoji: "🎬",
    title: "Sora. Подготовка к созданию",
    subtitle: "",
    items: ["Как создавать видео", "Безлимитная Sora", "Работа с iPhone и PC", "Создание Cameo"],
  },
  {
    number: "4",
    emoji: "🎥",
    title: "Генерация видео. Удаление Watermark",
    subtitle: "",
    items: ["Создание видео по сценарию", "Правки ролика", "Создание ролика с определенным персонажем", "Удаление водного знака"],
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-20 bg-gradient-wave">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#FF8C42]">
          — 5 подробных модулей —
        </h2>

        {/* Модули */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <GlassCard
              key={index}
              className="p-6 md:p-8 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.2)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Номер в круге */}
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[hsl(var(--cyan)/0.3)] to-[hsl(var(--blue)/0.3)] border-2 border-[hsl(var(--cyan)/0.4)] flex items-center justify-center shadow-[0_0_30px_hsl(var(--cyan)/0.3)]">
                  <span className="text-3xl md:text-4xl font-bold">{module.number}</span>
                </div>

                {/* Контент */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-3">
                      <span className="text-2xl">{module.emoji}</span>
                      {module.title}
                    </h3>
                    {module.subtitle && (
                      <p className="text-base md:text-lg text-muted mt-2 italic">
                        {module.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Теги */}
                  {module.items.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {module.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-lg bg-[hsl(var(--cyan)/0.1)] border border-[hsl(var(--cyan)/0.3)] text-[hsl(var(--cyan))] text-sm md:text-base hover:bg-[hsl(var(--cyan)/0.15)] transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
