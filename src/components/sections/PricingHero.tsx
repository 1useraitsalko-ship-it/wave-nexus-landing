import Badge from "../Badge";
import GlassCard from "../GlassCard";
import PrimaryButton from "../PrimaryButton";

const PricingHero = () => {
  return (
    <section className="relative py-24 bg-gradient-wave overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка */}
          <div className="space-y-6">
            <Badge>ВТОРАЯ ВОЛНА НЕЙРОКОНТЕНТА</Badge>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Вирусные ролики
              </span>
              <br />
              за 5 минут с AI
            </h2>

            <p className="text-xl text-muted">
              Записаться можно до <span className="text-foreground font-semibold">18 ноября 19:00 МСК</span>
            </p>
          </div>

          {/* Правая колонка - карточка цены */}
          <GlassCard glow className="p-8 md:p-10 space-y-6">
            <Badge variant="orange" className="text-sm">
              ОГРАНИЧЕННОЕ ВРЕМЯ
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
              <p className="text-muted">Доступ в фокус-группу</p>
            </div>

            <PrimaryButton 
              href="https://aitsalko.ru/2waves"
              className="w-full text-lg h-16"
            >
              ВСТУПИТЬ СЕЙЧАС
            </PrimaryButton>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
