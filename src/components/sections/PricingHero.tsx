import Badge from "../Badge";
import GlassCard from "../GlassCard";
import PrimaryButton from "../PrimaryButton";

const PricingHero = () => {
  return (
    <section className="relative py-24 bg-gradient-wave overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        {/* Центральный Badge с волновой анимацией */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--blue))] to-[hsl(var(--violet))] rounded-full blur-xl opacity-60 animate-glow"></div>
            <Badge className="relative text-sm md:text-base font-bold px-6 py-3 bg-gradient-to-r from-[hsl(var(--cyan))] via-[hsl(var(--blue))] to-[hsl(var(--violet))] border-none text-white animate-gradient-wave bg-[length:200%_auto] shadow-[0_0_30px_hsl(var(--cyan)/0.5)]">
              ВТОРАЯ ВОЛНА НЕЙРОКОНТЕНТА
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Вирусные ролики
              </span>
              <br />
              за 5 минут с AI
            </h2>
          </div>

          {/* Правая колонка - карточка цены */}
          <GlassCard glow className="p-8 md:p-10 space-y-6">
            <Badge variant="orange" className="text-sm">
              УСПЕЙ НАБРАТЬ ПОДПИСЧИКОВ НА ТРЕНДЕ
            </Badge>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl text-muted line-through decoration-red decoration-2">
                  16 000 ₽
                </span>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-orange bg-clip-text text-transparent">
                  5 000 ₽
                </div>
              </div>
              
              {/* Анимированные плашки */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--cyan)/0.3)] to-[hsl(var(--blue)/0.3)] rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative px-4 py-2 rounded-lg bg-[hsl(var(--cyan)/0.15)] border border-[hsl(var(--cyan)/0.4)] text-[hsl(var(--cyan))] text-sm font-medium animate-pulse">
                    ✅ Доступ в фокус-группу
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--blue)/0.3)] to-[hsl(var(--violet)/0.3)] rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative px-4 py-2 rounded-lg bg-[hsl(var(--blue)/0.15)] border border-[hsl(var(--blue)/0.4)] text-[hsl(var(--blue))] text-sm font-medium animate-pulse">
                    🎓 5 уроков по созданию виральных видео
                  </div>
                </div>
              </div>
            </div>

            <PrimaryButton 
              href="https://aitsalko.ru/2waves"
              className="w-full text-lg h-16"
            >
              Оплатить доступ
            </PrimaryButton>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
