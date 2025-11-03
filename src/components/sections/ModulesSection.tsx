import { useState } from "react";
import GlassCard from "../GlassCard";
import Badge from "../Badge";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    number: "0",
    title: "Вводный урок",
    items: ["Обзор программы", "Настройка инструментов", "Первые шаги"],
  },
  {
    number: "1",
    title: "Структура виральных видео и психология вовлечения",
    items: ["Анатомия вирусного контента", "Триггеры вовлечения", "Формулы удержания внимания"],
  },
  {
    number: "2",
    title: "Виральные сценарии и промпты для Sora",
    items: ["Шаблоны сценариев", "Оптимизация промптов", "Генерация идей"],
  },
  {
    number: "3",
    title: "Sora. Подготовка. Доступ. Генерация. Редактирование",
    items: ["Получение доступа", "Интерфейс Sora", "Настройки генерации", "Базовое редактирование"],
  },
  {
    number: "4",
    title: "Генерация видео. Удаление Watermark",
    items: ["Финальная обработка", "Удаление водяных знаков", "Экспорт и оптимизация"],
  },
];

const ModulesSection = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          5 подробных модулей
        </h2>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <GlassCard
              key={index}
              className="overflow-hidden hover:shadow-[0_0_40px_hsl(var(--cyan)/0.15)] transition-all duration-300"
            >
              <button
                onClick={() => setOpenModule(openModule === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-start gap-6 text-left"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center text-2xl font-bold">
                  {module.number}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                    {module.title}
                  </h3>
                  
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openModule === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="flex flex-wrap gap-2 pt-2">
                      {module.items.map((item, i) => (
                        <Badge key={i}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <ChevronDown
                  className={cn(
                    "flex-shrink-0 w-6 h-6 text-cyan transition-transform duration-300",
                    openModule === index && "rotate-180"
                  )}
                />
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
